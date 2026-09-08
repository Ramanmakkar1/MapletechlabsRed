import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import { defaultFaqs } from '@/data/faqs';
import { FaqSchema } from '@/components/ServiceSchema';
import PageHero from './PageHero';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, CardGrid, WhyUs } from './Blocks';
import TechStrip from './TechStrip';
import ServiceCards from './ServiceCards';
import Industries from '@/components/home/Industries';
import Process from '@/components/home/Process';
import AiPractice from '@/components/home/AiPractice';
import { humanPick } from '@/data/media';
import { cities } from '@/data/cities';
import { provinceSlugForName } from '@/data/provinces';
import type { HeroCopy, Stat } from './types';

export interface LocationProps {
  slug: string; copy: HeroCopy; heroStats?: Stat[];
  services?: { title: string; desc: string; href: string }[];
  numbers?: { title: string; sub: string; stats: Stat[] };
  whyChoose?: { title: string; desc: string }[];
  whyCity: { title: string; intro: string; items: { t: string; d: string }[] };
  neighborhoods: { title: string; intro: string; items: { n: string; d: string }[] };
  wins?: { title: string; metric: string; desc: string }[]; winsTitle?: string;
  trends: { title: string; items: { t: string; d: string }[] };
  serviceLinks?: { name: string; slug: string }[];
  overview?: { title: string; lead: string; points: { t: string; d: string }[]; covers: string[] };
}

// Shared defaults so a new city only needs its city-specific content (copy, whyCity, neighborhoods, trends).
const DEFAULT_SERVICES = [
  { title: 'Mobile App Development', desc: '', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: '', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: '', href: '/services/ai-ml' },
  { title: 'Cloud & DevOps', desc: '', href: '/services/cloud-devops' },
  { title: 'SaaS Development', desc: '', href: '/services/saas-development' },
  { title: 'Product Design', desc: '', href: '/services/product-design' },
];
const DEFAULT_WHYCHOOSE = [
  { title: 'Senior engineers, not juniors', desc: 'You work directly with senior engineers and our leadership — the people who build and ship, not a sales layer in front of a junior team.' },
  { title: 'Fixed scope, fixed price', desc: 'Every project is scoped and priced up front. You know the number and the timeline before we write a line of code.' },
  { title: 'Canadian team, coast to coast', desc: 'A distributed Canadian team across 12 cities — local understanding with national engineering depth, and your data kept in Canada.' },
  { title: 'You own everything', desc: 'All the code, infrastructure and IP we produce is yours, protected under Canadian law. No lock-in, ever.' },
];
const DEFAULT_SERVICELINKS = [
  { name: 'Web Development', slug: 'web-development' }, { name: 'Mobile App Development', slug: 'mobile-app-development' },
  { name: 'AI & Machine Learning', slug: 'ai-ml' }, { name: 'Cloud & DevOps', slug: 'cloud-devops' },
  { name: 'SaaS Development', slug: 'saas-development' }, { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'Branding', slug: 'branding' }, { name: 'WordPress & CMS', slug: 'wordpress-cms' },
  { name: 'Blockchain & Web3', slug: 'blockchain-web3' }, { name: 'Product Design', slug: 'product-design' },
  { name: 'Game Development', slug: 'game-development' }, { name: 'AR & VR', slug: 'ar-vr' },
];

// Honest, company-wide facts shown on every city page — no invented per-city metrics.
const HONEST_STATS: Stat[] = [
  { value: '2018', label: 'In business since' },
  { value: '12', label: 'Canadian cities served' },
  { value: '1 day', label: 'To a senior-engineer reply' },
];

// Honest commitments in place of fabricated "client wins" — every figure is true of how we work.
const COMMITMENTS = [
  { title: 'Scope and price up front', metric: 'Fixed', desc: 'You approve a fixed scope and a fixed price before we write a line of code — no open-ended hourly billing and no surprises at the end.' },
  { title: 'A senior engineer replies', metric: '1 day', desc: 'Tell us about your project and a senior engineer comes back within one working day with how we would approach it, what it takes and what it costs.' },
  { title: 'You own the code and IP', metric: '100%', desc: 'Every repository, cloud account and asset we set up is yours to keep. No lock-in, no hostage-taking — your software is your property.' },
];

const POINTS = [
  { t: 'Senior engineers, directly', d: 'You work with senior engineers from day one, never a sales layer in front of a junior team.' },
  { t: 'Fixed scope, fixed price', d: 'Every engagement is scoped and priced up front, so there are no open-ended hours or surprises.' },
  { t: 'Your data stays in Canada', d: 'Canadian data residency by default, with your IP protected under Canadian law.' },
  { t: 'You own everything we build', d: 'All the code, infrastructure and intellectual property we produce is yours to keep.' },
];
const COVERS = ['Product strategy & UX', 'Mobile & web engineering', 'Cloud & DevOps', 'Ongoing support'];

// Enriched, honest service blurbs (shared) so every city's cards read like the Edmonton prototype.
const SERVICE_BLURB: Record<string, string> = {
  'mobile-app-development': 'Native iOS and Android and cross-platform apps built for performance and the app stores — from field tools to consumer products your users keep on the home screen.',
  'web-development': 'Fast, secure web platforms and enterprise portals engineered to scale — from marketing sites to the complex internal systems that replace spreadsheets and legacy tools.',
  'ai-ml': 'LLM integration, intelligent automation and predictive analytics built for production — wired into the systems your team already uses, where a model removes real work.',
  'blockchain-web3': 'Smart contracts, DeFi protocols and decentralized apps engineered for security and audit — practical Web3 that solves a real problem rather than chasing a trend.',
  'cloud-devops': 'AWS and Azure architecture, Kubernetes and CI/CD pipelines for zero-downtime releases — infrastructure that scales with demand and costs less to run.',
  'product-design': 'UX research, product strategy, prototyping and design systems that convert — interfaces your customers find obvious and your engineers can build on.',
  'saas-development': 'Multi-tenant SaaS platforms with billing, auth and analytics — engineered to grow from first customer to scale without re-architecting.',
  'digital-marketing': 'SEO, Google Ads, social and paid media — data-driven campaigns that fill your pipeline and are measured against revenue, not vanity metrics.',
};

function defaultOverview(cityName: string, industries: string[]) {
  const inds = industries.length ? industries.slice(0, 3).join(', ').toLowerCase() : 'local business';
  return {
    title: `Your software and app development partner in ${cityName}`,
    lead: `Mapletech Labs is a custom software development company working with ${cityName} businesses &mdash; building web platforms, mobile apps and AI systems for sectors like ${inds}. You get senior engineers, a fixed scope and price, and software built properly the first time.`,
    points: POINTS,
    covers: COVERS,
  };
}

/* City page — one honest block sequence shared by every city. */
export default function LocationPageTemplate(p: LocationProps) {
  const city = cities.find(c => c.slug === p.slug);
  const name = city?.name ?? p.slug;
  const provinceSlug = city ? provinceSlugForName(city.province) : undefined;

  const heroStats = HONEST_STATS;
  const overview = p.overview ?? defaultOverview(name, city?.localIndustries ?? []);
  const whyChoose = p.whyChoose ?? DEFAULT_WHYCHOOSE;
  const serviceLinks = p.serviceLinks ?? DEFAULT_SERVICELINKS;
  const serviceItems = (p.services ?? DEFAULT_SERVICES).map(s => {
    const slug = s.href.split('/').filter(Boolean).pop() ?? '';
    return { ...s, desc: SERVICE_BLURB[slug] ?? s.desc };
  });

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: name }]} copy={p.copy} stats={heroStats} photo={humanPick(p.slug, 0)} serviceName={`Software development in ${name}`} />
        <StatRow stats={heroStats} />
        {provinceSlug && city ? (
          <section style={{ padding: '18px 0', borderBottom: '1px solid var(--line)' }}>
            <div className="cb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14.5, color: 'var(--muted)' }}>{name} is part of our {city.province} software practice.</span>
              <Link href={`/locations/${provinceSlug}`} className="link-arrow" style={{ fontSize: 14 }}>Software development across {city.province} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg></Link>
            </div>
          </section>
        ) : null}
        <section style={{ padding: 'var(--section-y) 0 var(--section-y-sm)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="prose-split">
              <div><h2 style={{ maxWidth: '16ch' }}>{overview.title}</h2></div>
              <div className="prose-body">
                <p style={{ fontSize: 'clamp(18px, 1.5vw, 20px)', color: 'var(--ink)', lineHeight: 1.65, fontWeight: 450, margin: 0 }} dangerouslySetInnerHTML={{ __html: overview.lead }} />
              </div>
            </div>
            <div className="grid grid--2" style={{ marginTop: 'clamp(32px, 4vw, 56px)', rowGap: 'clamp(22px, 2.6vw, 32px)' }}>
              {overview.points.map(pt => (
                <div key={pt.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
                  <div>
                    <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 5px', color: 'var(--ink)' }}>{pt.t}</h3>
                    <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{pt.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'clamp(30px, 3.4vw, 44px)', paddingTop: 'clamp(22px, 2.6vw, 30px)', borderTop: '1px solid var(--line)', display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted)', marginRight: 4 }}>One team, the whole build:</span>
              {overview.covers.map(c => <span key={c} className="pill">{c}</span>)}
            </div>
          </div>
        </section>
        <MediaBand media={humanPick(p.slug, 4)} />
        <ServiceCards title={`Our services in ${name}`} items={serviceItems} />
        <TechStrip />
        <Industries />
        <Process />
        <CardGrid title={`Why choose Mapletech Labs in ${name}`} items={whyChoose} variant="rows" />
        <CardGrid title={p.whyCity.title} sub={p.whyCity.intro} items={p.whyCity.items.map(i => ({ title: i.t, desc: i.d }))} />
        <MediaBand media={humanPick(p.slug, 6)} ratio="21 / 7" />
        <CardGrid title={p.neighborhoods.title} sub={p.neighborhoods.intro || undefined} items={p.neighborhoods.items.map(i => ({ title: i.n, desc: i.d }))} />
        <AiPractice />
        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <div className="head"><div><h2>What working with us looks like</h2></div></div>
            <div className="grid grid--3">
              {COMMITMENTS.map(w => (
                <div key={w.title} className="tile rise">
                  <div style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.04em', lineHeight: 1.05 }}>{w.metric}</div>
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: '14px 0 8px' }}>{w.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <MediaBand media={humanPick(p.slug, 8)} ratio="21 / 7" />
        <CardGrid title={p.trends.title} items={p.trends.items.map(i => ({ title: i.t, desc: i.d }))} variant="rows" />
        <WhyUs />
        <Credentials />
        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Every service we offer in {name}</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {serviceLinks.map(s => <Link key={s.slug} href={`/locations/${p.slug}/${s.slug}`} className="pill">{s.name}</Link>)}
            </div>
          </div>
        </section>
        <FaqSplit />
        <FaqSchema faqs={defaultFaqs} />
        <FinalCta title={`Building in ${name}? Let's scope it.`} sub={`Tell us what you need and a senior engineer will send a fixed-price plan within one working day${city?.isHQ ? ' — from our head office right here in ' + name + '.' : '.'}`} />
      </main>
      <Footer />
    </>
  );
}
