'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

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

const techStack = ['Node.js', 'PostgreSQL', 'Redis', 'AWS KMS', 'Docker', 'Stripe API', 'PCI DSS', 'OAuth 2.0'];

const metrics = [
  { value: '12M+', label: 'Monthly Transactions' },
  { value: '99.97%', label: 'Uptime' },
  { value: '100ms', label: 'Avg Latency' },
  { value: 'PCI DSS', label: 'Certified' },
];

export default function PaymentsCaseStudyClient() {
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
                { label: 'PCI DSS Payments API' },
              ]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 16 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(245,41,13,0.12)', color: 'var(--brand)',
                padding: '5px 14px', borderRadius: 100,
              }}>Fintech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'var(--faint)' }}>PayBridge Solutions &middot; Ottawa</span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              PCI DSS Payments API
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'var(--muted)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              We engineered a production-grade payments processing API certified for PCI DSS compliance, handling 12M+ monthly transactions securely and reliably.
            </p>

            {/* Placeholder image */}
            <div className="reveal reveal-d4" style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 20,
              background: 'var(--brand-tint))',
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 48,
            }}>
              <span style={{ fontSize: 15, color: 'var(--faint)', fontWeight: 500 }}>
                Case Study Visual — Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW GRID ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 24,
            }}>
              {[
                { title: 'Challenge', text: 'PayBridge needed a payments API that could securely process card transactions, accept PCI DSS audit scrutiny, and scale from 2M to 12M transactions monthly without compromising security or latency.' },
                { title: 'Solution', text: 'Mapletech Labs built a tokenization-based payments architecture with AWS KMS encryption, OAuth 2.0 authentication, and PCI DSS compliance built into every layer. The API processes payments through Stripe while keeping PayBridge PCI-compliant.' },
                { title: 'Results', text: 'PayBridge now processes 12M+ transactions monthly with PCI DSS certification, 100ms average latency, 99.97% uptime, and zero data breaches. Full audit compliance with automated reporting to regulatory bodies.' },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: 'clamp(24px, 4vw, 36px)', borderRadius: 24,
                  background: 'var(--surface-alt)', border: '1px solid var(--line)',
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
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
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--brand)', marginBottom: 16,
              }}>The Challenge</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'var(--ink)',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Payments at Scale with Security Built In</h2>

              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                PayBridge Solutions, an Ottawa-based payments fintech, was growing explosively — their volume of card transactions had doubled year-over-year, jumping from 2M monthly transactions to 6M. Their existing payment processor couldn&apos;t handle the volume, adding $2M annually in processing fees, and they had zero control over customer experience.
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                The biggest challenge: PCI DSS compliance. Handling credit card data directly meant undergoing Level 1 compliance audits (the highest standard), with continuous monitoring and multi-million-dollar liability for any breach. Their previous vendor handled tokenization, but PayBridge had zero transparency into security controls, and the vendor&apos;s API latency was degrading their end-user experience to 500ms+ for payment processing.
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8 }}>
                They needed to build a proprietary payments API that was faster, more secure, fully compliant with PCI DSS standards, and that gave them complete control. But building payments infrastructure from scratch meant navigating complex cryptography, staying abreast of constantly evolving security standards, and ensuring zero card data ever touched their systems.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR SOLUTION ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--brand)', marginBottom: 16,
              }}>Our Solution</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'var(--ink)',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Tokenization-Based Architecture with AWS KMS</h2>

              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                We designed a tokenization-first payments architecture where PayBridge never directly handles card numbers. Customers submit payment details through a Stripe-hosted payment form (PCI DSS Level 0 compliance), Stripe returns a token, and PayBridge&apos;s API processes the token. This simple architectural shift eliminated 90% of PayBridge&apos;s compliance burden.
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                The API itself is a Node.js service running on AWS ECS with Fargate. All sensitive data is encrypted with AWS KMS (client-side encryption before transmission), stored in PostgreSQL with transparent encryption at rest, and protected by OAuth 2.0 authentication. Redis caches tokenization results for 100ms-latency lookups. Every request is logged to an immutable audit trail stored in S3 with 7-year retention for regulatory proof.
              </p>
              <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32 }}>
                We built comprehensive monitoring: real-time fraud detection using transaction pattern analysis, rate limiting to prevent brute-force attacks, and automated compliance reporting that exports transaction summaries to Canadian payment regulators. The API uses HMAC-SHA256 signatures on all requests for additional security. PCI DSS compliance was achieved through architectural design, not retrofitting — we passed Level 1 audit with zero findings on the first attempt.
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
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--brand)', marginBottom: 16,
            }}>Key Results</p>
            <h2 className="reveal" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'var(--ink)',
              letterSpacing: '-0.03em', marginBottom: 40,
            }}>Bank-Grade Security and Scale</h2>

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
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              maxWidth: 760,
              padding: 'clamp(24px, 4vw, 48px)', borderRadius: 24,
              background: 'var(--brand-tint))',
              border: '1px solid rgba(245,41,13,0.15)',
              position: 'relative',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24, opacity: 0.15 }}>
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#f5290d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#f5290d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{
                fontSize: 20, color: 'var(--body)', lineHeight: 1.7,
                fontStyle: 'italic', marginBottom: 24,
              }}>
                &ldquo;We went from paying $2M annually in processing fees to owning our own payments infrastructure. The API is faster, more secure, and we passed PCI DSS Level 1 audit with zero findings. Mapletech Labs didn&apos;t just build an API — they solved the compliance nightmare that kept me up at night. That&apos;s peace of mind worth every penny.&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', margin: '0 0 4px' }}>David Rodriguez, Founder & CEO</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>PayBridge Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              background: 'rgba(245,41,13,0.04)', border: '1px solid rgba(245,41,13,0.15)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--brand)', marginBottom: 12,
                }}>Start a Similar Project</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'var(--ink)',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building a Payments Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether it&apos;s payments, crypto, or compliance-heavy fintech — we engineer secure, scalable systems. Let&apos;s talk about your next project.
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
