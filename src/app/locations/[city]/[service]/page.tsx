import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityServiceData, getAllCityServiceParams } from '@/data/city-service';
import CityServicePageClient from './PageClient';

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  return getAllCityServiceParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const data = getCityServiceData(city, service);
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} | Mapletech Labs`,
      description: data.description,
      url: data.canonicalUrl,
      type: 'website',
    },
    alternates: {
      canonical: data.canonicalUrl,
    },
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const data = getCityServiceData(city, service);

  if (!data) {
    notFound();
  }

  // JSON-LD schemas
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.serviceName} in ${data.cityName}`,
    provider: {
      '@type': 'Organization',
      name: 'Mapletech Labs',
      url: 'https://mapletechlabs.com',
    },
    areaServed: {
      '@type': 'City',
      name: data.cityName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: data.province,
      },
    },
    serviceType: data.serviceName,
    description: data.description,
    url: data.canonicalUrl,
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Mapletech Labs ${data.cityName}`,
    url: `https://mapletechlabs.com/locations/${data.citySlug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.cityName,
      addressRegion: data.provinceAbbr,
      addressCountry: 'CA',
    },
    priceRange: '$$$',
    image: 'https://mapletechlabs.com/logo.png',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mapletechlabs.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://mapletechlabs.com/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.cityName,
        item: `https://mapletechlabs.com/locations/${data.citySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: data.serviceName,
        item: data.canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CityServicePageClient
        cityName={data.cityName}
        citySlug={data.citySlug}
        province={data.province}
        provinceAbbr={data.provinceAbbr}
        isHQ={data.isHQ}
        serviceName={data.serviceName}
        serviceSlug={data.serviceSlug}
        heroContext={data.heroContext}
        heroDescription={data.heroDescription}
        badge={data.badge}
        stats={data.stats}
        largeServices={data.largeServices}
        smallServices={data.smallServices}
        whyCity={data.whyCity}
        steps={data.steps}
        techCategories={data.techCategories}
        testimonials={data.testimonials}
        pricingTiers={data.pricingTiers}
        faqs={data.faqs}
        relatedSubServices={data.relatedSubServices}
        relatedCityServices={data.relatedCityServices}
      />
    </>
  );
}
