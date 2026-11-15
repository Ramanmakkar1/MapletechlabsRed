import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Kubernetes & Docker Consulting in Canada';
const DESCRIPTION = 'Kubernetes and Docker consulting in Canada: we deploy production-grade EKS, GKE and AKS clusters with Helm charts and container security, 60+ deployments.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
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
