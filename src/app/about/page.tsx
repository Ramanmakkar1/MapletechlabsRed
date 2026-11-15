import type { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { FaqSchema } from '@/components/ServiceSchema';
import { ABOUT_FAQS } from '@/data/about';

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
      <FaqSchema faqs={ABOUT_FAQS} />
      <section className="mx-auto max-w-4xl px-6 pb-2" style={{ paddingTop: 110, background: 'var(--surface)' }}>
        <p className="text-base leading-relaxed text-slate-700">
          Mapletech Labs is a Canadian software development company founded in Edmonton by{' '}
          <Link href="/about/raman-makkar" className="font-semibold text-blue-700 underline">
            Raman Makkar
          </Link>
          . With 300+ projects delivered, 150+ engineers and clients in 12 countries, we build
          web, mobile and AI products for businesses across Canada. Explore our{' '}
          <Link href="/services" className="font-semibold text-blue-700 underline">
            software, app and AI development services
          </Link>
          , see the results in our{' '}
          <Link href="/case-studies" className="font-semibold text-blue-700 underline">
            client case studies
          </Link>
          , or{' '}
          <Link href="/contact" className="font-semibold text-blue-700 underline">
            contact our team
          </Link>{' '}
          to discuss your project.
        </p>
      </section>
      <PageClient />
    </>
  );
}
