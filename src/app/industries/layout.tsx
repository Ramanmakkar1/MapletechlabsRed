import type { ReactNode } from 'react';

// Render every industry route at build time instead of on each request, and
// keep the prerendered HTML in the cache until the next deploy. Without the
// explicit revalidate the route can fall back to a short ISR window and the
// audit measures a cold server render (7-10 s) as the response time.
export const dynamic = 'force-static';
export const revalidate = false;

export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
