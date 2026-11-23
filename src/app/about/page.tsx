import type { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'About Mapletech Labs: Edmonton Software Developers';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: 'Mapletech Labs is a Canadian software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries. Meet our team today.',
  openGraph: {
    title: TITLE,
    description: 'Mapletech Labs is a Canadian software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries. Meet our team today.',
    url: 'https://mapletechlabs.ca/about',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/about'),
  },
};

export default function Page() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl('/about')}#aboutpage`,
        url: canonicalUrl('/about'),
        name: TITLE,
        description: metadata.description,
        mainEntity: { '@id': `${canonicalUrl('/')}#organization` },
        about: { '@id': `${canonicalUrl('/')}#organization` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema).replace(/</g, '\\u003c') }}
      />
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'About', item: canonicalUrl('/about') },
        ]}
      />
      <PageClient />
    </>
  );
}
