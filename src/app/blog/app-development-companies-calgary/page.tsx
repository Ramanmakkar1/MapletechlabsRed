import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import LocalServiceLinks from '@/components/LocalServiceLinks';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('app-development-companies-calgary')!;
const URL = `https://mapletechlabs.ca/blog/app-development-companies-calgary`;

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
  alternates: { canonical: canonicalUrl('/blog/app-development-companies-calgary') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'app-development-companies-calgary')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate a={a} related={getRelatedArticles(a.slug)} cityLinks={<LocalServiceLinks citySlug="calgary" cityName="Calgary" />} extraBlock={
        <p style={{ marginTop: 24, lineHeight: 1.7 }}>
          Need a team to build it? See our{' '}
          <Link href="/services/mobile-app-development/calgary">mobile app development in Calgary</Link>{' '}
          page for iOS, Android and Flutter builds, our process, CAD pricing and case studies.
        </p>
      } />
    </>
  );
}
