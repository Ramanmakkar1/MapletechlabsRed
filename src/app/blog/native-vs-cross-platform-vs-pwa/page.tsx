import type { Metadata } from 'next';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import { getArticle } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const a = getArticle('native-vs-cross-platform-vs-pwa')!;
const URL = `https://mapletechlabs.ca/blog/native-vs-cross-platform-vs-pwa`;

export const metadata: Metadata = {
  title: seoTitle(a.metaTitle),
  description: a.metaDescription,
  openGraph: {
    title: a.metaTitle,
    description: a.metaDescription,
    type: 'article',
    publishedTime: a.date,
    modifiedTime: a.dateModified,
    url: URL,
  },
  alternates: { canonical: canonicalUrl('/blog/native-vs-cross-platform-vs-pwa') },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: a.title,
  description: a.metaDescription,
  datePublished: a.date,
  dateModified: a.dateModified,
  author: { '@type': 'Person', name: 'Raman Makkar', jobTitle: 'CEO', url: 'https://mapletechlabs.ca/about' },
  publisher: { '@type': 'Organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca', logo: { '@type': 'ImageObject', url: 'https://mapletechlabs.ca/logo.png' } },
  url: URL,
  mainEntityOfPage: URL,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'native-vs-cross-platform-vs-pwa')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate a={a} />
    </>
  );
}
