import { BLOG_AUTHOR } from '@/lib/seo/business';
import { FaqSchema } from '@/components/ServiceSchema';
import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getBlogBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Freelancer vs Agency vs In-House in Canada';
const DESCRIPTION =
  'Freelancer vs software agency vs in-house team in Canada: compare cost, speed, risk, team depth, code ownership and post-launch support before you hire.';
const SLUG = 'freelancer-vs-agency-vs-in-house-canada';
const DATE = '2026-11-07';

/** 40-60 word plain-language answer, rendered in the visible summary box and mirrored in schema. */
const SHORT_ANSWER =
  'There is no single right choice. Freelancers tend to fit small, well-defined projects, agencies fit products that need a full team, and in-house teams fit continuous, long-term development. Match the model to your budget, timeline, and how much ongoing work you have.';

const FAQS = [
  {
    q: 'Should I hire a freelancer, an agency, or an in-house team?',
    a:
      'It depends on your budget, timeline, and how much ongoing development you need. Freelancers tend to fit small, well-defined projects; agencies fit products that need a full team; in-house teams fit continuous, long-term work. Match the model to the project rather than forcing every project into one model.',
  },
  {
    q: 'How do the costs compare in Canada?',
    a:
      'Freelancers usually bill by the hour, agencies tend to quote a fixed project price or a monthly retainer, and in-house means salary plus benefits, equipment, and overhead. The cheapest hourly rate is not necessarily the lowest total cost once rework, management, and post-launch support are factored in.',
  },
  {
    q: 'Who owns the code and intellectual property?',
    a:
      'You should. A freelancer or agency contract must explicitly assign the code and IP to you once you have paid, and you should receive repository access and deployment credentials. With an in-house team, employment agreements normally assign IP to the employer.',
  },
  {
    q: 'What happens after the product launches?',
    a:
      'Software needs ongoing maintenance, security updates, and bug fixes. Freelancers may offer limited support, agencies often sell maintenance packages or retainers, and an in-house team owns updates directly. Decide who will support the product before you sign.',
  },
  {
    q: 'Is a freelancer cheaper than an agency?',
    a:
      'A freelancer usually has a lower hourly rate, but the total cost can be higher if the work needs design, QA, project management, or rework. An agency costs more per hour but brings a full team and a defined process. Compare the total cost to launch and support, not just the rate.',
  },
  {
    q: 'How long does it take to hire an in-house developer in Canada?',
    a:
      'Hiring an in-house developer commonly takes several weeks to a few months, including posting, interviews, offers, and notice periods. If you need to start sooner, a freelancer or agency can begin once the scope is agreed.',
  },
  {
    q: 'Can Mapletech Labs help me choose?',
    a:
      'Yes. We can review your project scope and help you compare freelancer, agency, and in-house options for your situation. See our pricing page or book a consultation to discuss your project.',
  },
];

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: `${TITLE} | Mapletech Labs`,
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
  description: `${SHORT_ANSWER} ${DESCRIPTION}`,
  datePublished: DATE,
  dateModified: DATE,
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

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getBlogBreadcrumbs(TITLE, SLUG)} />
      <FaqSchema faqs={FAQS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient answer={SHORT_ANSWER} faqs={FAQS} />
    </>
  );
}
