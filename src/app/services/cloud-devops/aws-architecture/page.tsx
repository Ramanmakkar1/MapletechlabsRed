import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'AWS Architecture & Cloud Solutions | Canada',
  description: 'Certified AWS architects at Mapletech Labs Toronto. Cloud migration, cost optimisation, and multi-region HA design. $2M+ saved for Canadian businesses. Free audit.',
  openGraph: {
    title: 'AWS Architecture & Cloud Solutions | Mapletech Labs',
    description: 'Certified AWS architects at Mapletech Labs Toronto. Cloud migration, cost optimisation, and multi-region HA design. $2M+ saved for Canadian businesses. Free audit.',
    url: 'https://mapletechlabs.ca/services/cloud-devops/aws-architecture',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/cloud-devops/aws-architecture'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('cloud-devops', 'aws-architecture');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'AWS Architecture & Cloud Solutions | Canada'}
        description={'Certified AWS architects at Mapletech Labs Toronto. Cloud migration, cost optimisation, and multi-region HA design. $2M+ saved for Canadian businesses. Free audit.'}
        url={'https://mapletechlabs.ca/services/cloud-devops/aws-architecture'}
      />
      <PageClient />
    </>
  );
}
