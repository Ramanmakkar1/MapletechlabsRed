import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Kubernetes & Docker Consulting in Canada';
const DESCRIPTION = 'Kubernetes and Docker consulting in Canada: production-grade EKS, GKE and AKS setup, Helm charts and container security, with 60+ K8s clusters deployed.';

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
        name={'Kubernetes & Docker Consulting'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/cloud-devops/kubernetes-docker'}
      />
      <PageClient />
    </>
  );
}
