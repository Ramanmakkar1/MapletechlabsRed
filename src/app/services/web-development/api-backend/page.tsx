import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const url = canonicalUrl('/services/web-development/api-backend');
const title = 'API Development Services in Canada | Mapletech Labs';
const description = 'Scalable REST and GraphQL APIs with sub-100ms latency and 99.9% uptime. Secure backend engineering by Mapletech Labs, Toronto. 200+ APIs delivered.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description: 'We design and build robust REST and GraphQL APIs with bulletproof security and enterprise-grade performance.',
    url,
    type: 'website',
  },
  alternates: {
    canonical: url,
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'api-backend');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'API & Backend Development Services'}
        description={'Scalable REST and GraphQL APIs with sub-100ms latency and 99.9% uptime. Secure backend engineering by Mapletech Labs, Toronto. 200+ APIs delivered.'}
        url={'https://mapletechlabs.ca/services/web-development/api-backend'}
      />
      <PageClient />
    </>
  );
}
