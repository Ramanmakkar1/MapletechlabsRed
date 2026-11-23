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

const a = getArticle('ui-ux-design-companies-vancouver')!;
const URL = `https://mapletechlabs.ca/blog/ui-ux-design-companies-vancouver`;

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
  alternates: { canonical: canonicalUrl('/blog/ui-ux-design-companies-vancouver') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'ui-ux-design-companies-vancouver')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        cityLinks={<LocalServiceLinks citySlug="vancouver" cityName="Vancouver" />}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/locations/ui-ux-design-company-in-vancouver', label: 'UI/UX design company in Vancouver' },
              { href: '/services/product-design', label: 'UI/UX and product design services' },
              { href: '/services/product-design/ux-audit', label: 'UX audit services' },
              { href: '/locations/software-development-company-in-vancouver', label: 'Software development company in Vancouver' },
            ]}
          />
        }
      />
    </>
  );
}
