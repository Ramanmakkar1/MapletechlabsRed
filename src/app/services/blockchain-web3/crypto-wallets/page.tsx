import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Crypto Wallet Development Services | Toronto',
  description: 'Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration. Mapletech Labs builds secure wallets in Canada.',
  openGraph: {
    title: 'Crypto Wallet Development Services | Mapletech Labs',
    description: 'Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration.',
    url: 'https://mapletechlabs.com/services/blockchain-web3/crypto-wallets',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/blockchain-web3/crypto-wallets',
  },
};

export default function Page() {
  return <PageClient />;
}
