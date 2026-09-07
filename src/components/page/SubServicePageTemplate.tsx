import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ComplianceAccordion from '@/components/home/ComplianceAccordion';
import AwardsList from '@/components/home/AwardsList';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from './PageHero';
import { StatRow, ServicesGrid, ProcessSteps, WhyUs, SuccessStories, CtaStrip } from './Blocks';
import { serviceMedia, defaultMedia, officeMedia } from '@/data/media';
import type { Faq, HeroCopy, ServiceCard, Stat, Step } from './types';

const heroShots = [officeMedia.desk, officeMedia.meeting, officeMedia.open];

/* Sub-service page: the same sequence, trimmed to what the page has data for. */
export default function SubServicePageTemplate({ parent, name, copy, stats, services, steps, faqs, capabilitiesTitle }: {
  parent: { href: string; label: string }; name: string; copy: HeroCopy; stats: Stat[]; services: ServiceCard[]; steps: Step[]; faqs: Faq[]; capabilitiesTitle?: string;
}) {
  const parentSlug = parent.href.split('/').pop() ?? '';
  const hero = heroShots[name.length % heroShots.length];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: parent.label, href: parent.href }, { label: name }]} copy={copy} stats={stats} photo={hero} serviceName={name} />
        <StatRow stats={stats} />
        <MediaBand media={serviceMedia[parentSlug] ?? defaultMedia} />
        <ServicesGrid title={capabilitiesTitle ?? `Our ${name} Capabilities`} items={services} />
        <CtaStrip />
        <ProcessSteps title="How We Work" steps={steps} bg="var(--surface)" />
        <SuccessStories />
        <ComplianceAccordion />
        <WhyUs bg="var(--surface-alt)" />
        <AwardsList />
        <FaqSplit faqs={faqs} title="Common Questions" />
      </main>
      <Footer />
    </>
  );
}
