import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';
import { getCityServiceData } from '@/data/city-service';
import type { ServiceCityLocal } from '@/data/service-city-local';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Mobile App Development in Toronto: iOS, Android & Flutter';
const DESCRIPTION = 'Mapletech Labs builds iOS, Android and cross-platform apps for Toronto fintech, retail and health teams, with fixed-scope quotes from discovery to launch.';
const URL = 'https://mapletechlabs.ca/services/mobile-app-development/toronto';

const HERO_DESC =
  'Mapletech Labs develops mobile apps for Toronto businesses, building native iOS and Android and cross-platform apps from discovery through App Store and Google Play launch. We serve Toronto and the GTA from our Edmonton headquarters, with fixed-scope quotes and one team from design to release for fintech, retail, real-estate and healthcare teams.';

const INTRO =
  'Mapletech Labs is a mobile app development company serving Toronto businesses. We build native iOS and Android apps and cross-platform apps with React Native and Flutter for Toronto fintech, retail, real-estate and healthcare teams, with fixed-scope quotes and one team from discovery through launch.';

const FAQS = [
  {
    q: 'Who develops mobile apps in Toronto?',
    a: 'Mapletech Labs develops mobile apps for Toronto businesses. We build native iOS and Android apps and cross-platform apps with React Native and Flutter, serving Toronto from our Edmonton headquarters, with fixed-scope quotes and one team from discovery through launch.',
  },
  {
    q: 'Do you build apps for Toronto fintech, retail and real estate companies?',
    a: 'Yes. Toronto is Canada\'s largest tech hub and home to Bay Street financial firms, the MaRS Discovery District and a large retail and real-estate market. We build secure fintech apps, commerce apps and property platforms, and we have delivered 120+ projects in Ontario.',
  },
  {
    q: 'Should Toronto businesses build native apps for iOS and Android or use a cross-platform framework?',
    a: 'Choose native when the product depends on deep device features such as Bluetooth, health sensors, background location, advanced camera work or demanding real-time graphics. Choose React Native or Flutter when you need both app stores from one codebase and a tighter budget; specialised integrations may still need native modules.',
  },
  {
    q: 'How does scope affect mobile app development cost in Toronto?',
    a: 'Cost follows scope. A simple MVP typically starts at $2,500 CAD, consumer apps with full feature sets range from $8,000 to $25,000, and enterprise apps with complex integrations are quoted after discovery. Platform count, custom backend work, API integrations and store-readiness tasks are the biggest cost drivers. Our pricing page explains how fixed-scope quotes work.',
  },
  {
    q: 'How long does it take to build a mobile app?',
    a: 'Most MVPs ship in 8 to 12 weeks from discovery kickoff. Full-featured consumer apps typically run 4 to 6 months. You receive a detailed milestone plan before development begins.',
  },
  {
    q: 'Do you handle App Store and Google Play submission?',
    a: 'Yes. We manage the full submission process for both stores, including screenshots, descriptions, metadata, rating compliance and any review feedback, then monitor the release after launch.',
  },
];

const local: ServiceCityLocal = {
  title: TITLE,
  description: DESCRIPTION,
  intro: INTRO,
  sections: [
    {
      heading: 'Native or cross-platform: how we choose',
      body: [
        'Choose native iOS or Android when the product depends on deep device features such as Bluetooth, health sensors, background location, advanced camera work or demanding real-time graphics. Native gives you direct access to each operating system, but it means two codebases, two release cycles and two store submissions. See our ',
        { href: '/services/mobile-app-development/ios-app-development', label: 'iOS app development' },
        ' and ',
        { href: '/services/mobile-app-development/android-app-development', label: 'Android app development' },
        ' services. Choose React Native or Flutter when you need both app stores from one codebase and a tighter budget. A cross-platform app can still use native modules for specialised integrations. Our guides to ',
        { href: '/blog/native-vs-cross-platform-vs-pwa', label: 'native vs cross-platform vs PWA' },
        ' and ',
        { href: '/blog/flutter-vs-react-native-canada', label: 'Flutter vs React Native in Canada' },
        ' compare the trade-offs.',
      ],
    },
    {
      heading: 'What drives scope and cost',
      body: [
        'Cost follows scope. A simple MVP typically starts at $2,500 CAD, consumer apps with full feature sets range from $8,000 to $25,000, and enterprise apps with complex integrations are quoted after discovery. Platform count, custom backend work, API integrations and store-readiness tasks are the biggest cost drivers. We quote a fixed price after a discovery call, so the number covers an agreed scope rather than an open hourly estimate. See our ',
        { href: '/pricing', label: 'pricing page' },
        ' and our ',
        { href: '/blog/app-development-cost-canada', label: 'Canadian app development cost guide' },
        ' for a line-by-line breakdown.',
        ' Comparing local teams? See our ',
        { href: '/locations/app-development-company-in-toronto', label: 'app development company in Toronto' },
        ' page for Toronto pricing guidance and FAQs.',
        ' Need more than an app? Our ',
        { href: '/locations/software-development-company-in-toronto', label: 'software development company in Toronto' },
        ' page covers custom software, web platforms and AI work for Toronto teams, and our guide to ',
        { href: '/blog/app-development-companies-toronto', label: 'choosing an app development company in Toronto' },
        ' lists the questions to ask before you sign.',
      ],
    },
  ],
  proof: [
    {
      href: '/case-studies/fintech-trading-platform',
      label: 'AI-Powered Trading Platform',
      note: 'Axion Capital in Toronto: sub-50ms latency, 75K+ transactions a day and 99.99% uptime.',
    },
    {
      href: '/case-studies/real-estate-portal',
      label: 'Multi-Listing Real Estate Platform',
      note: 'PropConnect Canada in Toronto: ML-powered recommendations across 850K+ active listings nationwide.',
    },
    {
      href: '/case-studies/healthcare-telehealth',
      label: 'HIPAA-Compliant Telehealth Platform',
      note: 'ClinicFlow Health: 450K+ patient records and 40% less admin overhead.',
    },
  ],
  faqs: FAQS,
};

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: TITLE,
    description: seoDescription(DESCRIPTION),
    url: URL,
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/mobile-app-development/toronto'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Mobile App Development in Toronto',
  serviceType: 'Mobile App Development',
  description: DESCRIPTION,
  url: URL,
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'City',
    name: 'Toronto',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Ontario' },
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
  { position: 4, name: 'Toronto', item: URL },
];

export default function Page() {
  const base = getCityServiceData('toronto', 'mobile-app-development');
  if (!base) notFound();

  const data = {
    ...base,
    intro: INTRO,
    faqs: FAQS,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={breadcrumbSchema} />
      <ServiceCityTemplate data={data} heroDesc={HERO_DESC} local={local} />
    </>
  );
}
