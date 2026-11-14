import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';

export const dynamic = 'force-static';
export const revalidate = false;

const TITLE = 'Custom Software Development Edmonton | Mapletech Labs';
const DESCRIPTION = 'Custom software development in Edmonton by Mapletech Labs, headquartered here. Fixed price, and a senior engineer replies in 1 day. Get a free quote.';

export const metadata: Metadata = {
  // Brand-free so the hook fits 60 chars; OG reuses the same title.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations/software-development-company-in-edmonton'),
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url: 'https://mapletechlabs.ca/locations/software-development-company-in-edmonton',
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
  }),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'Edmonton' },
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
