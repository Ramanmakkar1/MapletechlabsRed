import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Enterprise Software Development | Mapletech Labs',
  description: 'Enterprise software by Mapletech Labs. ERP, CRM, workflow automation & BI solutions at scale for Canadian enterprises. Schedule a free consultation today.',
  openGraph: {
    title: 'Enterprise Software Development | Mapletech Labs',
    description: 'Enterprise software by Mapletech Labs. ERP, CRM, workflow automation & BI solutions at scale for Canadian enterprises.',
    url: 'https://mapletechlabs.ca/industries/enterprise',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries/enterprise',
  },
};

export default function Page() {
  return <PageClient />;
}
