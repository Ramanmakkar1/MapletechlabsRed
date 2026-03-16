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
  { title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android built for Winnipeg businesses.', href: '/services/mobile-app-development' },
  { title: 'Web Development', desc: 'Scalable web applications and platforms using modern frameworks like Next.js and React.', href: '/services/web-development' },
  { title: 'AI & Machine Learning', desc: 'Intelligent automation, predictive analytics, and custom AI models for Manitoba enterprises.', href: '/services/ai-ml' },
  { title: 'Blockchain & Web3', desc: 'Decentralized applications, smart contracts, and tokenization solutions.', href: '/services/blockchain-web3' },
  { title: 'Cloud & DevOps', desc: 'Cloud migration, infrastructure automation, and CI/CD pipelines on AWS, Azure, and GCP.', href: '/services/cloud-devops' },
  { title: 'Product Design', desc: 'User-centered UI/UX design, prototyping, and design systems that convert.', href: '/services/product-design' },
];

export default function WinnipegPage() {
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
          { label: 'Winnipeg' },
        ]} />
      </div>
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding loc-city-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(245,41,13,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(245,41,13,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#f5290d', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Winnipeg, Manitoba
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Software Development in <span style={{ color: '#f5290d' }}>Winnipeg.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Mapletech Labs partners with Winnipeg businesses to build custom software, mobile apps, and AI-powered solutions. From the Exchange District to Portage Avenue, we help Manitoba companies compete with world-class technology.
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Services in Winnipeg</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Full-spectrum software engineering for Manitoba&apos;s growing tech ecosystem.</p>
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
                ['50+', 'Projects Delivered in Manitoba'],
                ['98%', 'Client Satisfaction Rate'],
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Choose Mapletech Labs in Winnipeg</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>We understand Winnipeg&apos;s unique business landscape and its thriving tech community.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {[
                { title: 'Local Expertise', desc: 'We understand Manitoba\'s industries -- from agriculture and manufacturing to financial services and healthcare. Our solutions are built for the local market while scaling globally.' },
                { title: 'Virtual Team of World-Class Agents', desc: 'Access a curated network of senior engineers, designers, and AI specialists who work as an extension of your Winnipeg team, without the overhead of full-time hires.' },
                { title: '12 Locations Across Canada', desc: 'From coast to coast, Mapletech Labs operates in 12 Canadian cities. Winnipeg clients benefit from national resources with a local touch.' },
                { title: 'Proudly Canadian', desc: 'We are a Canadian company that keeps data, IP, and operations within Canada. Your project is protected by Canadian privacy laws and business standards.' },
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
                Start Your Project in <span style={{ color: '#f5290d' }}>Winnipeg.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Whether you are a startup in the Exchange District or an established Manitoba enterprise, we are ready to build the software that drives your next chapter.
              </p>
              <Link href="/contact" style={{ background: '#f5290d', color: '#fff', padding: '16px 36px', borderRadius: 100, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Why Winnipeg for Tech */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}>Why Winnipeg for Tech</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 600, marginBottom: 40, lineHeight: 1.7 }}>Winnipeg is Manitoba&apos;s innovation hub with North Forge Technology Exchange leading a growing agri-tech, insurance, and manufacturing ecosystem.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16 }}>
              {[
                { t: 'North Forge Technology Exchange', d: 'Manitoba\'s premier tech incubator — supporting 100+ startups with mentorship, lab space, and investor connections.' },
                { t: 'University of Manitoba', d: 'Strong engineering and CS programs producing talent in AI, data science, and biomedical engineering.' },
                { t: 'Lowest Operating Costs', d: 'Winnipeg offers some of Canada\'s lowest commercial rents and energy costs — up to 60% cheaper than Toronto.' },
                { t: 'Agri-Tech Capital', d: 'Manitoba\'s $7B agriculture sector creates massive demand for precision farming, supply chain, and commodity trading platforms.' },
              ].map(c => <Card key={c.t}><h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{c.t}</h3><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{c.d}</p></Card>)}
            </div>
          </div>
        </section>

        {/* Winnipeg Areas */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}>Winnipeg Areas We Serve</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 12 }}>
              {[
                { n: 'Exchange District', d: 'Creative and tech hub — heritage buildings housing startups and digital agencies.' },
                { n: 'Downtown', d: 'Financial services, insurance companies, and government tech offices.' },
                { n: 'South Winnipeg', d: 'Growing commercial corridor with retail tech and healthcare services.' },
                { n: 'St. Boniface', d: 'Bilingual business district with manufacturing and health tech.' },
                { n: 'Transcona', d: 'Rail and logistics hub embracing supply chain tech and automation.' },
                { n: 'Brandon', d: 'Manitoba\'s second city — agriculture tech and food processing.' },
              ].map(a => <Card key={a.n}><h3 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{a.n}</h3><p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0 }}>{a.d}</p></Card>)}
            </div>
          </div>
        </section>

        {/* Winnipeg Client Stories */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 40 }}>Winnipeg Client Success Stories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20 }}>
              {[
                { title: 'Agriculture Analytics Platform', metric: '30% yield improvement', desc: 'Built a precision farming dashboard for a Manitoba grain operation, integrating satellite imagery, soil sensors, and weather data.' },
                { title: 'Manitoba Healthcare App', metric: '25K+ patients served', desc: 'Developed a bilingual patient portal for a Winnipeg health network with appointment booking, lab results, and secure messaging.' },
                { title: 'Winnipeg Logistics Tool', metric: '18% cost reduction', desc: 'Created a freight management and route optimization platform for a Manitoba logistics company serving the Prairie provinces.' },
              ].map(s => <Card key={s.title}><div style={{ fontSize: 24, fontWeight: 700, color: '#f5290d', marginBottom: 8 }}>{s.metric}</div><h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.title}</h3><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p></Card>)}
            </div>
          </div>
        </section>

        {/* Winnipeg Tech Focus */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 40 }}>Winnipeg Tech Focus</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16 }}>
              {[
                { t: 'Agri-Tech', d: 'Precision farming, grain trading tools, and agricultural supply chain analytics for Manitoba\'s farming sector.' },
                { t: 'Insurance Tech', d: 'Claims automation and underwriting platforms for Winnipeg\'s insurance companies (Great-West Life, Wawanesa).' },
                { t: 'Manufacturing Automation', d: 'Smart factory dashboards, quality control, and IoT for Manitoba\'s aerospace and bus manufacturing sector.' },
                { t: 'Indigenous Community Platforms', d: 'Custom digital solutions for First Nations — governance tools, education portals, and health service delivery apps.' },
              ].map(c => <Card key={c.t}><h3 style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{c.t}</h3><p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{c.d}</p></Card>)}
            </div>
          </div>
        </section>

        {/* All Services in City */}
        <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12, textAlign: 'center' }}>
              Our Services in Winnipeg
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
              Explore our full range of software development services available in Winnipeg.
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
                <a key={svc.slug} href={`/locations/winnipeg/${svc.slug}`} style={{
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
                  {svc.name} in Winnipeg
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
