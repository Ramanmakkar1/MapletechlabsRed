'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

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
  { title: 'Mobile App Development', desc: 'Secure mobile applications for government field workers, defence personnel, and public-facing citizen services.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'WCAG-compliant web portals, internal government systems, and bilingual public service platforms.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Document classification, fraud detection, and intelligent automation for federal departments and defence agencies.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Identity verification systems, secure voting platforms, and transparent procurement tracking for the public sector.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Protected B cloud environments, zero-trust architecture, and GC Cloud compliance on AWS and Azure.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Accessible, bilingual UI/UX design that meets Government of Canada standards and WCAG 2.1 AA requirements.', href: '/services/product-design' },
];

export default function OttawaPage() {
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
      <div className="cb-container" style={{ paddingTop: 100 }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: 'Ottawa' },
        ]} />
      </div>
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding loc-city-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(245,41,13,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(245,41,13,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#f5290d', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Ottawa, Ontario
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Software Development in <span style={{ color: '#f5290d' }}>Ottawa</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              Ottawa is Canada&apos;s capital and the epicentre of government technology, cybersecurity, and defence innovation. With Kanata&apos;s tech corridor and major telecom players like Nokia and Ciena, we build secure, compliant software for the public and private sectors.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Quote
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal loc-city-hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['45+', 'Government Projects'], ['100%', 'Security Compliant'], ['10+', 'Federal Departments']].map(([val, label]) => (
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Services in Ottawa</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Secure, compliant software for government, defence, and telecom.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
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
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Ottawa &amp; the National Capital Region by the Numbers</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Trusted by government and defence organizations across the capital.</p>
              </div>
              <div className="loc-city-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {[
                  ['45+', 'Government Projects Delivered'],
                  ['100%', 'Security Compliance Rate'],
                  ['10+', 'Federal Departments Served'],
                  ['Protected B', 'Cloud Certified'],
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Choose Mapletech Labs in Ottawa</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Government-grade security with startup-speed delivery.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {[
                { title: 'Government & Public Sector', desc: 'We understand the procurement process, security requirements, and accessibility standards that federal and provincial government projects demand. Our team has delivered solutions across multiple departments.' },
                { title: 'Cybersecurity First', desc: 'Ottawa\'s Kanata corridor is Canada\'s cybersecurity capital. We build with zero-trust architecture, end-to-end encryption, and compliance frameworks including ITSG-33 and Protected B cloud standards.' },
                { title: 'Telecom & 5G Infrastructure', desc: 'With Nokia, Ciena, and Ericsson in the region, Ottawa drives Canada\'s telecom innovation. We build network management tools, OSS/BSS platforms, and 5G-ready applications.' },
                { title: 'Defence & National Security', desc: 'We develop secure applications for defence contractors and agencies, with strict adherence to Canadian security protocols, data sovereignty requirements, and controlled goods regulations.' },
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
                Start Your Project in <span style={{ color: '#f5290d' }}>Ottawa</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Whether you are a federal department modernizing citizen services, a defence contractor building secure systems, or a telecom company deploying next-gen infrastructure — we are ready to deliver.
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

        {/* All Services in City */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>
              Our Services in Ottawa
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
              Explore our full range of software development services available in Ottawa.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16 }}>
              {[
                { name: 'Web Development', slug: 'web-development' },
                { name: 'Mobile App Development', slug: 'mobile-app-development' },
                { name: 'AI & Machine Learning', slug: 'ai-ml' },
                { name: 'Cloud & DevOps', slug: 'cloud-devops' },
                { name: 'SaaS Development', slug: 'saas-development' },
                { name: 'Digital Marketing', slug: 'digital-marketing' },
                { name: 'Branding', slug: 'branding' },
                { name: 'WordPress & CMS', slug: 'wordpress-cms' },
                { name: 'Blockchain & Web3', slug: 'blockchain-web3' },
                { name: 'Product Design', slug: 'product-design' },
                { name: 'Game Development', slug: 'game-development' },
                { name: 'AR & VR', slug: 'ar-vr' },
              ].map((svc) => (
                <a key={svc.slug} href={`/locations/ottawa/${svc.slug}`} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '16px 20px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                  fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.8)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  {svc.name} in Ottawa
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media(max-width:480px){
          .loc-city-hero{min-height:auto!important;}
          .loc-city-hero-stats{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))!important;}
          .loc-city-stats-grid{grid-template-columns:repeat(2,1fr)!important;gap:1.5rem!important;}
        }
        @media(max-width:360px){
          .loc-city-stats-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
