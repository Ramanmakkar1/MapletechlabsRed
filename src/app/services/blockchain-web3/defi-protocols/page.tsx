import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'DeFi Protocol Development',
  description: 'Custom DeFi protocol development by Mapletech Labs. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.',
  openGraph: {
    title: 'DeFi Protocol Development | Mapletech Labs',
    description: 'Custom DeFi protocol development by Mapletech Labs. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.',
    url: 'https://mapletechlabs.ca/services/blockchain-web3/defi-protocols',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/blockchain-web3/defi-protocols'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('blockchain-web3', 'defi-protocols');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
