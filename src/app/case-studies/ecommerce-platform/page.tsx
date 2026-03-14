import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Enterprise E-Commerce Platform | Case Study';
const DESCRIPTION = 'How Mapletech Labs built a high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.';
const SLUG = 'ecommerce-platform';

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
  headline: 'Enterprise E-Commerce Platform - Case Study',
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
