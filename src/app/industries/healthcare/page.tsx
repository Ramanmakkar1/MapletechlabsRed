import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'Healthcare Software Development Company in Canada';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: 'Healthcare software development in Canada by Mapletech Labs: HIPAA-compliant telehealth, EHR and patient portals for providers, with HL7/FHIR integration.',
  openGraph: {
    title: 'Healthcare Software Development in Canada | Mapletech Labs',
    description: 'Healthcare software development in Canada by Mapletech Labs: HIPAA-compliant telehealth, EHR and patient portals for providers, with HL7/FHIR integration.',
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
        name={TITLE}
        description={'Healthcare software development in Canada by Mapletech Labs: HIPAA-compliant telehealth, EHR and patient portals for providers.'}
        url={'https://mapletechlabs.ca/industries/healthcare'}
      />
      <PageClient />
    </>
  );
}
