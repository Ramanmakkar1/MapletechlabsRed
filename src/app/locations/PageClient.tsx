'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { officeMedia } from '@/data/media';
import PageHero from '@/components/page/PageHero';
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

const cardBase: React.CSSProperties = {
  border: '1px solid var(--line)',
  borderRadius: 24,
  background: 'var(--surface-alt)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'var(--brand)',
  background: 'transparent',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.10)',
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

const cities = [
  { name: 'Edmonton', province: 'Alberta', slug: 'edmonton', tagline: 'Headquarters — Where it all began', active: true },
  { name: 'Toronto', province: 'Ontario', slug: 'toronto', tagline: 'Canada\'s largest tech hub', active: true },
  { name: 'Vancouver', province: 'British Columbia', slug: 'vancouver', tagline: 'West Coast innovation hub', active: true },
  { name: 'Calgary', province: 'Alberta', slug: 'calgary', tagline: 'Energy meets technology', active: true },
  { name: 'Ottawa', province: 'Ontario', slug: 'ottawa', tagline: 'Canada\'s capital of innovation', active: true },
  { name: 'Montreal', province: 'Quebec', slug: 'montreal', tagline: 'AI and creative technology capital', active: true },
  { name: 'Winnipeg', province: 'Manitoba', slug: 'winnipeg', tagline: 'Heart of the prairies', active: false },
  { name: 'Halifax', province: 'Nova Scotia', slug: 'halifax', tagline: 'Atlantic Canada\'s tech gateway', active: false },
  { name: 'Victoria', province: 'British Columbia', slug: 'victoria', tagline: 'Pacific coast tech community', active: false },
  { name: 'Saskatoon', province: 'Saskatchewan', slug: 'saskatoon', tagline: 'Innovation on the prairies', active: false },
  { name: 'Kitchener', province: 'Ontario', slug: 'kitchener', tagline: 'Canada\'s Silicon Valley', active: false },
  { name: 'London', province: 'Ontario', slug: 'london-on', tagline: 'Southwestern Ontario tech hub', active: false },
];

export default function LocationsIndexPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--surface)', color: 'var(--ink)', paddingTop: 'var(--section-y)' }}>

        {/* HERO */}
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]} copy={{ badge: "Across Canada", title: <><span style={{ color: 'var(--brand)' }}>12 Locations</span> Across Canada</>, desc: <>From coast to coast, Mapletech Labs brings world-class software development to businesses across Canada. Our distributed team model means you get local expertise backed by national resources.</> }} photo={officeMedia.open} form={false} />

        {/* CITY GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, marginBottom: '1rem' }}>Find Us Near You</h2>
              <p style={{ color: 'var(--body)', fontSize: '1.1rem' }}>Select a city to learn more about our local presence and services.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {cities.map(city => (
                <Link key={city.slug} href={`/locations/${city.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card style={{ cursor: 'pointer', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <h3 style={{ fontWeight: 600, fontSize: '1.3rem' }}>{city.name}</h3>
                      {city.slug === 'edmonton' && (
                        <span style={{ background: 'transparent', borderRadius: 8, padding: '4px 12px', fontSize: 12, color: 'var(--brand)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>HQ</span>
                      )}
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{city.province}</p>
                    <p style={{ color: 'var(--body)', fontSize: '0.95rem', lineHeight: 1.6 }}>{city.tagline}</p>
                    <div style={{ color: 'var(--brand)', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 600 }}>Learn more &rarr;</div>
                  </Card>
                </Link>
              ))}
            </div>
            <div style={{
              textAlign: 'center',
              padding: '80px 0 0',
            }}>
              <h2 style={{
                fontSize: 'var(--fs-h3)',
                fontWeight: 600,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
                marginBottom: 16,
              }}>
                Ready to Work with Our Local Team?
              </h2>
              <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
                Get a free consultation with an expert from your nearest Mapletech Labs office.
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 48, padding: '0 28px', borderRadius: 100,
                background: 'var(--brand)', color: '#fff', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Schedule a Call
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <FinalCta title="Let\u2019s build something great, wherever you are." sub="We work with companies across Canada, remotely and on site. Tell us about your project and we\u2019ll come back within four hours." />

      </main>
      <Footer />

      <style>{`
        @media(max-width:480px){
          .loc-city-hero{min-height:auto!important;}
          .loc-city-hero-stats{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))!important;}
        }
      `}</style>
    </>
  );
}
