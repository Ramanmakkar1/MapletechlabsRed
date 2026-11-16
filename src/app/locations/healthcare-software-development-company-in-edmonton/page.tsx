import type { Metadata } from 'next';
import PageClient, { FAQS } from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { BUSINESS, localServiceSchema } from '@/lib/seo/business';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

export const dynamic = 'force-static';
export const revalidate = false;

const TITLE = 'Healthcare Software Development in Edmonton';
const DESCRIPTION =
  'Healthcare software development in Edmonton for telehealth, patient portals and EHR integration. See our HIPAA and PIPEDA process, timelines and pricing.';

const URL = canonicalUrl('/locations/healthcare-software-development-company-in-edmonton');

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
    cityName: 'Edmonton',
    provinceName: 'Alberta',
    url: URL,
    serviceType: ['Healthcare Software Development', 'Telehealth App Development', 'EHR Integration', 'Software Development'],
  }),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Healthcare Software Development in Edmonton',
  serviceType: 'Healthcare Software Development',
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
    { '@type': 'ListItem', position: 3, name: 'Healthcare Software Development in Edmonton', item: URL },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            localBusinessSchema,
            serviceSchema,
            breadcrumbSchema,
            faqSchema,
          ]),
        }}
      />
      <PageClient />
    </>
  );
}
