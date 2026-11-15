import type { ReactNode } from 'react';

// Render every service route at build time instead of on each request, and
// keep the prerendered HTML in the cache until the next deploy. The service
// pages are repository-managed content, so there is nothing to revalidate at
// runtime; without this the audit can hit a cold ISR render (4-40 s) and
// measure it as the server response time.
export const dynamic = 'force-static';
// A numeric window (not `false`) so the host's Next adapter emits a long
// s-maxage/stale-time instead of falling back to its 300 s default.
export const revalidate = 31536000;
// Cache-only: never fall back to an uncached fetch on a service route.
export const fetchCache = 'force-cache';

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
