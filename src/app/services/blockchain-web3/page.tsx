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

export default function Page() {
  return <PageClient />;
}
