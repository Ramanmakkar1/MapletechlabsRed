import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Web3 dApp Development Services | Toronto',
  description: 'Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX. Mapletech Labs ships production dApps from Toronto, Canada.',
  openGraph: {
    title: 'Web3 dApp Development Services | Mapletech Labs',
    description: 'Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX.',
    url: 'https://mapletechlabs.ca/services/blockchain-web3/web3-dapps',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/blockchain-web3/web3-dapps',
  },
};

export default function Page() {
  return <PageClient />;
}
