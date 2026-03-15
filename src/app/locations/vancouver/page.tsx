import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Vancouver | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Vancouver, British Columbia. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Vancouver | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Vancouver, British Columbia. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/vancouver',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/locations/vancouver',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mapletech Labs - Vancouver',
  url: 'https://mapletechlabs.ca/locations/vancouver',
  telephone: '+1-780-850-5314',
  priceRange: '$$-$$$',
  image: 'https://mapletechlabs.ca/images/og-default.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vancouver',
    addressRegion: 'British Columbia',
    addressCountry: 'CA',
  },
  areaServed: {
    '@type': 'City',
    name: 'Vancouver',
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
    { '@type': 'ListItem', position: 3, name: 'Vancouver' },
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
