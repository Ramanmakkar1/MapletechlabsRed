import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain Software',
  description: 'Logistics and supply chain software by Mapletech Labs. Fleet management, route optimization, warehouse systems, and real-time tracking platforms.',
  openGraph: {
    title: 'Logistics & Supply Chain Software | Mapletech Labs',
    description: 'Logistics and supply chain software by Mapletech Labs. Fleet management, route optimization, warehouse systems, and real-time tracking platforms.',
    url: 'https://www.mapletechlabs.com/industries/logistics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/industries/logistics',
  },
};

export default function Page() {
  return <PageClient />;
}
