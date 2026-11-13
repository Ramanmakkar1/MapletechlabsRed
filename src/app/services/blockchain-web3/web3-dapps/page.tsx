import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Web3 dApp Development Company in Canada';
const DESCRIPTION = 'Web3 dApp development in Canada: full-stack dApps with wallet integration, on-chain indexing and cross-chain UX, shipped by our Edmonton team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        name={'Web3 dApp Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/blockchain-web3/web3-dapps'}
      />
      <PageClient />
    </>
  );
}
