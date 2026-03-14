import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Fintech AI Trading Platform | Case Study';
const DESCRIPTION = 'How Mapletech Labs built an AI-powered trading platform that processes 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.';
const SLUG = 'fintech-trading-platform';

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
  headline: 'Fintech AI Trading Platform - Case Study',
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
