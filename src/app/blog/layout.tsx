import type { ReactNode } from 'react';

// Render every blog route at build time instead of on each request.
export const dynamic = 'force-static';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
