import type { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { PRIORITY_SERVICES, serviceCityPath, serviceCityHref, priorityCompanyHeadline } from '@/data/serviceCity';
import { cities } from '@/data/cities';
import { provinces } from '@/data/provinces';
import { getServedCityServiceParams } from '@/data/city-service';
import { services } from '@/data/services';
import { isIndexableHref } from '@/lib/seo/indexability';
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

// City + service mesh pages that live in local-seo-sitemap.xml. They are not
// covered by the priority keyword links above, so list them here too: every
// location URL in the sitemap gets a crawlable anchor from /locations.
const MESH_LOCATION_LINKS = getServedCityServiceParams()
  .map(({ city, service }) => {
    const cityName = cities.find(c => c.slug === city)?.name ?? city;
    const serviceName = services.find(s => s.slug === service)?.name ?? service;
    return { href: `/locations/${city}/${service}`, label: `${serviceName} company in ${cityName}` };
  })
  .filter(link => isIndexableHref(link.href));

const servicesByCityJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mapletech Labs services by city',
  itemListElement: MAJOR_CITIES.flatMap(c => PRIORITY_SERVICES.map(ps => ({ city: c, ps })))
    .filter(({ ps, city }) => isIndexableHref(serviceCityPath(ps.serviceSlug, city.slug)))
    .map(({ city, ps }, i) => ({
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
          <>
            <h3 style={{ fontSize: 'var(--fs-h4)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 12px' }}>Cities we serve</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gap: 12 }}>
              {cities.map(city => (
                <li key={`city-${city.slug}`}>
                  <Link href={`/locations/software-development-company-in-${city.slug}`} style={{ color: 'var(--brand)', fontWeight: 600 }}>
                    {city.name} software development
                  </Link>
                </li>
              ))}
            </ul>
            <nav aria-label="All location pages">
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gap: 12 }}>
              {provinces.map(prov => (
                <li key={`province-${prov.slug}`}>
                  <Link href={`/locations/${prov.slug}`} style={{ color: 'var(--brand)', fontWeight: 600 }}>
                    Software development company in {prov.name}
                  </Link>
                </li>
              ))}
              {cities.flatMap(city =>
                PRIORITY_SERVICES.map(ps => {
                  const href = serviceCityHref(ps.serviceSlug, city.slug);
                  return isIndexableHref(href)
                    ? { href, label: `${priorityCompanyHeadline(ps.serviceSlug, ps.label)} company in ${city.name}` }
                    : null;
                })
              ).filter((l): l is { href: string; label: string } => l !== null).map(link => (
                <li key={`svc-${link.href}`}>
                  <Link href={link.href} style={{ color: 'var(--brand)', fontWeight: 600 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {MESH_LOCATION_LINKS.map(link => (
                <li key={`mesh-${link.href}`}>
                  <Link href={link.href} style={{ color: 'var(--brand)', fontWeight: 600 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            </nav>
          </>
        )}
      />
    </>
  );
}
