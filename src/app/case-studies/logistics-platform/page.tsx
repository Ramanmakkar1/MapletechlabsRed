import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Real-Time Logistics & Fleet Management | Case Study';
const DESCRIPTION = 'How Mapletech Labs built a real-time logistics platform handling 15K+ daily deliveries with 25% fuel savings and 98% on-time delivery rate.';
const SLUG = 'logistics-platform';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://mapletechlabs.ca/case-studies/${SLUG}`,
    type: 'article',
  },
  alternates: {
    canonical: `https://mapletechlabs.ca/case-studies/${SLUG}`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Real-Time Logistics & Fleet Management - Case Study',
  description: DESCRIPTION,
  author: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mapletechlabs.ca/logo.png',
    },
  },
  url: `https://mapletechlabs.ca/case-studies/${SLUG}`,
  mainEntityOfPage: `https://mapletechlabs.ca/case-studies/${SLUG}`,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
