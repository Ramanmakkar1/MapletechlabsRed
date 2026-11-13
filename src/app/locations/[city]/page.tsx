import type { Metadata } from 'next';
import { cache } from 'react';
import { notFound } from 'next/navigation';
import { getServiceCityCombo, serviceCitySlugs, priorityCompanyHeadline } from '@/data/serviceCity';
import { getCityServiceData, serviceCityExtraFaqs } from '@/data/city-service';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import { localServiceTitle } from '@/lib/seo/title';
import { quoteForCity, reviewForQuote } from '@/data/testimonials';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';
import type { ServiceCityLocal } from '@/data/service-city-local';

interface PageProps {
  params: Promise<{ city: string }>;
}

// Single-segment /locations/<slug> handles the priority "[service] company in [city]"
// keyword pages. Static city-landing and province folders take precedence for their
// own paths; old bare /locations/<city> paths are 301-redirected in next.config.
// Hand-written CTR copy for combos that earn impressions but few clicks. The
// exact query leads; the hook (price, timeline) comes from the page's own
// pricing tiers and FAQ. Titles stay <= 43 chars so the branded title fits 60.
const META_OVERRIDES: Record<string, { title: string; description: string }> = {
  'web-development-company-in-edmonton': {
    title: 'Web Development Edmonton, From $850 CAD',
    description: 'Web development in Edmonton by Mapletech Labs, headquartered here. Business websites from $850 CAD in 4-8 weeks, plus web apps and portals. Free quote.',
  },
};

// Hand-written local copy (title, intro, sections, proof, FAQs) for selected combos.
// Keep the large hand-written copy catalog out of the route's initial server
// chunk. The module is loaded only for keyword pages that need local copy, and
// remains cached by the server module loader for subsequent requests.
const localFor = cache(async (slug: string): Promise<ServiceCityLocal | undefined> => {
  const { SERVICE_CITY_LOCAL } = await import('@/data/service-city-local');
  return Object.prototype.hasOwnProperty.call(SERVICE_CITY_LOCAL, slug)
    ? SERVICE_CITY_LOCAL[slug]
    : undefined;
});

const getCombo = cache((slug: string) => getServiceCityCombo(slug));
const getData = cache((citySlug: string, serviceSlug: string) => getCityServiceData(citySlug, serviceSlug));

export function generateStaticParams() {
  return serviceCitySlugs.map(slug => ({ city: slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const combo = getCombo(slug);
  if (!combo) return {};
  const data = getData(combo.citySlug, combo.serviceSlug);
  if (!data) return {};
  const isAgencyPage = combo.slug.startsWith('digital-marketing-agency-in-');
  const headline = isAgencyPage ? 'Digital Marketing Agency' : priorityCompanyHeadline(combo.serviceSlug, combo.label);
  const base = isAgencyPage ? `${headline} in ${data.cityName}` : `${headline} Company in ${data.cityName}`;
  const override = (await localFor(slug)) ?? META_OVERRIDES[slug];
  const title = override?.title ?? (base.length <= 43 ? base : `${combo.label} in ${data.cityName}`);
  const finalTitle = localServiceTitle(title, data.cityName, data.provinceAbbr);
  const description = override?.description ?? data.description;
  const url = canonicalUrl(`/locations/${slug}`);
  return {
    title: finalTitle,
    description,
    openGraph: { title: `${finalTitle} | Mapletech Labs`, description, url, type: 'website' },
    alternates: { canonical: url },
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const combo = getCombo(slug);
  if (!combo) notFound();

  const raw = getData(combo.citySlug, combo.serviceSlug);
  if (!raw) notFound();

  // Display the keyword label (e.g. "AI Development") rather than the formal
  // service name, so the H1 and headings match the target query.
  const local = await localFor(slug);
  const isAgencyPage = combo.slug.startsWith('digital-marketing-agency-in-');
  const serviceName = isAgencyPage ? 'Digital Marketing Agency' : priorityCompanyHeadline(combo.serviceSlug, combo.label);
  const extraFaqs = serviceCityExtraFaqs(combo.serviceSlug, raw.cityName);
  const data = local
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
  const url = `https://mapletechlabs.ca/locations/${slug}`;
  const cityLanding = `https://mapletechlabs.ca/locations/software-development-company-in-${combo.citySlug}`;
  const agencyServiceTypes = ['SEO', 'Google Ads (PPC)', 'Social Media Marketing', 'Content Marketing'];
  const serviceLabel = isAgencyPage ? `${serviceName} in ${data.cityName}` : `${combo.label} in ${data.cityName}`;

  const quote = quoteForCity(combo.citySlug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...(quote ? [reviewForQuote(quote)] : []),
      {
        '@type': 'Service',
        name: serviceLabel,
        provider: { '@id': 'https://mapletechlabs.ca/#localbusiness' },
        areaServed: { '@type': 'City', name: data.cityName, containedInPlace: { '@type': 'AdministrativeArea', name: data.province } },
        serviceType: isAgencyPage ? agencyServiceTypes : combo.label,
        description: data.description,
        url,
      },
      localServiceSchema({
        cityName: data.cityName,
        provinceName: data.province,
        url,
        serviceType: isAgencyPage ? agencyServiceTypes : [combo.label],
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
      : isAgencyPage && !local
        ? { before: 'Focused on SEO only? See our ', href: `/locations/seo-company-in-${combo.citySlug}`, linkLabel: `SEO Company in ${data.cityName}` }
        : undefined;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceCityTemplate
        data={data}
        local={local}
        pageKey={slug}
        heroTitle={
          isAgencyPage ? (
            <>
              Digital Marketing Agency
              <br />
              in <span style={{ color: 'var(--brand)' }}>{data.cityName}</span>
            </>
          ) : slug === 'web-development-company-in-edmonton' ? (
            <>
              Website Development
              <br />
              in <span style={{ color: 'var(--brand)' }}>{data.cityName}</span>
            </>
          ) : undefined
        }
        heroDesc={
          slug === 'web-development-company-in-edmonton' ? (
            <>
              Mapletech Labs is an Edmonton web development company headquartered in the city. We build custom websites, web apps and portals for Edmonton businesses — fast, SEO-ready, with a fixed CAD price and a senior engineer who replies in one day.
            </>
          ) : undefined
        }
        crossPromo={crossLink}
      />
    </>
  );
}
