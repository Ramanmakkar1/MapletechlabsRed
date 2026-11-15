import type { ReactNode } from 'react';

// Render every location route at build time instead of on each request, and
// keep the prerendered HTML in the cache until the next deploy. Without the
// explicit revalidate the route can fall back to a short ISR window and the
// audit measures a cold server render (7-10 s) as the response time.
export const dynamic = 'force-static';
// A numeric window (not `false`) so the host's Next adapter emits a long
// s-maxage/stale-time instead of falling back to its 300 s default.
export const revalidate = 31536000;
// Cache-only: city and city+service routes must not fetch uncached at request time.
export const fetchCache = 'force-cache';

export default function LocationsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
