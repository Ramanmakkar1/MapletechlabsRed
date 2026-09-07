import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Healthcare Software Development',
  description: 'HIPAA-compliant healthcare software by Mapletech Labs. Telehealth, EHR & patient portals for Canadian healthcare providers. Book a free consultation.',
  openGraph: {
    title: 'Healthcare Software Development | Mapletech Labs',
    description: 'HIPAA-compliant healthcare software by Mapletech Labs. Telehealth, EHR & patient portals for Canadian healthcare providers.',
    url: 'https://mapletechlabs.ca/industries/healthcare',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/healthcare'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('Healthcare', 'healthcare');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Healthcare Software Development'}
        description={'HIPAA-compliant healthcare software by Mapletech Labs. Telehealth, EHR & patient portals for Canadian healthcare providers. Book a free consultation.'}
        url={'https://mapletechlabs.ca/industries/healthcare'}
      />
      <PageClient />
    </>
  );
}
