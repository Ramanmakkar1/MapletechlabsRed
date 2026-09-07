import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from './PageHero';
import MediaBand from '@/components/MediaBand';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, TechBlocks, SuccessStories, CaseBand, CardGrid, WhyUs } from './Blocks';
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
        <CardGrid title="The challenges we solve" items={p.challenges} variant="rows" />
        <CardGrid title={`Systems we build for ${p.name}`} items={p.solutions} />
        <MediaBand media={industryMedia[p.slug] ?? defaultMedia} />
        <CaseBand {...p.caseStudy} />
        <TechBlocks title={`The stack behind ${p.name} platforms`} cats={p.tech.map(t => ({ label: t.cat, chips: t.items }))} />
        <CardGrid title="Domain experts, not generalists" items={p.whyUs} variant="rows" />
        <SuccessStories />
        <WhyUs />
        <CardGrid title={`Services for ${p.name}`} items={p.related.map(r => ({ title: r.name, desc: r.desc, href: r.href }))} />
        <Credentials />
        <FaqSplit />
        <FinalCta title={p.cta.title} sub={p.cta.sub} />
      </main>
      <Footer />
    </>
  );
}
