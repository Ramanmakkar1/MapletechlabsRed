import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';

export const metadata: Metadata = {
  title: 'Software Development Company in Hamilton',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Hamilton, Ontario. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Hamilton | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Hamilton, Ontario. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-hamilton',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-hamilton') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Hamilton',
    provinceName: 'Ontario',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-hamilton',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Hamilton' },
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
