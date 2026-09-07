import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import InsightsSection from '@/components/InsightsSection';
import PageHero from './PageHero';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, ServicesGrid, ProcessSteps, TechBlocks, IndustryRow, WhyUs, SuccessStories, Voices, ResultsBand } from './Blocks';
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
        <ServicesGrid title={servicesTitle} sub={`Everything ${name} needs, engineered by one accountable team.`} items={services} />
        <MediaBand media={serviceMedia[slug] ?? defaultMedia} />
        <ProcessSteps title={`How we deliver your ${name} project`} steps={steps} />
        <SuccessStories />
        {results?.length ? <ResultsBand items={results} /> : null}
        <WhyUs />
        {techCategories?.length ? <TechBlocks cats={techCategories} /> : null}
        {industries?.length ? <IndustryRow title={`${name} across every sector`} items={industries} /> : null}
        <Voices />
        <Credentials />
        <InsightsSection />
        <FaqSplit faqs={faqs} />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
