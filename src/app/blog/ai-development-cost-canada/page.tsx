import { BLOG_AUTHOR } from '@/lib/seo/business';
import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import BlogCityLinks from '@/components/blog/BlogCityLinks';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('ai-development-cost-canada')!;
const URL = `https://mapletechlabs.ca/blog/ai-development-cost-canada`;

export const metadata: Metadata = {
  title: seoTitle(a.metaTitle),
  description: seoDescription(a.metaDescription),
  openGraph: {
    title: a.metaTitle,
    description: a.metaDescription,
    type: 'article',
    publishedTime: a.date,
    modifiedTime: a.dateModified,
    url: URL,
  },
  alternates: { canonical: canonicalUrl('/blog/ai-development-cost-canada') },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: a.title,
  description: a.metaDescription,
  datePublished: a.date,
  dateModified: a.dateModified,
  author: BLOG_AUTHOR,
  publisher: { '@type': 'Organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca', logo: { '@type': 'ImageObject', url: 'https://mapletechlabs.ca/logo.png' } },
  url: URL,
  mainEntityOfPage: URL,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'ai-development-cost-canada')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate a={a} related={getRelatedArticles(a.slug)} cityLinks={
        <>
          <BlogCityLinks serviceSlug="ai-ml" />
          <div className="reveal" style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none', color: 'var(--faint)', marginBottom: 16 }}>Related services</p>
            <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8 }}>
              Planning an AI feature? See our <Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>AI and machine learning development services in Canada</Link>.
            </p>
          </div>
        </>
      } />
    </>
  );
}
