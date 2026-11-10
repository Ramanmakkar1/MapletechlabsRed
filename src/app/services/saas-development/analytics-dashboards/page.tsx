import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'SaaS Analytics & Dashboard Development',
  description: 'SaaS analytics dashboards with product analytics, MRR tracking, and embedded reporting. Mapletech Labs builds tools in Toronto, Canada. Start a project.',
  openGraph: {
    title: 'SaaS Analytics & Dashboard Development | Mapletech Labs',
    description: 'SaaS analytics dashboards with product analytics, MRR tracking, and embedded reporting. Mapletech Labs builds tools in Toronto, Canada. Start a project.',
    url: 'https://mapletechlabs.ca/services/saas-development/analytics-dashboards',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development/analytics-dashboards'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('saas-development', 'analytics-dashboards');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'SaaS Analytics & Dashboard Development'}
        description={'Product analytics, MRR dashboards, and embedded customer analytics for SaaS. Mapletech Labs builds data-driven SaaS tools from Toronto, Canada.'}
        url={'https://mapletechlabs.ca/services/saas-development/analytics-dashboards'}
      />
      <PageClient />
    </>
  );
}
