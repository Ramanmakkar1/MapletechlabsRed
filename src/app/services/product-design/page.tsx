import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'UI/UX Design Company in Canada',
  description: 'UI/UX design company in Canada: user research, wireframes, prototypes and design systems for apps and SaaS, with fixed CAD pricing. Book a free design audit.',
  openGraph: {
    title: 'UI/UX Design Company in Canada | Mapletech Labs',
    description: 'UI/UX design company in Canada: user research, wireframes, prototypes and design systems for apps and SaaS, with fixed CAD pricing. Book a free design audit.',
    url: 'https://mapletechlabs.ca/services/product-design',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UI/UX Design Services',
  serviceType: 'UI/UX Design',
  description: 'UI/UX design company in Canada: user research, wireframes, prototypes and design systems for apps and SaaS, with fixed CAD pricing. Book a free design audit.',
  provider: { '@id': 'https://mapletechlabs.ca/#localbusiness' },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/product-design',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: 'https://mapletechlabs.ca/services/product-design' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
