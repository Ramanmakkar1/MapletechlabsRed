import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Enterprise Software Development',
  description: 'Enterprise software development by Mapletech Labs. ERP systems, CRM platforms, workflow automation, and business intelligence solutions at scale.',
  openGraph: {
    title: 'Enterprise Software Development | Mapletech Labs',
    description: 'Enterprise software development by Mapletech Labs. ERP systems, CRM platforms, workflow automation, and business intelligence solutions at scale.',
    url: 'https://www.mapletechlabs.com/industries/enterprise',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/industries/enterprise',
  },
};

export default function Page() {
  return <PageClient />;
}
