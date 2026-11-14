import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'E-Commerce Development Company in Canada';
const DESCRIPTION = 'E-commerce software development in Canada by Mapletech Labs: online marketplaces, payment processing and omnichannel retail built to convert.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle('E-Commerce Software Development in Canada'),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/industries/ecommerce',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/ecommerce'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('E-Commerce', 'ecommerce');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/industries/ecommerce'}
      />
      <PageClient />
    </>
  );
}
