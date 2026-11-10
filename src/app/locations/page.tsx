import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { PRIORITY_SERVICES, serviceCityPath } from '@/data/serviceCity';
import { cities } from '@/data/cities';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Software Development Company Across Canada',
  description: 'Mapletech Labs builds software for companies in twelve Canadian cities, from Vancouver to Halifax. Local delivery, national engineering bench.',
  openGraph: {
    title: 'Software Development Company Across Canada | Mapletech Labs',
    description: 'Mapletech Labs operates from 12 locations across Canada including Edmonton, Toronto, Vancouver, Calgary, Ottawa, and Montreal. Find a software development team near you.',
    url: 'https://mapletechlabs.ca/locations',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations'),
  },
};

const MAJOR_CITIES = ['edmonton', 'calgary', 'toronto', 'vancouver', 'ottawa', 'montreal'].flatMap(slug => cities.filter(c => c.slug === slug));

const servicesByCityJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mapletech Labs services by city',
  itemListElement: MAJOR_CITIES.flatMap(c => PRIORITY_SERVICES.map(ps => ({ city: c, ps }))).map(({ city, ps }, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${ps.label} in ${city.name}`,
    url: `https://mapletechlabs.ca${serviceCityPath(ps.serviceSlug, city.slug)}`,
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesByCityJsonLd).replace(/</g, '\\u003c') }} />
      <PageClient />
    </>
  );
}
