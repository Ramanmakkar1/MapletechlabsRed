import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Logistics Software Development',
  description: 'Logistics & supply chain software by Mapletech Labs. Fleet management, route optimization & tracking for Canadian logistics. Get a free project estimate.',
  openGraph: {
    title: 'Logistics Software Development | Mapletech Labs',
    description: 'Logistics & supply chain software by Mapletech Labs. Fleet management, route optimization & tracking for Canadian logistics.',
    url: 'https://mapletechlabs.ca/industries/logistics',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/logistics'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('Logistics', 'logistics');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
