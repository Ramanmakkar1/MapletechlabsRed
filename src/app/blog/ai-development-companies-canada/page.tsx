import type { Metadata } from 'next';
import PageClient from './PageClient';
import { BLOG_AUTHOR, BLOG_IMAGE } from '@/lib/seo/business';
import { getArticle } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

export const dynamic = 'force-static';
export const revalidate = false;
export const fetchCache = 'force-cache';

const article = getArticle('ai-development-companies-canada')!;
const URL = `https://mapletechlabs.ca/blog/ai-development-companies-canada`;

export const metadata: Metadata = {
  title: seoTitle(article.metaTitle),
  description: seoDescription(article.metaDescription),
  openGraph: {
    title: ogTitle(article.metaTitle),
    description: seoDescription(article.metaDescription),
    type: 'article',
    publishedTime: article.date,
    modifiedTime: article.dateModified,
    url: URL,
  },
  alternates: { canonical: canonicalUrl('/blog/ai-development-companies-canada') },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.metaDescription,
  datePublished: article.date,
  dateModified: article.dateModified,
  author: BLOG_AUTHOR,
  image: BLOG_IMAGE,
  publisher: {
    '@type': 'Organization',
    '@id': 'https://mapletechlabs.ca/#organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mapletechlabs.ca/logo.png',
    },
  },
  url: URL,
  mainEntityOfPage: URL,
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(article.title, 'ai-development-companies-canada')} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
