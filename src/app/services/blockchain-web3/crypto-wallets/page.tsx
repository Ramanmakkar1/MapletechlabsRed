import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Crypto Wallet Development Services | Toronto',
  description: 'Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration. Mapletech Labs builds secure wallets in Canada.',
  openGraph: {
    title: 'Crypto Wallet Development Services | Mapletech Labs',
    description: 'Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration.',
    url: 'https://mapletechlabs.ca/services/blockchain-web3/crypto-wallets',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/blockchain-web3/crypto-wallets'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('blockchain-web3', 'crypto-wallets');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Crypto Wallet Development Services | Toronto'}
        description={'Custom crypto wallet development with multi-chain support, HD key management, and hardware wallet integration. Mapletech Labs builds secure wallets in Canada.'}
        url={'https://mapletechlabs.ca/services/blockchain-web3/crypto-wallets'}
      />
      <PageClient />
    </>
  );
}
