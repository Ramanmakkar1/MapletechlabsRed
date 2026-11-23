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

const a = getArticle('seo-companies-calgary')!;
const URL = `https://mapletechlabs.ca/blog/seo-companies-calgary`;

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
  alternates: { canonical: canonicalUrl('/blog/seo-companies-calgary') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'seo-companies-calgary')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        cityLinks={<LocalServiceLinks citySlug="calgary" cityName="Calgary" />}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/locations/seo-company-in-calgary', label: 'SEO company in Calgary' },
              { href: '/locations/digital-marketing-agency-in-calgary', label: 'Digital marketing agency in Calgary' },
              { href: '/services/digital-marketing/seo-services', label: 'SEO services across Canada' },
              { href: '/services/digital-marketing/local-seo', label: 'Local SEO services' },
            ]}
          />
        }
      />
    </>
  );
}
