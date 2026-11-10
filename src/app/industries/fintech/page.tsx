import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'FinTech App & Software Development Company in Canada';
const DESCRIPTION = 'FinTech software development in Canada by Mapletech Labs: payment platforms, banking apps and compliant trading systems. Fixed-price, Edmonton-based team.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: 'FinTech Software Development in Canada | Mapletech Labs',
    description: DESCRIPTION,
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
