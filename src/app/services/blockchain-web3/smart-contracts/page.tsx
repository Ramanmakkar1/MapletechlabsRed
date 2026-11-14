import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Smart Contract Development in Canada';
const DESCRIPTION = 'Smart contract development in Canada: audited Ethereum, Solana and Polygon contracts for DeFi, NFT and DAO projects, 100+ audits and $500M+ TVL secured.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/blockchain-web3/smart-contracts'}
      />
      <PageClient />
    </>
  );
}
