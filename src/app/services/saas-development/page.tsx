import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Development Services in Canada | Mapletech Labs',
  description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture & billing systems for startups in Canada. Book a free strategy call.',
  openGraph: {
    title: 'SaaS Development Services in Canada | Mapletech Labs',
    description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture & billing systems for startups in Canada.',
    url: 'https://mapletechlabs.ca/services/saas-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/saas-development',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tech stack do you use for SaaS products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our default stack is Next.js (frontend and API routes), PostgreSQL (primary database), Redis (caching and queues), Stripe (billing), Auth.js or Clerk (authentication) and AWS or Vercel (infrastructure). We adapt based on your requirements and existing technology.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build an MVP in 8 weeks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for a well-scoped core feature set. The 8-week MVP timeline applies when discovery is complete, design is approved and the scope is disciplined. We will tell you upfront if your requirements require more time \u2014 we do not over-promise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle multi-tenancy from day one, or can I add it later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multi-tenancy is significantly cheaper to build correctly from the start than to retrofit. We architect data isolation, org management and tenant-scoped permissions at the schema level from day one, which protects you as you scale into enterprise customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you help us after launch, or is it a handoff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer ongoing engineering partnerships \u2014 retainer-based or project-by-project. Many clients engage us for 6\u201318 months post-launch for feature development, infrastructure scaling and technical leadership ahead of fundraising rounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you approach SaaS pricing and billing architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We start with your go-to-market model and design the billing architecture to match \u2014 free tier, trial-to-paid, per-seat, usage-based or hybrid. We configure Stripe with your exact pricing logic, automate invoicing and build the self-serve upgrade/downgrade flows your customers expect.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS Development Services',
  description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture & billing systems for startups in Canada.',
  provider: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/saas-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'SaaS Development', item: 'https://mapletechlabs.ca/services/saas-development' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
