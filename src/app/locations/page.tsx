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

const PRIORITY_LOCATION_LINKS = [
  { href: '/locations/nova-scotia', label: 'Software development company in Nova Scotia' },
  { href: '/locations/quebec', label: 'Software development company in Quebec' },
  { href: '/locations/saskatchewan', label: 'Software development company in Saskatchewan' },
  { href: '/locations/manitoba', label: 'Software development company in Manitoba' },
  { href: '/locations/software-development-company-in-burnaby', label: 'Software development company in Burnaby, British Columbia' },
  { href: '/locations/software-development-company-in-halifax', label: 'Software development company in Halifax, Nova Scotia' },
  { href: '/locations/software-development-company-in-london-on', label: 'Software development company in London, Ontario' },
  { href: '/locations/software-development-company-in-laval', label: 'Software development company in Laval, Quebec' },
] as const;

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
      <BreadcrumbSchema items={[{ position: 1, name: 'Home', item: canonicalUrl('/') }, { position: 2, name: 'Locations', item: canonicalUrl('/locations') }]} />
      <PageClient
        priorityLocationLinks={(
          <nav aria-label="Featured province and city software development pages">
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gap: 12 }}>
              {PRIORITY_LOCATION_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'var(--brand)', fontWeight: 600 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      />
    </>
  );
}
