import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { articles } from '@/data/articles';
import { isCityListicleSlug } from '@/lib/seo/listicles';
import { isIndexableSitemapPath } from '@/lib/seo/indexability';

const TITLE = 'Software, AI & App Development Blog | Mapletech Labs';
const DESCRIPTION = 'Guides on software, app and AI development costs, process and results in Canada. Learn what projects cost, how we build them, and what to expect.';
const LAST_MODIFIED = articles.reduce(
  (latest, a) => (a.dateModified > latest ? a.dateModified : latest),
  '',
);

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/blog',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/blog'),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `${canonicalUrl('/blog')}#blog`,
      url: canonicalUrl('/blog'),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: LAST_MODIFIED,
      publisher: { '@id': 'https://mapletechlabs.ca/#organization' },
      inLanguage: 'en-CA',
      mainEntity: { '@id': `${canonicalUrl('/blog')}#list` },
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl('/blog')}#list`,
      itemListElement: articles
        .filter((a) => !isCityListicleSlug(a.slug) && isIndexableSitemapPath(`/blog/${a.slug}`))
        .map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: a.title,
          url: canonicalUrl(`/blog/${a.slug}`),
        })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: canonicalUrl('/blog') },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }}
      />
      <PageClient />
    </>
  );
}
