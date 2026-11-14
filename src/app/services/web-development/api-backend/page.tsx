import type { Metadata } from 'next';
import { seoDescription } from '@/lib/seo/description';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const url = canonicalUrl('/services/web-development/api-backend');
const TITLE = 'API Development Services in Canada';
const DESCRIPTION = 'Scalable REST and GraphQL APIs with sub-100ms latency and 99.9% uptime. Secure backend engineering by Edmonton-based Mapletech Labs. 200+ APIs delivered.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/web-development/api-backend'}
      />
      <PageClient />
    </>
  );
}
