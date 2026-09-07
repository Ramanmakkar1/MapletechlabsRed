import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'SaaS MVP Development in 8 Weeks | Toronto',
  description: 'Launch your SaaS MVP in 8 weeks with production-quality code. Mapletech Labs builds scalable MVPs for startups from Toronto, Canada.',
  openGraph: {
    title: 'SaaS MVP Development in 8 Weeks | Mapletech Labs',
    description: 'Launch your SaaS MVP in 8 weeks with production-quality code built to scale.',
    url: 'https://mapletechlabs.ca/services/saas-development/saas-mvp-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development/saas-mvp-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('saas-development', 'saas-mvp-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'SaaS MVP Development in 8 Weeks | Toronto'}
        description={'Launch your SaaS MVP in 8 weeks with production-quality code. Mapletech Labs builds scalable MVPs for startups from Toronto, Canada.'}
        url={'https://mapletechlabs.ca/services/saas-development/saas-mvp-development'}
      />
      <PageClient />
    </>
  );
}
