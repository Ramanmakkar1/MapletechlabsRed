import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Performance Analytics & GA4 Setup Services',
  description: 'GA4 setup, conversion tracking, attribution modelling, and custom dashboards. Certified analytics specialists serving Toronto and Canada. 30% avg CPA reduction.',
  openGraph: {
    title: 'Performance Analytics & GA4 Setup | Mapletech Labs',
    description: 'GA4 setup, conversion tracking, attribution modelling, and custom dashboards. Certified analytics specialists serving Toronto and Canada.',
    url: 'https://mapletechlabs.ca/services/digital-marketing/performance-analytics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/digital-marketing/performance-analytics',
  },
};

export default function Page() {
  return <PageClient />;
}
