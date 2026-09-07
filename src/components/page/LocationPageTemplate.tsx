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
import { StatRow, ResultsBand, CardGrid, WhyUs } from './Blocks';
import { officeMedia, humanPick } from '@/data/media';
import { cities } from '@/data/cities';
import { provinceSlugForName } from '@/data/provinces';
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
void shots;

/* City page — same block sequence, with the local proof the reference puts on its location pages. */
export default function LocationPageTemplate(p: LocationProps) {
  const city = cities.find(c => c.slug === p.slug);
  const name = city?.name ?? p.slug;
  const provinceSlug = city ? provinceSlugForName(city.province) : undefined;
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: name }]} copy={p.copy} stats={p.heroStats} photo={humanPick(p.slug, 0)} serviceName={`Software development in ${name}`} />
        {p.heroStats.length ? <StatRow stats={p.heroStats} /> : null}
        {provinceSlug && city ? (
          <section style={{ padding: '18px 0', borderBottom: '1px solid var(--line)' }}>
            <div className="cb-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14.5, color: 'var(--muted)' }}>{name} is part of our {city.province} software practice.</span>
              <Link href={`/locations/${provinceSlug}`} className="link-arrow" style={{ fontSize: 14 }}>Software development across {city.province} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg></Link>
            </div>
          </section>
        ) : null}
        <MediaBand media={humanPick(p.slug, 4)} />
        <CardGrid title={`Our services in ${name}`} items={p.services.map(s => ({ title: s.title, desc: s.desc, href: s.href }))} />
        {p.numbers ? <ResultsBand title={p.numbers.title} items={p.numbers.stats} /> : null}
        <CardGrid title={`Why choose Mapletech Labs in ${name}`} items={p.whyChoose} variant="rows" />
        <CardGrid title={p.whyCity.title} sub={p.whyCity.intro} items={p.whyCity.items.map(i => ({ title: i.t, desc: i.d }))} />
        <MediaBand media={humanPick(p.slug, 6)} ratio="21 / 7" />
        <CardGrid title={p.neighborhoods.title} sub={p.neighborhoods.intro || undefined} items={p.neighborhoods.items.map(i => ({ title: i.n, desc: i.d }))} />
        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <div className="head"><div><h2>Client wins in {name}</h2></div></div>
            <div className={p.wins.length % 3 === 0 ? 'grid grid--3' : 'grid grid--2'}>
              {p.wins.map(w => (
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
              {p.serviceLinks.map(s => <Link key={s.slug} href={`/locations/${p.slug}/${s.slug}`} className="pill">{s.name}</Link>)}
            </div>
          </div>
        </section>
        <FaqSplit />
        <FaqSchema faqs={defaultFaqs} />
        <FinalCta title={`Building in ${name}? Let's scope it.`} sub={`Tell us what you need and a senior engineer will send a fixed-price plan within four hours${city?.isHQ ? ' — from our head office right here in ' + name + '.' : '.'}`} />
      </main>
      <Footer />
    </>
  );
}
