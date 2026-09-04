import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Web Development Services in Canada',
  description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across Canada. Get a free quote today.',
  openGraph: {
    title: 'Web Development Services in Canada | Mapletech Labs',
    description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. 150+ apps shipped across Canada.',
    url: 'https://mapletechlabs.ca/services/web-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development Services',
  description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across Canada.',
  provider: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/web-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://mapletechlabs.ca/services/web-development' },
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
