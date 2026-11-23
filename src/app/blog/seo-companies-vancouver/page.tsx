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

const a = getArticle('seo-companies-vancouver')!;
const URL = `https://mapletechlabs.ca/blog/seo-companies-vancouver`;

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
  alternates: { canonical: canonicalUrl('/blog/seo-companies-vancouver') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'seo-companies-vancouver')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        cityLinks={<LocalServiceLinks citySlug="vancouver" cityName="Vancouver" />}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/locations/seo-company-in-vancouver', label: 'SEO company in Vancouver' },
              { href: '/locations/digital-marketing-agency-in-vancouver', label: 'Digital marketing agency in Vancouver' },
              { href: '/services/digital-marketing/seo-services', label: 'SEO services across Canada' },
              { href: '/services/digital-marketing/local-seo', label: 'Local SEO services' },
            ]}
          />
        }
      />
    </>
  );
}
