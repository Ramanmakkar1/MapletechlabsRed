import type { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { articles } from '@/data/articles';

const TITLE = 'Software Development Blog: Costs, Guides & Rankings';
const DESCRIPTION = 'Software development guides from Mapletech Labs: app and website cost in Canada, top agency rankings by city, AI how-tos and advice on hiring a dev team.';
const LAST_MODIFIED = articles.reduce(
  (latest, a) => (a.dateModified > latest ? a.dateModified : latest),
  '',
);

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: TITLE,
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
      itemListElement: articles.map((a, i) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        aria-labelledby="blog-summary-heading"
        className="cb-container"
        style={{ paddingTop: 'var(--section-y)' }}
      >
        <h2
          id="blog-summary-heading"
          style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
        >
          Software, AI, marketing and cost guides: where to start
        </h2>
        <p style={{ maxWidth: 760, marginBottom: '0.75rem', lineHeight: 1.7 }}>
          Mapletech Labs&apos; blog covers software development, app development, AI, UI/UX design
          and digital marketing for Canadian businesses, with cost guides, city-by-city agency
          rankings and practical how-tos. If you are budgeting, start with our{' '}
          <Link href="/blog/website-cost-canada">website cost in Canada guide</Link> and{' '}
          <Link href="/blog/custom-software-development-cost-canada">
            custom software development cost in Canada guide
          </Link>
          ; if you are hiring, start with the{' '}
          <Link href="/blog/ai-development-companies-canada">
            AI development companies in Canada guide
          </Link>{' '}
          and the{' '}
          <Link href="/blog/digital-marketing-cost-canada">
            digital marketing cost in Canada guide
          </Link>
          .
        </p>

        <nav aria-label="Our services" style={{ margin: '1.25rem 0 0.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0 0 0.5rem' }}>
            Our services
          </h3>
          <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: '1.25rem' }}>
            <li>
              <Link href="/services/software-development">Custom software development services</Link>
            </li>
            <li>
              <Link href="/services/mobile-app-development">Mobile app development services</Link>
            </li>
            <li>
              <Link href="/services/ai-ml">AI and machine learning development</Link>
            </li>
            <li>
              <Link href="/services/product-design">UI/UX and product design services</Link>
            </li>
            <li>
              <Link href="/services/digital-marketing/seo-services">SEO services in Canada</Link>
            </li>
          </ul>
        </nav>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '1.25rem 0 0.5rem' }}>Costs and budgets</h3>
        <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: '1.25rem' }}>
          <li>
            <Link href="/blog/website-cost-canada">Website cost in Canada (2026)</Link>
          </li>
          <li>
            <Link href="/blog/custom-software-development-cost-canada">
              Custom software development cost in Canada
            </Link>
          </li>
          <li>
            <Link href="/blog/app-development-cost-canada">App development cost in Canada</Link>
          </li>
          <li>
            <Link href="/blog/saas-development-cost-canada">SaaS development cost in Canada</Link>
          </li>
          <li>
            <Link href="/blog/ai-development-cost-canada">AI development cost in Canada</Link>
          </li>
          <li>
            <Link href="/blog/software-maintenance-cost-canada">
              Software and app maintenance cost in Canada
            </Link>
          </li>
        </ul>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '1.25rem 0 0.5rem' }}>Software and app development</h3>
        <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: '1.25rem' }}>
          <li>
            <Link href="/blog/top-software-development-companies-canada">
              Top software development companies in Canada
            </Link>
          </li>
          <li>
            <Link href="/blog/software-development-companies-edmonton">
              Software development companies in Edmonton
            </Link>
          </li>
          <li>
            <Link href="/blog/software-development-companies-calgary">
              Software development companies in Calgary
            </Link>
          </li>
          <li>
            <Link href="/blog/custom-software-vs-off-the-shelf">
              Custom software vs off-the-shelf
            </Link>
          </li>
          <li>
            <Link href="/blog/native-vs-cross-platform-vs-pwa">
              Native vs cross-platform vs PWA
            </Link>
          </li>
        </ul>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '1.25rem 0 0.5rem' }}>AI development</h3>
        <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: '1.25rem' }}>
          <li>
            <Link href="/blog/ai-development-companies-canada">
              AI development companies in Canada
            </Link>
          </li>
          <li>
            <Link href="/blog/ai-chatbot-vs-ai-agent-for-business">
              AI chatbot vs AI agent for business
            </Link>
          </li>
          <li>
            <Link href="/blog/what-is-agentic-ai">What is agentic AI?</Link>
          </li>
          <li>
            <Link href="/blog/agentic-ai-in-production">Agentic AI in production</Link>
          </li>
        </ul>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '1.25rem 0 0.5rem' }}>Digital marketing</h3>
        <ul style={{ lineHeight: 1.9, margin: 0, paddingLeft: '1.25rem' }}>
          <li>
            <Link href="/blog/digital-marketing-cost-canada">
              Digital marketing cost in Canada
            </Link>
          </li>
          <li>
            <Link href="/blog/digital-marketing-agencies-canada">
              Digital marketing agencies in Canada
            </Link>
          </li>
          <li>
            <Link href="/blog/top-seo-companies-canada">Top SEO companies in Canada</Link>
          </li>
          <li>
            <Link href="/blog/seo-companies-edmonton">SEO companies in Edmonton</Link>
          </li>
        </ul>
      </section>
      <nav
        aria-label="Related blog topics"
        className="cb-container"
        style={{ paddingTop: 'var(--section-y)' }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          Related topics
        </h2>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem 1.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link href="/blog/software-development-companies-edmonton">
              Software development companies in Edmonton
            </Link>
          </li>
          <li>
            <Link href="/blog/app-development-cost-canada">
              App development cost in Canada
            </Link>
          </li>
          <li>
            <Link href="/blog/ai-development-companies-edmonton">
              AI development companies in Edmonton
            </Link>
          </li>
          <li>
            <Link href="/blog/website-cost-canada">Website cost in Canada</Link>
          </li>
          <li>
            <Link href="/blog/top-seo-companies-canada">
              Top SEO companies in Canada
            </Link>
          </li>
          <li>
            <Link href="/blog/custom-software-vs-off-the-shelf">
              Custom software vs off-the-shelf
            </Link>
          </li>
        </ul>
      </nav>
      <PageClient />
    </>
  );
}
