import { createElement, Fragment, type ReactNode } from 'react';
import type { Metadata } from 'next';
import {
  getServiceCityCombo,
  serviceCitySlugs,
  priorityCompanyHeadline,
  isIndexableCityService,
  WEB_DESIGN_CITIES,
  type ServiceCityCombo,
} from '@/data/serviceCity';
import {
  getCityServiceData,
  getServedCityServiceParams,
  serviceCityExtraFaqs,
  type CityServicePageData,
} from '@/data/city-service';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import { localServiceTitle, ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { quoteForCity, reviewForQuote } from '@/data/testimonials';
import { SERVICE_CITY_LOCAL, type ServiceCityLocal } from '@/data/service-city-local';

export interface LocationPageData {
  slug: string;
  combo: ServiceCityCombo;
  data: CityServicePageData;
  local?: ServiceCityLocal;
  isAgencyPage: boolean;
  serviceName: string;
  serviceLabel: string;
  url: string;
  cityLanding: string;
  heroTitle?: ReactNode;
  heroDesc?: ReactNode;
  metadata: Metadata;
  jsonLd: Record<string, unknown>;
  crossLink?: { before: string; href: string; linkLabel: string };
}

const AGENCY_SERVICE_TYPES = ['SEO', 'Google Ads (PPC)', 'Social Media Marketing', 'Content Marketing'];
const MOBILE_CITY_PAGES = ['edmonton', 'calgary', 'toronto', 'vancouver'];

const cityBrand = (cityName: string) =>
  createElement('span', { style: { color: 'var(--brand)' } }, cityName);

function buildLocationPage(slug: string): LocationPageData | null {
  const combo = getServiceCityCombo(slug);
  if (!combo) return null;

  const raw = getCityServiceData(combo.citySlug, combo.serviceSlug);
  if (!raw) return null;

  const local = Object.prototype.hasOwnProperty.call(SERVICE_CITY_LOCAL, slug)
    ? SERVICE_CITY_LOCAL[slug]
    : undefined;
  const isAgencyPage = combo.slug.startsWith('digital-marketing-agency-in-');
  const serviceName = isAgencyPage
    ? 'Digital Marketing Agency'
    : priorityCompanyHeadline(combo.serviceSlug, combo.label);
  const extraFaqs = serviceCityExtraFaqs(combo.serviceSlug, raw.cityName);
  const data: CityServicePageData = local
    ? {
        ...raw,
        serviceName,
        description: local.description,
        intro: local.intro,
        faqs: [
          ...local.faqs,
          ...extraFaqs.filter(f => !local.faqs.some(existing => existing.q === f.q)),
        ],
      }
    : { ...raw, serviceName };

  const url = canonicalUrl(`/locations/${slug}`);
  const cityLanding = `https://mapletechlabs.ca/locations/software-development-company-in-${combo.citySlug}`;
  const serviceLabel = isAgencyPage
    ? `${serviceName} in ${data.cityName}`
    : `${combo.label} in ${data.cityName}`;
  const quote = quoteForCity(combo.citySlug);

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@graph': [
      ...(quote ? [reviewForQuote(quote)] : []),
      {
        '@type': 'Service',
        name: serviceLabel,
        provider: { '@id': 'https://mapletechlabs.ca/#localbusiness' },
        areaServed: {
          '@type': 'City',
          name: data.cityName,
          containedInPlace: { '@type': 'AdministrativeArea', name: data.province },
        },
        serviceType: isAgencyPage ? AGENCY_SERVICE_TYPES : combo.label,
        description: data.description,
        url,
      },
      localServiceSchema({
        cityName: data.cityName,
        provinceName: data.province,
        url,
        serviceType: isAgencyPage ? AGENCY_SERVICE_TYPES : [combo.label],
      }),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
          { '@type': 'ListItem', position: 3, name: data.cityName, item: cityLanding },
          { '@type': 'ListItem', position: 4, name: serviceLabel, item: url },
        ],
      },
    ],
  };

  const crossLink =
    slug === 'web-development-company-in-edmonton'
      ? { before: 'Need custom software beyond a website? See our ', href: '/locations/software-development-company-in-edmonton', linkLabel: 'Custom Software Development in Edmonton' }
      : slug === `web-design-company-in-${combo.citySlug}`
        ? { before: 'Need a web app, portal or custom integrations as well? See our ', href: `/locations/web-development-company-in-${combo.citySlug}`, linkLabel: `Web Development Company in ${data.cityName}` }
        : slug === `web-development-company-in-${combo.citySlug}` && (WEB_DESIGN_CITIES as readonly string[]).includes(combo.citySlug)
          ? { before: 'Mainly need a new website designed? See our ', href: `/locations/web-design-company-in-${combo.citySlug}`, linkLabel: `Web Design Company in ${data.cityName}` }
          : isAgencyPage && !local
            ? { before: 'Focused on SEO only? See our ', href: `/locations/seo-company-in-${combo.citySlug}`, linkLabel: `SEO Company in ${data.cityName}` }
            : slug === `app-development-company-in-${combo.citySlug}` && MOBILE_CITY_PAGES.includes(combo.citySlug)
              ? { before: 'Planning a native or cross-platform app? See our ', href: `/services/mobile-app-development/${combo.citySlug}`, linkLabel: `iOS, Android and Flutter app development in ${data.cityName}` }
              : undefined;

  // Page-specific hero copy, built once with the rest of the record so the
  // route never branches on the slug or constructs content during render.
  const heroTitle = isAgencyPage
    ? createElement(
        Fragment,
        null,
        'Digital Marketing Agency',
        createElement('br'),
        'in ',
        cityBrand(data.cityName),
      )
    : slug === 'web-development-company-in-edmonton'
      ? createElement(
          Fragment,
          null,
          'Custom Software Development',
          createElement('br'),
          'Company in ',
          cityBrand(data.cityName),
        )
      : undefined;

  const heroDesc =
    slug === 'web-development-company-in-edmonton'
      ? 'Mapletech Labs is a custom software development company in Edmonton, working from our head office here. We build custom web apps, portals, e-commerce sites and the software behind them for Edmonton businesses — fast, SEO-ready, with a fixed CAD price and a senior engineer who replies in one day.'
      : undefined;

  const headline = isAgencyPage
    ? 'Digital Marketing Agency'
    : priorityCompanyHeadline(combo.serviceSlug, combo.label);
  const base = isAgencyPage
    ? `${headline} in ${data.cityName}`
    : `${headline} Company in ${data.cityName}`;
  const title = local?.title ?? (base.length <= 43 ? base : `${combo.label} in ${data.cityName}`);
  const finalTitle = localServiceTitle(title, data.cityName, data.provinceAbbr);
  const description = local?.description ?? data.description;

  const metadata: Metadata = {
    title: seoTitle(finalTitle),
    description: seoDescription(description),
    openGraph: {
      title: ogTitle(finalTitle),
      description: seoDescription(description),
      url,
      type: 'website',
    },
    alternates: { canonical: url },
  };

  return {
    slug,
    combo,
    data,
    local,
    isAgencyPage,
    serviceName,
    serviceLabel,
    url,
    cityLanding,
    heroTitle,
    heroDesc,
    metadata,
    jsonLd,
    crossLink,
  };
}

// Build keyword location pages lazily and memoize them. Building every page at
// module load made a cold render of any single keyword page (>150 of them) pay
// to construct all of their FAQs, schema and link meshes first, which the slow
// page audit measured as a multi-second server response. The slug list is cheap
// and already available, so generateStaticParams still covers every route.
const LOCATION_PAGES = new Map<string, LocationPageData>();

export const locationPageSlugs = serviceCitySlugs;

export function getLocationPage(slug: string): LocationPageData | undefined {
  const cached = LOCATION_PAGES.get(slug);
  if (cached) return cached;
  const page = buildLocationPage(slug);
  if (page) LOCATION_PAGES.set(slug, page);
  return page ?? undefined;
}

// --- /locations/<city>/<service> mesh pages -------------------------------
// Same idea as the keyword pages above: build a pair's full payload on first
// request and memoize it, so the route render and generateMetadata only read a
// map. Nothing in the request path rebuilds schema, FAQs, metadata or links,
// and a cold render no longer has to build every other mesh page first.
export interface LocationMeshPageData {
  city: string;
  service: string;
  data: CityServicePageData;
  isEdmWeb: boolean;
  heroDescription: string;
  metadata: Metadata;
  jsonLd: Record<string, unknown>;
  breadcrumbItems: { position: number; name: string; item: string }[];
}

// Edmonton web development targets its own queries ('web development edmonton',
// 'website development edmonton'); every other pair keeps the shared title/description.
const EDM_WEB_TITLE = 'Website & Web Development Edmonton';
const EDM_WEB_DESCRIPTION = 'Web development in Edmonton by Mapletech Labs, headquartered here. Website development, web apps and portals at a fixed CAD price. Get a free quote.';
const isEdmWebPair = (city: string, service: string) => city === 'edmonton' && service === 'web-development';

function buildLocationMeshPage(city: string, service: string): LocationMeshPageData | null {
  const data = getCityServiceData(city, service);
  if (!data) return null;

  const isEdmWeb = isEdmWebPair(city, service);
  const title = isEdmWeb ? EDM_WEB_TITLE : data.title;
  const finalTitle = localServiceTitle(title, data.cityName, data.provinceAbbr);
  const description = isEdmWeb ? EDM_WEB_DESCRIPTION : data.description;
  const quote = quoteForCity(city);
  const serviceLabel = `${data.serviceName} in ${data.cityName}`;

  const breadcrumbItems = [
    { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { position: 3, name: data.cityName, item: `https://mapletechlabs.ca/locations/software-development-company-in-${data.citySlug}` },
    { position: 4, name: serviceLabel, item: data.canonicalUrl },
  ];

  // Combined JSON-LD schema (single @graph to avoid duplicate field errors)
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@graph': [
      ...(quote ? [reviewForQuote(quote)] : []),
      {
        '@type': 'Service',
        name: serviceLabel,
        provider: { '@id': 'https://mapletechlabs.ca/#localbusiness' },
        areaServed: {
          '@type': 'City',
          name: data.cityName,
          containedInPlace: { '@type': 'AdministrativeArea', name: data.province },
        },
        serviceType: data.serviceName,
        description,
        url: data.canonicalUrl,
      },
      localServiceSchema({
        cityName: data.cityName,
        provinceName: data.province,
        url: data.canonicalUrl,
        serviceType: [data.serviceName],
      }),
    ],
  };

  const metadata: Metadata = {
    title: seoTitle(finalTitle),
    description: seoDescription(description),
    openGraph: {
      title: ogTitle(finalTitle),
      description: seoDescription(description),
      url: data.canonicalUrl,
      type: 'website',
    },
    alternates: { canonical: data.canonicalUrl },
    // Niche pairs in smaller cities stay crawlable but out of the index.
    ...(isIndexableCityService(city, service) ? {} : { robots: { index: false, follow: true } }),
  };

  return {
    city,
    service,
    data,
    isEdmWeb,
    heroDescription: data.heroDescription,
    metadata,
    jsonLd,
    breadcrumbItems,
  };
}

const LOCATION_MESH_PARAMS = getServedCityServiceParams();
const LOCATION_MESH_PAGES = new Map<string, LocationMeshPageData>();

export const locationMeshParams = LOCATION_MESH_PARAMS;

export function getLocationMeshPage(city: string, service: string): LocationMeshPageData | undefined {
  const key = `${city}/${service}`;
  const cached = LOCATION_MESH_PAGES.get(key);
  if (cached) return cached;
  const page = buildLocationMeshPage(city, service);
  if (page) LOCATION_MESH_PAGES.set(key, page);
  return page ?? undefined;
}
