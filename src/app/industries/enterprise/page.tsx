import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Enterprise Software Development',
  description: 'Enterprise software by Mapletech Labs. ERP, CRM, workflow automation & BI solutions at scale for Canadian enterprises. Schedule a free consultation today.',
  openGraph: {
    title: 'Enterprise Software Development | Mapletech Labs',
    description: 'Enterprise software by Mapletech Labs. ERP, CRM, workflow automation & BI solutions at scale for Canadian enterprises.',
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
      <PageClient />
    </>
  );
}
