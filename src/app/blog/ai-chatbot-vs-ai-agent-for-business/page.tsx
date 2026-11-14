import { BLOG_AUTHOR, BLOG_IMAGE } from '@/lib/seo/business';
import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import BlogCityLinks from '@/components/blog/BlogCityLinks';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const a = getArticle('ai-chatbot-vs-ai-agent-for-business')!;
const URL = `https://mapletechlabs.ca/blog/ai-chatbot-vs-ai-agent-for-business`;

export const metadata: Metadata = {
  title: seoTitle(a.metaTitle),
  description: seoDescription(a.metaDescription),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(a.metaTitle),
    description: seoDescription(a.metaDescription),
    type: 'article',
    publishedTime: a.date,
    modifiedTime: a.dateModified,
    url: URL,
  },
  alternates: { canonical: canonicalUrl('/blog/ai-chatbot-vs-ai-agent-for-business') },
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
  publisher: { '@type': 'Organization', '@id': 'https://mapletechlabs.ca/#organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca', logo: { '@type': 'ImageObject', url: 'https://mapletechlabs.ca/logo.png' } },
  url: URL,
  mainEntityOfPage: URL,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'ai-chatbot-vs-ai-agent-for-business')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate a={a} related={getRelatedArticles(a.slug)} cityLinks={
        <>
          <BlogCityLinks serviceSlug="ai-ml" />
          <div className="reveal" style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none', color: 'var(--faint)', marginBottom: 16 }}>Related services</p>
            <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8 }}>
              Start with our <Link href="/services/ai-ml/ai-chatbots" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>AI chatbot development services</Link> if you need a focused assistant, or <Link href="/services/ai-ml/ai-agent-development" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>AI agent development services</Link> if the task needs multi-step actions. For connecting tools and removing manual handoffs, see <Link href="/services/ai-ml/ai-automation" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>AI automation services</Link>, and for the wider capability set, <Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>AI and machine learning development</Link>. See how a production AI system was built in our <Link href="/case-studies/fintech-trading-platform" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>AI trading platform case study</Link>.
            </p>
          </div>
        </>
      } />
    </>
  );
}
