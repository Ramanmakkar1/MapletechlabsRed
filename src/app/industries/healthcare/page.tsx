import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Healthcare Software Development | Mapletech Labs',
  description: 'HIPAA-compliant healthcare software by Mapletech Labs. Telehealth, EHR & patient portals for Canadian healthcare providers. Book a free consultation.',
  openGraph: {
    title: 'Healthcare Software Development | Mapletech Labs',
    description: 'HIPAA-compliant healthcare software by Mapletech Labs. Telehealth, EHR & patient portals for Canadian healthcare providers.',
    url: 'https://mapletechlabs.ca/industries/healthcare',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries/healthcare',
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('Healthcare', 'healthcare');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
