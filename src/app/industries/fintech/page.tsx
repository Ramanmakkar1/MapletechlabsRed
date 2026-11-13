import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'FinTech App & Software Development Company in Canada';
const DESCRIPTION = 'FinTech software development in Canada by Mapletech Labs: payment platforms, banking apps and compliant trading systems. Fixed-price, Edmonton-based team.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/industries/fintech',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/fintech'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('FinTech', 'fintech');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/industries/fintech'}
      />
      <PageClient />
    </>
  );
}
