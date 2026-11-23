import type { Metadata } from 'next';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import RelatedServices from '@/components/RelatedServices';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('healthcare-software-development-canada')!;
const URL = 'https://mapletechlabs.ca/blog/healthcare-software-development-canada';

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
  alternates: { canonical: canonicalUrl('/blog/healthcare-software-development-canada') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'healthcare-software-development-canada')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/services/software-development/healthcare-software', label: 'Healthcare software development services' },
              { href: '/industries/healthcare', label: 'Healthcare software development in Canada' },
              { href: '/case-studies/healthcare-telehealth', label: 'Healthcare telehealth platform case study' },
              { href: '/locations/healthcare-software-development-company-in-edmonton', label: 'Healthcare software development company in Edmonton' },
            ]}
          />
        }
      />
    </>
  );
}
