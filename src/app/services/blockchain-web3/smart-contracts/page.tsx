import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Smart Contract Development in Canada'),
  description: 'Audited smart contract development on Ethereum, Solana, and Polygon. Mapletech Labs builds secure DeFi, NFT, and DAO smart contracts. 100+ audits. Book now',
  openGraph: {
    title: 'Smart Contract Development in Canada | Mapletech Labs',
    description: 'Audited smart contract development on Ethereum, Solana, and Polygon. Mapletech Labs builds DeFi, NFT, and DAO contracts, 100+ audits, $500M+ TVL secured',
    url: 'https://mapletechlabs.ca/services/blockchain-web3/smart-contracts',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/blockchain-web3/smart-contracts'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('blockchain-web3', 'smart-contracts');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Smart Contract Development'}
        description={'Audited smart contract development on Ethereum, Solana, and Polygon. Mapletech Labs builds secure DeFi, NFT, and DAO smart contracts.'}
        url={'https://mapletechlabs.ca/services/blockchain-web3/smart-contracts'}
      />
      <PageClient />
    </>
  );
}
