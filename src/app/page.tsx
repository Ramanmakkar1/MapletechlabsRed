import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { canonicalPath } from '@/lib/seo/canonical';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';

// Below the fold: loaded lazily so the hero paints first.
const WhatWeBuild = dynamic(() => import('@/components/home/WhatWeBuild'));
const EditorialBand = dynamic(() => import('@/components/home/EditorialBand'));
const FeaturedWork = dynamic(() => import('@/components/home/FeaturedWork'));
const Industries = dynamic(() => import('@/components/home/Industries'));
const Process = dynamic(() => import('@/components/home/Process'));
const AiPractice = dynamic(() => import('@/components/home/AiPractice'));
const WhyUs = dynamic(() => import('@/components/home/WhyUs'));
const TechStack = dynamic(() => import('@/components/home/TechStack'));
const Credentials = dynamic(() => import('@/components/home/Credentials'));
const Testimonial = dynamic(() => import('@/components/home/Testimonial'));
const FaqSplit = dynamic(() => import('@/components/home/FaqSplit'));
const FinalCta = dynamic(() => import('@/components/home/FinalCta'));
const FAQSchema = dynamic(() => import('@/components/FAQSchema'));
const Footer = dynamic(() => import('@/components/Footer'));
const ScrollUI = dynamic(() => import('@/components/ScrollUI'));
const StickyCTA = dynamic(() => import('@/components/StickyCTA'));

export const metadata: Metadata = {
  // `absolute`: the layout's "%s | Mapletech Labs" template would double the brand.
  title: { absolute: 'Mapletech Labs | Custom Software Development Company' },
  description:
    'Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Founded by Raman Makkar in Edmonton — ruling across Canada.',
  alternates: { canonical: canonicalPath('/') },
};

/* One continuous story rather than a stack of card grids: the rhythm
   alternates split / grid / full-bleed photograph / timeline / ink band
   so no two neighbouring sections share a shape. */
export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollUI />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <WhatWeBuild />
        <EditorialBand />
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
