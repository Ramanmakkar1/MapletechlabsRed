import Link from 'next/link';
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
import { serviceCategories } from '@/data/nav';
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
        <SubServiceLinks slug={slug} name={name} />
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

/* Each category page links its own sub-service pages. They used to hang off
   the mega menu alone, which left them one removed nav away from orphaned. */
function SubServiceLinks({ slug, name }: { slug: string; name: string }) {
  const cat = serviceCategories.find(c => c.href === `/services/${slug}`);
  if (!cat?.links.length) return null;
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 18 }}>Explore {name} in detail</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {cat.links.map(l => (
            <Link key={l.href} href={l.href} className="pill" style={{ height: 40, padding: '0 20px', fontSize: 14 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
