import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';

const DESCRIPTION = 'Certified AWS architects at Edmonton-based Mapletech Labs: cloud migration, cost control, multi-region HA. $2M+ saved for Canadian businesses. Free audit.';

export const metadata: Metadata = {
  title: 'AWS Architecture & Cloud Solutions | Canada',
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'AWS Architecture & Cloud Solutions | Mapletech Labs',
    description: DESCRIPTION,
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/cloud-devops/aws-architecture'}
      />
      <PageClient />
    </>
  );
}
