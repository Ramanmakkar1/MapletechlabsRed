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

export default function Page() {
  return (
    <>
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
      </section>
      <PageClient />
    </>
  );
}
