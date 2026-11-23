import type { Metadata } from 'next';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('nrc-irap-funding-software-canada')!;
const URL = `https://mapletechlabs.ca/blog/nrc-irap-funding-software-canada`;

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
  alternates: { canonical: canonicalUrl('/blog/nrc-irap-funding-software-canada') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'nrc-irap-funding-software-canada')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate a={a} related={getRelatedArticles(a.slug)} />
    </>
  );
}
