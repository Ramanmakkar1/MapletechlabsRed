import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Blockchain & Web3 Development',
  description: 'Blockchain and Web3 development by Mapletech Labs. Smart contracts, DeFi protocols, NFT platforms, crypto wallets, and decentralized applications.',
  openGraph: {
    title: 'Blockchain & Web3 Development | Mapletech Labs',
    description: 'Blockchain and Web3 development by Mapletech Labs. Smart contracts, DeFi protocols, NFT platforms, crypto wallets, and decentralized applications.',
    url: 'https://www.mapletechlabs.com/services/blockchain-web3',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/blockchain-web3',
  },
};

export default function Page() {
  return <PageClient />;
}
