import { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Software Development Case Studies in Canada';
const DESCRIPTION = 'See how Mapletech Labs has helped Canadian businesses build scalable software. Real results from fintech, healthcare, e-commerce, and logistics projects.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/case-studies',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/case-studies') },
};

const caseStudies = [
  { slug: 'fintech-trading-platform', name: 'AI-Powered Trading Platform' },
  { slug: 'healthcare-telehealth', name: 'HIPAA-Compliant Telehealth Platform' },
  { slug: 'ecommerce-platform', name: 'Enterprise E-Commerce Redesign' },
  { slug: 'logistics-platform', name: 'Real-Time Fleet Management System' },
  { slug: 'payments-api-platform', name: 'PCI DSS Payments API' },
  { slug: 'real-estate-portal', name: 'Multi-Listing Real Estate Platform' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl('/case-studies')}#collection`,
      url: canonicalUrl('/case-studies'),
      name: TITLE,
      description: DESCRIPTION,
      about: { '@id': 'https://mapletechlabs.ca/#organization' },
      mainEntity: { '@id': `${canonicalUrl('/case-studies')}#list` },
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl('/case-studies')}#list`,
      itemListElement: caseStudies.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        url: canonicalUrl(`/case-studies/${c.slug}`),
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: canonicalUrl('/case-studies') },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
