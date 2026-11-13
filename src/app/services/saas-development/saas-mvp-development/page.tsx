import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'SaaS MVP Development in 8 Weeks, Canada',
  description: 'SaaS MVP development in 8 weeks with production-quality code. Mapletech Labs helps Canadian startups launch to paying customers. Start a project.',
  openGraph: {
    title: 'SaaS MVP Development in 8 Weeks | Mapletech Labs',
    description: 'SaaS MVP development in 8 weeks with production-quality code. Mapletech Labs helps Canadian startups launch to paying customers. Start a project.',
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
        name={'SaaS MVP Development in 8 Weeks'}
        description={'Launch your SaaS MVP in 8 weeks with production-quality code. Mapletech Labs builds scalable MVPs for startups from Edmonton, Canada.'}
        url={'https://mapletechlabs.ca/services/saas-development/saas-mvp-development'}
      />
      <PageClient />
    </>
  );
}
