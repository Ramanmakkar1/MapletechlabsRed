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

const a = getArticle('digital-marketing-agencies-edmonton')!;
const URL = `https://mapletechlabs.ca/blog/digital-marketing-agencies-edmonton`;

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
  alternates: { canonical: canonicalUrl('/blog/digital-marketing-agencies-edmonton') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'digital-marketing-agencies-edmonton')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        cityLinks={<LocalServiceLinks citySlug="edmonton" cityName="Edmonton" />}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/locations/digital-marketing-agency-in-edmonton', label: 'Digital marketing agency in Edmonton' },
              { href: '/locations/seo-company-in-edmonton', label: 'SEO company in Edmonton' },
              { href: '/services/digital-marketing', label: 'Digital marketing services' },
              { href: '/services/digital-marketing/google-ads-ppc', label: 'Google Ads management' },
            ]}
          />
        }
      />
    </>
  );
}
