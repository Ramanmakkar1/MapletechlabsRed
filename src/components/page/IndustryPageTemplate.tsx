import type { ReactNode } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import { defaultFaqs, type Faq } from '@/data/faqs';
import { FaqSchema } from '@/components/ServiceSchema';
import PageHero from './PageHero';
import MediaBand from '@/components/MediaBand';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, TechBlocks, SuccessStories, CaseBand, CardGrid, WhyUs } from './Blocks';
import { industryMedia, defaultMedia, humanPick } from '@/data/media';
import type { HeroCopy, Stat } from './types';

export interface IndustryProps {
  slug: string; name: string; copy: HeroCopy; heroStats: Stat[];
  challenges: { icon?: string; title: string; desc: string }[];
  solutions: { icon?: string; title: string; desc: string }[];
  caseStudy: { client: string; headline: string; text: string; quote: string; cite: string };
  tech: { cat: string; items: string[] }[];
  whyUs: { icon?: string; title: string; desc: string }[];
  related: { name: string; href: string; desc: string }[];
  cta: { title: string; sub: string };
  faqs?: Faq[];
  cityLinks?: { label: string; href: string }[];
  /** Optional industry-specific buyer content, rendered after the systems grid. */
  buyerContent?: ReactNode;
}

/* Industry page — the reference's sector-page sequence, on white. */
const INDUSTRY_CASE_HREF: Record<string, string> = { fintech: '/case-studies/fintech-trading-platform', healthcare: '/case-studies/healthcare-telehealth', ecommerce: '/case-studies/ecommerce-platform', logistics: '/case-studies/logistics-platform' };
const INDUSTRY_WORK_CATEGORIES: Record<string, string[]> = { fintech: ['FinTech'], healthcare: ['Healthcare'], ecommerce: ['E-Commerce'], logistics: ['Logistics'], enterprise: ['Logistics', 'FinTech'] };

export default function IndustryPageTemplate(p: IndustryProps) {
  const faqs = p.faqs ?? defaultFaqs;
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: p.name }]} copy={p.copy} stats={p.heroStats} photo={industryMedia[p.slug] ?? defaultMedia} form={false} />
        <StatRow stats={p.heroStats} />
        <CardGrid title="The challenges we solve" items={p.challenges} variant="rows" />
        <CardGrid title={`Systems we build for ${p.name}`} items={p.solutions} />
        {p.buyerContent ?? null}
        <MediaBand media={industryMedia[p.slug] ?? defaultMedia} />
        <CaseBand {...p.caseStudy} href={INDUSTRY_CASE_HREF[p.slug]} />
        <TechBlocks title={`The stack behind ${p.name} platforms`} cats={p.tech.map(t => ({ label: t.cat, chips: t.items }))} />
        <CardGrid title="Domain experts, not generalists" items={p.whyUs} variant="rows" />
        <MediaBand media={humanPick(p.slug, 5)} ratio="21 / 7" />
        <SuccessStories title={`${p.name} work we have shipped`} categories={INDUSTRY_WORK_CATEGORIES[p.slug]} />
        <WhyUs />
        <CardGrid title={`Services for ${p.name}`} items={p.related.map(r => ({ title: r.name, desc: r.desc, href: r.href }))} />
        <Credentials />
        <FaqSplit faqs={faqs} />
        <FaqSchema faqs={faqs} />
        {p.cityLinks?.length ? (
          <section style={{ padding: 'var(--section-y-sm) 0' }}>
            <div className="cb-container">
              <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Hire us in your city</h2>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 18px', maxWidth: 680 }}>Local teams, local pricing guidance and case studies for each city we serve across Canada.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {p.cityLinks.map(l => (
                  <Link key={l.href} href={l.href} className="pill">{l.label}</Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        <FinalCta title={p.cta.title} sub={p.cta.sub} />
      </main>
      <Footer />
    </>
  );
}
