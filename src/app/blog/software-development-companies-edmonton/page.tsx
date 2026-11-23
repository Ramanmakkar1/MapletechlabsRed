import type { Metadata } from 'next';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import LocalServiceLinks from '@/components/LocalServiceLinks';
import RelatedServices from '@/components/RelatedServices';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('software-development-companies-edmonton')!;
const URL = `https://mapletechlabs.ca/blog/software-development-companies-edmonton`;

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
  alternates: { canonical: canonicalUrl('/blog/software-development-companies-edmonton') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'software-development-companies-edmonton')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        cityLinks={<LocalServiceLinks citySlug="edmonton" cityName="Edmonton" />}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/locations/software-development-company-in-edmonton', label: 'Custom software development company in Edmonton' },
              { href: '/services/software-development', label: 'Custom software development services' },
              { href: '/locations/healthcare-software-development-company-in-edmonton', label: 'Healthcare software development in Edmonton' },
              { href: '/locations/app-development-company-in-edmonton', label: 'App development company in Edmonton' },
            ]}
          />
        }
      />
    </>
  );
}
