import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Analytics & Dashboard Development',
  description: 'Product analytics, MRR dashboards, and embedded customer analytics for SaaS. Mapletech Labs builds data-driven SaaS tools from Toronto, Canada.',
  openGraph: {
    title: 'SaaS Analytics & Dashboard Development | Mapletech Labs',
    description: 'Product analytics, MRR dashboards, and embedded customer analytics for SaaS.',
    url: 'https://mapletechlabs.com/services/saas-development/analytics-dashboards',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/saas-development/analytics-dashboards',
  },
};

export default function Page() {
  return <PageClient />;
}
