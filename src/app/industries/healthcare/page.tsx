import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Healthcare Software Development Company in Canada';
const DESCRIPTION = 'Healthcare software development in Canada by Mapletech Labs: HIPAA-compliant telehealth, EHR and patient portals for providers, with HL7/FHIR integration.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
