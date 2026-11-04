import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('GA4 Setup & Marketing Analytics in Canada'),
  description: 'GA4 setup, conversion tracking, attribution modelling and custom dashboards. Certified analytics experts serving Toronto & Canada. 30% avg CPA reduction.',
  openGraph: {
    title: 'GA4 Setup & Marketing Analytics in Canada | Mapletech Labs',
    description: 'GA4 setup, conversion tracking, attribution modelling and custom dashboards. Certified analytics experts serving Toronto & Canada.',
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
      <ServiceSchema
        name={'Marketing Analytics & GA4 Setup'}
        description={'GA4 setup, conversion tracking, attribution modelling, and custom dashboards. Certified analytics specialists serving Toronto and Canada. 30% avg CPA reduction.'}
        url={'https://mapletechlabs.ca/services/digital-marketing/performance-analytics'}
      />
      <PageClient />
    </>
  );
}
