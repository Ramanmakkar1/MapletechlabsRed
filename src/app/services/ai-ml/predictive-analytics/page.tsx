import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Predictive Analytics Services in Canada';
const DESCRIPTION =
  'Predictive analytics services in Canada: Mapletech Labs builds machine learning models for forecasting, recommendations and business intelligence.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/ai-ml/predictive-analytics',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ai-ml/predictive-analytics'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ai-ml', 'predictive-analytics');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Predictive Analytics Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ai-ml/predictive-analytics'}
      />
      <PageClient />
    </>
  );
}
