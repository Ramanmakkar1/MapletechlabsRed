import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('DeFi Protocol Development in Canada'),
  description: 'Custom DeFi protocol development by Mapletech Labs. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.',
  openGraph: {
    title: 'DeFi Protocol Development in Canada | Mapletech Labs',
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
      <ServiceSchema
        name={'DeFi Protocol Development'}
        description={'Custom DeFi protocol development by Mapletech Labs. Build decentralized exchanges, lending platforms, yield aggregators, and liquidity pools.'}
        url={'https://mapletechlabs.ca/services/blockchain-web3/defi-protocols'}
      />
      <PageClient />
    </>
  );
}
