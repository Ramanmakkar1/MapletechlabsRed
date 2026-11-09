import { NextResponse, type NextRequest } from 'next/server';

// Prerendered HTML (layout `revalidate = false`) is cached from next.config
// `headers()`. This function must not run a network call, a redirect-table
// scan, or a per-request regex on those paths. Only /api and the legacy /fr
// redirect routes fall through.
function isApiOrRedirect(pathname: string): boolean {
  return pathname === '/api' || pathname.startsWith('/api/') || pathname === '/fr' || pathname.startsWith('/fr/');
}

export function middleware(req: NextRequest) {
  if (!isApiOrRedirect(req.nextUrl.pathname)) {
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
