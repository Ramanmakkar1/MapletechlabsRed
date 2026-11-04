import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'Logistics Software Development Company in Canada';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: 'Logistics software development in Canada by Mapletech Labs: supply chain software, fleet management, route optimization and tracking.',
  openGraph: {
    title: 'Logistics Software Development in Canada | Mapletech Labs',
    description: 'Logistics software development in Canada by Mapletech Labs: supply chain software, fleet management, route optimization and tracking.',
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
      <ServiceSchema
        name={TITLE}
        description={'Logistics software development in Canada by Mapletech Labs: supply chain software, fleet management, route optimization and tracking.'}
        url={'https://mapletechlabs.ca/industries/logistics'}
      />
      <PageClient />
    </>
  );
}
