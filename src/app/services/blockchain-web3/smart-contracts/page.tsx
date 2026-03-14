import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Smart Contract Development',
  description: 'Audited smart contract development on Ethereum, Solana, and Polygon. Mapletech Labs builds secure DeFi, NFT, and DAO smart contracts.',
  openGraph: {
    title: 'Smart Contract Development | Mapletech Labs',
    description: 'Audited smart contract development on Ethereum, Solana, and Polygon. Mapletech Labs builds secure DeFi, NFT, and DAO smart contracts.',
    url: 'https://mapletechlabs.com/services/blockchain-web3/smart-contracts',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/blockchain-web3/smart-contracts',
  },
};

export default function Page() {
  return <PageClient />;
}
