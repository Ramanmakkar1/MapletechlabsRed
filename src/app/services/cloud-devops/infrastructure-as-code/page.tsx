import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';

const DESCRIPTION = 'Terraform and Pulumi IaC by Edmonton-based Mapletech Labs: GitOps workflows, state management and security scanning. 70+ IaC projects delivered in Canada.';

export const metadata: Metadata = {
  title: 'Infrastructure as Code Services | Terraform',
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'Infrastructure as Code Services | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/cloud-devops/infrastructure-as-code',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/cloud-devops/infrastructure-as-code'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('cloud-devops', 'infrastructure-as-code');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Infrastructure as Code Services | Terraform'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/cloud-devops/infrastructure-as-code'}
      />
      <PageClient />
    </>
  );
}
