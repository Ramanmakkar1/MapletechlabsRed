import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'EdTech Software Development Company in Canada';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: 'EdTech software development in Canada by Mapletech Labs: LMS platforms, virtual classrooms and assessment tools for educators.',
  openGraph: {
    title: 'EdTech Software Development in Canada | Mapletech Labs',
    description: 'EdTech software development in Canada by Mapletech Labs: LMS platforms, virtual classrooms and assessment tools for educators.',
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
        description={'EdTech software development in Canada by Mapletech Labs: LMS platforms, virtual classrooms and assessment tools for educators.'}
        url={'https://mapletechlabs.ca/industries/edtech'}
      />
      <PageClient />
    </>
  );
}
