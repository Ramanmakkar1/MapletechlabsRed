'use client';
import Image from 'next/image';
import { caseStudyMedia, workMedia } from '@/data/media';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import MediaBand from '@/components/MediaBand';
import FinalCta from '@/components/home/FinalCta';

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

const caseStudies = [
  {
    slug: 'fintech-trading-platform',
    category: 'Fintech',
    title: 'AI-Powered Trading Platform',
    client: 'Axion Capital \u00b7 Toronto',
    description: 'Built a real-time AI trading engine processing 75K+ daily transactions with 99.99% uptime and sub-50ms latency.',
    metric: { value: '75K+', label: 'Daily Transactions' },
    tech: ['React', 'Python', 'AWS', 'PostgreSQL'],
    },
  {
    slug: 'healthcare-telehealth',
    category: 'Healthcare',
    title: 'HIPAA-Compliant Telehealth Platform',
    client: 'ClinicFlow Health \u00b7 Vancouver',
    description: 'Developed a telehealth platform serving 450K+ patient records with HIPAA/PIPEDA compliance and 40% admin reduction.',
    metric: { value: '450K+', label: 'Patient Records' },
    tech: ['React Native', 'WebRTC', 'Node.js', 'AWS'],
    },
  {
    slug: 'ecommerce-platform',
    category: 'E-Commerce',
    title: 'Enterprise E-Commerce Redesign',
    client: 'NorthStar E-Commerce \u00b7 Montreal',
    description: 'Redesigned checkout flow for 2M+ monthly visitors, increasing conversion rate from 2.1% to 3.8% in 90 days.',
    metric: { value: '3.8%', label: 'Conversion Rate' },
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    },
  {
    slug: 'logistics-platform',
    category: 'Logistics',
    title: 'Real-Time Fleet Management System',
    client: 'RouteLogic Inc. \u00b7 Calgary',
    description: 'Built IoT-integrated platform tracking 500 trucks with 15K+ daily deliveries, achieving 25% fuel cost reduction ($180K annually).',
    metric: { value: '180K', label: 'Annual Savings' },
    tech: ['React', 'Python', 'TensorFlow', 'AWS IoT'],
    },
  {
    slug: 'payments-api-platform',
    category: 'Fintech',
    title: 'PCI DSS Payments API',
    client: 'PayBridge Solutions \u00b7 Ottawa',
    description: 'Engineered secure payments processing API handling 12M+ monthly transactions with PCI DSS compliance.',
    metric: { value: '12M+', label: 'Monthly Transactions' },
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS KMS'],
    },
  {
    slug: 'real-estate-portal',
    category: 'Real Estate',
    title: 'Multi-Listing Real Estate Platform',
    client: 'PropConnect Canada \u00b7 Toronto',
    description: 'Developed ML-powered property recommendation engine for 850K+ active listings across Canada.',
    metric: { value: '850K+', label: 'Active Listings' },
    tech: ['React', 'Node.js', 'TensorFlow', 'Elasticsearch'],
    },
];

const categoryColors: Record<string, string> = { default: '#E11900' };

const categories = ['All', 'Fintech', 'Healthcare', 'E-Commerce', 'Logistics', 'Real Estate'];

export default function CaseStudiesPageClient() {
  const pageRef = useReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = caseStudies.filter(
    cs => activeCategory === 'All' || cs.category === activeCategory
  );

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: 'var(--surface)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'var(--hero-top) 0 var(--section-y)', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
            width: 800, height: 800,
            background: 'transparent',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Case Studies' },
            ]} />

            <div className="reveal" style={{ marginBottom: 24, marginTop: 32 }}>
              <span style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                color: 'var(--brand)',
              }}>
                Client Success Stories
              </span>
            </div>
            <h1 className="reveal reveal-d1" style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24, maxWidth: 800,
            }}>
              Our Work Speaks<br />for Itself
            </h1>
            <p className="reveal reveal-d2" style={{
              fontSize: 18, color: 'var(--muted)', lineHeight: 1.7,
              maxWidth: 600, marginBottom: 48,
            }}>
              Real results from real projects. Explore how we&apos;ve helped Canadian businesses
              across fintech, healthcare, e-commerce, and logistics build scalable, high-performance software.
            </p>

            {/* Category filter pills */}
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    background: activeCategory === cat ? '#E11900' : 'var(--line)',
                    color: activeCategory === cat ? 'var(--ink)' : 'var(--body)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <MediaBand media={workMedia.healthcare} />

        {/* ── CASE STUDIES GRID ── */}
        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <p className="reveal" style={{
              fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
              color: 'var(--faint)', marginBottom: 40,
            }}>
              {activeCategory === 'All' ? 'All Projects' : activeCategory + ' Projects'}
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
              gap: 24,
            }}>
              {filtered.map((cs, i) => {
                const accentColor = 'var(--brand)';
                return (
                  <Link key={cs.slug} href={`/case-studies/${cs.slug}`} style={{ textDecoration: 'none' }}>
                    <article
                      className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                      style={{
                        background: 'var(--surface-alt)',
                        border: '1px solid var(--line)',
                        borderRadius: 24,
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand)';
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                        (e.currentTarget as HTMLElement).style.background = 'var(--surface-alt)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Project photo, 16:9, with the headline metric over it */}
                      <div className="media media--flat media--zoom" style={{ width: '100%', aspectRatio: '16/9', borderBottom: '1px solid var(--line)' }}>
                        <Image
                          src={caseStudyMedia[cs.slug]?.src ?? workMedia.fintech.src}
                          alt={caseStudyMedia[cs.slug]?.alt ?? cs.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="media__scrim" aria-hidden />
                        <div style={{ position: 'absolute', left: 20, bottom: 16, zIndex: 1 }}>
                          <div style={{
                            fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: '#fff',
                            letterSpacing: '-0.03em', lineHeight: 1, textShadow: '0 2px 12px rgba(0,0,0,.4)',
                          }}>
                            {cs.metric.value}
                          </div>
                          <div style={{
                            fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                            color: 'rgba(255,255,255,.88)', marginTop: 6, textShadow: '0 1px 8px rgba(0,0,0,.5)',
                          }}>
                            {cs.metric.label}
                          </div>
                        </div>
                      </div>

                      {/* Card body */}
                      <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        {/* Category badge */}
                        <div style={{ marginBottom: 16 }}>
                          <span style={{
                            fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                            background: 'var(--brand)', color: '#fff',
                            padding: '4px 12px', borderRadius: 100,
                          }}>
                            {cs.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize: 20, fontWeight: 600, color: 'var(--ink)',
                          letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 8,
                        }}>
                          {cs.title}
                        </h3>

                        {/* Client */}
                        <p style={{
                          fontSize: 13, color: 'var(--faint)', marginBottom: 12,
                        }}>
                          {cs.client}
                        </p>

                        {/* Description */}
                        <p style={{
                          fontSize: 14, color: 'var(--muted)', lineHeight: 1.7,
                          marginBottom: 24, flexGrow: 1,
                        }}>
                          {cs.description}
                        </p>

                        {/* Tech stack tags */}
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                          {cs.tech.map(t => (
                            <span key={t} style={{
                              fontSize: 11, fontWeight: 600, color: 'var(--muted)',
                              padding: '5px 12px', border: '1px solid var(--line)',
                              borderRadius: 100, background: 'var(--surface-alt)',
                            }}>
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* CTA link */}
                        <div style={{
                          paddingTop: 20, borderTop: '1px solid var(--line)',
                          marginTop: 'auto',
                        }}>
                          <span style={{
                            fontSize: 13, fontWeight: 600, color: 'var(--brand)',
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                          }}>
                            Read Case Study
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 32,
              textAlign: 'center',
            }}>
              {[
                { value: '500+', label: 'Projects Shipped' },
                { value: '150+', label: 'Happy Clients' },
                { value: '99%', label: 'Satisfaction Rate' },
                { value: '12', label: 'Canadian Cities' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--ink)',
                    letterSpacing: '-0.03em', lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--faint)', marginTop: 10,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <FinalCta title="Want results like these?" sub="Every project on this page started with one conversation. Tell us what you\u2019re building and we\u2019ll scope it within four hours." />

      </main>
      <Footer />
    </>
  );
}
