import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Software Development Services in Canada';
const DESCRIPTION = 'Software development services in Canada: 12 service lines, from custom software, mobile apps and AI to UI/UX, cloud and SaaS, by one Edmonton-based team.';

const SERVICE_HUBS = [
  'software-development',
  'web-development',
  'mobile-app-development',
  'ai-ml',
  'product-design',
  'saas-development',
  'cloud-devops',
  'blockchain-web3',
  'ar-vr',
  'game-development',
  'branding',
  'wordpress-cms',
  'digital-marketing',
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl('/services')}#collection`,
      url: canonicalUrl('/services'),
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://mapletechlabs.ca/#website' },
      about: { '@id': 'https://mapletechlabs.ca/#organization' },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'ItemList',
      itemListElement: SERVICE_HUBS.map((slug, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: canonicalUrl(`/services/${slug}`),
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services'),
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Services', item: canonicalUrl('/services') },
      ]} />
      <PageClient />
    </>
  );
}
