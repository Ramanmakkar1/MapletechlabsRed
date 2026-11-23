import { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { work } from '@/data/work';

const TITLE = 'Software Development Case Studies in Canada';
const DESCRIPTION = 'See how Mapletech Labs has helped Canadian businesses build scalable software. Real results from fintech, healthcare, e-commerce, and logistics projects.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/case-studies',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/case-studies') },
};

const caseStudyMeta: Record<string, { outcome: string; serviceHref: string; serviceLabel: string }> = {
  'fintech-trading-platform': { outcome: '75K+ daily transactions at 99.99% uptime', serviceHref: '/services/software-development', serviceLabel: 'custom software development' },
  'healthcare-telehealth': { outcome: '450K+ patient records with 40% less admin', serviceHref: '/services/ai-ml', serviceLabel: 'AI development' },
  'ecommerce-platform': { outcome: 'checkout conversion up from 2.1% to 3.8%', serviceHref: '/services/web-development/ecommerce-systems', serviceLabel: 'ecommerce systems development' },
  'logistics-platform': { outcome: '25% lower fuel costs, $180K saved a year', serviceHref: '/services/web-development/enterprise-portals', serviceLabel: 'enterprise portal development' },
  'payments-api-platform': { outcome: '12M+ monthly transactions, PCI DSS compliant', serviceHref: '/services/web-development/api-backend', serviceLabel: 'API and backend development' },
  'real-estate-portal': { outcome: '850K+ active listings with ML recommendations', serviceHref: '/services/web-development', serviceLabel: 'web development' },
};

const caseStudies = work.map(w => ({
  slug: w.slug,
  name: w.title,
  label: w.title,
  outcome: caseStudyMeta[w.slug]?.outcome ?? w.metrics.map(m => `${m.value} ${m.label}`).join(', '),
  serviceHref: caseStudyMeta[w.slug]?.serviceHref ?? '/services/software-development',
  serviceLabel: caseStudyMeta[w.slug]?.serviceLabel ?? 'software development',
}));

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl('/case-studies')}#collection`,
      url: canonicalUrl('/case-studies'),
      name: TITLE,
      description: DESCRIPTION,
      about: { '@id': 'https://mapletechlabs.ca/#organization' },
      mainEntity: { '@id': `${canonicalUrl('/case-studies')}#list` },
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl('/case-studies')}#list`,
      itemListElement: caseStudies.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        url: canonicalUrl(`/case-studies/${c.slug}`),
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: canonicalUrl('/case-studies') },
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
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <p className="max-w-3xl text-base leading-7 text-slate-700">
          Mapletech Labs has delivered software that runs in production for Canadian businesses since
          2018 &mdash; 500+ projects for 150+ clients across 12 cities. The results include a trading
          platform handling 75K+ transactions a day at 99.99% uptime, checkout conversion lifted from
          2.1% to 3.8%, and fleet fuel costs cut by 25% ($180K a year).
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          Mapletech Labs case studies are real Canadian software projects &mdash; each one reports the
          outcome the client actually measured, from sub-50ms trade execution to a 3.8% checkout
          conversion rate. Together they show our{' '}
          <Link href="/services/software-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
            custom software development
          </Link>
          ,{' '}
          <Link href="/services/web-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
            web development
          </Link>
          , and{' '}
          <Link href="/services/ai-ml" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
            AI development
          </Link>{' '}
          services delivering in production across fintech, healthcare, e-commerce, logistics, payments,
          and real estate.
        </p>
        <nav aria-label="Case studies" className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Our case studies</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {caseStudies.map(c => (
              <li key={c.slug}>
                <Link
                  href={`/case-studies/${c.slug}`}
                  title={c.name}
                  className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  {c.label} case study: {c.outcome}
                </Link>
                {' '}
                <Link
                  href={c.serviceHref}
                  className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  Our {c.serviceLabel} services
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services behind these results" className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Services behind these results</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/services/web-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                custom software development and web development
              </Link>
            </li>
            <li>
              <Link href="/services/ai-ml" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                AI development
              </Link>
            </li>
            <li>
              <Link href="/services/product-design" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                UI/UX design
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Related services" className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Related services</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/services/software-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Custom software development services
              </Link>
            </li>
            <li>
              <Link href="/services/web-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Web development services
              </Link>
            </li>
            <li>
              <Link href="/services/mobile-app-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Mobile app development services
              </Link>
            </li>
            <li>
              <Link href="/services/ai-ml" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                AI development services
              </Link>
            </li>
            <li>
              <Link href="/services/saas-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                SaaS development services
              </Link>
            </li>
            <li>
              <Link href="/services/product-design" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Product design services
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Industries" className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Industries we build for</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/industries/fintech" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                FinTech & Banking
              </Link>
            </li>
            <li>
              <Link href="/industries/healthcare" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Healthcare & Medical
              </Link>
            </li>
            <li>
              <Link href="/industries/ecommerce" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                E-commerce & Retail
              </Link>
            </li>
            <li>
              <Link href="/industries/enterprise" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Enterprise & Logistics
              </Link>
            </li>
            <li>
              <Link href="/industries/logistics" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Logistics & Supply Chain
              </Link>
            </li>
            <li>
              <Link href="/industries/edtech" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                EdTech & SaaS
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Services these projects prove" className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Services these projects prove</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/services/software-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                Custom software development services
              </Link>
            </li>
            <li>
              <Link href="/services/mobile-app-development" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                App development services
              </Link>
            </li>
            <li>
              <Link href="/services/ai-ml" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                AI development services
              </Link>
            </li>
            <li>
              <Link href="/services/product-design" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                UI/UX design services
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <PageClient />
    </>
  );
}
