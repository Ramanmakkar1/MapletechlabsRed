import type { ReactNode } from 'react';

// Render every case-study route at build time instead of on each request.
export const dynamic = 'force-static';

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
