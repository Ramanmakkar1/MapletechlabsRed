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

const a = getArticle('ai-development-companies-edmonton')!;
const URL = `https://mapletechlabs.ca/blog/ai-development-companies-edmonton`;

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
  alternates: { canonical: canonicalUrl('/blog/ai-development-companies-edmonton') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'ai-development-companies-edmonton')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        cityLinks={<LocalServiceLinks citySlug="edmonton" cityName="Edmonton" />}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/locations/ai-development-company-in-edmonton', label: 'AI development company in Edmonton' },
              { href: '/services/ai-ml', label: 'AI and machine learning services across Canada' },
              { href: '/services/ai-ml/llm-integration', label: 'LLM integration services' },
              { href: '/locations/software-development-company-in-edmonton', label: 'Software development company in Edmonton' },
            ]}
          />
        }
      />
    </>
  );
}
