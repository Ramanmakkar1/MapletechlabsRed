import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityServiceData, getAllCityServiceParams } from '@/data/city-service';
import { services } from '@/data/services';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { isIndexableCityService } from '@/data/serviceCity';
import { localServiceSchema } from '@/lib/seo/business';
import { localServiceTitle } from '@/lib/seo/title';

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

// Edmonton web development targets its own queries ('web development edmonton',
// 'website development edmonton'); every other pair keeps the shared title/description.
const EDM_WEB_TITLE = 'Website & Web Development Edmonton';
const EDM_WEB_DESCRIPTION = 'Web development in Edmonton by Mapletech Labs, headquartered here. Website development, web apps and portals at a fixed CAD price. Get a free quote.';
const isEdmWebPair = (city: string, service: string) => city === 'edmonton' && service === 'web-development';

export async function generateStaticParams() {
  return getAllCityServiceParams();
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const data = getCityServiceData(city, service);
  if (!data) return {};
  const isEdmWeb = isEdmWebPair(city, service);
  const title = isEdmWeb ? EDM_WEB_TITLE : data.title;
  const finalTitle = localServiceTitle(title, data.cityName, data.provinceAbbr);
  const desc = isEdmWeb ? EDM_WEB_DESCRIPTION : data.description;

  return {
    title: finalTitle,
    description: desc,
    openGraph: {
      title: `${finalTitle} | Mapletech Labs`,
      description: desc,
      url: data.canonicalUrl,
      type: 'website',
    },
    alternates: {
      canonical: data.canonicalUrl,
    },
    // Niche pairs in smaller cities stay crawlable but out of the index.
    ...(isIndexableCityService(city, service) ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const data = getCityServiceData(city, service);

  if (!data) {
    notFound();
  }
  const isEdmWeb = isEdmWebPair(city, service);
  const desc = isEdmWeb ? EDM_WEB_DESCRIPTION : data.description;
  // Check the in-memory service catalog instead of the filesystem on every
  // render. Every service in the catalog has a /services/<slug> page, so this
  // keeps the breadcrumb link while removing a synchronous fs call from the
  // render path.
  const servicePageExists = services.some(s => s.slug === data.serviceSlug);
  const breadcrumbItems = [
    { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    ...(servicePageExists
      ? [{ position: 3, name: data.serviceName, item: `https://mapletechlabs.ca/services/${data.serviceSlug}` }]
      : []),
    {
      position: servicePageExists ? 4 : 3,
      name: `${data.serviceName} in ${data.cityName}`,
    },
  ];

  // Combined JSON-LD schema (single @graph to avoid duplicate field errors)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${data.serviceName} in ${data.cityName}`,
        provider: { '@id': 'https://mapletechlabs.ca/#localbusiness' },
        areaServed: {
          '@type': 'City',
          name: data.cityName,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: data.province,
          },
        },
        serviceType: data.serviceName,
        description: desc,
        url: data.canonicalUrl,
      },
      localServiceSchema({
        cityName: data.cityName,
        provinceName: data.province,
        url: data.canonicalUrl,
        serviceType: [data.serviceName],
      }),
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {isEdmWeb ? (
        <ServiceCityTemplate
          data={data}
          heroTitle={<>Web Development <span style={{ color: 'var(--brand)' }}>Edmonton</span><br />&amp; Website Development</>}
          heroDesc={<>{data.heroDescription} Part of our <Link href="/locations/software-development-company-in-edmonton">custom software development in Edmonton</Link>, from our head office here.</>}
        />
      ) : (
        <ServiceCityTemplate data={data} />
      )}
    </>
  );
}
