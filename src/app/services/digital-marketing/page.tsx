import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Canada | Mapletech Labs',
  description: 'Data-driven SEO, Google Ads & social media marketing by Mapletech Labs. Grow your business online across Canada. Get a free marketing audit today.',
  openGraph: {
    title: 'Digital Marketing Services in Canada | Mapletech Labs',
    description: 'Data-driven SEO, Google Ads & social media marketing by Mapletech Labs. Grow your business online across Canada.',
    url: 'https://mapletechlabs.ca/services/digital-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/digital-marketing',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long before I see results from SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see meaningful ranking improvements within 3\u20134 months, with significant traffic gains by month 6. Paid channels like Google Ads and Meta deliver results within the first 2 weeks of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage ad spend or just strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We handle everything \u2014 strategy, creative, copy, campaign setup, bid management and weekly optimisation. You keep full ownership of your ad accounts and get transparent reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What budget do I need to start with paid ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend a minimum of $500/month in ad spend for Google Ads and $300/month for paid social. Below these thresholds the data volume is too low for meaningful optimisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work with our in-house marketing team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We frequently operate as a specialist extension of in-house teams \u2014 handling specific channels, providing senior strategy, or covering capacity gaps during high-growth periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you report on performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every client gets a live dashboard, weekly performance summaries and a monthly strategy call. We tie every metric back to pipeline and revenue, not vanity numbers.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Services',
  description: 'Data-driven SEO, Google Ads & social media marketing by Mapletech Labs. Grow your business online across Canada.',
  provider: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/digital-marketing',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://mapletechlabs.ca/services/digital-marketing' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
