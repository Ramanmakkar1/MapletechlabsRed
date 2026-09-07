'use client';
import Image from 'next/image';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { caseStudyMedia } from '@/data/media';
import MediaBand from '@/components/MediaBand';

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

const techStack = ['React', 'Node.js', 'Python', 'AWS ECS/Fargate', 'PostgreSQL', 'Redis', 'TensorFlow', 'FINTRAC Compliance'];

const metrics = [
  { value: '75K+', label: 'Daily Transactions' },
  { value: '99.99%', label: 'Uptime' },
  { value: '50ms', label: 'Avg Latency' },
  { value: '40%', label: 'Cost Reduction' },
];

export default function FintechCaseStudyClient() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: 'var(--surface)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(100px, 12vw, 140px) 0 clamp(40px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'transparent',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'AI-Powered Trading Platform' },
              ]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 16 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                background: 'transparent', border: '1px solid var(--brand)', color: 'var(--brand)',
                padding: '5px 14px', borderRadius: 100,
              }}>FinTech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'var(--faint)' }}>Axion Capital &middot; Toronto</span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              AI-Powered Trading Platform
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'var(--muted)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              We engineered a real-time algorithmic trading system that processes tens of thousands of transactions daily, powered by machine learning models and built for institutional-grade reliability.
            </p>

            <figure className="media media--lg fade" style={{ aspectRatio: '16 / 9', margin: '0 0 48px' }}>
              <Image src={caseStudyMedia['fintech-trading-platform'].src} alt={caseStudyMedia['fintech-trading-platform'].alt} fill priority sizes="(max-width: 1400px) 100vw, 1320px" style={{ objectFit: 'cover' }} />
            </figure>
          </div>
        </section>

        {/* ── OVERVIEW GRID ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 24,
            }}>
              {[
                { title: 'Challenge', text: 'Axion Capital\'s legacy monolith was processing only 25K daily transactions with frequent latency spikes during peak hours. They needed to 3x throughput while meeting FINTRAC regulatory compliance, maintain audit trails on every transaction, and reduce infrastructure costs.' },
                { title: 'Solution', text: 'Mapletech Labs rebuilt the platform from ground up using event-driven microservices on AWS Fargate. We integrated a custom TensorFlow ML model for real-time trade signal generation, implemented PostgreSQL with row-level security, and built a dedicated compliance microservice. Result: sub-50ms latency, institutional-grade reliability.' },
                { title: 'Results', text: 'Platform now handles 75K+ daily transactions with 99.99% uptime, 50ms average response time, zero failed orders, and 40% lower infrastructure costs. Delivered in 5 months. Client went from infrastructure firefighting to 100% focus on product and growth.' },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: 'clamp(24px, 4vw, 36px)', borderRadius: 24,
                  background: 'var(--surface-alt)', border: '1px solid var(--line)',
                }}>
                  <p style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                    color: 'var(--brand)', marginBottom: 16,
                  }}>{card.title}</p>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE ── */}
        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                color: 'var(--brand)', marginBottom: 16,
              }}>The Challenge</p>
              <h2 style={{
                fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Building for Speed, Scale, and Compliance</h2>

              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Axion Capital, a fast-growing Toronto-based trading firm, had outgrown their initial infrastructure. Their monolithic Node.js application, built in-house 4 years prior, could process only 25K transactions daily. During peak trading hours (9:30-10:30 AM EST), latency frequently spiked to 800ms-1000ms, causing trade orders to fail and eroding client confidence. The CEO was personally managing infrastructure crises instead of growing the business.
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Beyond performance, regulatory compliance was a critical blocker. FINTRAC required complete audit trails on every transaction, with proof of compliance for every single trade. The old system had fragmented logs spread across multiple systems, making audit reporting a nightmare. Additionally, the platform needed to support real-time sentiment analysis and trade signal generation using ML — something their existing monolith couldn't handle without grinding to a halt.
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8 }}>
                The client needed to integrate with 5 third-party market data providers, 2 payment processors, and 3 banking APIs — all while maintaining a seamless experience for both retail and institutional traders. The architecture had to be cloud-native, horizontally scalable, and resilient to market data provider outages.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR SOLUTION ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                color: 'var(--brand)', marginBottom: 16,
              }}>Our Solution</p>
              <h2 style={{
                fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Event-Driven Architecture with AI at the Core</h2>

              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                We designed an event-driven microservices architecture deployed on AWS ECS with Fargate for elastic scaling. The system is composed of 7 independent microservices: (1) Order Ingestion Service (Node.js/Express, handles all incoming orders), (2) Trade Execution Engine (Python, with microsecond-level precision), (3) Compliance Validator (Node.js, runs FINTRAC checks in parallel), (4) ML Model Service (Python/TensorFlow, generates trade signals), (5) Market Data Aggregator (Python, polls 5 external providers), (6) Audit Logger (PostgreSQL, immutable transaction log), and (7) WebSocket Gateway (Node.js, real-time client updates).
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Communication between services happens via Apache Kafka for durability and Redis for ultra-fast caching. The ML model, trained on 10 years of historical market data, generates sentiment scores and predictive signals consumed by the execution engine — zero additional latency because the model runs asynchronously and results are cached. End-to-end latency from order placement to execution confirmation is 50ms — 95% faster than their previous system.
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32 }}>
                PostgreSQL is the single source of truth, with row-level security ensuring traders can only see their own data, full audit logging on every table, and point-in-time recovery capability. The compliance microservice runs FINTRAC validation checks in parallel with trade execution, adding zero latency to the critical path — every transaction is timestamped, signed, and immutably logged. We implemented automated daily compliance reports that export directly to FINTRAC systems.
              </p>

              {/* Tech stack badges */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {techStack.map(tech => (
                  <span key={tech} style={{
                    fontSize: 13, fontWeight: 600, color: 'var(--muted)',
                    padding: '10px 20px', border: '1px solid var(--line)',
                    borderRadius: 100, background: 'var(--surface-alt)',
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY RESULTS ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <p className="reveal" style={{
              fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
              color: 'var(--brand)', marginBottom: 16,
            }}>Key Results</p>
            <h2 className="reveal" style={{
              fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.03em', marginBottom: 40,
            }}>Measurable Impact, From Day One</h2>

            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 24,
            }}>
              {metrics.map((m) => (
                <div key={m.label} style={{
                  padding: 'clamp(20px, 4vw, 36px)', borderRadius: 24, textAlign: 'center',
                  background: 'var(--surface-alt)', border: '1px solid var(--line)',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: 'var(--brand)', marginBottom: 8 }}>{m.value}</div>
                  <div style={{
                    fontSize: 13, fontWeight: 600, color: 'var(--muted)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="reveal" style={{
              maxWidth: 760,
              padding: 'clamp(24px, 4vw, 48px)', borderRadius: 24,
              background: 'var(--surface)',
              border: '1px solid var(--brand)',
              position: 'relative',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24, opacity: 0.15 }}>
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#E11900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#E11900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{
                fontSize: 20, color: 'var(--body)', lineHeight: 1.7,
                fontStyle: 'italic', marginBottom: 24,
              }}>
                &ldquo;We went from 25K to 75K daily transactions without breaking a sweat. What impressed me most was the compliance layer — Mapletech Labs fundamentally understood the regulatory environment and built it in from day one, not as an afterthought. Latency went from 800ms to 50ms. We went from infrastructure firefighting to 100% focus on product. They didn&apos;t just deliver code — they gave us a 3x competitive advantage.&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', margin: '0 0 4px' }}>Jessica Chen, VP Engineering</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>Axion Capital</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="reveal" style={{
              background: 'transparent', border: '1px solid var(--brand)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                  color: 'var(--brand)', marginBottom: 12,
                }}>Start a Similar Project</p>
                <h2 style={{
                  fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build Your Trading Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether it&apos;s fintech, AI, or high-frequency systems — we engineer software that scales. Let&apos;s talk about your next project.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: 'var(--brand)', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get in Touch →
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
