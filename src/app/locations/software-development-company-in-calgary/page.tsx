import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Software Development Company Calgary | Alberta Team';
const DESCRIPTION = 'Software development company serving Calgary from our Edmonton HQ, 3 hours away. Custom software, web and mobile apps by Mapletech Labs at a fixed price.';

export const metadata: Metadata = {
  // Brand-free so the hook fits 60 chars; the OG title keeps the brand.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: 'Software Development Company in Calgary | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-calgary',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations/software-development-company-in-calgary'),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mapletech Labs - Calgary',
  url: 'https://mapletechlabs.ca/locations/software-development-company-in-calgary',
  telephone: '+1-780-850-5314',
  priceRange: '$$-$$$',
  image: 'https://mapletechlabs.ca/images/og-default.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'Alberta',
    addressCountry: 'CA',
  },
  areaServed: {
    '@type': 'City',
    name: 'Calgary',
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
    { '@type': 'ListItem', position: 3, name: 'Calgary' },
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
