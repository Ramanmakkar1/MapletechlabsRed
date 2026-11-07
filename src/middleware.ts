import { NextResponse, type NextRequest } from 'next/server';

// The site is self-hosted (Hostinger hcdn in front of `next start`). Next 16
// serves prerendered pages with `s-maxage=300, stale-while-revalidate=300`, so
// the CDN drops each page after 5 minutes and the next visitor pays for a
// cold origin response (the audit measured up to ~10 s on 19 pages).
//
// Content is repository-managed and only changes on deploy (revalidate =
// false), so a longer CDN window is safe: the CDN caches for 1 h and serves
// the stale copy for up to 24 h while the origin revalidates in the
// background. A deploy is never visible later than 1 h at the CDN, and no
// visitor ever waits on a cold origin.
//
// Browsers always revalidate (max-age=0, must-revalidate), so after a
// release — or an automatic revert of a broken one — visitors get the new
// HTML on their next load instead of the old copy for an hour.
//
// Only GET/HEAD document requests are touched; form posts, server actions,
// RSC and router-prefetch payloads keep the framework's own cache headers,
// and so do /_next assets, /api and static files.
export function middleware(req: NextRequest) {
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
  matcher: ['/((?!api|_next/|.*\\..*).*)'],
};
