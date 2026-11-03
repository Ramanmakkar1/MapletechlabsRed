import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';

export const metadata: Metadata = {
  title: 'Software Development Company in Kelowna',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Kelowna, British Columbia. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Kelowna | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Kelowna, British Columbia. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-kelowna',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-kelowna') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Kelowna',
    provinceName: 'British Columbia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-kelowna',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Kelowna' },
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
