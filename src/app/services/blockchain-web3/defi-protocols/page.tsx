import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'DeFi Protocol Development in Canada';
const DESCRIPTION = 'DeFi protocol development in Canada: custom decentralized exchanges, lending platforms, yield aggregators and liquidity pools built and audited for launch.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/blockchain-web3/defi-protocols'}
      />
      <PageClient />
    </>
  );
}
