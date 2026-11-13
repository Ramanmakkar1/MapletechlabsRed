import { BLOG_AUTHOR } from '@/lib/seo/business';
import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleTemplate from '@/components/blog/ArticleTemplate';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const a = getArticle('ui-ux-design-cost-canada')!;
const URL = `https://mapletechlabs.ca/blog/ui-ux-design-cost-canada`;

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
  alternates: { canonical: canonicalUrl('/blog/ui-ux-design-cost-canada') },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: a.title,
  description: a.metaDescription,
  datePublished: a.date,
  dateModified: a.dateModified,
  author: BLOG_AUTHOR,
  publisher: { '@type': 'Organization', '@id': 'https://mapletechlabs.ca/#organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca', logo: { '@type': 'ImageObject', url: 'https://mapletechlabs.ca/logo.png' } },
  url: URL,
  mainEntityOfPage: URL,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={getBlogBreadcrumbs(a.title, 'ui-ux-design-cost-canada')} />
      <FaqSchema faqs={a.faqs} />
      <ArticleTemplate
        a={a}
        related={getRelatedArticles(a.slug)}
        extraBlock={
          <div className="reveal" style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none', color: 'var(--faint)', marginBottom: 16 }}>Related services</p>
            <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8 }}>
              Need a team to design it? Explore our <Link href="/services/product-design/ui-ux-strategy" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>UI/UX strategy services in Canada</Link>.
            </p>
            <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginTop: 12 }}>
              Want a local team? See our UI/UX design company pages for <Link href="/locations/ui-ux-design-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Edmonton</Link>, <Link href="/locations/ui-ux-design-company-in-calgary" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Calgary</Link>, <Link href="/locations/ui-ux-design-company-in-toronto" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Toronto</Link> and <Link href="/locations/ui-ux-design-company-in-vancouver" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Vancouver</Link>, or our full <Link href="/services/product-design" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>UI/UX and product design services</Link>.
            </p>
          </div>
        }
      />
    </>
  );
}
