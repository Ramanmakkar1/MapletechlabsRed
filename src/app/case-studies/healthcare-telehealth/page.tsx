import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'HIPAA-Compliant Telehealth Platform | Case Study';
const DESCRIPTION = 'How Mapletech Labs built a HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.';
const SLUG = 'healthcare-telehealth';

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
  headline: 'HIPAA-Compliant Telehealth Platform - Case Study',
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
