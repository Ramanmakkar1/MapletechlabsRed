import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'SaaS Billing & Subscription Integration';
const DESCRIPTION =
  'SaaS billing and subscription integration: Stripe subscriptions, dunning and self-serve portals, built by our Edmonton team for SaaS teams across Canada.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/saas-development/billing-subscriptions',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development/billing-subscriptions'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('saas-development', 'billing-subscriptions');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'SaaS Billing & Subscription Integration'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/saas-development/billing-subscriptions'}
      />
      <PageClient />
    </>
  );
}
