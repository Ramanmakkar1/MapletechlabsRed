import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'E-Commerce Development Services | Canada',
  description: 'Custom e-commerce stores built to convert and scale. Shopify, headless commerce, and Next.js storefronts by Mapletech Labs in Toronto. 80+ stores launched.',
  openGraph: {
    title: 'E-Commerce Development Services | Mapletech Labs',
    description: 'High-converting online stores with Shopify, headless commerce, and custom Next.js storefronts. $50M+ GMV processed.',
    url: 'https://www.mapletechlabs.com/services/web-development/ecommerce-systems',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/web-development/ecommerce-systems',
  },
};

export default function Page() {
  return <PageClient />;
}
