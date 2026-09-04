'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';

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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.02)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(245,41,13,0.2)',
  background: 'rgba(245,41,13,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

const industries = [
  {
    icon: '💰',
    name: 'FinTech & Banking',
    href: '/industries/fintech',
    description: 'Trading platforms, payment gateways, and regulatory-compliant financial infrastructure. We process billions in daily transactions for institutional clients.',
    highlights: ['Payment Platforms', 'Trading Systems', 'Digital Wallets', 'Compliance'],
  },
  {
    icon: '🏥',
    name: 'Healthcare & Medical',
    href: '/industries/healthcare',
    description: 'HIPAA-compliant patient portals, telemedicine platforms, and clinical workflow systems that improve outcomes at scale.',
    highlights: ['Patient Portals', 'Telemedicine', 'EHR Integration', 'Compliance'],
  },
  {
    icon: '🛍️',
    name: 'E-commerce & Retail',
    href: '/industries/ecommerce',
    description: 'High-performance storefronts, headless commerce, payment systems, and inventory management built for conversion and scale.',
    highlights: ['Custom Storefronts', 'Payment Systems', 'Inventory', 'Analytics'],
  },
  {
    icon: '🏢',
    name: 'Enterprise & Logistics',
    href: '/industries/enterprise',
    description: 'Supply chain platforms, fleet tracking, warehouse management, and enterprise resource planning systems for complex operations.',
    highlights: ['Fleet Tracking', 'Supply Chain', 'ERP', 'Real-time Visibility'],
  },
  {
    icon: '🎓',
    name: 'EdTech & SaaS',
    href: '/industries/edtech',
    description: 'Learning management systems, interactive e-learning platforms, and SaaS solutions that engage students and simplify administration.',
    highlights: ['LMS Platform', 'Video Delivery', 'Progress Tracking', 'Payments'],
  },
];

export default function IndustriesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(245,41,13,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries We <span style={{ color: '#f5290d' }}>Serve.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Deep expertise across 6 verticals. Custom solutions built for your industry's unique challenges.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get Started
              </Link>
              <Link href="/services" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* INDUSTRIES GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <Card>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{industry.icon}</div>
                    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.75rem', color: '#fff' }}>{industry.name}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{industry.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {industry.highlights.map(h => (
                        <span key={h} style={{ background: 'rgba(245,41,13,0.1)', borderRadius: 8, padding: '4px 12px', fontSize: '0.8rem', color: '#f5290d' }}>{h}</span>
                      ))}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Choose Mapletech Labs</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Industry-specific expertise meets cutting-edge technology.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🎯', title: 'Domain Specialists', desc: 'Our engineers have deep experience in your industry—we understand regulatory requirements, performance standards, and user expectations.' },
                { icon: '🔐', title: 'Compliance-Ready', desc: 'From HIPAA to PCI-DSS to SOX, we build systems that meet regulatory requirements from day one.' },
                { icon: '⚡', title: 'Proven at Scale', desc: '300+ projects delivered. Systems processing billions in transactions, serving millions of users globally.' },
                { icon: '🛠️', title: 'Custom Solutions', desc: "We don't do templates. Every solution is purpose-built for your business, competitive landscape, and growth ambitions." },
              ].map(item => (
                <Card key={item.title}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to Transform Your <span style={{ color: '#f5290d' }}>Industry?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Let's discuss your challenges and build a custom solution that drives results.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Schedule Consultation
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  View Case Studies
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['300+ Projects Delivered', '150+ Engineers', '5 Industry Verticals', 'NDA Protected'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)' }}>✓ {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://mapletechlabs.ca',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Industries',
                  item: 'https://mapletechlabs.ca/industries',
                },
              ],
            }),
          }}
        />

      </main>
      <Footer />
    </>
  );
}
