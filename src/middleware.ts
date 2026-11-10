import { NextResponse, type NextRequest } from 'next/server';

// Prerendered HTML (layout `revalidate = false`) is cached from next.config
// `headers()`. This function must not run a network call, a redirect-table
// scan, or a per-request regex on those paths. Only /api and the legacy /fr
// routes enter it.
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
    return NextResponse.next();
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
    'public, max-age=0, must-revalidate, s-maxage=3600, stale-while-revalidate=86400',
  );
  return res;
}

export const config = {
  // Static pages are not listed, so they never enter middleware.
  matcher: ['/api/:path*', '/fr', '/fr/:path*'],
};
