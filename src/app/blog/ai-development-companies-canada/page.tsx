import { BLOG_AUTHOR, BLOG_IMAGE } from '@/lib/seo/business';
import type { Metadata } from 'next';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import RelatedServices from '@/components/RelatedServices';
import { notFound } from 'next/navigation';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
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
  publisher: { '@type': 'Organization', '@id': 'https://mapletechlabs.ca/#organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca', logo: { '@type': 'ImageObject', url: 'https://mapletechlabs.ca/logo.png' } },
  url: URL,
  mainEntityOfPage: URL,
};

export default function Page() {
  if (!article) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={getBlogBreadcrumbs(article.title, 'ai-development-companies-canada')} />
      <FaqSchema faqs={article.faqs} />
      <ArticleTemplate
        a={article}
        related={getRelatedArticles(article.slug)}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/services/ai-ml', label: 'AI and machine learning services across Canada' },
              { href: '/services/ai-ml/ai-chatbots', label: 'AI chatbot development services' },
              { href: '/services/ai-ml/llm-integration', label: 'LLM integration services' },
              { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide for Canada' },
            ]}
          />
        }
      />
    </>
  );
}
