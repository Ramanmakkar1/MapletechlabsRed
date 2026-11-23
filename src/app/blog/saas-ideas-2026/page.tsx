import type { Metadata } from 'next';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import { getArticle } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('saas-ideas-2026')!;
const URL = `https://mapletechlabs.ca/blog/saas-ideas-2026`;

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
  alternates: { canonical: canonicalUrl('/blog/saas-ideas-2026') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'saas-ideas-2026')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate a={a} />
    </>
  );
}
