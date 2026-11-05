import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ServiceCityLinks from '@/components/ServiceCityLinks';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import { defaultFaqs } from '@/data/faqs';
import { FaqSchema } from '@/components/ServiceSchema';
import PageHero from './PageHero';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, ServicesGrid, ProcessSteps, WhyUs, SuccessStories } from './Blocks';
import { serviceMedia, defaultMedia, officeMedia } from '@/data/media';
import { services as servicesAllowlist } from '@/data/services';
import { cities as citiesAllowlist } from '@/data/cities';
import { contactHrefFor } from '@/lib/enquiryContext';
import type { Faq, HeroCopy, ServiceCard, Stat, Step } from './types';

const heroShots = [officeMedia.desk, officeMedia.meeting, officeMedia.open];

/* Sub-service page: the same sequence, trimmed to what the page has data for. */
export default function SubServicePageTemplate({ parent, name, copy, stats, services, steps, faqs, capabilitiesTitle, buyerContent }: {
  parent: { href: string; label: string }; name: string; copy: HeroCopy; stats: Stat[]; services: ServiceCard[]; steps: Step[]; faqs: Faq[]; capabilitiesTitle?: string; buyerContent?: ReactNode;
}) {
  const parentSlug = parent.href.split('/').pop() ?? '';
  const contactHref = contactHrefFor(parentSlug, undefined, servicesAllowlist, citiesAllowlist);
  const hero = heroShots[name.length % heroShots.length];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: parent.label, href: parent.href }, { label: name }]} copy={copy} stats={stats} photo={hero} serviceName={name} contactHref={contactHref} />
        <StatRow stats={stats} />
        <ServicesGrid title={capabilitiesTitle ?? `Our ${name} capabilities`} items={services} />
        {buyerContent}
        <MediaBand media={serviceMedia[parentSlug] ?? defaultMedia} />
        <ProcessSteps title="How we work" steps={steps} />
        <ServiceCityLinks serviceSlug={parentSlug} serviceName={parent.label} />
        <SuccessStories />
        <WhyUs />
        <Credentials />
        <FaqSplit faqs={faqs} title="Common questions" />
        <FaqSchema faqs={faqs ?? defaultFaqs} />
        <FinalCta contactHref={contactHref} />
      </main>
      <Footer />
    </>
  );
}
