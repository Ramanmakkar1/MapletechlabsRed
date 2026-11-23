import type { Metadata } from 'next';
import PageClient, { FAQS } from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { localServiceSchema } from '@/lib/seo/business';
import { ogTitle, seoTitle } from '@/lib/seo/title';

export const dynamic = 'force-static';
export const revalidate = 31536000;

const TITLE = 'AI Consulting Company in Edmonton | Mapletech Labs';
const DESCRIPTION =
  'AI consulting company in Edmonton: readiness assessments, build-versus-buy decisions, privacy and data-residency planning, and a clear discovery roadmap.';

const URL = canonicalUrl('/locations/ai-consulting-company-in-edmonton');

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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...localServiceSchema({
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url: URL,
    serviceType: ['AI Consulting', 'AI & Machine Learning', 'Software Development'],
  }),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'AI Consulting in Edmonton',
  serviceType: 'AI Consulting',
  description: DESCRIPTION,
  url: URL,
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'City',
    name: 'Edmonton',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
    { '@type': 'ListItem', position: 3, name: 'AI Consulting in Edmonton', item: URL },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]) }}
      />
      <PageClient />
    </>
  );
}
