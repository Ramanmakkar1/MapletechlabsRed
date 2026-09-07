import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ComplianceAccordion from '@/components/home/ComplianceAccordion';
import AwardsList from '@/components/home/AwardsList';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from './PageHero';
import { StatRow, ResultsBand, CtaStrip, CardGrid, WhyUs } from './Blocks';
import { officeMedia } from '@/data/media';
import { cities } from '@/data/cities';
import type { HeroCopy, Stat } from './types';

export interface LocationProps {
  slug: string; copy: HeroCopy; heroStats: Stat[];
  services: { title: string; desc: string; href: string }[];
  numbers?: { title: string; sub: string; stats: Stat[] };
  whyChoose: { title: string; desc: string }[];
  whyCity: { title: string; intro: string; items: { t: string; d: string }[] };
  neighborhoods: { title: string; intro: string; items: { n: string; d: string }[] };
  wins: { title: string; metric: string; desc: string }[];
  trends: { title: string; items: { t: string; d: string }[] };
  serviceLinks: { name: string; slug: string }[];
}

const shots = [officeMedia.open, officeMedia.desk, officeMedia.meeting];

/* City page — same block sequence, with the local proof the reference puts on its location pages. */
export default function LocationPageTemplate(p: LocationProps) {
  const city = cities.find(c => c.slug === p.slug);
  const name = city?.name ?? p.slug;
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: name }]} copy={p.copy} stats={p.heroStats} photo={shots[p.slug.length % 3]} serviceName={`Software development in ${name}`} />
        {p.heroStats.length ? <StatRow stats={p.heroStats} /> : null}
        <MediaBand media={shots[(p.slug.length + 1) % 3]} />
        <CardGrid eyebrow={`What we build in ${name}`} title={`Our Services in ${name}`} items={p.services.map(s => ({ title: s.title, desc: s.desc, href: s.href }))} bg="var(--surface)" />
        {p.numbers ? <ResultsBand title={p.numbers.title} items={p.numbers.stats} /> : null}
        <CardGrid eyebrow="Local advantage" title={`Why Choose Mapletech Labs in ${name}`} items={p.whyChoose} bg="var(--surface)" variant="rows" />
        <CtaStrip title={`Building in ${name}? Let's scope it.`} sub={`A senior engineer will send a fixed-price plan within four hours${city?.isHQ ? ' — from our head office right here in ' + name + '.' : '.'}`} />
        <CardGrid eyebrow="The market" title={p.whyCity.title} sub={p.whyCity.intro} items={p.whyCity.items.map(i => ({ title: i.t, desc: i.d }))} bg="var(--surface)" />
        <CardGrid eyebrow="Where we work" title={p.neighborhoods.title} sub={p.neighborhoods.intro || undefined} items={p.neighborhoods.items.map(i => ({ title: i.n, desc: i.d }))} bg="var(--surface-alt)" min={200} />
        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <div style={{ maxWidth: 720, marginBottom: 'clamp(26px, 3.5vw, 44px)' }}><span className="section-tag">Proof</span><h2 style={{ margin: 0 }}>{name} Client Wins</h2></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {p.wins.map(w => (
                <div key={w.title} className="card card--flat" style={{ background: 'var(--surface-alt)' }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.04em', lineHeight: 1.05 }}>{w.metric}</div>
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: '14px 0 8px' }}>{w.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CardGrid eyebrow="Trends" title={p.trends.title} items={p.trends.items.map(i => ({ title: i.t, desc: i.d }))} bg="var(--surface-alt)" variant="rows" />
        <WhyUs bg="var(--surface)" />
        <ComplianceAccordion />
        <AwardsList />
        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Every service we offer in {name}</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {p.serviceLinks.map(s => <Link key={s.slug} href={`/locations/${p.slug}/${s.slug}`} className="pill">{s.name}</Link>)}
            </div>
          </div>
        </section>
        <FaqSplit />
      </main>
      <Footer />
    </>
  );
}
