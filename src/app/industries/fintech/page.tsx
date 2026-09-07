import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Fintech Software Development',
  description: 'Fintech software by Mapletech Labs. Payment platforms, banking apps & compliant trading systems for Canadian finance. Request a free technical proposal.',
  openGraph: {
    title: 'Fintech Software Development | Mapletech Labs',
    description: 'Fintech software by Mapletech Labs. Payment platforms, banking apps & compliant trading systems for Canadian finance.',
    url: 'https://mapletechlabs.ca/industries/fintech',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/fintech'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('Fintech', 'fintech');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Fintech Software Development'}
        description={'Fintech software by Mapletech Labs. Payment platforms, banking apps & compliant trading systems for Canadian finance. Request a free technical proposal.'}
        url={'https://mapletechlabs.ca/industries/fintech'}
      />
      <PageClient />
    </>
  );
}
