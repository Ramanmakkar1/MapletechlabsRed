import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'SEO & Digital Marketing Agency in Canada',
  description: 'Data-driven SEO, Google Ads & social media marketing by Mapletech Labs. Grow your business online across Canada. Get a free marketing audit today.',
  openGraph: {
    title: 'SEO & Digital Marketing Agency in Canada | Mapletech Labs',
    description: 'Data-driven SEO, Google Ads & social media marketing by Mapletech Labs. Grow your business online across Canada. Get a free marketing audit today.',
    url: 'https://mapletechlabs.ca/services/digital-marketing',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/digital-marketing'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Services',
  serviceType: 'SEO and Digital Marketing',
  description: 'Data-driven SEO, Google Ads & social media marketing by Mapletech Labs. Grow your business online across Canada.',
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/digital-marketing',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://mapletechlabs.ca/services/digital-marketing' },
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
