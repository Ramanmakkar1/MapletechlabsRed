import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { canonicalPath } from '@/lib/seo/canonical';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersMarquee from '@/components/PartnersMarquee';

// Below-fold: lazy loaded for better initial page performance
const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const ProcessSection = dynamic(() => import('@/components/ProcessSection'));
const WhyUs = dynamic(() => import('@/components/WhyUs'));
const FeaturedAwards = dynamic(() => import('@/components/FeaturedAwards'));
const TechStack = dynamic(() => import('@/components/TechStack'));
const SuccessMetrics = dynamic(() => import('@/components/SuccessMetrics'));
const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'));
const IndustriesSection = dynamic(() => import('@/components/IndustriesSection'));
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'));
const AdvancedLabs = dynamic(() => import('@/components/AdvancedLabs'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const InsightsSection = dynamic(() => import('@/components/InsightsSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const FAQSchema = dynamic(() => import("@/components/FAQSchema"));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

// Browser-only components
const ScrollUI = dynamic(() => import('@/components/ScrollUI'));
const StickyCTA = dynamic(() => import('@/components/StickyCTA'));

export const metadata: Metadata = {
  // `absolute`: the layout's "%s | Mapletech Labs" template would double the brand.
  title: { absolute: 'Mapletech Labs | Custom Software Development Company' },
  description:
    'Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Founded by Raman Makkar in Edmonton — ruling across Canada.',
  alternates: { canonical: canonicalPath('/') },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <ScrollUI />
      <main id="main-content">
        <Hero />
        <PartnersMarquee />
        <ServicesSection />
        <ProcessSection />
        <WhyUs />
        <FeaturedAwards />
        <TechStack />
        <SuccessMetrics />
        <PortfolioSection />
        <IndustriesSection />
        <ComparisonTable />
        <AdvancedLabs />
        <TestimonialsSection />
        <InsightsSection />
        <FAQSection />
        <FAQSchema />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
