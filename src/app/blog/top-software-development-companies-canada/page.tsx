import { BLOG_AUTHOR } from '@/lib/seo/business';
import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Top 10 Software Development Companies in Canada (2026)';
const DESCRIPTION = 'Compare top software development companies in Canada for 2026 by specialization, discovery, delivery, ownership, support and budget fit, with a checklist.';
const SLUG = 'top-software-development-companies-canada';
const DATE = '2026-02-10';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    publishedTime: DATE,
    url: `https://mapletechlabs.ca/blog/${SLUG}`,
  },
  alternates: {
    canonical: canonicalUrl(`/blog/${SLUG}`),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: DATE,
  dateModified: '2026-11-11',
  author: BLOG_AUTHOR,
  publisher: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mapletechlabs.ca/logo.png',
    },
  },
  url: `https://mapletechlabs.ca/blog/${SLUG}`,
  mainEntityOfPage: `https://mapletechlabs.ca/blog/${SLUG}`,
};

const FAQS = [
  {
    q: 'How do I compare software development companies in Canada?',
    a: 'Start with six criteria: specialization, discovery, delivery process, ownership and hand-off, support, and budget fit. Ask each shortlisted company for recent work in your sector, a written scope, a demo schedule, and the exact terms for code ownership and post-launch support.',
  },
  {
    q: 'What should I ask about code ownership and hand-off?',
    a: 'Ask who owns the source code, designs, cloud accounts, and third-party subscriptions, and when that ownership transfers. A good partner provides written IP assignment, full repository access, technical documentation, and a hand-off plan before the project starts.',
  },
  {
    q: 'How do I judge whether a company fits my budget?',
    a: 'Compare what each quote includes, not just the total. Ask whether discovery, design, testing, deployment, and post-launch support are included, how change requests are priced, and whether work is billed by fixed milestone or by time and materials.',
  },
  {
    q: 'Should I choose a local Canadian company or an offshore team?',
    a: 'Location matters most when you need overlapping time zones, in-person workshops, or Canadian procurement and privacy requirements. Otherwise, judge every company on the same six criteria and ask for references you can contact.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(TITLE, SLUG)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageClient faqs={FAQS} />
    </>
  );
}
