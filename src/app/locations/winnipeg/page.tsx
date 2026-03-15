import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Winnipeg | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Winnipeg, Manitoba. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Winnipeg | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Winnipeg, Manitoba. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/winnipeg',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/locations/winnipeg',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mapletech Labs - Winnipeg',
  url: 'https://mapletechlabs.ca/locations/winnipeg',
  telephone: '+1-780-850-5314',
  priceRange: '$$-$$$',
  image: 'https://mapletechlabs.ca/images/og-default.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Winnipeg',
    addressRegion: 'Manitoba',
    addressCountry: 'CA',
  },
  areaServed: {
    '@type': 'City',
    name: 'Winnipeg',
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
    { '@type': 'ListItem', position: 3, name: 'Winnipeg' },
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
