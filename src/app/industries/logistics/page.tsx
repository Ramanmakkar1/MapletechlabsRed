import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Logistics Software Development | Mapletech Labs',
  description: 'Logistics & supply chain software by Mapletech Labs. Fleet management, route optimization & tracking for Canadian logistics. Get a free project estimate.',
  openGraph: {
    title: 'Logistics Software Development | Mapletech Labs',
    description: 'Logistics & supply chain software by Mapletech Labs. Fleet management, route optimization & tracking for Canadian logistics.',
    url: 'https://mapletechlabs.ca/industries/logistics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries/logistics',
  },
};

export default function Page() {
  return <PageClient />;
}
