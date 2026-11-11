import type { ReactNode } from 'react';

// Render every service route at build time instead of on each request, and
// keep the prerendered HTML in the cache until the next deploy. The service
// pages are repository-managed content, so there is nothing to revalidate at
// runtime; without this the audit can hit a cold ISR render (4-40 s) and
// measure it as the server response time.
export const dynamic = 'force-static';
export const revalidate = false;

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
