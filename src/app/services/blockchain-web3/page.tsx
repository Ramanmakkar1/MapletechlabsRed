import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Blockchain & Web3 Development in Canada | Mapletech Labs',
  description: 'Blockchain & Web3 development by Mapletech Labs. Smart contracts, DeFi protocols & dApps for Canadian enterprises. Schedule a free technical consultation.',
  openGraph: {
    title: 'Blockchain & Web3 Development in Canada | Mapletech Labs',
    description: 'Blockchain & Web3 development by Mapletech Labs. Smart contracts, DeFi protocols & dApps for Canadian enterprises.',
    url: 'https://mapletechlabs.ca/services/blockchain-web3',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/blockchain-web3',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Blockchain & Web3 Development Services',
  description: 'Blockchain & Web3 development by Mapletech Labs. Smart contracts, DeFi protocols & dApps for Canadian enterprises.',
  provider: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/blockchain-web3',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Blockchain & Web3', item: 'https://mapletechlabs.ca/services/blockchain-web3' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
