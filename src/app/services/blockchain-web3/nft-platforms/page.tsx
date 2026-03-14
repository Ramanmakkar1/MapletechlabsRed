import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'NFT Platform & Marketplace Development',
  description: 'Gas-optimized NFT minting contracts, custom marketplaces, and royalty systems. 500K+ NFTs minted across 30+ platforms by Mapletech Labs in Toronto.',
  openGraph: {
    title: 'NFT Platform Development | Mapletech Labs',
    description: 'We build NFT minting contracts, marketplaces, and royalty systems — from strategy through launch on any EVM chain.',
    url: 'https://mapletechlabs.com/services/blockchain-web3/nft-platforms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/blockchain-web3/nft-platforms',
  },
};

export default function Page() {
  return <PageClient />;
}
