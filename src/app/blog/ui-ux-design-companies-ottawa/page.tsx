import type { Metadata } from 'next';
import { seoDescription } from '@/lib/seo/description';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import LocalServiceLinks from '@/components/LocalServiceLinks';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';

const a = getArticle('ui-ux-design-companies-ottawa')!;
const URL = `https://mapletechlabs.ca/blog/ui-ux-design-companies-ottawa`;

export const metadata: Metadata = {
  title: seoTitle(a.metaTitle),
  description: a.metaDescription,
  openGraph: {
    title: ogTitle(a.metaTitle),
    description: seoDescription(a.metaDescription),
    type: 'article',
    publishedTime: a.date,
    modifiedTime: a.dateModified,
    url: URL,
  },
  alternates: { canonical: canonicalUrl('/blog/ui-ux-design-companies-ottawa') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'ui-ux-design-companies-ottawa')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate a={a} related={getRelatedArticles(a.slug)} cityLinks={<LocalServiceLinks citySlug="ottawa" cityName="Ottawa" />} />
    </>
  );
}
