import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ComplianceAccordion from '@/components/home/ComplianceAccordion';
import AwardsList from '@/components/home/AwardsList';
import FaqSplit from '@/components/home/FaqSplit';
import InsightsSection from '@/components/InsightsSection';
import PageHero from './PageHero';
import { StatRow, ServicesGrid, ProcessSteps, TechBlocks, IndustryRow, WhyUs, SuccessStories, Voices, CtaStrip, ResultsBand } from './Blocks';
import { serviceMedia, defaultMedia, officeMedia } from '@/data/media';
import type { Faq, HeroCopy, IndustryCard, ServiceCard, Stat, Step, TechCategory } from './types';

const heroShots = [officeMedia.open, officeMedia.desk, officeMedia.meeting];

/* Service-category page, following the reference's service-page sequence. */
export default function ServicePageTemplate({ slug, name, copy, stats, services, steps, techCategories, industries, results, faqs, servicesTitle = 'Every Layer. Every Complexity.' }: {
  slug: string; name: string; copy: HeroCopy; stats: Stat[]; services: ServiceCard[]; steps: Step[]; techCategories?: TechCategory[]; industries?: IndustryCard[]; results?: { value: string; label: string; sub?: string }[]; faqs?: Faq[]; servicesTitle?: string;
}) {
  const hero = heroShots[slug.length % heroShots.length];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: name }]} copy={copy} stats={stats} photo={hero} serviceName={name} />
        <StatRow stats={stats} />
        <MediaBand media={serviceMedia[slug] ?? defaultMedia} />
        <ServicesGrid title={servicesTitle} sub={`Everything ${name.toLowerCase()} needs, engineered by one accountable team.`} items={services} />
        <CtaStrip />
        <SuccessStories bg="var(--surface)" />
        <Voices bg="var(--surface-alt)" />
        <ProcessSteps title={`How We Deliver Your ${name} Project`} steps={steps} bg="var(--surface)" />
        <ComplianceAccordion />
        <WhyUs bg="var(--surface-alt)" />
        {results?.length ? <ResultsBand items={results} bg="var(--surface)" /> : null}
        {techCategories?.length ? <TechBlocks cats={techCategories} bg="var(--surface)" /> : null}
        {industries?.length ? <IndustryRow title={`${name} Across Every Sector`} items={industries} /> : null}
        <AwardsList />
        <InsightsSection />
        <FaqSplit faqs={faqs} />
      </main>
      <Footer />
    </>
  );
}
