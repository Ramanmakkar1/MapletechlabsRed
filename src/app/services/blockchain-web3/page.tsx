import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Blockchain & Web3 Development in Canada';
const DESCRIPTION = 'Blockchain and Web3 development in Canada from an Edmonton-based team: smart contracts, DeFi protocols and dApps for businesses. Book a free consultation.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/blockchain-web3',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/blockchain-web3'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'blockchain-web3',
  name: 'Blockchain & Web3 Development Services',
  serviceType: 'Blockchain & Web3 Development',
  description: seoDescription(DESCRIPTION),
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'blockchain-web3', label: 'Blockchain & Web3' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
