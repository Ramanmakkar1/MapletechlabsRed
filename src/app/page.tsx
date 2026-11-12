import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import { canonicalPath } from '@/lib/seo/canonical';
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

export const metadata: Metadata = {
  // `absolute`: the layout's "%s | Mapletech Labs" template would double the brand.
  title: { absolute: 'Custom Software Development Company in Canada | Mapletech' },
  description:
    'Mapletech Labs builds custom software and apps for Canadian startups and enterprises. Get a fixed-price plan and launch in 8–12 weeks. Book a free call.',
  openGraph: {
    title: 'Custom Software Development Company in Canada | Mapletech',
    description:
      'Mapletech Labs builds custom software and apps for Canadian startups and enterprises. Get a fixed-price plan and launch in 8–12 weeks. Book a free call.',
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
  name: 'Custom Software Development Company in Canada | Mapletech',
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
