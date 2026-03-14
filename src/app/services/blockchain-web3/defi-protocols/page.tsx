import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'DeFi Protocol Development',
  description: 'Custom DeFi protocol development by Mapletech Labs. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.',
  openGraph: {
    title: 'DeFi Protocol Development | Mapletech Labs',
    description: 'Custom DeFi protocol development by Mapletech Labs. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.',
    url: 'https://mapletechlabs.com/services/blockchain-web3/defi-protocols',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/blockchain-web3/defi-protocols',
  },
};

export default function Page() {
  return <PageClient />;
}
