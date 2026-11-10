import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'E-Commerce Development Company in Canada';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: TITLE,
  description: 'E-commerce software development in Canada by Mapletech Labs: online marketplaces, payment processing and omnichannel retail built to convert.',
  openGraph: {
    title: 'E-Commerce Software Development in Canada | Mapletech Labs',
    description: 'E-commerce software development in Canada by Mapletech Labs: online marketplaces, payment processing and omnichannel retail built to convert.',
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
        description={'E-commerce software development in Canada by Mapletech Labs: online marketplaces, payment processing and omnichannel retail.'}
        url={'https://mapletechlabs.ca/industries/ecommerce'}
      />
      <PageClient />
    </>
  );
}
