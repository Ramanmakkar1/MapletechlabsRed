import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Kubernetes & Docker Consulting Services in Canada';
const DESCRIPTION = 'Production-grade Kubernetes and Docker by Mapletech Labs: EKS, GKE and AKS cluster setup, Helm charts and container security. 60+ K8s clusters deployed in Canada.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/cloud-devops/kubernetes-docker',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/cloud-devops/kubernetes-docker'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('cloud-devops', 'kubernetes-docker');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/services/cloud-devops/kubernetes-docker'}
      />
      <PageClient />
    </>
  );
}
