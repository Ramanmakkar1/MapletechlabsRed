import type { ReactNode } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ServiceCityLinks from '@/components/ServiceCityLinks';
import ServiceProof from '@/components/ServiceProof';
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

const COST_GUIDES: Record<string, { href: string; label: string }> = {
  'ai-ml': { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide for Canada' },
  'mobile-app-development': { href: '/blog/app-development-cost-canada', label: 'app development cost guide for Canada' },
  'web-development': { href: '/blog/website-cost-canada', label: 'website cost guide for Canada' },
  'wordpress-cms': { href: '/blog/website-cost-canada', label: 'website cost guide for Canada' },
  'saas-development': { href: '/blog/saas-development-cost-canada', label: 'SaaS development cost guide for Canada' },
  'product-design': { href: '/blog/ui-ux-design-cost-canada', label: 'UI/UX design cost guide for Canada' },
  'digital-marketing': { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
  'software-development': { href: '/blog/custom-software-development-cost-canada', label: 'custom software development cost guide for Canada' },
};

/* Sub-service page: the same sequence, trimmed to what the page has data for. */
export default function SubServicePageTemplate({ parent, name, copy, stats, services, steps, faqs, capabilitiesTitle, buyerContent, caseStudySlugs }: {
  parent: { href: string; label: string }; name: string; copy: HeroCopy; stats: Stat[]; services: ServiceCard[]; steps: Step[]; faqs: Faq[]; capabilitiesTitle?: string; buyerContent?: ReactNode; caseStudySlugs?: string[];
}) {
  const parentSlug = parent.href.split('/').pop() ?? '';
  const contactHref = contactHrefFor(parentSlug, undefined, servicesAllowlist, citiesAllowlist);
  const costGuide = COST_GUIDES[parentSlug];
  const hero = heroShots[name.length % heroShots.length];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: parent.label, href: parent.href }, { label: name }]} copy={copy} stats={stats} photo={hero} serviceName={name} contactHref={contactHref} />
        <StatRow stats={stats} />
        <ServicesGrid title={capabilitiesTitle ?? `Our ${name} capabilities`} items={services} />
        <ServiceProof slug={parentSlug} name={name} contactHref={contactHref} caseStudySlugs={caseStudySlugs} />
        {buyerContent}
        {costGuide ? (
          <section aria-labelledby="sub-service-cost" style={{ padding: 'var(--section-y-sm) 0' }}>
            <div className="cb-container">
              <h2 id="sub-service-cost" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', margin: '0 0 12px' }}>How much does {name} cost in Canada?</h2>
              <p className="lede" style={{ maxWidth: 760 }}>The cost of {name.toLowerCase()} depends on scope, integrations and timeline. Our <Link href={costGuide.href} style={{ color: 'var(--brand)', fontWeight: 500 }}>{costGuide.label}</Link> lists typical price ranges in CAD and the main cost drivers. For a quote on your project, <Link href={contactHref} style={{ color: 'var(--brand)', fontWeight: 500 }}>send a short brief</Link>.</p>
            </div>
          </section>
        ) : null}
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
