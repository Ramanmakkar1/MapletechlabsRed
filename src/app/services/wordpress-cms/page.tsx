import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'WordPress & CMS Development in Canada',
  description: 'WordPress & headless CMS development by Mapletech Labs. Custom themes, WooCommerce & Strapi for Canadian businesses. Get a free quote for your project.',
  openGraph: {
    title: 'WordPress & CMS Development in Canada | Mapletech Labs',
    description: 'WordPress & headless CMS development by Mapletech Labs. Custom themes, WooCommerce & Strapi for Canadian businesses. Get a free quote for your project.',
    url: 'https://mapletechlabs.ca/services/wordpress-cms',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/wordpress-cms'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WordPress & CMS Development',
  serviceType: 'WordPress & CMS Development',
  description: 'WordPress & headless CMS development by Mapletech Labs. Custom themes, WooCommerce & Strapi for Canadian businesses.',
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/wordpress-cms',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'WordPress & CMS', item: 'https://mapletechlabs.ca/services/wordpress-cms' },
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
