import Image from 'next/image';
import Link from 'next/link';
import { blogMedia, industryMedia, defaultMedia, type Media } from '@/data/media';
import { work } from '@/data/work';
import { quotes } from '@/data/testimonials';
import type { Faq, IndustryCard, ServiceCard, Stat, Step, TechCategory } from './types';

const Arrow = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>;

const Head = ({ eyebrow, title, sub, right }: { eyebrow?: string; title: string; sub?: string; right?: React.ReactNode }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 'clamp(26px, 3.5vw, 44px)' }}>
    <div style={{ maxWidth: 680 }}>
      {eyebrow && <span className="section-tag">{eyebrow}</span>}
      <h2 style={{ margin: 0 }}>{title}</h2>
      {sub && <p style={{ color: 'var(--body)', lineHeight: 1.7, marginTop: 12, maxWidth: '60ch' }}>{sub}</p>}
    </div>
    {right}
  </div>
);

/* ── stat row under the hero ─────────────────────────────── */
export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <section style={{ background: 'var(--surface-alt)', padding: 0 }}>
      <div className="cb-container" style={{ padding: 0 }}>
        <div className="stats-strip-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)` }}>
          {stats.slice(0, 4).map((s, i) => (
            <div key={s.label} style={{ padding: 'clamp(28px, 3.5vw, 44px) 20px', textAlign: 'center', borderLeft: i ? '1px solid var(--line)' : 'none' }}>
              <div style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.05em', lineHeight: 1 }}>{s.value}</div>
              <div className="eyebrow" style={{ marginTop: 10 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── services / capabilities grid ────────────────────────── */
export function ServicesGrid({ title, sub, items, bg = 'var(--surface)' }: { title: string; sub?: string; items: ServiceCard[]; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="What we deliver" title={title} sub={sub} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {items.map((s, i) => (
            <article key={s.title} className="card" style={{ display: 'flex', flexDirection: 'column', background: bg === 'var(--surface)' ? 'var(--surface-alt)' : '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <span className="idx">[ {String(i + 1).padStart(2, '0')} ]</span>
                {s.tag && <span className="pill pill--brand" style={{ height: 28, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase' }}>{s.tag}</span>}
              </div>
              <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7, marginBottom: s.chips?.length ? 18 : 0 }}>{s.desc}</p>
              {s.chips?.length ? <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>{s.chips.map(c => <span key={c} className="pill" style={{ height: 28, fontSize: 12, background: '#fff' }}>{c}</span>)}</div> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── numbered process ────────────────────────────────────── */
export function ProcessSteps({ title = 'How We Deliver', steps, bg = 'var(--surface-alt)' }: { title?: string; steps: Step[]; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="How we work" title={title} sub="A battle-tested process refined across 500+ projects — full visibility, fixed milestones, zero surprises." />
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {steps.map(st => (
            <li key={st.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20, padding: '26px 0', borderTop: '1px solid var(--line)' }}>
              <span className="idx" style={{ fontSize: 15 }}>[ {st.num} ]</span>
              <div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: 0 }}>{st.title}</h3>
                  {st.duration && <span className="pill" style={{ height: 26, fontSize: 12, background: '#fff' }}>{st.duration}</span>}
                </div>
                <p style={{ color: 'var(--body)', lineHeight: 1.7, maxWidth: '70ch' }}>{st.desc}</p>
                {st.deliverables?.length ? <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>{st.deliverables.map(d => <span key={d} className="pill pill--brand" style={{ height: 26, fontSize: 12 }}>{d}</span>)}</div> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── tech stack ──────────────────────────────────────────── */
export function TechBlocks({ title = 'The Stack Behind Your Platform', cats, bg = 'var(--surface)' }: { title?: string; cats: TechCategory[]; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="Technology" title={title} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {cats.map(c => (
            <div key={c.label} className="card card--flat" style={{ background: bg === 'var(--surface)' ? 'var(--surface-alt)' : '#fff' }}>
              <div className="eyebrow" style={{ color: 'var(--brand)', marginBottom: 14 }}>{c.label}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{c.chips.map(ch => <span key={ch} className="pill" style={{ background: '#fff' }}>{ch}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── industries served (photo cards) ─────────────────────── */
const mediaFor = (title: string): Media => {
  const k = title.toLowerCase().replace(/[^a-z]/g, '');
  const map: Record<string, string> = { fintech: 'fintech', finance: 'fintech', banking: 'fintech', healthcare: 'healthcare', ecommerce: 'ecommerce', retail: 'ecommerce', logistics: 'logistics', education: 'edtech', edtech: 'edtech', enterprise: 'enterprise', saas: 'enterprise' };
  return industryMedia[map[k]] ?? blogMedia[k.length % blogMedia.length] ?? defaultMedia;
};
export function IndustryRow({ title, items, bg = 'var(--surface-alt)' }: { title: string; items: IndustryCard[]; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="Industries" title={title} right={<Link href="/industries" className="btn btn--ghost btn--sm">See All Industries</Link>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {items.map(ind => { const m = mediaFor(ind.title); return (
            <article key={ind.title} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
              <div className="media media--flat" style={{ height: 150 }}><Image src={m.src} alt={m.alt} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></div>
              <div style={{ padding: 22 }}>
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>{ind.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{ind.desc}</p>
              </div>
            </article>
          ); })}
        </div>
      </div>
    </section>
  );
}

/* ── why us ──────────────────────────────────────────────── */
const reasons = [
  { t: 'Fixed scope, fixed price', d: 'You know the cost and the timeline before a line of code is written. No hourly billing, no scope-creep surprises.' },
  { t: 'Your IP, 100%', d: 'Full source code, credentials and intellectual property transfer to you on final payment. We sign the IP assignment on day one.' },
  { t: 'Senior engineers only', d: 'Every project is staffed by engineers with 8+ years of production experience — no juniors learning on your budget.' },
  { t: '8-week MVP programme', d: 'A focused, fixed-price path from idea to a launched product, refined across dozens of startup engagements.' },
  { t: 'Canadian data residency', d: 'Built for PIPEDA and provincial privacy law, with data kept on Canadian infrastructure where it matters.' },
  { t: 'Post-launch SLAs', d: 'Tiered support from monitoring and bug fixes to a dedicated team with 24/7 response. Most clients stay for years.' },
];
export function WhyUs({ bg = 'var(--surface)' }: { bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="Why Mapletech Labs" title="Accountable partners, not outsourced vendors." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {reasons.map((r, i) => (
            <div key={r.t} className="card card--flat" style={{ background: bg === 'var(--surface)' ? 'var(--surface-alt)' : '#fff' }}>
              <span className="idx">[ {i + 1} ]</span>
              <h3 style={{ fontSize: 'var(--fs-h4)', margin: '14px 0 8px' }}>{r.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── success stories (3 case cards) ──────────────────────── */
export function SuccessStories({ bg = 'var(--surface-alt)', title = 'Success Stories That Testify to Our Engineering' }: { bg?: string; title?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="Case studies" title={title} right={<Link href="/case-studies" className="btn btn--ghost btn--sm">All Case Studies</Link>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {work.slice(0, 3).map(w => (
            <Link key={w.slug} href={w.href} style={{ display: 'block', background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
              <div className="media media--flat media--zoom" style={{ aspectRatio: '16 / 10' }}>
                <Image src={w.media.src} alt={w.media.alt} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                <div className="media__scrim" aria-hidden />
                <div style={{ position: 'absolute', left: 18, bottom: 14, color: '#fff', zIndex: 1 }}>
                  <div style={{ fontSize: '1.9rem', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, textShadow: '0 2px 10px rgba(0,0,0,.4)' }}>{w.metrics[0].value}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .9 }}>{w.metrics[0].label}</div>
                </div>
              </div>
              <div style={{ padding: 22 }}>
                <span className="eyebrow" style={{ color: 'var(--brand)' }}>{w.category} · {w.city}</span>
                <h3 style={{ fontSize: 'var(--fs-h4)', margin: '10px 0 6px' }}>{w.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)' }}>{w.client}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── two client quotes ───────────────────────────────────── */
export function Voices({ bg = 'var(--surface)' }: { bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="Client validation" title="Leaders Choosing Mapletech Labs" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {quotes.slice(0, 2).map(q => (
            <blockquote key={q.name} style={{ margin: 0, background: bg === 'var(--surface)' ? 'var(--surface-alt)' : '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', color: 'var(--ink)', lineHeight: 1.6, fontWeight: 500, marginBottom: 22 }}>&ldquo;{q.text}&rdquo;</p>
              <footer style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
                <div><div style={{ fontWeight: 700, color: 'var(--ink)' }}>{q.name}</div><div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>{q.role}</div></div>
                <div style={{ textAlign: 'right' }}><div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.04em', lineHeight: 1 }}>{q.metric}</div><div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{q.label}</div></div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA strip ───────────────────────────────────────────── */
export function CtaStrip({ title = 'Ready to build it right the first time?', sub = 'Share your project and a senior engineer will send a scoped plan, timeline and fixed price within four hours.', cta = 'Get a Free Project Plan', bg = 'var(--surface-alt)' }: { title?: string; sub?: string; cta?: string; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y-sm) 0', background: bg }}>
      <div className="cb-container">
        <div style={{ background: 'var(--surface-ink)', color: 'var(--on-ink-body)', borderRadius: 'var(--r-lg)', padding: 'clamp(28px, 4vw, 48px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h3)', marginBottom: 8 }}>{title}</h2>
            <p style={{ lineHeight: 1.65 }}>{sub}</p>
          </div>
          <Link href="/contact" className="btn btn--on-ink btn--lg">{cta} <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}

export type { Faq };

/* ── outcome band (value / label / footnote) ─────────────── */
export function ResultsBand({ title = 'Results That Move the Needle', items, bg = 'var(--surface-alt)' }: { title?: string; items: { value: string; label: string; sub?: string }[]; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow="Outcomes" title={title} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {items.map(r => (
            <div key={r.label} className="card card--flat" style={{ background: bg === 'var(--surface)' ? 'var(--surface-alt)' : '#fff' }}>
              <div style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3rem)', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.05em', lineHeight: 1 }}>{r.value}</div>
              <div style={{ fontWeight: 700, color: 'var(--ink)', marginTop: 12 }}>{r.label}</div>
              {r.sub && <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>{r.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── featured case band: proof left, quote right ─────────── */
export function CaseBand({ client, headline, text, quote, cite, bg = 'var(--surface)' }: { client: string; headline: string; text: string; quote: string; cite: string; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y-sm) 0', background: bg }}>
      <div className="cb-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0, background: 'var(--surface-ink)', color: 'var(--on-ink-body)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'clamp(28px, 4vw, 52px)' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-bright)' }}>Case study · {client}</span>
            <h3 style={{ color: '#fff', fontSize: 'var(--fs-h3)', margin: '14px 0 12px', lineHeight: 1.25 }}>{headline}</h3>
            <p style={{ lineHeight: 1.7 }}>{text}</p>
          </div>
          <blockquote style={{ margin: 0, padding: 'clamp(28px, 4vw, 52px)', borderLeft: '1px solid var(--line-ink)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ color: '#fff', fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', lineHeight: 1.6, fontWeight: 500, marginBottom: 16 }}>&ldquo;{quote}&rdquo;</p>
            <cite style={{ fontStyle: 'normal', fontSize: 14, color: 'var(--on-ink-muted)' }}>— {cite}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ── generic titled card grid (challenges, why-us, trends…) ── */
export function CardGrid({ eyebrow, title, sub, items, bg = 'var(--surface)', min = 260 }: { eyebrow: string; title: string; sub?: string; items: { title: string; desc: string; href?: string; tag?: string }[]; bg?: string; min?: number }) {
  const inner = bg === 'var(--surface)' ? 'var(--surface-alt)' : '#fff';
  return (
    <section style={{ padding: 'var(--section-y) 0', background: bg }}>
      <div className="cb-container">
        <Head eyebrow={eyebrow} title={title} sub={sub} />
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: 16 }}>
          {items.map((it, i) => {
            const body = (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span className="idx">[ {String(i + 1).padStart(2, '0')} ]</span>
                  {it.tag && <span className="pill pill--brand" style={{ height: 26, fontSize: 11 }}>{it.tag}</span>}
                </div>
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>{it.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{it.desc}</p>
                {it.href && <span className="link-arrow" style={{ marginTop: 14, fontSize: 14 }}>Learn more <Arrow /></span>}
              </>
            );
            return it.href
              ? <Link key={it.title} href={it.href} className="card" style={{ display: 'flex', flexDirection: 'column', background: inner }}>{body}</Link>
              : <div key={it.title} className="card card--flat" style={{ display: 'flex', flexDirection: 'column', background: inner }}>{body}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
