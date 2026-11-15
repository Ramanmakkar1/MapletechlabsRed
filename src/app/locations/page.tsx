import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { PRIORITY_SERVICES, serviceCityPath } from '@/data/serviceCity';
import { cities } from '@/data/cities';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const dynamic = 'force-static';

const TITLE = 'Software Development Company Across Canada';
const DESCRIPTION = 'Mapletech Labs builds software from 12 locations across Canada, including Edmonton, Calgary, Toronto, Vancouver, Ottawa and Montreal. Find your local team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
      <BreadcrumbSchema items={[{ position: 1, name: 'Home', item: 'https://mapletechlabs.ca' }, { position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' }]} />
      <PageClient />
    </>
  );
}
