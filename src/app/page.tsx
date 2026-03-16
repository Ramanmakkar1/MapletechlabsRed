import dynamic from 'next/dynamic';
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
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

// Browser-only components
const ScrollUI = dynamic(() => import('@/components/ScrollUI'));
const StickyCTA = dynamic(() => import('@/components/StickyCTA'));

export default function Home() {
  return (
    <>
      <Navbar />

      <ScrollUI />
      <main id="main-content">
        <Hero />
        <PartnersMarquee />
        <ServicesSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <ProcessSection />
        <WhyUs />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <FeaturedAwards />
        <TechStack />
        <SuccessMetrics />
        <PortfolioSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <IndustriesSection />
        <ComparisonTable />
        <AdvancedLabs />
        <TestimonialsSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <InsightsSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
