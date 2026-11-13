import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';

const DESCRIPTION = 'Gas-optimized NFT minting contracts, custom marketplaces, and royalty systems. 500K+ NFTs minted across 30+ platforms by Edmonton-based Mapletech Labs.';

export const metadata: Metadata = {
  title: 'NFT Platform & Marketplace Development',
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'NFT Platform Development | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/blockchain-web3/nft-platforms',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/blockchain-web3/nft-platforms'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('blockchain-web3', 'nft-platforms');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'NFT Platform & Marketplace Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/blockchain-web3/nft-platforms'}
      />
      <PageClient />
    </>
  );
}
