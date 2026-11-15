import type { Metadata } from 'next';
import PageClient, { FAQS } from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { BUSINESS, localServiceSchema } from '@/lib/seo/business';
import { ogTitle, seoTitle } from '@/lib/seo/title';

export const dynamic = 'force-static';
export const revalidate = false;

const TITLE = 'AI Consulting Company in Toronto, ON | Mapletech Labs';
const DESCRIPTION =
  'AI consulting in Toronto: readiness assessments, build-versus-buy decisions, privacy and data residency planning, and a fixed-CAD discovery roadmap.';

const URL = canonicalUrl('/locations/ai-consulting-company-in-toronto');

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  alternates: {
    canonical: URL,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mapletechlabs.ca/#organization',
  name: BUSINESS.name,
  url: BUSINESS.url,
  logo: BUSINESS.logo,
  image: BUSINESS.image,
  email: BUSINESS.email,
  telephone: BUSINESS.telephone,
  sameAs: BUSINESS.sameAs,
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Toronto',
    provinceName: 'Ontario',
    url: URL,
    serviceType: ['AI Consulting', 'AI & Machine Learning', 'Software Development'],
  }),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'AI Consulting in Toronto',
  serviceType: 'AI Consulting',
  description: DESCRIPTION,
  url: URL,
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'City',
    name: 'Toronto',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Ontario' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'AI Consulting in Toronto', item: URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]) }}
      />
      <PageClient />
    </>
  );
}
