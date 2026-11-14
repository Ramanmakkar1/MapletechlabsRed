import type { Metadata } from 'next';
import { seoDescription } from '@/lib/seo/description';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'E-Commerce Development Services in Canada';
const DESCRIPTION = 'E-commerce development in Canada: custom Shopify, headless commerce and Next.js stores by Edmonton-based Mapletech Labs. 80+ builds launched, $50M+ GMV.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
