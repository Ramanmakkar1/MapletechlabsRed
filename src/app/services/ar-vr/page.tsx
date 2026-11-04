import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'AR & VR Development in Canada',
  description: 'AR & VR development by Mapletech Labs. Mobile AR, WebXR, Apple Vision Pro & industrial solutions in Canada. Book a free immersive tech consultation.',
  openGraph: {
    title: 'AR & VR Development in Canada | Mapletech Labs',
    description: 'AR & VR development by Mapletech Labs. Mobile AR, WebXR, Apple Vision Pro & industrial solutions in Canada.',
    url: 'https://mapletechlabs.ca/services/ar-vr',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AR & VR Development Services',
  serviceType: 'AR & VR Development',
  description: 'AR & VR development by Mapletech Labs. Mobile AR, WebXR, Apple Vision Pro & industrial solutions in Canada.',
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/ar-vr',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'AR & VR Development', item: 'https://mapletechlabs.ca/services/ar-vr' },
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
