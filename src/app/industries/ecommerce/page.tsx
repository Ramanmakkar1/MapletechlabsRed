import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'E-Commerce Software Solutions',
  description: 'Custom e-commerce solutions by Mapletech Labs. Online marketplaces, inventory management, payment processing, and omnichannel retail platforms.',
  openGraph: {
    title: 'E-Commerce Software Solutions | Mapletech Labs',
    description: 'Custom e-commerce solutions by Mapletech Labs. Online marketplaces, inventory management, payment processing, and omnichannel retail platforms.',
    url: 'https://mapletechlabs.ca/industries/ecommerce',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries/ecommerce',
  },
};

export default function Page() {
  return <PageClient />;
}
