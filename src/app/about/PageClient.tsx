'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { blogMedia, officeMedia, humanMedia } from '@/data/media';
import PageHero from '@/components/page/PageHero';
import FinalCta from '@/components/home/FinalCta';
import MediaBand from '@/components/MediaBand';

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
  { value: '300+', label: 'Projects Delivered' },
  { value: '150+', label: 'Engineers Worldwide' },
  { value: '12', label: 'Locations Across Canada' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$500M+', label: 'Client Revenue Generated' },
];

const timeline = [
  { year: '2018', event: 'Founded in Edmonton by Raman Makkar. TML Branding Agency begins.' },
  { year: '2019', event: 'First 25 clients. Revenue crosses $1M. Team grows to 18 engineers.' },
  { year: '2020', event: 'Expanded across Canada. Virtual-first team model adopted.' },
  { year: '2021', event: 'Series A funding. Headcount doubles. First enterprise contracts.' },
  { year: '2022', event: 'Expanded to 12 locations across Canada. Coast-to-coast coverage.' },
  { year: '2023', event: '500+ projects milestone. Recognised in Deloitte\'s Fast 50.' },
  { year: '2024', event: 'Mapletech AI Labs launched. Dedicated research team for applied AI.' },
  { year: '2026', event: 'Global team of 150+ top agents working virtually. $500M+ in client revenue generated.' },
];

const values = [
  {
    icon: '🏆',
    title: 'Engineering Excellence',
    desc: 'We hold our code, our architecture, and our processes to the highest standard. Mediocre work doesn\'t leave our doors.',
  },
  {
    icon: '❤️',
    title: 'Client Obsession',
    desc: 'Your success is the only metric that matters. We measure ourselves by the outcomes we create for the businesses we build with.',
  },
  {
    icon: '🔍',
    title: 'Radical Transparency',
    desc: 'No jargon, no surprises, no vanity metrics. You always know exactly where your project stands and what it will cost.',
  },
  {
    icon: '⚡',
    title: 'Speed Without Compromise',
    desc: 'We move fast because we\'ve built the systems that let us. Speed without quality is recklessness — we deliver both.',
  },
  {
    icon: '🔒',
    title: 'Security First',
    desc: 'Security is designed in from day one. Every system we build is architected to withstand the threats of tomorrow.',
  },
  {
    icon: '🌱',
    title: 'Long-term Thinking',
    desc: 'We build relationships and codebases designed to last. The decisions we make today should serve you five years from now.',
  },
];

const team = [
  {
    initials: 'RM',
    name: 'Raman Makkar',
    role: 'Founder & CEO',
    bio: 'Founded Mapletech Labs & TML Branding Agency. Leading Canadian businesses to the top in tech.',
  },
  {
    initials: 'HM',
    name: 'Harry',
    role: 'VP Engineering',
    bio: 'Leads engineering across all 12 Canadian locations. Expert in scalable architecture.',
  },
  {
    initials: 'MC',
    name: 'Michel',
    role: 'Chief Design Officer',
    bio: 'Drives world-class design across all products and branding projects.',
  },
  {
    initials: 'KS',
    name: 'Karan',
    role: 'Head of Operations',
    bio: 'Manages our virtual team of top agents from around the world.',
  },
];

const offices = [
  { city: 'Edmonton', role: 'HQ', detail: 'Headquarters — Edmonton, Alberta', flag: '🇨🇦' },
  { city: 'Toronto', role: 'Ontario', detail: 'Toronto Office', flag: '🇨🇦' },
  { city: 'Vancouver', role: 'BC', detail: 'Vancouver Office', flag: '🇨🇦' },
  { city: 'Calgary', role: 'Alberta', detail: 'Calgary Office', flag: '🇨🇦' },
];

export default function AboutPage() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: 'var(--surface)', minHeight: '100vh' }}>
        <article>

        {/* ── HERO ── */}
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} copy={{ badge: "About Mapletech Labs", title: <>We Build Software<br />That Matters.</>, desc: <>A world-class engineering firm headquartered in Edmonton, Canada. Founded by Raman Makkar in 2018. 12 locations across Canada. Best agents from around the world working virtually.</> }} photo={humanMedia.workshop} form={false} />

        {/* ── MISSION STATEMENT ── */}
        <section style={{
          padding: 'var(--section-y) 0',
        }}>
          <div className="cb-container">
            <p className="reveal" style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'var(--ink)',
              lineHeight: 1.35, letterSpacing: '-0.03em', textAlign: 'center',
              maxWidth: 920, margin: '0 auto',
            }}>
              "Our mission is to democratise access to world-class software engineering.{' '}
              <span style={{ color: 'var(--muted)' }}>
                Every company, regardless of size, deserves technology that competes at the highest level.
              </span>"
            </p>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="cb-container">
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
            }}>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    padding: 'var(--section-y) 0', textAlign: 'center',
                    borderRight: i < stats.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--brand)',
                    letterSpacing: '-0.04em', margin: '0 0 8px',
                  }}>{stat.value}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0, fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

              {/* Text */}
              <div>
                <div className="reveal" style={{ marginBottom: 20 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                    color: 'var(--faint)',
                  }}>Our Story</span>
                </div>
                <h2 className="reveal reveal-d1" style={{
                  fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
                  letterSpacing: '-0.04em', marginBottom: 28, lineHeight: 1.1,
                }}>
                  Built by engineers,<br />for builders.
                </h2>
                <div className="reveal reveal-d2">
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    Mapletech Labs was founded in Edmonton, Canada in 2018 by Raman Makkar — with a mission to take Canadian businesses to the top in tech. What started as TML Branding Agency has grown into a full-service technology powerhouse ruling across all of Canada.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    They started with a simple belief: the best engineering talent in the world shouldn't only be available to the biggest companies. Founders building their first product deserve the same quality of engineering judgment as a Series D company with a 200-person team.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    From a small team in Edmonton, Mapletech has grown into a Canada-wide engineering firm with 12 locations, a team of the best agents from around the world working virtually, and a track record of building products that have collectively generated over $500 million in client revenue.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
                    The founding belief hasn't changed. Neither has the standard we hold ourselves to.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="reveal reveal-d2">
                <div style={{ position: 'relative', paddingLeft: 32 }}>
                  {/* Vertical line */}
                  <div aria-hidden="true" style={{
                    position: 'absolute', left: 0, top: 12, bottom: 12,
                    width: 1, background: 'var(--surface-alt)',
                  }} />
                  {timeline.map((item, i) => (
                    <div key={item.year} style={{
                      position: 'relative', marginBottom: i < timeline.length - 1 ? 32 : 0,
                    }}>
                      {/* Dot */}
                      <div style={{
                        position: 'absolute', left: -38, top: 4,
                        width: 10, height: 10, borderRadius: '50%',
                        background: i === timeline.length - 1 ? '#E11900' : 'transparent',
                        border: `2px solid ${i === timeline.length - 1 ? '#E11900' : 'transparent'}`,
                      }} />
                      <div>
                        <span style={{
                          fontSize: 12, fontWeight: 800, color: 'var(--brand)',
                          letterSpacing: '0.05em', display: 'block', marginBottom: 4,
                        }}>{item.year}</span>
                        <p style={{
                          fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: 0,
                        }}>{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                color: 'var(--faint)',
              }}>What We Stand For</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', marginBottom: 60, lineHeight: 1.1,
            }}>
              Our Values
            </h2>
            <div className="grid grid--3">
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                  style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: 24, padding: 36,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand)';
                    (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--line)';
                    (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-alt)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{val.icon}</div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 600, color: 'var(--ink)',
                    letterSpacing: '-0.02em', marginBottom: 12,
                  }}>{val.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP TEAM ── */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                color: 'var(--faint)',
              }}>The People Behind It</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1.1,
            }}>
              Leadership Team
            </h2>
            <p className="reveal reveal-d2" style={{
              fontSize: 17, color: 'var(--muted)', lineHeight: 1.7,
              maxWidth: 560, marginBottom: 60,
            }}>
              The best agents from around the world, working virtually across 12 Canadian locations to deliver world-class technology to every builder.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20,
            }}>
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: 24, padding: 32, textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand)';
                    (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--line)';
                    (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-alt)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
                    background: 'transparent', border: '2px solid transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, fontWeight: 800, color: 'var(--brand)',
                  }}>
                    {member.initials}
                  </div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 600, color: 'var(--ink)',
                    letterSpacing: '-0.02em', marginBottom: 6,
                  }}>{member.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--brand)', fontWeight: 600, marginBottom: 14 }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICES ── */}
        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                color: 'var(--faint)',
              }}>Where We Are</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1.1,
            }}>
              Global Offices
            </h2>
            <p className="reveal reveal-d2" style={{
              fontSize: 17, color: 'var(--muted)', lineHeight: 1.7,
              maxWidth: 520, marginBottom: 60,
            }}>
              12 locations across Canada, one engineering culture. Best agents from around the world.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20,
            }}>
              {offices.map((office, i) => (
                <div
                  key={office.city}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: 24, padding: 32,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand)';
                    (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--line)';
                    (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-alt)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{office.flag}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: 6 }}>
                    {office.city}
                  </h3>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                    {office.role}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                    {office.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <MediaBand media={humanMedia.meeting} ratio="21 / 8" />
        <FinalCta title="Let’s talk about what you’re building." sub="Tell us the problem. A senior engineer will come back within one working day with how we’d approach it, what it takes and what it costs." />

        </article>
      </main>
      <Footer />
    </>
  );
}
