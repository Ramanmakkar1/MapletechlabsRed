import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { canonicalPath } from '@/lib/seo/canonical';
import Navbar from '@/components/Navbar';
import HeroAppi from '@/components/home/HeroAppi';
import ServiceStair from '@/components/home/ServiceStair';

// Below the fold: loaded lazily so the hero paints first.
const WorkTabs = dynamic(() => import('@/components/home/WorkTabs'));
const CtaCard = dynamic(() => import('@/components/home/CtaCard'));
const StatsMarquee = dynamic(() => import('@/components/home/StatsMarquee'));
const AiLab = dynamic(() => import('@/components/home/AiLab'));
const TestimonialsReel = dynamic(() => import('@/components/home/TestimonialsReel'));
const LogoGrid = dynamic(() => import('@/components/home/LogoGrid'));
const ExpertiseGrid = dynamic(() => import('@/components/home/ExpertiseGrid'));
const AwardsList = dynamic(() => import('@/components/home/AwardsList'));
const ComplianceAccordion = dynamic(() => import('@/components/home/ComplianceAccordion'));
const CtaBand = dynamic(() => import('@/components/home/CtaBand'));
const StackMarquee = dynamic(() => import('@/components/home/StackMarquee'));
const IndustriesTabs = dynamic(() => import('@/components/home/IndustriesTabs'));
const CrossSell = dynamic(() => import('@/components/home/CrossSell'));
const FaqSplit = dynamic(() => import('@/components/home/FaqSplit'));
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

/* Section order mirrors the reference homepage, on a white ground. */
export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollUI />
      <main id="main-content">
        <HeroAppi />
        <ServiceStair />
        <WorkTabs />
        <CtaCard />
        <StatsMarquee />
        <AiLab />
        <TestimonialsReel />
        <LogoGrid />
        <ExpertiseGrid />
        <AwardsList />
        <ComplianceAccordion />
        <CtaBand />
        <StackMarquee />
        <IndustriesTabs />
        <CrossSell />
        <FaqSplit />
        <FAQSchema />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
