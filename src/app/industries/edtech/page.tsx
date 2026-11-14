import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'EdTech Software Development Company in Canada';
const DESCRIPTION = 'EdTech software development in Canada by Mapletech Labs: LMS platforms, virtual classrooms and accessible assessment tools for educators and learners.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle('EdTech Software Development in Canada'),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/industries/edtech',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/edtech'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('EdTech', 'edtech');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/industries/edtech'}
      />
      <PageClient />
    </>
  );
}
