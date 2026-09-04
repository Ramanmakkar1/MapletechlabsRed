import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

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
    canonical: canonicalUrl('/services/digital-marketing/performance-analytics'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('digital-marketing', 'performance-analytics');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
