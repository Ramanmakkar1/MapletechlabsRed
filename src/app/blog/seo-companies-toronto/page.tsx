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

const a = getArticle('seo-companies-toronto')!;
const URL = `https://mapletechlabs.ca/blog/seo-companies-toronto`;

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
  alternates: { canonical: canonicalUrl('/blog/seo-companies-toronto') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'seo-companies-toronto')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        cityLinks={<LocalServiceLinks citySlug="toronto" cityName="Toronto" />}
        relatedServices={
          <RelatedServices
            links={[
              { href: '/locations/seo-company-in-toronto', label: 'SEO company in Toronto' },
              { href: '/locations/digital-marketing-agency-in-toronto', label: 'Digital marketing agency in Toronto' },
              { href: '/services/digital-marketing/seo-services', label: 'SEO services across Canada' },
              { href: '/services/digital-marketing/local-seo', label: 'Local SEO services' },
            ]}
          />
        }
      />
    </>
  );
}
