'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface CityServicePageProps {
  cityName: string;
  citySlug: string;
  province: string;
  provinceAbbr: string;
  isHQ: boolean;
  serviceName: string;
  serviceSlug: string;
  heroContext: string;
  heroDescription: string;
  badge: string;
  stats: { value: string; label: string }[];
  largeServices: { icon: string; title: string; desc: string; tags?: string[] }[];
  smallServices: { icon: string; title: string; desc: string }[];
  whyCity: { icon: string; title: string; desc: string }[];
  steps: { num: string; title: string; duration: string; desc: string; deliverables: string[] }[];
  techCategories: { title: string; items: string[] }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
  pricingTiers: { name: string; range: string; features: string[] }[];
  faqs: { q: string; a: string }[];
  relatedSubServices: { name: string; slug: string }[];
  relatedCityServices: { name: string; citySlug: string; serviceSlug: string }[];
}

// ─── SHARED STYLES ───────────────────────────────────────────────────────────

const sectionPad: React.CSSProperties = { padding: 'clamp(60px, 10vw, 120px) 0' };
const sectionBorder: React.CSSProperties = { borderTop: '1px solid rgba(255,255,255,0.07)' };
const heading2: React.CSSProperties = { fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 };
const subLabel: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: 20 };
const bodyText: React.CSSProperties = { fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 };
const autoGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'clamp(16px, 2vw, 20px)' };

function hoverCard(e: React.MouseEvent, on: boolean) {
  const t = e.currentTarget as HTMLElement;
  t.style.borderColor = on ? 'rgba(245,41,13,0.2)' : 'rgba(255,255,255,0.08)';
  t.style.background = on ? 'rgba(245,41,13,0.03)' : 'rgba(255,255,255,0.02)';
  t.style.transform = on ? 'translateY(-4px)' : '';
  t.style.boxShadow = on ? '0 24px 60px rgba(0,0,0,0.5)' : '';
}

const cardStyle: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.02)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function CityServicePageClient(props: CityServicePageProps) {
  const {
    cityName, citySlug, province, provinceAbbr, isHQ,
    serviceName, serviceSlug, heroContext, heroDescription, badge,
    stats, largeServices, smallServices, whyCity, steps,
    techCategories, testimonials, pricingTiers, faqs,
    relatedSubServices, relatedCityServices,
  } = props;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const portfolioRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const pricingRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const relatedRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  // Portfolio placeholder data
  const portfolioItems = [
    { title: 'Enterprise SaaS Platform', industry: 'Technology', desc: 'End-to-end platform serving 10,000+ users across the province.', metrics: '10x faster workflows', gradient: 'linear-gradient(135deg, rgba(245,41,13,0.15), rgba(245,41,13,0.03))' },
    { title: 'E-Commerce Mobile App', industry: 'Retail', desc: 'High-conversion shopping experience with real-time inventory sync.', metrics: '340% ROI in 6 months', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    { title: 'Healthcare Dashboard', industry: 'Healthcare', desc: 'HIPAA-compliant analytics platform for patient data management.', metrics: '98% uptime SLA', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* ════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: '100px 0 120px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '5%', width: 600, height: 600, background: 'radial-gradient(ellipse,rgba(245,41,13,0.08) 0%,transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>

              {/* Left column */}
              <div>
                {/* Breadcrumb */}
                <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Locations', href: '/locations' },
                    { label: cityName, href: `/locations/${citySlug}` },
                  ].map((crumb, i) => (
                    <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Link href={crumb.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#f5290d'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                        {crumb.label}
                      </Link>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>/</span>
                    </span>
                  ))}
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{serviceName}</span>
                </nav>

                {/* Badge */}
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(245,41,13,0.08)', border: '1px solid rgba(245,41,13,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f5290d', boxShadow: '0 0 8px #f5290d' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#f5290d', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{badge}</span>
                </div>

                {/* H1 */}
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  {serviceName} Company in{' '}<span style={{ color: '#f5290d' }}>{cityName}</span>
                </h1>

                {/* Hero context paragraph */}
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
                  {heroContext}
                </p>

                {/* CTAs */}
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#f5290d', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(245,41,13,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                    View Case Studies
                  </Link>
                </div>

                {/* Stats strip (inline in hero) */}
                <div className="reveal reveal-d4" style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 16 }}>
                  {stats.map((s, i) => (
                    <div key={s.label} style={{ textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingRight: i < stats.length - 1 ? 16 : 0 }}>
                      <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#f5290d', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            2. STATS STRIP
        ════════════════════════════════════════════ */}
        <section ref={statsRef} style={{ ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: '52px 40px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            3. SERVICES BREAKDOWN
        ════════════════════════════════════════════ */}
        <section ref={servicesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={subLabel}>What We Build</div>
              <h2 style={heading2}>{serviceName} Services We Offer in {cityName}</h2>
            </div>

            {/* Large cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 20, marginBottom: 20 }}>
              {largeServices.slice(0, 2).map(s => (
                <div key={s.title} style={{ ...cardStyle, padding: '48px 44px', borderRadius: 32, position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #f5290d, transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.03em', marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ ...bodyText, marginBottom: s.tags && s.tags.length > 0 ? 28 : 0 }}>{s.desc}</p>
                  {s.tags && s.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100 }}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Small cards */}
            <div className="reveal reveal-d2" style={autoGrid}>
              {smallServices.map(s => (
                <div key={s.title} style={{ ...cardStyle, padding: '32px 28px', borderRadius: 24, position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #f5290d, transparent)' }} />
                  <div style={{ fontSize: 24, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            4. WHY CITY
        ════════════════════════════════════════════ */}
        <section ref={whyRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>Local Advantage</div>
              <h2 style={{ ...heading2, maxWidth: 800, margin: '0 auto' }}>Why {cityName} Businesses Choose {serviceName}</h2>
            </div>
            <div className="reveal reveal-d1" style={autoGrid}>
              {whyCity.map((w, i) => (
                <div key={w.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ ...cardStyle, padding: '44px 36px' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            5. OUR PROCESS
        ════════════════════════════════════════════ */}
        <section ref={processRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={subLabel}>Our Process</div>
              <h2 style={heading2}>Our {serviceName} Process</h2>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(245,41,13,0.5), rgba(245,41,13,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${Math.min(i + 1, 5)}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 32, alignItems: 'start', padding: '32px 0' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(245,41,13,0.4)', background: 'rgba(245,41,13,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#f5290d', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>

                    <div style={{ ...cardStyle, padding: '32px 40px' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,41,13,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(245,41,13,0.03)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#f5290d', background: 'rgba(245,41,13,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ ...bodyText, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            6. TECH STACK
        ════════════════════════════════════════════ */}
        <section ref={techRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={subLabel}>Technology</div>
                <h2 style={heading2}>Technologies We Use</h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Best-in-class tools chosen for performance, reliability, and long-term maintainability.
              </p>
            </div>
            <div className="reveal reveal-d1" style={autoGrid}>
              {techCategories.map(cat => (
                <div key={cat.title} style={{ ...cardStyle }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,41,13,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(245,41,13,0.02)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f5290d', marginBottom: 20 }}>{cat.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.items.map(item => (
                      <span key={item} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.35)'; e.currentTarget.style.color = '#f5290d'; e.currentTarget.style.background = 'rgba(245,41,13,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            7. PORTFOLIO / CASE STUDIES
        ════════════════════════════════════════════ */}
        <section ref={portfolioRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={subLabel}>Portfolio</div>
                <h2 style={heading2}>Projects We&apos;ve Built for {province} Clients</h2>
              </div>
              <Link href="/case-studies" style={{ fontSize: 14, fontWeight: 600, color: '#f5290d', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: '0.2s' }}
                onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                onMouseLeave={e => e.currentTarget.style.gap = '8px'}>
                View All Case Studies
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20 }}>
              {portfolioItems.map((p, i) => (
                <div key={p.title} className={`reveal reveal-d${i + 1}`} style={{ ...cardStyle, padding: 0, overflow: 'hidden', borderRadius: 28 }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ height: 200, background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                    </div>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f5290d', marginBottom: 10, display: 'block' }}>{p.industry}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#f5290d', background: 'rgba(245,41,13,0.08)', padding: '6px 14px', borderRadius: 100 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 12l-4-4v3H2v2h16v3l4-4z" /></svg>
                      {p.metrics}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            8. TESTIMONIALS
        ════════════════════════════════════════════ */}
        <section ref={testimonialsRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>Testimonials</div>
              <h2 style={heading2}>What {cityName} Clients Say</h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={t.name} className={`reveal reveal-d${Math.min(i + 1, 3)}`} style={{ ...cardStyle, padding: '44px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  {/* Quote icon */}
                  <div>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(245,41,13,0.3)" style={{ marginBottom: 20 }}><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" /></svg>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 28 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(245,41,13,0.12)', border: '1px solid rgba(245,41,13,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#f5290d', flexShrink: 0 }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            9. PRICING
        ════════════════════════════════════════════ */}
        <section ref={pricingRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>Investment</div>
              <h2 style={heading2}>{serviceName} Costs in {cityName}</h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginTop: 16, maxWidth: 560, margin: '16px auto 0' }}>
                Transparent pricing with fixed-price sprints. No hidden fees, ever.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {pricingTiers.map((tier, i) => (
                <div key={tier.name} className={`reveal reveal-d${Math.min(i + 1, 3)}`}
                  style={{ ...cardStyle, padding: '44px 36px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  {i === 1 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#f5290d' }} />}
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === 1 ? '#f5290d' : 'rgba(255,255,255,0.3)', marginBottom: 12 }}>{tier.name}</div>
                    <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{tier.range}</div>
                  </div>
                  <div style={{ flex: 1, marginBottom: 32 }}>
                    {tier.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '16px 36px', borderRadius: 100, background: i === 1 ? '#f5290d' : 'transparent', border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; if (i === 1) e.currentTarget.style.boxShadow = '0 16px 40px rgba(245,41,13,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get Exact Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            10. FAQ
        ════════════════════════════════════════════ */}
        <section ref={faqRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container" style={{ maxWidth: 860 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>FAQ</div>
              <h2 style={heading2}>Frequently Asked Questions About {serviceName} in {cityName}</h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((faq, i) => (
                <div key={i}
                  style={{ background: openFaq === i ? 'rgba(245,41,13,0.04)' : 'rgba(255,255,255,0.02)', border: `1px solid ${openFaq === i ? 'rgba(245,41,13,0.2)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s, background 0.3s' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#fff', textAlign: 'left', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#f5290d' : 'rgba(255,255,255,0.7)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  <div
                    style={{ maxHeight: openFaq === i ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                    <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.44)', lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            11. RELATED SERVICES
        ════════════════════════════════════════════ */}
        <section ref={relatedRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            {/* Related city+service pages */}
            {relatedCityServices.length > 0 && (
              <div className="reveal" style={{ marginBottom: 64 }}>
                <div style={subLabel}>Explore</div>
                <h2 style={{ ...heading2, marginBottom: 32 }}>Related Services in {cityName}</h2>
                <div style={autoGrid}>
                  {relatedCityServices.map(rs => (
                    <Link key={`${rs.citySlug}-${rs.serviceSlug}`} href={`/locations/${rs.citySlug}/${rs.serviceSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ ...cardStyle, padding: '24px 28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                        <span style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>{rs.name}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related sub-service pages */}
            {relatedSubServices.length > 0 && (
              <div className="reveal reveal-d2">
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.03em', marginBottom: 24 }}>Explore Our {serviceName} Services</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {relatedSubServices.map(sub => (
                    <Link key={sub.slug} href={`/services/${serviceSlug}/${sub.slug}`} style={{ padding: '10px 22px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: '0.25s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.35)'; e.currentTarget.style.color = '#f5290d'; e.currentTarget.style.background = 'rgba(245,41,13,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'transparent'; }}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════════
            12. BOTTOM CTA
        ════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(80px, 12vw, 140px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center', ...sectionBorder }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,rgba(245,41,13,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Ready to Build?</div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Start Your {serviceName} Project in{' '}<span style={{ color: '#f5290d' }}>{cityName}</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.38)', maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.7 }}>
              {heroDescription}
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#f5290d', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(245,41,13,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href={`/locations/${citySlug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                All {cityName} Services
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'Canadian Data Residency'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media(max-width:768px){
          .cb-container{padding-left:20px!important;padding-right:20px!important;}
        }
        @media(max-width:640px){
          [style*="grid-template-columns: repeat(4"]{grid-template-columns:repeat(2,1fr)!important;}
          [style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}
          [style*="grid-template-columns: 48px"]{grid-template-columns:1fr!important;}
          [style*="grid-template-columns: 48px"] > div:first-child{display:none!important;}
        }
      `}</style>
    </>
  );
}
