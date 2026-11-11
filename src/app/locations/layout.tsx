import type { ReactNode } from 'react';

// Render every location route at build time instead of on each request.
export const dynamic = 'force-static';

export default function LocationsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
