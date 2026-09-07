import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Web3 dApp Development Services | Toronto',
  description: 'Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX. Mapletech Labs ships production dApps from Toronto, Canada.',
  openGraph: {
    title: 'Web3 dApp Development Services | Mapletech Labs',
    description: 'Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX.',
    url: 'https://mapletechlabs.ca/services/blockchain-web3/web3-dapps',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/blockchain-web3/web3-dapps'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('blockchain-web3', 'web3-dapps');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Web3 dApp Development Services | Toronto'}
        description={'Full-stack Web3 dApp development with wallet integration, on-chain indexing, and cross-chain UX. Mapletech Labs ships production dApps from Toronto, Canada.'}
        url={'https://mapletechlabs.ca/services/blockchain-web3/web3-dapps'}
      />
      <PageClient />
    </>
  );
}
