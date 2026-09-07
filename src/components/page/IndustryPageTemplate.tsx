import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComplianceAccordion from '@/components/home/ComplianceAccordion';
import AwardsList from '@/components/home/AwardsList';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from './PageHero';
import { StatRow, TechBlocks, SuccessStories, CtaStrip, CaseBand, CardGrid, WhyUs } from './Blocks';
import { industryMedia, defaultMedia } from '@/data/media';
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
}

/* Industry page — the reference's sector-page sequence, on white. */
export default function IndustryPageTemplate(p: IndustryProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: p.name }]} copy={p.copy} stats={p.heroStats} photo={industryMedia[p.slug] ?? defaultMedia} form={false} />
        <StatRow stats={p.heroStats} />
        <CardGrid eyebrow="The problem space" title="Key Challenges We Solve" items={p.challenges} bg="var(--surface)" variant="rows" />
        <CardGrid eyebrow="What we build" title={`Systems We Build for ${p.name}`} items={p.solutions} bg="var(--surface-alt)" />
        <CaseBand {...p.caseStudy} />
        <TechBlocks title={`Built With the Right Tools for ${p.name}`} cats={p.tech.map(t => ({ label: t.cat, chips: t.items }))} bg="var(--surface-alt)" />
        <CardGrid eyebrow={`Why Mapletech Labs for ${p.name}`} title="Domain experts, not generalists." items={p.whyUs} bg="var(--surface)" variant="rows" />
        <SuccessStories bg="var(--surface-alt)" />
        <ComplianceAccordion />
        <WhyUs bg="var(--surface-alt)" />
        <AwardsList />
        <CardGrid eyebrow="Services" title={`Services for ${p.name}`} items={p.related.map(r => ({ title: r.name, desc: r.desc, href: r.href }))} bg="var(--surface)" />
        <CtaStrip title={p.cta.title} sub={p.cta.sub} />
        <FaqSplit />
      </main>
      <Footer />
    </>
  );
}
