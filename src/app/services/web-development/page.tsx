import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Web Development Services',
  description: 'Full-stack web development services by Mapletech Labs. Next.js, React, SaaS platforms, e-commerce, and enterprise portals built for performance.',
  openGraph: {
    title: 'Web Development Services | Mapletech Labs',
    description: 'Full-stack web development services by Mapletech Labs. Next.js, React, SaaS platforms, e-commerce, and enterprise portals built for performance.',
    url: 'https://www.mapletechlabs.com/services/web-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/web-development',
  },
};

export default function Page() {
  return <PageClient />;
}
