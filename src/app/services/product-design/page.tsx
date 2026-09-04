import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Product Design & UI/UX in Canada',
  description: 'Product design & UI/UX services by Mapletech Labs. User research, wireframing & prototyping for apps in Canada. Get a free design audit for your product.',
  openGraph: {
    title: 'Product Design & UI/UX in Canada | Mapletech Labs',
    description: 'Product design & UI/UX services by Mapletech Labs. User research, wireframing & prototyping for apps in Canada.',
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
  name: 'Product Design & UI/UX Services',
  description: 'Product design & UI/UX services by Mapletech Labs. User research, wireframing & prototyping for apps in Canada.',
  provider: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
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
    { '@type': 'ListItem', position: 3, name: 'Product Design', item: 'https://mapletechlabs.ca/services/product-design' },
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
