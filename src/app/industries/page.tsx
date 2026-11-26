import type { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

export const dynamic = 'force-static';

const TITLE = 'Software Development by Industry in Canada';
const DESCRIPTION = 'Specialized software development for FinTech, healthcare, e-commerce, enterprise, EdTech and logistics. Deep domain expertise in every vertical we serve.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/industries',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries'),
  },
};

const industriesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl('/industries')}#collection`,
      url: canonicalUrl('/industries'),
      name: TITLE,
      description: DESCRIPTION,
      about: { '@id': 'https://mapletechlabs.ca/#organization' },
      isPartOf: { '@id': 'https://mapletechlabs.ca/#website' },
      inLanguage: 'en-CA',
      mainEntity: { '@id': `${canonicalUrl('/industries')}#list` },
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl('/industries')}#list`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'FinTech and banking', url: canonicalUrl('/industries/fintech') },
        { '@type': 'ListItem', position: 2, name: 'Healthcare', url: canonicalUrl('/industries/healthcare') },
        { '@type': 'ListItem', position: 3, name: 'E-commerce and retail', url: canonicalUrl('/industries/ecommerce') },
        { '@type': 'ListItem', position: 4, name: 'Enterprise', url: canonicalUrl('/industries/enterprise') },
        { '@type': 'ListItem', position: 5, name: 'Logistics and supply chain', url: canonicalUrl('/industries/logistics') },
        { '@type': 'ListItem', position: 6, name: 'EdTech', url: canonicalUrl('/industries/edtech') },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'Industries', item: canonicalUrl('/industries') },
        ]}
      />
      <PageClient />
    </>
  );
}
