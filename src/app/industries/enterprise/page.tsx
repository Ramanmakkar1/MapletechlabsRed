import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Enterprise Software Development in Canada',
  description: 'Enterprise software development in Canada by Mapletech Labs: ERP, CRM, workflow automation and BI solutions at enterprise scale.',
  openGraph: {
    title: 'Enterprise Software Development in Canada | Mapletech Labs',
    description: 'Enterprise software development in Canada by Mapletech Labs: ERP, CRM, workflow automation and BI solutions at enterprise scale.',
    url: 'https://mapletechlabs.ca/industries/enterprise',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/enterprise'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('Enterprise', 'enterprise');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Enterprise Software Development in Canada'}
        description={'Enterprise software development in Canada by Mapletech Labs: ERP, CRM, workflow automation and BI solutions at enterprise scale.'}
        url={'https://mapletechlabs.ca/industries/enterprise'}
      />
      <PageClient />
    </>
  );
}
