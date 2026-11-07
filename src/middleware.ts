import { NextResponse } from 'next/server';

// The site is self-hosted (Hostinger hcdn in front of `next start`). Next 16
// serves prerendered pages with `s-maxage=300, stale-while-revalidate=300`, so
// the CDN drops each page after 5 minutes and the next visitor pays for a
// cold origin response (the audit measured up to ~10 s on 19 pages).
//
// Content is repository-managed and only changes on deploy (revalidate =
// false), so a longer CDN window is safe: 1 h fresh, then serve the stale
// copy for up to 24 h while the origin revalidates in the background. A
// deploy is never visible late than 1 h, and no visitor ever waits on a
// cold origin.
//
// Only extension-less routes (HTML pages) are touched; /_next assets, /api
// and static files keep the framework's own cache headers.
export function middleware() {
  const res = NextResponse.next();
  res.headers.set(
    'Cache-Control',
    'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
  );
  return res;
}

export const config = {
  matcher: ['/((?!api|_next/|.*\\..*).*)'],
};
