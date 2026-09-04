import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'CI/CD Pipeline Development Services | Canada',
  description: 'Automated CI/CD pipelines by Mapletech Labs Toronto. GitHub Actions, blue-green deploys, and zero-downtime releases. 100+ pipelines built for Canadian teams.',
  openGraph: {
    title: 'CI/CD Pipeline Development Services | Mapletech Labs',
    description: 'Automated CI/CD pipelines by Mapletech Labs Toronto. GitHub Actions, blue-green deploys, and zero-downtime releases. 100+ pipelines built for Canadian teams.',
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
      <PageClient />
    </>
  );
}
