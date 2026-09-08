import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Software Development Company in Laval',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Laval, Quebec. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Laval | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Laval, Quebec. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-laval',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-laval') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mapletech Labs - Laval',
  url: 'https://mapletechlabs.ca/locations/software-development-company-in-laval',
  telephone: '+1-403-604-8692',
  priceRange: '$$-$$$',
  image: 'https://mapletechlabs.ca/images/og-default.jpg',
  address: { '@type': 'PostalAddress', addressLocality: 'Laval', addressRegion: 'Quebec', addressCountry: 'CA' },
  areaServed: { '@type': 'City', name: 'Laval' },
  serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  sameAs: ['https://www.linkedin.com/company/canadamapletechlabs/', 'https://www.facebook.com/Mapletechlabs/', 'https://www.instagram.com/mapletechlabs/'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Laval' },
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
