'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

const companies = [
  { num: 1, name: 'Mapletech Labs', category: 'Enterprise Software', emoji: '🍁', metric: 'Next.js, AI Solutions & Cloud Infrastructure', accentColor: '#f5290d', bgColor: 'rgba(245,41,13,' },
  { num: 2, name: 'Townmedialabs', category: 'Digital Products', emoji: '🎨', metric: 'Creative digital solutions for Calgary businesses', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML', category: 'Startup Tech', emoji: '🚀', metric: 'Full-stack development & rapid prototyping', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Absorb Software', category: 'LMS & E-Learning', emoji: '📚', metric: 'Enterprise learning management platforms', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Symend', category: 'Behavioural AI', emoji: '🧠', metric: 'AI-driven behavioural science solutions', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Benevity', category: 'CSR Tech', emoji: '💚', metric: 'Corporate social responsibility platforms', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Solium (Shareworks)', category: 'Equity Mgmt', emoji: '📊', metric: 'Equity management & compensation platforms', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Neo Financial', category: 'FinTech', emoji: '💳', metric: 'Next-gen banking & financial products', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Helcim', category: 'Payments', emoji: '💰', metric: 'Transparent payment processing solutions', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Attabotics', category: 'Robotics & AI', emoji: '🤖', metric: 'Warehouse robotics & supply chain AI', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-companies-edmonton', title: 'Top App Development Companies in Edmonton', category: 'Business', readTime: '8 min' },
  { slug: 'choose-software-development-company-canada', title: 'How to Choose a Software Development Company in Canada', category: 'Business', readTime: '9 min' },
  { slug: 'app-development-cost-canada', title: 'How Much Does App Development Cost in Canada?', category: 'Business', readTime: '10 min' },
];

export default function SoftwareDevelopmentCompaniesCalgaryClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000', minHeight: '100vh' }}>

        {/* -- ARTICLE HERO -- */}
        <section style={{ padding: '140px 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(245,41,13,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(245,41,13,0.12)', color: '#f5290d',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>March 14, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.3)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                8 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Software Development Companies in Calgary (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Calgary&apos;s tech ecosystem has undergone a remarkable transformation. Here are the top software development companies driving innovation in Alberta&apos;s largest city.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(245,41,13,0.12)', border: '1px solid rgba(245,41,13,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#f5290d',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Mapletech Labs</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '\u{1D54F}' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.55)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)',
                  background: copied ? 'rgba(245,41,13,0.1)' : 'rgba(255,255,255,0.04)',
                  color: copied ? '#f5290d' : 'rgba(255,255,255,0.55)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Calgary is no longer just an oil and gas city. Over the past five years, Alberta&apos;s economic capital has undergone one of the most dramatic tech transformations in Canadian history. Fuelled by the Calgary Innovation Coalition, Platform Calgary, and a growing venture capital scene that deployed over $800M in 2025 alone, the city has emerged as a legitimate contender in Canada&apos;s software development landscape.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                    What makes Calgary particularly attractive for software development? Cost efficiency. Calgary-based development teams are 20-30% cheaper than their Toronto and Vancouver counterparts while delivering the same quality of work. Combined with Alberta&apos;s zero provincial sales tax, no payroll tax, and the lowest corporate tax rate in Canada, the economics are compelling for businesses of every size.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                    We evaluated dozens of software firms across Calgary based on technical expertise, client portfolio, innovation track record, team size, and industry reputation to bring you this definitive ranking of the <strong>Top 10 Software Development Companies in Calgary</strong> for 2026.
                  </p>
                </div>

                {/* Company 1: Mapletech Labs (highlighted) */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mapletech-labs">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(245,41,13,0.1) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(245,41,13,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(245,41,13,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(245,41,13,0.1)', border: '1px solid rgba(245,41,13,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(245,41,13,0.15)', color: '#f5290d',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Enterprise Software</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#fff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Mapletech Labs</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Our Calgary office serves Alberta&apos;s energy, fintech, and logistics sectors with world-class custom software. We build Next.js web apps, mobile platforms, AI solutions, and cloud infrastructure. Calgary&apos;s tech renaissance is being driven by companies choosing local engineering excellence over offshore alternatives.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What sets Mapletech Labs apart is our full-stack approach: we don&apos;t just write code, we engineer complete digital ecosystems. From server-side rendered applications that achieve perfect Lighthouse scores to AI-powered data pipelines that transform how energy companies optimize operations, our Calgary team delivers enterprise-grade solutions with startup-speed execution.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(245,41,13,0.08)', border: '1px solid rgba(245,41,13,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#f5290d', fontWeight: 600 }}>
                        Key Metric: Next.js, AI Solutions & Cloud Infrastructure
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'townmedialabs', name: 'Townmedialabs', category: 'Digital Products',
                    emoji: '🎨', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Creative digital solutions for Calgary businesses',
                    paragraphs: [
                      'Townmedialabs delivers creative digital solutions for Calgary businesses, combining intuitive design with robust development to help local brands compete nationally. Their team specializes in responsive web applications, e-commerce platforms, and digital branding that captures the spirit of Alberta\'s entrepreneurial energy.',
                      'With deep roots in Calgary\'s business community, Townmedialabs understands the unique challenges Western Canadian companies face when scaling their digital presence across provincial and national markets.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML', category: 'Startup Tech',
                    emoji: '🚀', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Full-stack development & rapid prototyping',
                    paragraphs: [
                      'TML accelerates Calgary startups with full-stack development, rapid prototyping, and growth-focused engineering, helping turn Alberta ideas into scalable tech products. Their lean methodology and agile approach make them the ideal partner for early-stage companies looking to validate concepts quickly and iterate based on market feedback.',
                      'From MVP builds to Series A scaling, TML has helped dozens of Calgary-based startups navigate the critical early stages of product development with a focus on clean architecture and future-proof technology choices.',
                    ],
                  },
                  {
                    num: '04', id: 'absorb-software', name: 'Absorb Software', category: 'LMS & E-Learning',
                    emoji: '📚', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Enterprise learning management platforms',
                    paragraphs: [
                      'Absorb Software is one of Calgary\'s true tech success stories. Their cloud-based Learning Management System (LMS) serves Fortune 500 companies, government agencies, and educational institutions worldwide. With over 200 employees in Calgary, they are proof that world-class SaaS products can be built right here in Alberta.',
                    ],
                  },
                  {
                    num: '05', id: 'symend', name: 'Symend', category: 'Behavioural AI',
                    emoji: '🧠', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'AI-driven behavioural science solutions',
                    paragraphs: [
                      'Symend combines behavioural science with artificial intelligence to help large enterprises improve customer engagement and reduce churn. Their platform uses machine learning models trained on billions of customer interactions to deliver hyper-personalized digital experiences. A Calgary-born unicorn that raised over $100M in venture funding.',
                    ],
                  },
                  {
                    num: '06', id: 'benevity', name: 'Benevity', category: 'CSR Tech',
                    emoji: '💚', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Corporate social responsibility platforms',
                    paragraphs: [
                      'Benevity is Calgary\'s crown jewel in social impact technology. Their platform powers corporate giving, volunteering, and grant management for some of the world\'s largest companies including Apple, Google, and Nike. Acquired for over $1B, Benevity proves that mission-driven software companies can achieve massive commercial success from Calgary.',
                    ],
                  },
                  {
                    num: '07', id: 'solium', name: 'Solium (Shareworks by Morgan Stanley)', category: 'Equity Mgmt',
                    emoji: '📊', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Equity management & compensation platforms',
                    paragraphs: [
                      'Originally founded in Calgary as Solium Capital, now operating as Shareworks by Morgan Stanley, this company built the definitive platform for equity plan management and stock compensation. Their software manages billions of dollars in employee equity across thousands of companies worldwide, all engineered from their Calgary development centre.',
                    ],
                  },
                  {
                    num: '08', id: 'neo-financial', name: 'Neo Financial', category: 'FinTech',
                    emoji: '💳', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Next-gen banking & financial products',
                    paragraphs: [
                      'Founded by the team behind SkipTheDishes, Neo Financial is reimagining banking for Canadians with high-interest savings accounts, cashback credit cards, and a modern mobile-first experience. With over $300M raised, Neo Financial is Calgary\'s most prominent fintech startup and a key driver of the city\'s financial technology ecosystem.',
                    ],
                  },
                  {
                    num: '09', id: 'helcim', name: 'Helcim', category: 'Payments',
                    emoji: '💰', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Transparent payment processing solutions',
                    paragraphs: [
                      'Helcim has built a reputation as one of Canada\'s most transparent and merchant-friendly payment processors. Their Calgary-built platform offers interchange-plus pricing, beautiful POS hardware, and developer-friendly APIs. They are the antithesis of the opaque pricing models that have plagued the payments industry for decades.',
                    ],
                  },
                  {
                    num: '10', id: 'attabotics', name: 'Attabotics', category: 'Robotics & AI',
                    emoji: '🤖', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Warehouse robotics & supply chain AI',
                    paragraphs: [
                      'Attabotics is redefining warehouse logistics with their 3D robotics-based storage and retrieval system. Their technology reduces warehouse footprint by 85% and is backed by major investors including the Government of Canada. Combining hardware robotics with sophisticated AI software, Attabotics represents the cutting edge of Calgary\'s deep-tech ambitions.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 24, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}0.1)`, border: `1px solid ${app.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#fff',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>
                          {app.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
                  <div style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#f5290d';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,41,13,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(245,41,13,0.12)', border: '1px solid rgba(245,41,13,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#f5290d', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Mapletech Labs</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Mapletech Labs. Has guided over 300+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,41,13,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(245,41,13,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.06)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#f5290d', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* -- BOTTOM CTA -- */}
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(245,41,13,0.04)', border: '1px solid rgba(245,41,13,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#f5290d', marginBottom: 12,
                }}>Build Local</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Build Your Software in Calgary
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480, lineHeight: 1.7 }}>
                  Calgary&apos;s tech ecosystem is thriving. Partner with Mapletech Labs to build enterprise-grade software with local engineering excellence at a fraction of Toronto and Vancouver costs.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#f5290d', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your Calgary Project →
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
