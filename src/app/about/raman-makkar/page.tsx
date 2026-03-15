import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Raman Makkar - CEO & Founder | Mapletech Labs',
  description: 'Raman Makkar is the CEO and Founder of Mapletech Labs, a leading software development company in Canada. Learn about his experience, expertise, and vision.',
  openGraph: {
    title: 'Raman Makkar - CEO & Founder | Mapletech Labs',
    description: 'Raman Makkar is the CEO and Founder of Mapletech Labs.',
    url: 'https://mapletechlabs.ca/about/raman-makkar',
    type: 'profile',
  },
  alternates: { canonical: 'https://mapletechlabs.ca/about/raman-makkar' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Raman Makkar',
  jobTitle: 'CEO & Founder',
  url: 'https://mapletechlabs.ca/about/raman-makkar',
  worksFor: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
  sameAs: [
    'https://www.linkedin.com/company/canadamapletechlabs/',
    'https://www.instagram.com/mapletechlabs/',
  ],
  knowsAbout: ['Software Development', 'AI & Machine Learning', 'Mobile App Development', 'Cloud Computing', 'SaaS', 'Digital Transformation'],
  alumniOf: 'University of Alberta',
  nationality: 'Canadian',
};

export default function RamanMakkarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <PageClient />
    </>
  );
}
