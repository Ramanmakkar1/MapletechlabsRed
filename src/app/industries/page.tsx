import type { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

export const dynamic = 'force-static';

const TITLE = 'Software Development by Industry in Canada';
const DESCRIPTION = 'Specialized software development for FinTech, healthcare, e-commerce, enterprise, EdTech and logistics. Deep domain expertise in every vertical we serve.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/industries',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries'),
  },
};

const industriesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl('/industries')}#collection`,
      url: canonicalUrl('/industries'),
      name: TITLE,
      description: DESCRIPTION,
      about: { '@id': 'https://mapletechlabs.ca/#organization' },
      mainEntity: { '@id': `${canonicalUrl('/industries')}#list` },
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl('/industries')}#list`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'FinTech and banking', url: canonicalUrl('/industries/fintech') },
        { '@type': 'ListItem', position: 2, name: 'Healthcare', url: canonicalUrl('/industries/healthcare') },
        { '@type': 'ListItem', position: 3, name: 'E-commerce and retail', url: canonicalUrl('/industries/ecommerce') },
        { '@type': 'ListItem', position: 4, name: 'Enterprise', url: canonicalUrl('/industries/enterprise') },
        { '@type': 'ListItem', position: 5, name: 'Logistics and supply chain', url: canonicalUrl('/industries/logistics') },
        { '@type': 'ListItem', position: 6, name: 'EdTech', url: canonicalUrl('/industries/edtech') },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'Industries', item: canonicalUrl('/industries') },
        ]}
      />
      <section className="cb-container" style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <p style={{ maxWidth: '70ch', lineHeight: 1.7 }}>
          Mapletech Labs builds custom software for six industries in Canada: FinTech and banking,
          healthcare, e-commerce and retail, enterprise, logistics and supply chain, and EdTech.
          Each industry page explains what we build, the regulations and standards we design to, and
          the work we have shipped in that vertical.
        </p>
        <ul style={{ maxWidth: '70ch', lineHeight: 1.9 }}>
          <li>
            <Link href="/industries/fintech">FinTech and banking software development</Link> &mdash;
            payments, trading platforms and PCI DSS compliance.
          </li>
          <li>
            <Link href="/industries/healthcare">Healthcare and medical software development</Link>{' '}
            &mdash; patient portals, telemedicine and PHIPA compliance.
          </li>
          <li>
            <Link href="/industries/ecommerce">E-commerce and retail software development</Link>{' '}
            &mdash; storefronts, checkout and inventory systems.
          </li>
          <li>
            <Link href="/industries/enterprise">Enterprise software development</Link> &mdash; ERP,
            supply chain and fleet tracking at scale.
          </li>
          <li>
            <Link href="/industries/logistics">Logistics and supply chain software development</Link>{' '}
            &mdash; route optimisation, warehouse automation and IoT.
          </li>
          <li>
            <Link href="/industries/edtech">EdTech and SaaS development</Link> &mdash; learning
            management systems and subscription platforms.
          </li>
        </ul>
        <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, margin: '2.5rem 0 1rem' }}>
          The software services behind each industry
        </h2>
        <p style={{ maxWidth: '70ch', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Every vertical above is delivered with the same core engineering practice. These are the
          service pages behind the industry work, so you can see exactly what we build and how.
        </p>
        <ul style={{ maxWidth: '70ch', lineHeight: 1.9 }}>
          <li>
            <Link href="/services/software-development">Custom software development</Link> &mdash;
            the systems, portals and platforms we build for regulated industries.
          </li>
          <li>
            <Link href="/services/saas-development">SaaS development</Link> &mdash; multi-tenant
            subscription platforms for EdTech, fintech and B2B clients.
          </li>
          <li>
            <Link href="/services/web-development">Custom web development</Link> &mdash; storefronts,
            portals and web apps built for conversion and scale.
          </li>
          <li>
            <Link href="/services/mobile-app-development">Mobile app development</Link> &mdash;
            iOS and Android apps for patient, driver and customer-facing teams.
          </li>
          <li>
            <Link href="/services/ai-ml">AI and ML development</Link> &mdash; predictive analytics,
            automation and LLM integration across verticals.
          </li>
          <li>
            <Link href="/services/product-design">UI/UX design</Link> &mdash; interface and
            experience design that makes complex systems usable.
          </li>
        </ul>
      </section>
      <PageClient />
    </>
  );
}
