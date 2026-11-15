import { BLOG_AUTHOR, BLOG_IMAGE } from '@/lib/seo/business';
import type { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { GUIDE_FAQS } from '@/data/guide-faqs';
import { getArticle } from '@/data/articles';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('healthcare-ai-development-canada')!;
const SLUG = 'healthcare-ai-development-canada';
const URL = `https://mapletechlabs.ca/blog/${SLUG}`;

export const metadata: Metadata = {
  title: seoTitle(a.metaTitle),
  description: seoDescription(a.metaDescription),
  openGraph: {
    title: ogTitle(a.metaTitle),
    description: seoDescription(a.metaDescription),
    type: 'article',
    publishedTime: a.date,
    modifiedTime: a.dateModified,
    url: URL,
  },
  alternates: { canonical: canonicalUrl(`/blog/${SLUG}`) },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: a.title,
  description: a.metaDescription,
  datePublished: a.date,
  dateModified: a.dateModified,
  author: BLOG_AUTHOR,
  image: BLOG_IMAGE,
  publisher: {
    '@type': 'Organization',
    '@id': 'https://mapletechlabs.ca/#organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
    logo: { '@type': 'ImageObject', url: 'https://mapletechlabs.ca/logo.png' },
  },
  url: URL,
  mainEntityOfPage: URL,
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mapletechlabs.ca/#organization',
  name: 'Mapletech Labs',
  url: 'https://mapletechlabs.ca',
  logo: { '@type': 'ImageObject', url: 'https://mapletechlabs.ca/logo.png' },
  description: 'Mapletech Labs is a Canadian software, app and AI development company serving Edmonton, Calgary, Toronto and Vancouver.',
  areaServed: ['Edmonton', 'Calgary', 'Toronto', 'Vancouver', 'Canada'],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, SLUG)} />
      <FaqSchema faqs={GUIDE_FAQS[SLUG]} />
      <PageClient />
    </>
  );
}
