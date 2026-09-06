'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { industryMedia } from '@/data/media';

const industries = [
  { key: 'fintech', name: 'FinTech', desc: 'Secure payment systems, trading platforms and compliance tools for modern finance.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { key: 'healthcare', name: 'Healthcare', desc: 'HIPAA-compliant telehealth apps, EHR systems and patient-first digital portals.', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  { key: 'ecommerce', name: 'E-Commerce', desc: 'Headless commerce platforms and high-scale multi-vendor retail ecosystems.', icon: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' },
  { key: 'logistics', name: 'Logistics', desc: 'Smart fleet tracking, route optimisation and automated warehouse management.', icon: 'M10 17h4V5H2v12h3m1 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0' },
  { key: 'edtech', name: 'Education', desc: 'Adaptive LMS platforms, e-learning tools and AI-powered digital certifications.', icon: 'M12 19l9 2V6l-9-2-9 2v15l9-2z' },
  { key: 'enterprise', name: 'Enterprise', desc: 'Complex ERP systems, BI dashboards and enterprise workflow automation.', icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5' },
];

export default function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="industries" className="section-padding" style={{ background: 'var(--surface-alt)', borderTop: '1px solid var(--line)' , position: 'relative', overflow: 'hidden'}}>
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(32px, 8vw, 80px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 20 }}>Expertise</div>
          <div className="industries-heading-grid">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Domain Experts.<br /><span style={{ color: 'var(--faint)' }}>Strategic Partners.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
              Deep domain knowledge combined with world-class engineering — we build market leaders, not just software.
            </p>
          </div>
        </div>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`reveal reveal-d${Math.min(i + 1, 6)}`}
              style={{ border: '1px solid var(--line)', borderRadius: 'clamp(18px, 4vw, 26px)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color .3s ease, transform .3s ease, box-shadow .3s ease', background: 'var(--surface)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brand-line)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(20,17,24,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div className="media media--flat media--zoom" style={{ height: 168 }}>
                <Image
                  src={industryMedia[ind.key].src}
                  alt={industryMedia[ind.key].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: 'clamp(20px, 3vw, 30px)', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                <div>
                  <h4 style={{ fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, letterSpacing: '-0.02em' }}>{ind.name}</h4>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--brand)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>
                  LEARN MORE
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', paddingTop: 48 }}>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 48, padding: '0 28px', borderRadius: 100,
            background: 'var(--surface-sunk)', border: '1px solid var(--line)',
            color: 'var(--ink)', fontSize: 14, fontWeight: 600,
            textDecoration: 'none', transition: 'all 0.3s ease',
          }}>
            Discuss Your Industry Needs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
