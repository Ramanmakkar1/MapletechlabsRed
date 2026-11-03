import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';

export const metadata: Metadata = {
  title: 'Software Development Company in Surrey',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Surrey, British Columbia. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Surrey | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI and web development in Surrey, British Columbia. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-surrey',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-surrey') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Surrey',
    provinceName: 'British Columbia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-surrey',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Surrey' },
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
