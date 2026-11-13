'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { officeMedia } from '@/data/media';
import PageHero from '@/components/page/PageHero';
import { FAQ_CATEGORIES as categories } from '@/data/faq-categories';

const Footer = dynamic(() => import('@/components/Footer'));

export default function FAQPageClient() {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={ref} style={{ background: 'var(--surface)', minHeight: '100vh' }}>

        {/* Hero */}
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} copy={{ badge: "Help centre", title: <>Software Project<br /><span style={{ color: 'var(--brand)' }}>FAQ</span></>, desc: <>Mapletech Labs is a custom software, mobile app, AI and UI/UX development company headquartered in Edmonton, Alberta. Below are straight answers on timelines, fixed-price quotes, IP ownership, NDAs, tech stack and post-launch support.</> }} photo={officeMedia.desk} form={false} />

        {/* FAQ Categories */}
        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            {categories.map((cat, ci) => (
              <div key={cat.name} className={`reveal reveal-d${ci + 1}`} style={{ marginBottom: 56 }}>
                <h2 style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                  color: 'var(--brand)', margin: '0 0 20px', paddingBottom: 16,
                  borderBottom: '1px solid var(--line)',
                }}>{cat.name}</h2>
                {cat.faqs.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  const isOpen = active === key;
                  return (
                    <div key={key} style={{ borderBottom: '1px solid var(--line)' }}>
                      <h3 style={{ margin: 0, fontSize: 'inherit', fontWeight: 'inherit' }}>
                        <button
                          onClick={() => setActive(isOpen ? null : key)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-a-${key}`}
                          style={{
                            width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer',
                            textAlign: 'left', gap: 20, fontFamily: 'inherit',
                          }}
                        >
                        <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5 }}>{faq.q}</span>
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                          background: isOpen ? '#E11900' : 'var(--line)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke={isOpen ? '#000' : 'var(--body)'} strokeWidth="2.5"
                            style={{ transition: '0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </div>
                      </button>
                      </h3>
                      <div id={`faq-a-${key}`} style={{
                        maxHeight: isOpen ? 1000 : 0, overflow: 'hidden',
                        transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)',
                      }}>
                        <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.8, paddingBottom: 24, margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* Where to go next */}
        <section aria-labelledby="faq-next-steps" style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 id="faq-next-steps" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', margin: '0 0 14px' }}>
              Where to go next
            </h2>
            <ul style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--body)', paddingLeft: 22, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Typical project prices in CAD</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Custom software development services</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Mobile app development company</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>AI development services</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/services/product-design" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>UI/UX design company</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Edmonton</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/locations/software-development-company-in-calgary" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Calgary</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/locations/software-development-company-in-toronto" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Toronto</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/locations/software-development-company-in-vancouver" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Vancouver</Link>
              </li>
              <li style={{ marginBottom: 10 }}>
                <Link href="/case-studies" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Mapletech Labs case studies</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="reveal" style={{
              background: 'transparent', border: '1px solid var(--brand)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)', textAlign: 'center',
            }}>
              <h2 style={{
                fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
                letterSpacing: '-0.03em', marginBottom: 16,
              }}>
                Still have questions?
              </h2>
              <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
                Let&apos;s hop on a quick call. No pressure, no commitment — just a conversation.
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                height: 52, padding: '0 32px', borderRadius: 100,
                background: 'var(--brand)', color: '#fff', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
