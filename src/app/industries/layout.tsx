import type { ReactNode } from 'react';

// Render every industry route at build time instead of on each request.
export const dynamic = 'force-static';

export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
