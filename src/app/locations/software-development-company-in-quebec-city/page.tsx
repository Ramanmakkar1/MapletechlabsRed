import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';

export const metadata: Metadata = {
  title: 'Software Development Company in Quebec City',
  description: cityDescription('Quebec City', 'Quebec', 'Quebec City organizations'),
  openGraph: {
    title: 'Software Development Company in Quebec City | Mapletech Labs',
    description: cityDescription('Quebec City', 'Quebec', 'Quebec City organizations'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-quebec-city',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/locations/software-development-company-in-quebec-city') },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Quebec City',
    provinceName: 'Quebec',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-quebec-city',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Quebec City' },
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
