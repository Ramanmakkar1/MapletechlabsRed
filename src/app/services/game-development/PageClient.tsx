'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import TrustBadges from '@/components/TrustBadges';
import MediaBand from '@/components/MediaBand';
import { serviceMedia, defaultMedia } from '@/data/media';

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

const stats = [
  { value: '80+', label: 'Games Shipped' },
  { value: '50M+', label: 'Downloads' },
  { value: '4.8★', label: 'App Store Avg' },
  { value: '15', label: 'Platforms Supported' },
];

const services = [
  { icon: '📱', title: 'Mobile Games', desc: 'iOS and Android games from hyper-casual to mid-core — designed for high Day-1 retention, strong LTV and scalable UA economics.' },
  { icon: '🖥️', title: 'PC & Console', desc: 'Unity and Unreal Engine titles for Steam, PlayStation, Xbox and Nintendo Switch — AAA-quality at independent studio scale.' },
  { icon: '🌐', title: 'Web & HTML5 Games', desc: 'Instant-play browser games for portals, ads and casual audiences — no download required, broad platform reach.' },
  { icon: '⛓️', title: 'Blockchain Games', desc: 'Play-to-earn mechanics, NFT item ownership and on-chain progression built on EVM-compatible chains with seamless wallet integration.' },
  { icon: '🎨', title: 'Game UI/UX Design', desc: 'Menus, HUD design, onboarding flows and in-game economy UI that reduce friction and maximise engagement at every session touchpoint.' },
  { icon: '🔄', title: 'Live Operations', desc: 'Post-launch content updates, seasonal events, battle passes and A/B-tested monetisation systems that keep your DAU and ARPU climbing.' },
];

const steps = [
  { num: '01', title: 'Concept', desc: 'Genre selection, target audience, core loop design, competitive benchmarking and monetisation model — all validated before any production resources are committed.' },
  { num: '02', title: 'Prototype', desc: 'A playable vertical slice that proves the core loop is fun. We test retention mechanics, pacing and monetisation hooks before scaling production.' },
  { num: '03', title: 'Production', desc: 'Full game build with art, audio, narrative and feature implementation. Weekly playtests, soft launch in select markets and KPI tracking throughout.' },
  { num: '04', title: 'Launch & LiveOps', desc: 'App store submission, UA campaign setup, performance monitoring and ongoing live operations — events, updates and balance patches driven by player data.' },
];

const results = [
  { value: '50M+', label: 'Downloads', sub: 'across shipped titles' },
  { value: '45min', label: 'Avg Session Length', sub: 'best-performing mid-core titles' },
  { value: '4.8★', label: 'App Store Rating', sub: 'portfolio average' },
];

const faqs = [
  { q: 'What game engines do you work with?', a: 'Unity is our primary engine for mobile and cross-platform titles. Unreal Engine 5 for PC and console projects requiring photorealistic visuals. Phaser and PlayCanvas for HTML5. Godot for projects requiring open-source flexibility.' },
  { q: 'Can you build a game from concept, or only take over existing projects?', a: 'Both. We handle full game development from concept through launch, and we also take on rescue projects, port existing games to new platforms, or add features and live operations to shipped titles.' },
  { q: 'How do you approach mobile game monetisation?', a: 'Monetisation strategy is defined during concept — before a line of code is written. We design IAP economies, ad placement strategies and battle pass systems that maximise LTV without harming retention. We also run A/B tests post-launch to optimise.' },
  { q: 'Do you handle App Store and Google Play submission?', a: 'Yes. We manage all submission requirements including store listings, screenshots, trailers, metadata optimisation, rating questionnaires and compliance with both Apple and Google policies.' },
  { q: 'What does a typical mobile game project cost?', a: 'Hyper-casual titles start around $5K–$12K. Mid-core mobile games typically range from $15K–$50K depending on feature depth and art style. We provide detailed estimates after a scoping session based on your game design document or brief.' },
];

export default function GameDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const industryRef = useReveal() as React.RefObject<HTMLElement>;
  const pricingRef = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>
      <Navbar />
      <main style={{ background: 'var(--surface)', color: 'var(--ink)', paddingTop: 'var(--section-y)' }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Game Development' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'var(--section-y) 0', borderBottom: '1px solid var(--line)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(20,17,24,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(20,17,24,0.035) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '5%', width: 600, height: 600, background: 'transparent', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>
              {/* Left */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(245,41,13,0.08)', border: '1px solid rgba(245,41,13,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)', boxShadow: '0 0 8px #f5290d' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Game Development</span>
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 24px', maxWidth: 700 }}>
                  We Build Games That <span style={{ color: 'var(--brand)' }}>Players Love.</span>
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
                  Mobile games, PC/console titles, and web-based experiences — engineered for engagement, retention and monetisation.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: 'var(--brand)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(245,41,13,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid var(--line)', color: 'var(--ink)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--line-strong)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line)'}>
                    See Our Work
                  </Link>
                </div>
              </div>

              {/* Right — contact form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}

        <MediaBand
          media={serviceMedia['game-development'] ?? defaultMedia}
        />
        <section ref={s1} style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{ padding: 'var(--section-y) 0', borderRight: i < 3 ? '1px solid var(--line)' : 'none', paddingLeft: i > 0 ? 'clamp(16px, 3vw, 40px)' : 0, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: 'var(--brand)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section ref={s2} className="section-padding" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Game Development Services</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 520, margin: '0 0 56px', lineHeight: 1.7 }}>Every genre, every platform — built for retention, engagement and long-term monetisation.</p>
            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid var(--line)', borderRadius: 28, background: 'var(--surface-alt)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.2)'; e.currentTarget.style.background = 'rgba(245,41,13,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(20,17,24,0.10)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'var(--surface-alt)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#f5290d,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'var(--fs-h4)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={techRef} className="section-padding" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  The Stack Behind Your Game
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'var(--body)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Battle-tested engines, frameworks and backend services chosen for performance, scalability, and player experience.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { label: 'Game Engines', chips: ['Unity', 'Unreal Engine 5', 'Godot', 'Cocos2d'] },
                { label: 'Mobile', chips: ['Swift (iOS)', 'Kotlin (Android)', 'Flutter', 'React Native'] },
                { label: 'Backend', chips: ['PlayFab', 'Firebase', 'AWS GameLift', 'Photon Networking'] },
                { label: 'Tools', chips: ['Blender', 'Spine 2D', 'FMOD', 'Wwise', 'Git LFS'] },
              ].map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid var(--line)', borderRadius: 28, background: 'var(--surface-alt)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.2)'; e.currentTarget.style.background = 'rgba(245,41,13,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'var(--surface-alt)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c}
                        style={{ padding: '7px 16px', border: '1px solid var(--line)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'var(--muted)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.35)'; e.currentTarget.style.color = 'var(--brand)'; e.currentTarget.style.background = 'rgba(245,41,13,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent'; }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY USE CASES */}
        <section ref={industryRef} className="section-padding" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                Games That Power Every Sector
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { icon: '\uD83D\uDCF1', title: 'Mobile Gaming', desc: 'Casual games, puzzle games, hyper-casual hits and mid-core titles optimized for retention, monetization and scalable user acquisition.' },
                { icon: '\uD83C\uDFC6', title: 'Gamification', desc: 'Loyalty programs, learning apps, fitness challenges and employee engagement platforms powered by game mechanics and reward loops.' },
                { icon: '\uD83C\uDFAF', title: 'Serious Games', desc: 'Corporate training simulations, military scenario exercises, safety drills and compliance training built for measurable learning outcomes.' },
                { icon: '\uD83C\uDF93', title: 'EdTech', desc: 'Educational games, language learning adventures, math puzzle platforms and interactive STEM experiences for K-12 and higher education.' },
                { icon: '\uD83C\uDFE5', title: 'Healthcare', desc: 'Physical therapy games, cognitive training applications, mental wellness tools and rehabilitation programs with clinical outcome tracking.' },
                { icon: '\uD83C\uDFAC', title: 'Entertainment', desc: 'Console and PC games, VR titles, streaming interactive experiences and cross-platform entertainment products for global audiences.' },
              ].map((ind, i) => (
                <div key={ind.title}
                  style={{ padding: '36px 32px', border: '1px solid var(--line)', borderRadius: 24, background: 'var(--surface-alt)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.2)'; e.currentTarget.style.background = 'rgba(245,41,13,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(20,17,24,0.10)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'var(--surface-alt)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get a Quote */}
        <section ref={pricingRef} className="section-padding" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 20 }}>Pricing</div>
              <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                Every Game Is Unique
              </h2>
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 40 }}>
                From casual mobile games to full 3D multiplayer experiences, we scope every project based on your game design, platform targets, and timeline. Share your concept and we&apos;ll deliver a detailed proposal within 48 hours.
              </p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 36px', borderRadius: 100, background: 'var(--brand)', color: '#fff', fontSize: 15, fontWeight: 600, textDecoration: 'none', transition: '0.3s' }}>
                Get a Custom Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s3} className="section-padding" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>How We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Our Game Dev Process</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'var(--brand-tint)', zIndex: 0 }} />
              {steps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < steps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--brand)', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--ink)', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section ref={s4} className="section-padding" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Results</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Games That Perform</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {results.map((r, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(245,41,13,0.04)', border: '1px solid rgba(245,41,13,0.12)', borderRadius: 24, padding: '40px 32px', transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', margin: '12px 0 8px' }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s5} className="section-padding" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ maxWidth: 760 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(245,41,13,0.04)' : 'rgba(20,17,24,0.035)', border: `1px solid ${openFaq === i ? 'rgba(245,41,13,0.2)' : 'var(--line)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#f5290d' : 'var(--muted)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'var(--body)', lineHeight: 1.75 }}>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'var(--body)', background: 'var(--surface-alt)',
                  border: '1px solid var(--line)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.3)'; e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--body)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(245,41,13,0.08)', border: '1px solid rgba(245,41,13,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)', boxShadow: '0 0 8px #f5290d' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--brand)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Ready to Build Your <span style={{ color: 'var(--brand)' }}>Game?</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
              80+ games shipped, 50M+ downloads. Let&apos;s build your next hit.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: 'var(--brand)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(245,41,13,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your Game Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid var(--line)', color: 'var(--ink)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--line-strong)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line)'}>
                View Our Games
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['Unity & Unreal certified', 'iOS & Android experts', 'LiveOps included'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
            <TrustBadges compact />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
