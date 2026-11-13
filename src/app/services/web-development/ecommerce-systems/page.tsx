import type { Metadata } from 'next';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const DESCRIPTION = 'Custom Shopify, headless commerce and Next.js stores by Edmonton-based Mapletech Labs. 80+ e-commerce builds launched for Toronto and Canada-wide teams.';

export const metadata: Metadata = {
  title: 'E-Commerce Development Services | Canada',
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'E-Commerce Development Services | Mapletech Labs',
    description: 'High-converting online stores with Shopify, headless commerce, and custom Next.js storefronts. $50M+ GMV processed.',
    url: 'https://mapletechlabs.ca/services/web-development/ecommerce-systems',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development/ecommerce-systems'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'ecommerce-systems');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'E-Commerce Development Services | Canada'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/web-development/ecommerce-systems'}
      />
      <PageClient />
    </>
  );
}
