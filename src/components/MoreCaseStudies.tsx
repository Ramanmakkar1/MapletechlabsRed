import Link from 'next/link';
import { work } from '@/data/work';

export default function MoreCaseStudies({ current }: { current: string }) {
  const others = work.filter((w) => w.slug !== current).slice(0, 3);
  if (others.length === 0) return null;

  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 28px' }}>
          More case studies
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {others.map((w) => (
            <Link
              key={w.slug}
              href={w.href}
              style={{ textDecoration: 'none', display: 'block', border: '1px solid var(--line)', borderRadius: 12, padding: 24 }}
            >
              <div style={{ fontSize: 13, color: 'var(--body)' }}>
                {w.category} · {w.city}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 600, color: 'var(--ink)', margin: '8px 0' }}>{w.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.6 }}>{w.desc}</p>
              <span style={{ color: 'var(--brand)', fontWeight: 500 }}>Read case study →</span>
            </Link>
          ))}
        </div>
        <Link
          href="/case-studies"
          style={{ color: 'var(--brand)', fontWeight: 500, marginTop: 24, display: 'inline-block', textDecoration: 'none' }}
        >
          View all case studies
        </Link>
      </div>
    </section>
  );
}
