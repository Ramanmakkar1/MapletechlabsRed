import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const DESCRIPTION = 'Automated CI/CD pipelines by Edmonton-based Mapletech Labs: GitHub Actions, blue-green deploys, zero-downtime releases. 100+ pipelines for Canadian teams.';

export const metadata: Metadata = {
  title: seoTitle('CI/CD Pipeline Services in Canada'),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'CI/CD Pipeline Services in Canada | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/cloud-devops/ci-cd-pipelines',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/cloud-devops/ci-cd-pipelines'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('cloud-devops', 'ci-cd-pipelines');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'CI/CD Pipeline Development Services | Canada'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/cloud-devops/ci-cd-pipelines'}
      />
      <PageClient />
    </>
  );
}
