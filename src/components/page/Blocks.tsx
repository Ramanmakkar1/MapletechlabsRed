import Image from 'next/image';
import Link from 'next/link';
import { blogMedia, industryMedia, defaultMedia, type Media } from '@/data/media';
import { work } from '@/data/work';
import { quotes } from '@/data/testimonials';
import type { Faq, IndustryCard, ServiceCard, Stat, Step, TechCategory } from './types';

/**
 * Column count for a card grid, chosen so the last row is never half empty.
 * Prefers three across, then four, then two — and only if the result is at
 * most four rows deep. Counts that cannot divide evenly (5, 7, 10, 11…) get
 * `null`, and the caller renders a divider list instead of an orphaned grid.
 */
function columns(n: number): number | null {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  if (n === 4) return 2;          // 2 × 2 reads better than a single row of four
  for (const c of [3, 4, 2]) {
    if (n % c === 0 && n / c <= 4) return c;
  }
  return null;
}
const gridFor = (n: number) => {
  const c = columns(n);
  return c ? `grid grid--${c}` : null;
};

const Arrow = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M17 7H9M17 7v8" /></svg>;

/* One section head everywhere: heading, optional lede, optional action.
   No per-section eyebrow — one kicker on the hero is voice, one on every
   section is scaffolding. */
const Head = ({ title, sub, right }: { title: string; sub?: string; right?: React.ReactNode }) => (
  <div className="head">
    <div>
      <h2>{title}</h2>
      {sub && <p className="lede">{sub}</p>}
    </div>
    {right}
  </div>
);

/* A titled list on divider rows — the fallback whenever a card grid would
   leave an empty cell, and a deliberate change of shape besides. */
const RowList = ({ items }: { items: { title: string; desc: string; href?: string }[] }) => (
  <ul className="rows">
    {items.map(it => (
      <li key={it.title}>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: 0 }}>{it.title}</h3>
        <div>
          <p style={{ color: 'var(--body)', lineHeight: 1.7, maxWidth: '62ch' }}>{it.desc}</p>
          {it.href && <Link href={it.href} className="link-arrow" style={{ marginTop: 10, fontSize: 14 }}>Learn more <Arrow /></Link>}
        </div>
      </li>
    ))}
  </ul>
);

/* ── stat band under the hero ────────────────────────────── */
export function StatRow({ stats }: { stats: Stat[] }) {
  const items = stats.slice(0, 4);
  if (!items.length) return null;
  return (
    <section aria-label="Key numbers" style={{ padding: 'clamp(20px, 2.4vw, 34px) 0' }}>
      <div className="cb-container">
        <dl className="stats-strip-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 0, margin: 0, border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', background: 'var(--surface-alt)' }}>
          {items.map((s, i) => (
            <div key={s.label} style={{ padding: 'clamp(24px, 2.8vw, 38px)', borderLeft: i === 0 ? undefined : '1px solid var(--line)' }}>
              <dt style={{ fontSize: 'clamp(2rem, 3.2vw, 2.9rem)', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.05em', lineHeight: 1 }}>{s.value}</dt>
              <dd style={{ margin: '12px 0 0', fontSize: 14, color: 'var(--body)', fontWeight: 500 }}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── services / capabilities ─────────────────────────────── */
export function ServicesGrid({ title, sub, items }: { title: string; sub?: string; items: ServiceCard[]; bg?: string }) {
  const cls = gridFor(items.length);
  const anyChips = items.some(s => s.chips?.length);
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title={title} sub={sub} />
        {cls ? (
          <div className={cls}>
            {items.map(s => (
              <article key={s.title} className="tile rise">
                {s.tag && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', marginBottom: 12 }}>{s.tag}</span>}
                <h3 className="clamp-2" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{s.title}</h3>
                {/* every card holds the same three lines, so a row stays level */}
                <p className="clamp-3" style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{s.desc}</p>
                {anyChips && (
                  <div className="tile__foot" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', paddingTop: 18 }}>
                    {(s.chips ?? []).slice(0, 3).map(c => <span key={c} className="pill" style={{ height: 28, fontSize: 12 }}>{c}</span>)}
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : <RowList items={items} />}
      </div>
    </section>
  );
}

/* ── delivery process ────────────────────────────────────── */
export function ProcessSteps({ title = 'How we deliver', steps }: { title?: string; steps: Step[]; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title={title} sub="Fixed milestones, working software every fortnight, and no surprises on the invoice." />
        {/* A connected spine, so the numbers mark a real sequence rather than
            decorating six lookalike cards. */}
        <ol className="steps">
          {steps.map((st, i) => (
            <li key={st.num}>
              <div className="steps__node">
                <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="steps__body">
                <div className="steps__head">
                  <h3>{st.title}</h3>
                  {st.duration && <span className="steps__when">{st.duration}</span>}
                </div>
                <p>{st.desc}</p>
                {st.deliverables?.length ? (
                  <div className="steps__out">
                    {st.deliverables.map(d => <span key={d}>{d}</span>)}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── technology ──────────────────────────────────────────── */
export function TechBlocks({ title = 'The stack behind your platform', cats }: { title?: string; cats: TechCategory[]; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title={title} sub="Chosen per project for what it has to do, not for what is fashionable." />
        <ul className="rows">
          {cats.map(c => (
            <li key={c.label}>
              <h3 style={{ fontSize: 'var(--fs-h4)', margin: 0 }}>{c.label}</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{c.chips.map(ch => <span key={ch} className="pill">{ch}</span>)}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── industries ──────────────────────────────────────────── */
const mediaFor = (title: string): Media => {
  const k = title.toLowerCase().replace(/[^a-z]/g, '');
  const map: Record<string, string> = { fintech: 'fintech', finance: 'fintech', banking: 'fintech', healthcare: 'healthcare', ecommerce: 'ecommerce', retail: 'ecommerce', logistics: 'logistics', education: 'edtech', edtech: 'edtech', enterprise: 'enterprise', saas: 'enterprise' };
  return industryMedia[map[k]] ?? blogMedia[k.length % blogMedia.length] ?? defaultMedia;
};

export function IndustryRow({ title, items }: { title: string; items: IndustryCard[]; bg?: string }) {
  /* six is the balanced count; anything else is trimmed to one that is */
  const trimmed = items.slice(0, columns(items.length) ? items.length : Math.max(3, Math.floor(items.length / 3) * 3));
  const cls = gridFor(trimmed.length) ?? 'grid grid--3';
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title={title} right={<Link href="/industries" className="btn btn--ghost">All industries</Link>} />
        <div className={cls}>
          {trimmed.map(ind => { const m = mediaFor(ind.title); return (
            <article key={ind.title} className="tile rise" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="media media--flat" style={{ aspectRatio: '16 / 10' }}>
                <Image src={m.src} alt={m.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 'clamp(22px, 2.2vw, 28px)' }}>
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>{ind.title}</h3>
                <p className="clamp-3" style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{ind.desc}</p>
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
  { title: 'Fixed scope, fixed price', desc: 'You know the cost and the timeline before a line of code is written. No hourly billing, no scope-creep surprises.' },
  { title: 'You own everything', desc: 'Full source code, credentials and intellectual property transfer to you on final payment. We sign the IP assignment on day one.' },
  { title: 'Senior engineers only', desc: 'Every project is staffed by engineers with years of production experience — no juniors learning on your budget.' },
  { title: 'Canadian data residency', desc: 'Built for PIPEDA and provincial privacy law, with data kept on Canadian infrastructure where it matters.' },
  { title: '8-week MVP programme', desc: 'A focused, fixed-price path from idea to a launched product, refined across dozens of startup engagements.' },
  { title: 'Support after launch', desc: 'Tiered SLAs from monitoring and bug fixes to a dedicated team with 24/7 response. Most clients stay for years.' },
];

export function WhyUs({ bg }: { bg?: string }) {
  void bg;
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 style={{ maxWidth: '18ch' }}>Accountable partners, not outsourced vendors</h2>
            <p className="lede">How we price, who we staff and what happens after launch &mdash; the parts that decide whether a project actually lands.</p>
          </div>
          <Link href="/contact" className="btn btn--ghost">Talk to an engineer</Link>
        </div>

        {/* A bordered ledger, not six floating cards: shared hairlines make the
            six commitments read as one itemised agreement, which is the point
            of the section. */}
        <ul className="commitments">
          {reasons.map(r => (
            <li key={r.title}>
              <span className="commitments__mark" aria-hidden />
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── success stories ─────────────────────────────────────── */
export function SuccessStories({ title = 'Work we have shipped' }: { bg?: string; title?: string }) {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title={title} right={<Link href="/case-studies" className="btn btn--ghost">All case studies</Link>} />
        <div className="grid grid--3">
          {work.slice(0, 3).map(w => (
            <Link key={w.slug} href={w.href} className="tile rise" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="media media--flat media--zoom" style={{ aspectRatio: '16 / 10' }}>
                <Image src={w.media.src} alt={w.media.alt} fill sizes="(max-width: 639px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 'clamp(22px, 2.2vw, 28px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', marginBottom: 10 }}>{w.category} &middot; {w.city}</p>
                <h3 className="clamp-2" style={{ fontSize: 'var(--fs-h4)', marginBottom: 12 }}>{w.title}</h3>
                <div className="tile__foot" style={{ display: 'flex', gap: 28, paddingTop: 16 }}>
                  {w.metrics.slice(0, 2).map(m => (
                    <div key={m.label}>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1 }}>{m.value}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 5 }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── two client quotes ───────────────────────────────────── */
export function Voices({ bg }: { bg?: string }) {
  void bg;
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title="What clients say" />
        <div className="grid grid--2">
          {quotes.slice(0, 2).map(q => (
            <figure key={q.name} className="tile" style={{ margin: 0 }}>
              <blockquote style={{ margin: 0, fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)', color: 'var(--ink)', lineHeight: 1.6, fontWeight: 500 }}>&ldquo;{q.text}&rdquo;</blockquote>
              <figcaption className="tile__foot" style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--ink)' }}>{q.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>{q.role}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.04em', lineHeight: 1 }}>{q.metric}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{q.label}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── mid-page CTA strip ──────────────────────────────────── */
export function CtaStrip({ title = 'Ready to build it right the first time?', sub = 'Share your project and a senior engineer will send a scoped plan, timeline and fixed price within one working day.', cta = 'Get a free project plan' }: { title?: string; sub?: string; cta?: string; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <div style={{ background: 'var(--surface-ink)', color: 'var(--on-ink-body)', borderRadius: 'var(--r-lg)', padding: 'clamp(32px, 4vw, 56px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '46ch' }}>
            <h2 style={{ color: 'var(--on-ink)', fontSize: 'var(--fs-h3)', marginBottom: 10 }}>{title}</h2>
            <p style={{ lineHeight: 1.7 }}>{sub}</p>
          </div>
          <Link href="/contact" className="btn btn--on-ink btn--lg">{cta} <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}

export type { Faq };

/* ── outcome band ────────────────────────────────────────── */
export function ResultsBand({ title = 'Results that move the needle', items }: { title?: string; items: { value: string; label: string; sub?: string }[]; bg?: string }) {
  const cls = gridFor(items.length) ?? 'grid grid--3';
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title={title} />
        <div className={cls}>
          {items.map(r => (
            <div key={r.label} className="tile rise">
              <div style={{ fontSize: 'clamp(2.2rem, 3.4vw, 3rem)', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.05em', lineHeight: 1 }}>{r.value}</div>
              <div style={{ fontWeight: 700, color: 'var(--ink)', marginTop: 14 }}>{r.label}</div>
              {r.sub && <div style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 6 }}>{r.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── featured case band ──────────────────────────────────── */
export function CaseBand({ client, headline, text, quote, cite }: { client: string; headline: string; text: string; quote: string; cite: string; bg?: string }) {
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', background: 'var(--surface-ink)', color: 'var(--on-ink-body)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'clamp(32px, 4vw, 56px)' }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--on-ink)', letterSpacing: '.02em', marginBottom: 14 }}>Case study &middot; {client}</p>
            <h2 style={{ color: 'var(--on-ink)', fontSize: 'var(--fs-h3)', marginBottom: 14, lineHeight: 1.25 }}>{headline}</h2>
            <p style={{ lineHeight: 1.75 }}>{text}</p>
          </div>
          <blockquote style={{ margin: 0, padding: 'clamp(32px, 4vw, 56px)', borderLeft: '1px solid var(--line-ink)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ color: 'var(--on-ink)', fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', lineHeight: 1.6, fontWeight: 500, marginBottom: 16 }}>&ldquo;{quote}&rdquo;</p>
            <cite style={{ fontStyle: 'normal', fontSize: 14, color: 'var(--on-ink-muted)' }}>&mdash; {cite}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ── generic titled card grid (challenges, trends…) ──────── */
export function CardGrid({ title, sub, items, variant = 'cards' }: { eyebrow?: string; title: string; sub?: string; items: { title: string; desc: string; href?: string; tag?: string }[]; bg?: string; min?: number; variant?: 'cards' | 'rows' }) {
  const cls = variant === 'rows' ? null : gridFor(items.length);
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <Head title={title} sub={sub} />
        {cls ? (
          <div className={cls}>
            {items.map(it => {
              const body = (
                <>
                  {it.tag && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', marginBottom: 12 }}>{it.tag}</span>}
                  <h3 className="clamp-2" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{it.title}</h3>
                  <p className="clamp-3" style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{it.desc}</p>
                  {it.href && <span className="tile__foot link-arrow" style={{ paddingTop: 18, fontSize: 14 }}>Learn more <Arrow /></span>}
                </>
              );
              return it.href
                ? <Link key={it.title} href={it.href} className="tile rise">{body}</Link>
                : <div key={it.title} className="tile rise">{body}</div>;
            })}
          </div>
        ) : <RowList items={items} />}
      </div>
    </section>
  );
}
