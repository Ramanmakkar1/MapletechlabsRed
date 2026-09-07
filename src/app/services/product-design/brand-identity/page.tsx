import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Brand Identity Design Services | Toronto',
  description: 'Brand identity design from Mapletech Labs: naming, logo systems, typography and guidelines that carry across product, web and print.',
  openGraph: {
    title: 'Brand Identity Design Services | Mapletech Labs',
    description: 'Custom brand identity design by Mapletech Labs. Logo design, visual identity systems, and brand guidelines for Canadian startups and enterprises. 100+ brands created.',
    url: 'https://mapletechlabs.ca/services/product-design/brand-identity',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design/brand-identity'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('product-design', 'brand-identity');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Brand Identity Design Services | Toronto'}
        description={'Custom brand identity design by Mapletech Labs. Logo design, visual identity systems, and brand guidelines for Canadian startups and enterprises. 100+ brands created.'}
        url={'https://mapletechlabs.ca/services/product-design/brand-identity'}
      />
      <PageClient />
    </>
  );
}
