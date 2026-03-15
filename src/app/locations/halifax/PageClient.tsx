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
  { title: 'Mobile App Development', desc: 'High-performance iOS and Android apps tailored to Halifax\'s maritime and service industries.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Modern web platforms and progressive web apps built with Next.js, React, and Node.js.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Ocean-tech analytics, NLP systems, and predictive models for Atlantic Canada enterprises.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, decentralized platforms, and supply-chain traceability for the maritime sector.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Secure cloud infrastructure, Kubernetes orchestration, and automated deployments on AWS and Azure.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'Research-driven UX strategy, interface design, and rapid prototyping for Nova Scotia startups.', href: '/services/product-design' },
];

export default function HalifaxPage() {
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
          { label: 'Halifax' },
        ]} />
      </div>
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding loc-city-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(245,41,13,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(245,41,13,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#f5290d', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Halifax, Nova Scotia
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Software Development in <span style={{ color: '#f5290d' }}>Halifax.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Mapletech Labs empowers Halifax businesses with custom software, mobile applications, and AI-driven solutions. Anchored in Atlantic Canada&apos;s innovation hub, we help companies from the waterfront to the Halifax Innovation District scale with technology.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Quote
              </Link>
              <Link href="/services" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Services in Halifax</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Enterprise-grade solutions for Atlantic Canada&apos;s defence, ocean-tech, and startup sectors.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {services.map(s => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card style={{ height: '100%' }}>
                    <div style={{ color: '#f5290d', fontSize: '1.2rem', marginBottom: '0.75rem' }}>&#8594;</div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{s.title}</h3>
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
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center' }}>
              {[
                ['35+', 'Projects Delivered in Nova Scotia'],
                ['97%', 'Client Satisfaction Rate'],
                ['40+', 'Team Members Across Canada'],
                ['12', 'Locations Nationwide'],
              ].map(([val, label]) => (
                <Card key={label}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f5290d', marginBottom: '0.5rem' }}>{val}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em' }}>{label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Choose Mapletech Labs in Halifax</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Atlantic Canada&apos;s gateway to world-class software engineering.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {[
                { title: 'Local Expertise', desc: 'Halifax is home to Dalhousie University, a thriving ocean-tech sector, and a growing defence industry. We build software tailored to these ecosystems and the unique needs of Atlantic Canadian businesses.' },
                { title: 'Virtual Team of World-Class Agents', desc: 'Our distributed team of senior developers, AI engineers, and product designers plug directly into your Halifax operations -- delivering Silicon Valley calibre work at Canadian rates.' },
                { title: '12 Locations Across Canada', desc: 'With offices from Victoria to Halifax, Mapletech Labs brings national-scale resources to every Atlantic Canada engagement.' },
                { title: 'Proudly Canadian', desc: 'Canadian-owned, Canadian-operated. Your data stays in Canada, your IP is protected by Canadian law, and your project is managed by people who understand local business culture.' },
              ].map(w => (
                <Card key={w.title}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', color: '#f5290d' }}>{w.title}</h3>
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
                Start Your Project in <span style={{ color: '#f5290d' }}>Halifax.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                From ocean-tech startups on the waterfront to defence contractors and Dalhousie spin-offs, we are ready to engineer the software that powers your growth.
              </p>
              <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '16px 36px', borderRadius: 100, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* All Services in City */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>
              Our Services in Halifax
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
              Explore our full range of software development services available in Halifax.
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
                <a key={svc.slug} href={`/locations/halifax/${svc.slug}`} style={{
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
                  {svc.name} in Halifax
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
        }
      `}</style>
    </>
  );
}
