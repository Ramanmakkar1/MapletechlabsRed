import type { Metadata } from 'next';
import Link from 'next/link';
import nextDynamic from 'next/dynamic';
import { canonicalPath } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';

// Below the fold: loaded lazily so the hero paints first.
const WhatWeBuild = nextDynamic(() => import('@/components/home/WhatWeBuild'));
const EditorialBand = nextDynamic(() => import('@/components/home/EditorialBand'));
const EssentialGuides = nextDynamic(() => import('@/components/home/EssentialGuides'));
const FeaturedWork = nextDynamic(() => import('@/components/home/FeaturedWork'));
const Industries = nextDynamic(() => import('@/components/home/Industries'));
const Process = nextDynamic(() => import('@/components/home/Process'));
const AiPractice = nextDynamic(() => import('@/components/home/AiPractice'));
const WhyUs = nextDynamic(() => import('@/components/home/WhyUs'));
const TechStack = nextDynamic(() => import('@/components/home/TechStack'));
const Credentials = nextDynamic(() => import('@/components/home/Credentials'));
const Testimonial = nextDynamic(() => import('@/components/home/Testimonial'));
const FaqSplit = nextDynamic(() => import('@/components/home/FaqSplit'));
const FinalCta = nextDynamic(() => import('@/components/home/FinalCta'));
const FAQSchema = nextDynamic(() => import('@/components/FAQSchema'));
const Footer = nextDynamic(() => import('@/components/Footer'));
const ScrollUI = nextDynamic(() => import('@/components/ScrollUI'));
const StickyCTA = nextDynamic(() => import('@/components/StickyCTA'));

export const dynamic = 'force-static';

const TITLE = 'Custom Software Development Edmonton';
const DESCRIPTION =
  'Mapletech Labs delivers custom software development in Edmonton, including web and mobile apps and AI systems for Canadian teams. Book a free call today.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: seoTitle(TITLE).absolute,
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca',
    type: 'website',
    siteName: 'Mapletech Labs',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Mapletech Labs - Custom Software Development Company',
      },
    ],
  },
  alternates: { canonical: canonicalPath('/') },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://mapletechlabs.ca/#webpage',
  url: 'https://mapletechlabs.ca/',
  name: seoTitle(TITLE).absolute,
  description: metadata.description,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://mapletechlabs.ca/#website',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca/',
  },
  about: { '@id': 'https://mapletechlabs.ca/#organization' },
};

/* One continuous story rather than a stack of card grids: the rhythm
   alternates split / grid / full-bleed photograph / timeline / ink band
   so no two neighbouring sections share a shape. */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Navbar />
      <ScrollUI />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <WhatWeBuild />
        <p className="cb-container" style={{ fontSize: 14, color: 'var(--muted)' }}>
          Planning a project in Alberta? Talk to our{' '}
          <Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>custom software development company in Edmonton</Link>.
          <br />
          <Link href="/locations/web-development-company-in-edmonton" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>Web development company in Edmonton</Link>.
        </p>
        <p className="cb-container" style={{ fontSize: 15, color: 'var(--body)', maxWidth: '70ch', margin: '0 auto 48px' }}>
          Custom software development in Edmonton means a local team that designs and builds web platforms, mobile apps and AI systems around your business, from requirements to launch and beyond. Explore our{' '}
          <Link href="/locations/web-development-company-in-edmonton" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>Edmonton web development services</Link>{' '}
          and{' '}
          <Link href="/services/software-development" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>custom software development services</Link>{' '}
          to see how we work with Canadian teams.
        </p>
        <p className="cb-container" style={{ fontSize: 14, color: 'var(--muted)' }}>
          Learn more about{' '}
          <Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>custom software development in Edmonton</Link>{' '}
          and{' '}
          <Link href="/services" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>our software development services</Link>.
        </p>
        <ul className="cb-container" style={{ fontSize: 14, color: 'var(--muted)', margin: '0 auto 48px', paddingLeft: 20 }}>
          <li><Link href="/services/web-development" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>Custom software development</Link></li>
          <li><Link href="/services/product-design" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>UI/UX design</Link></li>
          <li><Link href="/services/ai-ml" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>AI development</Link></li>
          <li><Link href="/locations/web-development-company-in-edmonton" style={{ color: 'var(--body)', borderBottom: '1px solid var(--line-strong)' }}>Edmonton software development</Link></li>
        </ul>
        <EditorialBand />
        <EssentialGuides />
        <FeaturedWork />
        <Industries />
        <Process />
        <AiPractice />
        <WhyUs />
        <TechStack />
        <Credentials />
        <Testimonial />
        <FaqSplit />
        <FAQSchema />
        <FinalCta />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
