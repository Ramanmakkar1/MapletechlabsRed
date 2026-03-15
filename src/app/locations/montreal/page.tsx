import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Montreal | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Montreal, Quebec. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Montreal | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Montreal, Quebec. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/montreal',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/locations/montreal',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mapletech Labs - Montréal',
  url: 'https://mapletechlabs.ca/locations/montreal',
  telephone: '+1-780-850-5314',
  priceRange: '$$-$$$',
  image: 'https://mapletechlabs.ca/images/og-default.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Montréal',
    addressRegion: 'Quebec',
    addressCountry: 'CA',
  },
  areaServed: {
    '@type': 'City',
    name: 'Montréal',
  },
  serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  sameAs: [
    'https://www.linkedin.com/company/canadamapletechlabs/',
    'https://www.facebook.com/Mapletechlabs/',
    'https://www.instagram.com/mapletechlabs/',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Montréal' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
