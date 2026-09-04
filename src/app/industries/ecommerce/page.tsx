import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'E-Commerce Software Development',
  description: 'Custom e-commerce solutions by Mapletech Labs. Online marketplaces, payment processing & omnichannel retail for Canadian businesses. Get a free quote.',
  openGraph: {
    title: 'E-Commerce Software Development | Mapletech Labs',
    description: 'Custom e-commerce solutions by Mapletech Labs. Online marketplaces, payment processing & omnichannel retail for Canadian businesses.',
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
      <PageClient />
    </>
  );
}
