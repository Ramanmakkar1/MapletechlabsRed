import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'GA4 Setup & Marketing Analytics in Canada';
const DESCRIPTION = 'GA4 setup, conversion tracking, attribution and dashboards for Edmonton, Toronto and Canada, with 30% average CPA reduction by certified analytics experts.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/digital-marketing/performance-analytics'}
      />
      <PageClient />
    </>
  );
}
