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

const services = [
  { title: 'Mobile App Development', desc: 'High-performance mobile apps for gaming studios, PropTech platforms, and Pacific Rim commerce.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Scalable web platforms for film production pipelines, clean tech dashboards, and real estate marketplaces.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Computer vision for VFX workflows, predictive models for clean energy, and NLP for multilingual markets.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Decentralized applications, NFT platforms, and tokenized asset systems for Vancouver\'s forward-thinking tech scene.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Cloud-native infrastructure and CI/CD pipelines built for gaming studios and media production at scale.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'UI/UX design for consumer apps, PropTech interfaces, and immersive gaming experiences.', href: '/services/product-design' },
];

export default function VancouverPage() {
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
          { label: 'Vancouver' },
        ]} />
      </div>
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding loc-city-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(245,41,13,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(245,41,13,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#f5290d', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Vancouver, British Columbia
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Software Development in <span style={{ color: '#f5290d' }}>Vancouver</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              Vancouver is a global powerhouse in gaming, film VFX, and clean technology. Home to EA, Relic Entertainment, and a booming PropTech scene, we build custom software for companies bridging Pacific Rim trade and West Coast innovation.
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
              {[['60+', 'Projects in BC'], ['96%', 'Client Satisfaction'], ['30+', 'Gaming & VFX Builds']].map(([val, label]) => (
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Services in Vancouver</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Custom software for gaming, film, clean tech, and Pacific Rim commerce.</p>
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
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Vancouver &amp; British Columbia by the Numbers</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Building world-class software on Canada&apos;s Pacific gateway.</p>
              </div>
              <div className="loc-city-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {[
                  ['60+', 'Projects Delivered in BC'],
                  ['96%', 'Client Satisfaction Rate'],
                  ['30+', 'Gaming & VFX Solutions'],
                  ['15+', 'Clean Tech Platforms'],
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Choose Mapletech Labs in Vancouver</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>West Coast creativity meets coast-to-coast engineering excellence.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {[
                { title: 'Gaming & Interactive Media', desc: 'Vancouver is home to EA, Relic, and hundreds of indie studios. We build backend systems, real-time multiplayer infrastructure, and toolchains that power the gaming industry.' },
                { title: 'Film VFX & Production Tech', desc: 'With Hollywood North driving billions in production spend, we build asset management systems, render pipeline tools, and production dashboards for Vancouver\'s film and VFX studios.' },
                { title: 'Clean Tech & Sustainability', desc: 'BC leads Canada in clean energy innovation. We develop IoT platforms, energy monitoring dashboards, and carbon tracking systems for the province\'s thriving green tech sector.' },
                { title: 'PropTech & Pacific Rim Trade', desc: 'Vancouver\'s real estate market and Pacific Rim trade connections demand sophisticated platforms. We build PropTech solutions, logistics software, and cross-border commerce tools.' },
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
                Start Your Project in <span style={{ color: '#f5290d' }}>Vancouver</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Whether you are a gaming studio building the next AAA title, a clean tech startup reducing emissions, or a PropTech company transforming real estate — we are ready to build with you.
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
              <TrustBadges compact />
            </div>
          </div>
        </section>

        {/* Why Vancouver for Tech */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}>Why Vancouver for Tech</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 600, marginBottom: 40, lineHeight: 1.7 }}>Vancouver is Western Canada&apos;s #1 tech hub — a global leader in VFX, gaming, and clean tech with proximity to Silicon Valley and Asian markets.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16 }}>
              {[
                { t: '#1 Tech Hub in Western Canada', d: 'Vancouver\'s tech sector employs 120,000+ people across 12,000+ companies — from startups to Amazon, Microsoft, and Apple offices.' },
                { t: 'VFX & Gaming Corridor', d: 'Home to Industrial Light & Magic, Sony Pictures Imageworks, EA Vancouver, and 200+ VFX/game studios — the world\'s #2 VFX hub.' },
                { t: 'Clean Tech Leader', d: 'BC\'s clean energy mandate drives demand for green tech, carbon tracking, and sustainability platforms — Vancouver leads Canada in clean tech investment.' },
                { t: 'Asia-Pacific Gateway', d: 'Vancouver\'s time zone and cultural connections make it the natural bridge to Asian markets — ideal for companies targeting APAC expansion.' },
              ].map(c => <Card key={c.t}><h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{c.t}</h3><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{c.d}</p></Card>)}
            </div>
          </div>
        </section>

        {/* Vancouver Neighborhoods */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}>Vancouver Areas We Serve</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 600, marginBottom: 40, lineHeight: 1.7 }}>From Gastown startups to Surrey tech parks, we build software across Metro Vancouver and the Fraser Valley.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 12 }}>
              {[
                { n: 'Gastown', d: 'Vancouver\'s startup row — adtech, SaaS, and creative agencies in heritage buildings.' },
                { n: 'Yaletown', d: 'Tech companies, VCs, and Hootsuite\'s HQ in this waterfront tech corridor.' },
                { n: 'Mount Pleasant', d: 'Main Street tech hub with VFX studios, game devs, and Shopify\'s Vancouver office.' },
                { n: 'Burnaby', d: 'EA Vancouver, Ballard Power, and a growing SaaS cluster near Metrotown.' },
                { n: 'Surrey', d: 'BC\'s fastest-growing city with health tech, logistics, and the new SFU campus tech hub.' },
                { n: 'Richmond', d: 'Asia-Pacific business hub with fintech, e-commerce, and cross-border trade tech.' },
                { n: 'North Vancouver', d: 'Clean tech companies, outdoor industry startups, and marine technology firms.' },
                { n: 'Kitsilano', d: 'Lululemon\'s HQ neighbourhood — DTC brands, wellness tech, and lifestyle startups.' },
              ].map(a => <Card key={a.n}><h3 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{a.n}</h3><p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0 }}>{a.d}</p></Card>)}
            </div>
          </div>
        </section>

        {/* Vancouver Client Stories */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 40 }}>Vancouver Client Success Stories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20 }}>
              {[
                { title: 'Vancouver SaaS Platform', metric: '$8M ARR', desc: 'Built and scaled a B2B SaaS platform for a Gastown startup from MVP to $8M ARR, handling 500K+ API calls daily with 99.99% uptime.' },
                { title: 'BC Healthcare App', metric: '100K+ patients', desc: 'Developed a patient-facing mobile app for a BC healthcare provider with appointment booking, prescription refills, and secure messaging — serving 100K+ patients.' },
                { title: 'West Coast E-Commerce', metric: '250% international growth', desc: 'Scaled a Vancouver DTC brand into Asian markets with a multi-currency headless commerce platform, localized for Japan, Korea, and China.' },
              ].map(s => <Card key={s.title}><div style={{ fontSize: 24, fontWeight: 700, color: '#f5290d', marginBottom: 8 }}>{s.metric}</div><h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.title}</h3><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p></Card>)}
            </div>
          </div>
        </section>

        {/* Vancouver Tech Focus */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 40 }}>Vancouver Tech Focus</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16 }}>
              {[
                { t: 'Game Dev & VFX', d: 'Game engines, real-time rendering pipelines, and production tools for Vancouver\'s 200+ VFX and game studios.' },
                { t: 'Clean Tech & Sustainability', d: 'Carbon tracking dashboards, ESG reporting platforms, and clean energy analytics for BC\'s green tech sector.' },
                { t: 'PropTech & Real Estate', d: 'Property marketplaces, virtual tour platforms, and tenant management systems for Vancouver\'s real estate market.' },
                { t: 'Asia-Pacific Expansion', d: 'Multi-language platforms, cross-border e-commerce, and APAC market-ready applications leveraging Vancouver\'s Pacific gateway position.' },
              ].map(c => <Card key={c.t}><h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{c.t}</h3><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{c.d}</p></Card>)}
            </div>
          </div>
        </section>

        {/* All Services in City */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>
              Our Services in Vancouver
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
              Explore our full range of software development services available in Vancouver.
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
                <a key={svc.slug} href={`/locations/vancouver/${svc.slug}`} style={{
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
                  {svc.name} in Vancouver
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
