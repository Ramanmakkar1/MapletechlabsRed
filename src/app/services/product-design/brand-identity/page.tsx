import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Brand Identity Design Services | Toronto',
  description: 'Custom brand identity design by Mapletech Labs. Logo design, visual identity systems, and brand guidelines for Canadian startups and enterprises. 100+ brands created.',
  openGraph: {
    title: 'Brand Identity Design Services | Mapletech Labs',
    description: 'Custom brand identity design by Mapletech Labs. Logo design, visual identity systems, and brand guidelines for Canadian startups and enterprises. 100+ brands created.',
    url: 'https://www.mapletechlabs.com/services/product-design/brand-identity',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/product-design/brand-identity',
  },
};

export default function Page() {
  return <PageClient />;
}
