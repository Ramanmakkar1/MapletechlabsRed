import type { Metadata } from 'next';
import Link from 'next/link';
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

// Server-rendered hub links so crawlers (and visitors without JS) can reach the
// highest-intent service + city pages directly from /locations.
const CITY_HUB_LINKS = [
  { href: '/locations/software-development-company-in-edmonton', label: 'Software development company in Edmonton' },
  { href: '/locations/software-development-company-in-calgary', label: 'Software development company in Calgary' },
  { href: '/locations/software-development-company-in-toronto', label: 'Software development company in Toronto' },
  { href: '/locations/software-development-company-in-vancouver', label: 'Software development company in Vancouver' },
  { href: '/locations/ai-development-company-in-calgary', label: 'AI development company in Calgary' },
  { href: '/locations/seo-company-in-edmonton', label: 'SEO company in Edmonton' },
];

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
      <nav
        aria-label="Software development, AI and SEO teams by city"
        style={{ maxWidth: 1180, margin: '0 auto', padding: '2rem 1.5rem 0' }}
      >
        <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Find our teams by city and service</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
          {CITY_HUB_LINKS.map(link => (
            <li key={link.href}>
              <Link href={link.href} style={{ textDecoration: 'underline' }}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <PageClient />
    </>
  );
}
