'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const services = [
  { title: 'Mobile App Development', desc: 'Field-ready mobile apps for mining operations, agricultural monitoring, and remote site management across Saskatchewan.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Enterprise web platforms for mining companies, agricultural cooperatives, and University of Saskatchewan research labs.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Precision agriculture AI, mineral exploration models, and biotech data analysis powered by machine learning.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Supply chain traceability for potash exports, grain trading platforms, and transparent resource royalty tracking.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Reliable cloud infrastructure for remote mining sites, real-time agricultural telemetry, and research computing.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Rugged, practical UI/UX for field operations, lab information systems, and agricultural decision-support tools.', href: '/services/product-design' },
];

export default function SaskatoonPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(245,41,13,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(245,41,13,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#f5290d', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Saskatoon, Saskatchewan
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Software Development in <span style={{ color: '#f5290d' }}>Saskatoon</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              Saskatoon sits at the heart of Saskatchewan&apos;s resource economy — from the world&apos;s largest potash reserves to cutting-edge agricultural research at the University of Saskatchewan. We build custom software that digitizes mining, agriculture, and biotech operations across the Prairies.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Quote
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['30+', 'Prairie Projects'], ['98%', 'Client Satisfaction'], ['15+', 'Mining & Ag Solutions']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f5290d' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Services in Saskatoon</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Custom software for mining, agriculture, biotech, and Prairie enterprise.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {services.map(s => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card style={{ cursor: 'pointer', height: '100%' }}>
                    <div style={{ color: '#f5290d', fontSize: '1.2rem', marginBottom: '0.75rem' }}>&rarr;</div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL STATS */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(245,41,13,0.15)', borderRadius: 32, background: 'rgba(245,41,13,0.03)', padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Saskatoon &amp; Saskatchewan by the Numbers</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Digitizing the resource and agricultural sectors across the Prairies.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {[
                  ['30+', 'Projects in Saskatchewan'],
                  ['98%', 'Client Satisfaction Rate'],
                  ['15+', 'Mining & Ag Platforms'],
                  ['5+', 'Biotech Research Tools'],
                ].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f5290d' }}>{val}</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Choose Mapletech Labs in Saskatoon</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Prairie-smart software built by a team that understands resource industries.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {[
                { title: 'Potash & Uranium Mining', desc: 'Saskatchewan produces over 30% of the world\'s potash and is a major uranium producer. We build mine management systems, safety compliance platforms, and production analytics tools for the province\'s mining giants.' },
                { title: 'Precision Agriculture', desc: 'From GPS-guided seeding to yield prediction models, we develop precision agriculture platforms that help Saskatchewan farmers maximize output and reduce waste across millions of acres of farmland.' },
                { title: 'Biotech & Life Sciences', desc: 'The University of Saskatchewan and Innovation Place drive world-class biotech research. We build laboratory information systems, clinical trial platforms, and research data management tools for the life sciences sector.' },
                { title: 'Remote & Rugged Operations', desc: 'Saskatchewan\'s resource operations span vast, remote territories. We build offline-first mobile apps, satellite-connected IoT systems, and rugged field tools that work reliably in extreme conditions.' },
              ].map(w => (
                <Card key={w.title}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Start Your Project in <span style={{ color: '#f5290d' }}>Saskatoon</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Whether you are a mining company digitizing operations, a farm cooperative building precision agriculture tools, or a biotech lab streamlining research workflows — we are your Prairie technology partner.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Quote
                </Link>
                <Link href="/locations" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  View All Locations
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['Free Consultation', 'NDA on Request', 'Fixed-Price Sprints', 'Canadian Data Residency'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)' }}>&#10003; {t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
