import { NextResponse, type NextRequest } from 'next/server';
import {
  STATIC_TEMPLATE_CACHE,
  STATIC_TEMPLATE_CDN_CACHE,
  STATIC_SERVICE_LOCATION_CACHE,
  STATIC_SERVICE_LOCATION_CDN_CACHE,
} from '@/lib/cache-headers';

// HTML documents sit in the CDN for a year, matching the broad HTML rule in
// next.config.ts headers() (1 year fresh, 1 week stale-while-revalidate).
// Content only changes on deploy, so this must not run a network call, a
// redirect-table scan, or a per-request regex on those paths.
const HTML_CACHE = 'public, max-age=0, must-revalidate, s-maxage=31536000, stale-while-revalidate=604800, stale-if-error=86400';
// Repository-managed SEO templates are force-static and use Next's one-year
// expireTime, so keep them at the CDN for the same window instead of letting
// them fall back to the one-day document cache and be re-rendered on audit.
// The shared constants keep this in sync with next.config.ts headers().

function isServiceOrLocation(pathname: string): boolean {
  return pathname === '/services' || pathname.startsWith('/services/')
    || pathname === '/locations' || pathname.startsWith('/locations/');
}

function isStaticTemplate(pathname: string): boolean {
  return isServiceOrLocation(pathname)
    || pathname === '/blog' || pathname.startsWith('/blog/');
}

function isDocument(pathname: string): boolean {
  return !pathname.startsWith('/_next/') && !pathname.startsWith('/api');
}

function isApi(pathname: string): boolean {
  return pathname === '/api' || pathname.startsWith('/api/');
}

function isFrench(pathname: string): boolean {
  return pathname === '/fr' || pathname.startsWith('/fr/');
}

// Same city/service mesh as next.config.ts, kept here so the redirect still
// lands on the final English keyword page when the config table is not applied.
const CITY_HUBS = ['edmonton', 'toronto', 'vancouver', 'calgary', 'ottawa', 'montreal', 'winnipeg', 'halifax', 'victoria', 'saskatoon', 'kitchener', 'london-on', 'mississauga', 'hamilton', 'surrey', 'burnaby', 'regina', 'quebec-city', 'brampton', 'markham', 'windsor', 'kelowna', 'laval', 'gatineau'];
const PRIORITY_SERVICES: [string, string][] = [['ai-ml', 'ai-development'], ['saas-development', 'saas-development'], ['mobile-app-development', 'app-development'], ['web-development', 'web-development'], ['digital-marketing', 'seo'], ['product-design', 'ui-ux-design']];

function englishPathForFrench(pathname: string): string {
  const rest = pathname.replace(/^\/fr(?=\/|$)/, '');
  if (!rest || rest === '/') return '/';
  const parts = rest.split('/').filter(Boolean);
  if (parts[0] === 'locations' && parts.length === 2 && CITY_HUBS.includes(parts[1])) {
    return `/locations/software-development-company-in-${parts[1]}`;
  }
  if (parts[0] === 'locations' && parts.length === 3 && CITY_HUBS.includes(parts[1])) {
    const match = PRIORITY_SERVICES.find(([service]) => service === parts[2]);
    if (match) return `/locations/${match[1]}-company-in-${parts[1]}`;
  }
  return rest;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // The old French locale no longer exists. Redirect it here as well as in
  // next.config so /fr/* still 301s on hosts that do not apply the config
  // redirect table. The destination never starts with /fr, so this cannot loop.
  if (isFrench(pathname)) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return NextResponse.next();
    }
    const url = req.nextUrl.clone();
    url.pathname = englishPathForFrench(pathname);
    return NextResponse.redirect(url, 301);
  }

  if (!isApi(pathname)) {
    // Leave RSC navigation payloads to the framework; only cache full HTML.
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return NextResponse.next();
    }
    if (req.headers.get('rsc') || req.headers.get('next-router-prefetch')) {
      return NextResponse.next();
    }
    if (!isDocument(pathname)) return NextResponse.next();
    const res = NextResponse.next();
    if (isStaticTemplate(pathname)) {
      const serviceOrLocation = isServiceOrLocation(pathname);
      res.headers.set('Cache-Control', serviceOrLocation ? STATIC_SERVICE_LOCATION_CACHE : STATIC_TEMPLATE_CACHE);
      res.headers.set('CDN-Cache-Control', serviceOrLocation ? STATIC_SERVICE_LOCATION_CDN_CACHE : STATIC_TEMPLATE_CDN_CACHE);
    } else {
      res.headers.set('Cache-Control', HTML_CACHE);
    }
    return res;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return NextResponse.next();
  }
  if (req.headers.get('rsc') || req.headers.get('next-router-prefetch')) {
    return NextResponse.next();
  }
  const res = NextResponse.next();
  res.headers.set(
    'Cache-Control',
    'public, max-age=0, must-revalidate, s-maxage=86400, stale-while-revalidate=86400',
  );
  return res;
}

export const config = {
  // Document routes plus /api and the legacy /fr redirects. Framework assets
  // and files with extensions stay out of middleware.
  matcher: ['/((?!_next/|.*\\..*).*)'],
};
