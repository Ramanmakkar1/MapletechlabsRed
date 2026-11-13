import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';
import { contactHrefFor } from '@/lib/enquiryContext';
import { services } from '@/data/services';
import { cities } from '@/data/cities';

const TITLE = 'Mobile App Development in Vancouver: iOS, Android & Flutter';
const DESCRIPTION = 'Mapletech Labs builds iOS, Android and cross-platform apps for Vancouver businesses from our Edmonton HQ, with fixed-scope quotes from discovery to launch.';
const URL = 'https://mapletechlabs.ca/services/mobile-app-development/vancouver';

const FAQS = [
  {
    q: 'Who develops mobile apps in Vancouver?',
    a: 'Mapletech Labs develops mobile apps for Vancouver businesses. We build native iOS and Android apps and cross-platform apps with React Native and Flutter, serving Vancouver from our Edmonton headquarters, with fixed-scope quotes and one team from discovery through launch.',
  },
  {
    q: 'Do you have an office in Vancouver?',
    a: 'No. Mapletech Labs is headquartered in Edmonton and does not have a Vancouver office. We serve Vancouver and BC clients remotely, with working hours that almost fully overlap because Edmonton is one hour ahead, and we can hold in-person workshops in Vancouver by arrangement with travel agreed up front.',
  },
  {
    q: 'Should we build native apps for iOS and Android or use a cross-platform framework?',
    a: 'Choose native when the product depends on deep device features such as Bluetooth, health sensors, background location, advanced camera work or demanding real-time graphics. Choose React Native or Flutter when you need both app stores from one codebase and a tighter budget; specialised integrations may still need native modules.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'Most MVPs ship in 8 to 12 weeks from discovery kickoff. Full-featured consumer apps typically run 4 to 6 months. You receive a detailed milestone plan before development begins.',
  },
  {
    q: 'How does scope affect mobile app development cost in Vancouver?',
    a: 'Cost follows scope. A simple MVP typically starts at $2,500 CAD, consumer apps with full feature sets range from $8,000 to $25,000, and enterprise apps with complex integrations are quoted after discovery. Platform count, custom backend work, API integrations and store-readiness tasks are the biggest cost drivers. Our pricing page explains how fixed-scope quotes work.',
  },
  {
    q: 'Do you handle App Store and Google Play submission?',
    a: 'Yes. We manage the full submission process for both stores, including screenshots, descriptions, metadata, rating compliance and any review feedback, then monitor the release after launch.',
  },
];

const contactHref = contactHrefFor('mobile-app-development', 'vancouver', services, cities);

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: TITLE,
    description: seoDescription(DESCRIPTION),
    url: URL,
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/services/mobile-app-development/vancouver') },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Mobile App Development in Vancouver',
  serviceType: 'Mobile App Development',
  description: DESCRIPTION,
  url: URL,
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'City',
    name: 'Vancouver',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'British Columbia' },
  },
};

const breadcrumbSchema = [
  { position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
  { position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
  {
    position: 3,
    name: 'Mobile App Development',
    item: 'https://mapletechlabs.ca/services/mobile-app-development',
  },
  { position: 4, name: 'Vancouver', item: URL },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={breadcrumbSchema} />
      <FaqSchema faqs={FAQS} />
      <PageClient faqs={FAQS} contactHref={contactHref} />
    </>
  );
}
