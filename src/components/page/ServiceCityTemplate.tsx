import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from './PageHero';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, ServicesGrid, ProcessSteps, TechBlocks, WhyUs } from './Blocks';
import TechStrip from './TechStrip';
import { serviceMedia, defaultMedia, humanPick } from '@/data/media';
import { provinceSlugForName } from '@/data/provinces';
import { serviceCityPath } from '@/data/serviceCity';
import type { Stat } from './types';
import type { CityServicePageData } from '@/data/city-service';

// Honest, company-wide facts — no invented per-city metrics.
const HONEST_STATS: Stat[] = [
  { value: '2018', label: 'In business since' },
  { value: '12', label: 'Canadian cities served' },
  { value: '1 day', label: 'To a senior-engineer reply' },
];
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
const COVERS = ['Product strategy & UX', 'Engineering', 'Cloud & DevOps', 'Ongoing support'];

const Head = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="head"><div><h2>{title}</h2>{sub && <p className="lede">{sub}</p>}</div></div>
);
const balanced = (n: number): string | null =>
  n % 3 === 0 ? 'grid grid--3' : n % 4 === 0 ? 'grid grid--2' : n % 2 === 0 ? 'grid grid--2' : null;

/* Premium "[service] company in [city]" page — honest facts, no invented proof. */
export default function ServiceCityTemplate({ data: p }: { data: CityServicePageData }) {
  const { cityName, citySlug, province, serviceName, serviceSlug } = p;
  const provinceSlug = provinceSlugForName(province);
  const services = [
    ...p.largeServices.map(s => ({ title: s.title, desc: s.desc, chips: s.tags })),
    ...p.smallServices.map(s => ({ title: s.title, desc: s.desc })),
  ];
  const tech = p.techCategories.map(t => ({ label: t.title, chips: t.items }));

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: cityName, href: `/locations/software-development-company-in-${citySlug}` }, { label: serviceName }]}
          copy={{ badge: p.badge, title: <>{serviceName} Company<br />in <span style={{ color: 'var(--brand)' }}>{cityName}</span></>, desc: p.heroDescription }}
          stats={HONEST_STATS} photo={humanPick(citySlug + serviceSlug, 0)} serviceName={`${serviceName} in ${cityName}`}
        />
        <StatRow stats={HONEST_STATS} />
        {provinceSlug ? (
          <section style={{ padding: '18px 0', borderBottom: '1px solid var(--line)' }}>
            <div className="cb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14.5, color: 'var(--muted)' }}>{serviceName} in {cityName}, part of our {province} practice.</span>
              <Link href={`/locations/software-development-company-in-${citySlug}`} className="link-arrow" style={{ fontSize: 14 }}>All software development in {cityName} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg></Link>
            </div>
          </section>
        ) : null}

        {/* Overview — city+service specific lead, shared honest value props */}
        <section style={{ padding: 'var(--section-y) 0 var(--section-y-sm)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="prose-split">
              <div><h2 style={{ maxWidth: '18ch' }}>{serviceName} in {cityName}, done properly</h2></div>
              <div className="prose-body">
                <p style={{ fontSize: 'clamp(18px, 1.5vw, 20px)', color: 'var(--ink)', lineHeight: 1.65, fontWeight: 450, margin: 0 }}>{p.intro}</p>
              </div>
            </div>
            <div className="grid grid--2" style={{ marginTop: 'clamp(32px, 4vw, 56px)', rowGap: 'clamp(22px, 2.6vw, 32px)' }}>
              {POINTS.map(pt => (
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
              {COVERS.map(c => <span key={c} className="pill">{c}</span>)}
            </div>
          </div>
        </section>

        <MediaBand media={serviceMedia[serviceSlug] ?? defaultMedia} />
        <ServicesGrid title={`${serviceName} services we offer in ${cityName}`} items={services} />

        {/* City+service applications — unique per page */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`${serviceName} for the industries that drive ${cityName}`} sub={`How ${serviceName} shows up in the sectors ${cityName} actually runs on.`} />
            <div className={balanced(p.applications.length) ?? 'grid grid--2'}>
              {p.applications.map(a => (
                <article key={a.title} className="tile rise">
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', marginBottom: 12 }}>{a.industry}</p>
                  <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{a.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TechStrip />
        <ProcessSteps title={`How we deliver your ${serviceName} project`} steps={p.steps} />
        <TechBlocks title={`The stack behind your ${serviceName}`} cats={tech} />

        {/* Honest commitments */}
        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <Head title="What working with us looks like" />
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

        <MediaBand media={humanPick(citySlug + serviceSlug, 8)} ratio="21 / 7" />
        <WhyUs />
        <Credentials />
        <FaqSplit faqs={p.faqs} title={`${serviceName} in ${cityName}: your questions`} />

        {/* Internal linking mesh */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container" style={{ display: 'grid', gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Other services in {cityName}</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.relatedCityServices.map(r => <Link key={r.serviceSlug} href={serviceCityPath(r.serviceSlug, r.citySlug)} className="pill">{r.name}</Link>)}
                {p.relatedSubServices.map(r => <Link key={r.slug} href={`/services/${serviceSlug}/${r.slug}`} className="pill">{r.name}</Link>)}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>{serviceName} across Canada</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.sameServiceOtherCities.map(c => <Link key={c.citySlug} href={serviceCityPath(c.serviceSlug, c.citySlug)} className="pill">{c.cityName}</Link>)}
              </div>
            </div>
          </div>
        </section>

        <FinalCta
          title={`Need ${serviceName} in ${cityName}?`}
          sub={`A senior engineer will scope your project and send a fixed price within one working day — ${p.isHQ ? 'from our head office here in ' + cityName : 'with local delivery across ' + province}.`}
        />
      </main>
      <Footer />
    </>
  );
}
