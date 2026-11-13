import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'SaaS Analytics & Dashboard Development';
const DESCRIPTION =
  'SaaS analytics and dashboard development: product analytics, MRR tracking and embedded reporting, built by our Edmonton team for SaaS teams across Canada.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/saas-development/analytics-dashboards'}
      />
      <PageClient />
    </>
  );
}
