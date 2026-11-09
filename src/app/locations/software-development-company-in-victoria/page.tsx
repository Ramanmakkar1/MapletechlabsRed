import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import cityDescription from '@/lib/seo/city-meta';

export const metadata: Metadata = {
  title: 'Software Development Company in Victoria',
  description: cityDescription('Victoria', 'British Columbia', 'Victoria organizations'),
  openGraph: {
    title: 'Software Development Company in Victoria | Mapletech Labs',
    description: cityDescription('Victoria', 'British Columbia', 'Victoria organizations'),
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-victoria',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations/software-development-company-in-victoria'),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Victoria',
    provinceName: 'British Columbia',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-victoria',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Victoria' },
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
