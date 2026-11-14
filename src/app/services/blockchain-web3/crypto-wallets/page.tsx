import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Crypto Wallet Development Company in Canada';
const DESCRIPTION = 'Custom crypto wallet development with multi-chain support, HD key management and hardware wallet integration. Mapletech Labs builds secure wallets in Canada.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        name={TITLE}
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/services/blockchain-web3/crypto-wallets'}
      />
      <PageClient />
    </>
  );
}
