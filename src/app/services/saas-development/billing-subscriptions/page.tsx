import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'SaaS Billing & Subscription Integration',
  description: 'Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals. Mapletech Labs builds payment infrastructure from Toronto, Canada.',
  openGraph: {
    title: 'SaaS Billing & Subscription Integration | Mapletech Labs',
    description: 'Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals.',
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
        description={'Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals. Mapletech Labs builds payment infrastructure from Toronto, Canada.'}
        url={'https://mapletechlabs.ca/services/saas-development/billing-subscriptions'}
      />
      <PageClient />
    </>
  );
}
