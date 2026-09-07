import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import MediaBand from '@/components/MediaBand';
import FaqSplit from '@/components/home/FaqSplit';
import FinalCta from '@/components/home/FinalCta';
import Credentials from '@/components/home/Credentials';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema, FaqSchema } from '@/components/ServiceSchema';
import { CardGrid } from './Blocks';
import { serviceCategories } from '@/data/nav';
import { humanPick } from '@/data/media';
import type { ProvinceData } from '@/data/provinces';

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>
);

/* Six lead services, linked from every province page. */
const leadServices = serviceCategories.slice(0, 6);

export default function ProvincePageTemplate({ p }: { p: ProvinceData }) {
  const base = 'https://mapletechlabs.ca';
  const url = `${base}/locations/${p.slug}`;
  const crumbs = [
    { position: 1, name: 'Home', item: base },
    { position: 2, name: 'Locations', item: `${base}/locations` },
    { position: 3, name: p.name, item: url },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={`Software Development in ${p.name}`}
        description={p.metaDescription}
        url={url}
        serviceType="Custom software development"
        areaServed={p.name}
      />
      <FaqSchema faqs={p.faqs} />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section style={{ background: 'var(--surface)', padding: 'var(--hero-top) 0 var(--section-y)' }}>
          <div className="cb-container">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: p.name }]} />
            <div className="hero-split" style={{ marginTop: 'clamp(20px, 3vw, 36px)', alignItems: 'center' }}>
              <div>
                <span className="section-tag">Software development in {p.name}</span>
                <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '0 0 20px', maxWidth: '16ch' }}>
                  Software Development Company in {p.name}
                </h1>
                <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'var(--body)', lineHeight: 1.7, maxWidth: '52ch', margin: '0 0 30px' }}>
                  {p.heroSummary}
                </p>
                <div className="btn-group" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn--primary btn--lg">Start a project <Arrow /></Link>
                  <Link href="/case-studies" className="btn btn--ghost btn--lg">See our work</Link>
                </div>
              </div>
              <div className="media media--lg fade" style={{ aspectRatio: '4 / 3.2' }}>
                <Image src={humanPick(p.slug).src} alt={humanPick(p.slug).alt} fill priority sizes="(max-width: 1023px) 100vw, 46vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Economy — substantial prose, the anti-thin-content core */}
        <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container prose-split">
            <div>
              <h2 style={{ maxWidth: '16ch' }}>Why {p.name} businesses build custom software</h2>
            </div>
            <div className="prose-body">
              {p.economy.map((para, i) => (
                <p key={i} style={{ fontSize: 'clamp(16px, 1.35vw, 17.5px)', color: 'var(--body)', lineHeight: 1.8, marginBottom: i < p.economy.length - 1 ? 20 : 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Cities we serve in this province */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <div className="head">
              <div>
                <h2>Where we work in {p.name}</h2>
                <p className="lede">Local delivery in {p.cities.length === 1 ? p.cities[0].name : `${p.cities.length} ${p.name} cities`}, backed by a national engineering bench.</p>
              </div>
              <Link href="/locations" className="btn btn--ghost">All locations</Link>
            </div>
            <div className={p.cities.length % 3 === 0 ? 'grid grid--3' : p.cities.length % 2 === 0 ? 'grid grid--2' : p.cities.length === 1 ? 'grid grid--2' : 'grid grid--3'}>
              {p.cities.map(c => (
                <Link key={c.slug} href={`/locations/${c.slug}`} className="tile rise">
                  <span className="commitments__mark" aria-hidden />
                  <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{c.name}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{c.role}</p>
                  <span className="tile__foot link-arrow" style={{ paddingTop: 18, fontSize: 14 }}>Software development in {c.name} <Arrow /></span>
                </Link>
              ))}
              {p.cities.length === 1 && (
                <Link href="/contact" className="tile rise" style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                  <span className="commitments__mark" aria-hidden />
                  <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>Elsewhere in {p.name}?</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>Our distributed team works with companies across the province, not only in {p.cities[0].name}. Tell us where you are.</p>
                  <span className="tile__foot link-arrow" style={{ paddingTop: 18, fontSize: 14 }}>Talk to us <Arrow /></span>
                </Link>
              )}
            </div>
          </div>
        </section>

        <MediaBand media={humanPick(p.slug, 4)} ratio="21 / 8" />

        {/* Industries in this province */}
        <CardGrid
          title={`Industries we build for in ${p.name}`}
          sub={`The sectors that drive ${p.name}'s economy, each with software problems too specific for off-the-shelf tools.`}
          items={p.industries}
        />

        {/* Services */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <div className="head">
              <div>
                <h2>What we build for {p.name} companies</h2>
                <p className="lede">One accountable team across every layer of the stack.</p>
              </div>
              <Link href="/services" className="btn btn--ghost">All services</Link>
            </div>
            <div className="grid grid--3">
              {leadServices.map(s => (
                <Link key={s.href} href={s.href} className="tile rise">
                  <span style={{ color: 'var(--brand)', display: 'inline-flex', marginBottom: 14 }}>{s.icon}</span>
                  <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>{s.title}</h3>
                  <span className="tile__foot link-arrow" style={{ paddingTop: 16, fontSize: 14 }}>Explore <Arrow /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory footing — privacy + incentives, on the ink band */}
        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-ink)', color: 'var(--on-ink-body)' }}>
          <div className="cb-container">
            <div className="head">
              <div>
                <h2 style={{ color: 'var(--on-ink)' }}>Built for {p.name}&rsquo;s rules, funded by {p.name}&rsquo;s programmes</h2>
                <p className="lede" style={{ color: 'var(--on-ink-body)' }}>Compliance and funding are design inputs here, not afterthoughts.</p>
              </div>
            </div>
            <div className="grid grid--3">
              <article className="tile tile--ink">
                <h3>Privacy &mdash; {p.privacy.law}</h3>
                <p>{p.privacy.body}</p>
              </article>
              {p.incentives.map(inc => (
                <article key={inc.programme} className="tile tile--ink">
                  <h3>{inc.programme}</h3>
                  <p>{inc.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why here */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <div className="head">
              <div>
                <h2>Why {p.name} companies choose Mapletech Labs</h2>
                <p className="lede">The parts that decide whether a project actually lands &mdash; local to {p.name}, not generic.</p>
              </div>
              <Link href="/contact" className="btn btn--ghost">Talk to an engineer</Link>
            </div>
            <ul className="commitments">
              {p.whyHere.map(w => (
                <li key={w.title}>
                  <span className="commitments__mark" aria-hidden />
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Credentials />

        <FaqSplit faqs={p.faqs} title={`${p.name} software development FAQs`} />

        <FinalCta
          title={`Building software in ${p.name}? Let's scope it.`}
          sub={`Tell us what you're building and a senior engineer will come back within four hours with a scope, a timeline and a fixed price.`}
        />
      </main>
      <Footer />
    </>
  );
}
