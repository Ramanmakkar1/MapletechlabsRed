'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { industryMedia } from '@/data/media';

const industries = [
  { key: 'healthcare', name: 'Healthcare',  href: '/industries/healthcare', desc: 'HIPAA- and PIPEDA-compliant telehealth apps, EHR systems and patient-first portals that clinicians actually use.' },
  { key: 'fintech',    name: 'FinTech',     href: '/industries/fintech',    desc: 'Secure payment systems, trading platforms and compliance tooling — built for OSFI and PCI DSS from day one.' },
  { key: 'ecommerce',  name: 'E-Commerce',  href: '/industries/ecommerce',  desc: 'Headless commerce and high-scale multi-vendor platforms engineered around checkout conversion.' },
  { key: 'logistics',  name: 'Logistics',   href: '/industries/logistics',  desc: 'Fleet tracking, route optimisation and warehouse automation with IoT integration in the field.' },
  { key: 'edtech',     name: 'Education',   href: '/industries/edtech',     desc: 'Adaptive LMS platforms, e-learning tools and AI-assisted assessment for schools and training providers.' },
  { key: 'enterprise', name: 'Enterprise',  href: '/industries/enterprise', desc: 'ERP systems, BI dashboards and workflow automation that connect the whole organisation.' },
];

/* Photo · vertical tab list · description — the reference's sector block. */
export default function IndustriesTabs() {
  const [i, setI] = useState(0);
  const cur = industries[i];
  const m = industryMedia[cur.key];
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
          <h2 style={{ margin: 0, maxWidth: 560 }}>Solving Complex Challenges Across Every Major Sector</h2>
          <Link href="/industries" className="btn btn--ghost btn--sm">See All Industries</Link>
        </div>
        <div className="ind-tabs">
          <div className="media media--lg" style={{ aspectRatio: '4 / 3' }}>
            <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1023px) 100vw, 300px" style={{ objectFit: 'cover' }} />
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 6 }}>
            {industries.map((ind, n) => (
              <li key={ind.key}>
                <button onClick={() => setI(n)} onMouseEnter={() => setI(n)} aria-pressed={n === i} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0', fontFamily: 'inherit', fontSize: 'clamp(1.25rem, 1.9vw, 1.6rem)', fontWeight: 600, letterSpacing: '-0.02em', color: n === i ? 'var(--ink)' : 'var(--faint)', transition: 'color .2s' }}>{ind.name}</button>
              </li>
            ))}
          </ul>
          <div style={{ paddingTop: 8 }}>
            <p style={{ color: 'var(--body)', lineHeight: 1.75, marginBottom: 24 }}>{cur.desc}</p>
            <Link href={cur.href} className="btn btn--ghost btn--sm">Know More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
