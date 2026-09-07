'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import { industryMedia, officeMedia, humanMedia } from '@/data/media';
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

const industries = [
  {
    icon: '',
    key: 'fintech',
    name: 'FinTech & Banking',
    href: '/industries/fintech',
    description: 'Trading platforms, payment gateways, and regulatory-compliant financial infrastructure. We process billions in daily transactions for institutional clients.',
    highlights: ['Payment Platforms', 'Trading Systems', 'Digital Wallets', 'Compliance'],
  },
  {
    icon: '',
    key: 'healthcare',
    name: 'Healthcare & Medical',
    href: '/industries/healthcare',
    description: 'HIPAA-compliant patient portals, telemedicine platforms, and clinical workflow systems that improve outcomes at scale.',
    highlights: ['Patient Portals', 'Telemedicine', 'EHR Integration', 'Compliance'],
  },
  {
    icon: '',
    key: 'ecommerce',
    name: 'E-commerce & Retail',
    href: '/industries/ecommerce',
    description: 'High-performance storefronts, headless commerce, payment systems, and inventory management built for conversion and scale.',
    highlights: ['Custom Storefronts', 'Payment Systems', 'Inventory', 'Analytics'],
  },
  {
    icon: '',
    key: 'enterprise',
    name: 'Enterprise & Logistics',
    href: '/industries/enterprise',
    description: 'Supply chain platforms, fleet tracking, warehouse management, and enterprise resource planning systems for complex operations.',
    highlights: ['Fleet Tracking', 'Supply Chain', 'ERP', 'Real-time Visibility'],
  },
  {
    icon: '',
    key: 'logistics',
    name: 'Logistics & Supply Chain',
    href: '/industries/logistics',
    description: 'Fleet tracking, route optimisation and warehouse automation, with IoT integration that holds up in the field.',
    highlights: ['Fleet Tracking', 'Route Optimisation', 'Warehouse', 'IoT'],
  },
  {
    icon: '',
    key: 'edtech',
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
      <main style={{ background: 'var(--surface)', color: 'var(--ink)', paddingTop: 'var(--section-y)' }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
          ]} />
        </div>

        {/* HERO */}
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} copy={{ badge: "Sectors we serve", title: <>Industries We <span style={{ color: 'var(--brand)' }}>Serve.</span></>, desc: <>Deep expertise across six verticals. Custom solutions built for your industry's unique challenges.</> }} photo={humanMedia.pairing} form={false} />

        {/* INDUSTRIES GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal grid grid--3">
              {industries.map((industry) => {
                const m = industryMedia[industry.key];
                return (
                <Link key={industry.href} href={industry.href} className="tile rise" style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="media media--flat media--zoom" style={{ aspectRatio: '16 / 10' }}>
                    <Image src={m.src} alt={m.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 'clamp(22px, 2.2vw, 28px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{ fontWeight: 600, fontSize: 'var(--fs-h4)', marginBottom: '0.6rem', color: 'var(--ink)' }}>{industry.name}</h2>
                    <p className="clamp-3" style={{ color: 'var(--body)', lineHeight: 1.7, fontSize: 14.5, marginBottom: '1.1rem' }}>{industry.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                      {industry.highlights.slice(0, 3).map(h => (
                        <span key={h} className="pill" style={{ height: 26, fontSize: 12 }}>{h}</span>
                      ))}
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, marginBottom: '1rem' }}>Why Choose Mapletech Labs</h2>
              <p style={{ color: 'var(--body)', fontSize: '1.1rem' }}>Industry-specific expertise meets cutting-edge technology.</p>
            </div>
            <div className="reveal grid grid--2">
              {[
                { icon: '🎯', title: 'Domain Specialists', desc: 'Our engineers have deep experience in your industry—we understand regulatory requirements, performance standards, and user expectations.' },
                { icon: '🔐', title: 'Compliance-Ready', desc: 'From HIPAA to PCI-DSS to SOX, we build systems that meet regulatory requirements from day one.' },
                { icon: '⚡', title: 'Proven at Scale', desc: '300+ projects delivered. Systems processing billions in transactions, serving millions of users globally.' },
                { icon: '🛠️', title: 'Custom Solutions', desc: "We don't do templates. Every solution is purpose-built for your business, competitive landscape, and growth ambitions." },
              ].map(item => (
                <Card key={item.title}>
                  <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--body)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <FinalCta title="Building for a regulated industry?" sub="We\u2019ve shipped in fintech, healthcare and logistics. Tell us your constraints and we\u2019ll show you how we\u2019d design around them." />

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
