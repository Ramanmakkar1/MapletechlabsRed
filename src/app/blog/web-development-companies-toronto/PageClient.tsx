'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { blogImage } from '@/data/media';
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

const companies = [
  { num: 1, name: 'Mapletech Labs', category: 'Enterprise Web Development', emoji: '🍁', metric: 'High-Performance Next.js & SaaS Platforms', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 2, name: 'Townmedialabs', category: 'Digital-First Web Agency', emoji: '🎨', metric: 'Stunning WordPress & Custom Brand Websites', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 3, name: 'TML', category: 'Scalable Web Platforms', emoji: '🚀', metric: 'Growth-Oriented Architecture & Rapid Deployment', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 4, name: 'Myplanet', category: 'Digital Experience Platforms', emoji: '🌐', metric: 'Enterprise DXP & Headless CMS Solutions', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 5, name: 'Nulogy', category: 'Supply Chain Web Apps', emoji: '📦', metric: 'Specialized Supply Chain Management Platforms', accentColor: 'var(--faint)', bgColor: 'transparent', },
  { num: 6, name: 'Nascent Digital', category: 'E-Commerce Specialists', emoji: '🛒', metric: 'Shopify Plus & Custom E-Commerce Builds', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 7, name: 'Rangle.io', category: 'Angular/React Enterprise Apps', emoji: '⚛️', metric: 'Enterprise Frontend Architecture & Consulting', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 8, name: 'TWG (The Working Group)', category: 'Product Development', emoji: '🛠️', metric: 'End-to-End Digital Product Strategy', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 9, name: 'Architech', category: 'Cloud-Native Web Apps', emoji: '☁️', metric: 'Azure & AWS Cloud-Native Development', accentColor: '#E11900', bgColor: 'transparent', },
  { num: 10, name: 'Crowdlinker', category: 'Startup Web & Mobile', emoji: '💡', metric: 'Startup MVP & Growth-Stage Development', accentColor: '#E11900', bgColor: 'transparent', },
];

const relatedPosts = [
  { slug: 'website-cost-canada', title: 'How Much Does a Website Cost in Canada?', category: 'Business', readTime: '7 min' },
  { slug: 'top-seo-companies-canada', title: 'Top 10 SEO Companies in Canada (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'choose-software-development-company-canada', title: 'How to Choose a Software Development Company in Canada', category: 'Business', readTime: '8 min' },
];

export default function WebDevelopmentCompaniesTorontoClient() {
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
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: 'var(--surface)', minHeight: '100vh' }}>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'var(--hero-top) 0 var(--section-y)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'transparent',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'var(--muted)', textDecoration: 'none',
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
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                background: 'transparent', border: '1px solid var(--brand)', color: 'var(--brand)',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'var(--faint)' }}>March 14, 2026</span>
              <span style={{ color: 'var(--muted)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'var(--muted)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'var(--faint)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'var(--faint)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                8 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Web Development Companies in Toronto (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'var(--muted)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A definitive ranking of the best web development agencies in Toronto for 2026 — from enterprise platforms to startup MVPs, these are the companies building the digital backbone of Canada's tech capital.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid var(--line)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'transparent', border: '1px solid var(--brand)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: 'var(--brand)',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0 }}>CEO, Mapletech Labs</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'var(--faint)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '𝕏' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--line)',
                    background: 'var(--surface-alt)', color: 'var(--muted)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid var(--line)',
                  background: copied ? 'transparent' : 'var(--line)',
                  color: copied ? 'var(--brand)' : 'var(--body)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        <MediaBand media={blogImage(12)} />

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'var(--body)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Toronto is the undisputed tech capital of Canada. Home to MaRS Discovery District, the Vector Institute, and a startup ecosystem that rivals Silicon Valley in density, the city generates billions in digital commerce every year. For businesses operating in this market, your website is not a brochure — it is your most critical revenue asset.
                  </p>
                  <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    But Toronto is also saturated with web development agencies. Hundreds of shops claim to build "world-class" websites, making it nearly impossible to separate genuine engineering talent from template resellers and offshore middlemen.
                  </p>
                  <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8 }}>
                    We evaluated over 80 Toronto-area web development companies based on portfolio quality, technical capabilities, client retention, team size, and industry reputation to compile this definitive ranking of the <strong>Top 10 Web Development Companies in Toronto</strong> for 2026.
                  </p>
                </div>

                {/* Company 1: Mapletech Labs — Highlighted Card */}
                <div className="reveal" style={{ marginBottom: 56 }} id="mapletech-labs">
                  <div style={{
                    background: 'var(--surface) 100%)', border: '1px solid var(--brand)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'transparent', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'transparent', border: '1px solid var(--brand)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'transparent', border: '1px solid var(--brand)', color: 'var(--brand)',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Enterprise Web Development</span>
                        </div>
                        <h2 style={{
                          fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Mapletech Labs</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      While headquartered in Edmonton, our Toronto office serves as our central hub for enterprise web development. We build high-performance Next.js applications, SaaS platforms, and complex e-commerce systems. Our Toronto team handles some of the most demanding web projects in the country.
                    </p>
                    <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What sets Mapletech Labs apart is our engineering-first approach. Every website we build scores 95+ on Google Lighthouse, ships with server-side rendering for instant load times, and is architected for scale from day one. We do not use templates. We do not outsource. Every line of code is written by our in-house Canadian team.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'transparent', border: '1px solid var(--brand)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11900" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: 'var(--brand)', fontWeight: 600 }}>
                        Key Metric: High-Performance Next.js & SaaS Platforms
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'townmedialabs', name: 'Townmedialabs', category: 'Digital-First Web Agency',
                    emoji: '🎨', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'Stunning WordPress & Custom Brand Websites',
                    paragraphs: [
                      'Townmedialabs brings a Toronto-based creative approach to web development, building stunning WordPress and custom websites that help brands stand out in Canada\'s most competitive market. Their design-forward methodology combines visual storytelling with conversion-optimized layouts, making them a top choice for brands that need to look exceptional while driving real business results.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML', category: 'Scalable Web Platforms',
                    emoji: '🚀', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'Growth-Oriented Architecture & Rapid Deployment',
                    paragraphs: [
                      'TML builds scalable web platforms for Toronto startups and enterprises, focusing on growth-oriented architecture and rapid deployment. Their lean development process gets MVPs to market fast without sacrificing code quality, and their modular architecture approach ensures that early-stage products can scale gracefully as user bases grow from hundreds to hundreds of thousands.',
                    ],
                  },
                  {
                    num: '04', id: 'myplanet', name: 'Myplanet', category: 'Digital Experience Platforms',
                    emoji: '🌐', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'Enterprise DXP & Headless CMS Solutions',
                    paragraphs: [
                      'Myplanet is a Toronto-native agency specializing in digital experience platforms and headless CMS implementations. They work with enterprise clients who need complex content management systems that serve multiple channels — web, mobile, kiosk, and IoT. Their deep expertise with Contentful, Sanity, and custom headless architectures makes them a go-to for large-scale content-driven web applications.',
                    ],
                  },
                  {
                    num: '05', id: 'nulogy', name: 'Nulogy', category: 'Supply Chain Web Apps',
                    emoji: '📦', accentColor: 'var(--faint)', bgColor: 'transparent',
                    metric: 'Specialized Supply Chain Management Platforms',
                    paragraphs: [
                      'Nulogy occupies a unique niche in the Toronto web development scene — they build specialized supply chain management platforms that help CPG brands and contract packers digitize their operations. If your business involves complex logistics, warehouse management, or supply chain collaboration, Nulogy\'s domain expertise is unmatched in the Canadian market.',
                    ],
                  },
                  {
                    num: '06', id: 'nascent-digital', name: 'Nascent Digital', category: 'E-Commerce Specialists',
                    emoji: '🛒', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'Shopify Plus & Custom E-Commerce Builds',
                    paragraphs: [
                      'Nascent Digital is Toronto\'s premier e-commerce web development agency. They specialize in Shopify Plus builds, custom checkout experiences, and high-traffic e-commerce platforms that handle millions in monthly transactions. Their team understands the nuances of Canadian e-commerce — bilingual storefronts, Canadian payment gateways, provincial tax calculations, and cross-border shipping integrations.',
                    ],
                  },
                  {
                    num: '07', id: 'rangle', name: 'Rangle.io', category: 'Angular/React Enterprise Apps',
                    emoji: '⚛️', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'Enterprise Frontend Architecture & Consulting',
                    paragraphs: [
                      'Rangle.io is one of Toronto\'s most technically respected web development agencies, known for their deep expertise in Angular, React, and modern frontend architecture. They work primarily with enterprise clients who need complex, data-heavy web applications — financial dashboards, internal tools, and customer-facing platforms that require bulletproof performance and accessibility compliance.',
                    ],
                  },
                  {
                    num: '08', id: 'twg', name: 'TWG (The Working Group)', category: 'Product Development',
                    emoji: '🛠️', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'End-to-End Digital Product Strategy',
                    paragraphs: [
                      'TWG takes a product-first approach to web development. Rather than just building what you ask for, they challenge assumptions, validate ideas through user research, and help define the right product before writing a single line of code. For Toronto businesses that need a strategic partner — not just a code shop — TWG is an excellent choice for complex product development initiatives.',
                    ],
                  },
                  {
                    num: '09', id: 'architech', name: 'Architech', category: 'Cloud-Native Web Apps',
                    emoji: '☁️', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'Azure & AWS Cloud-Native Development',
                    paragraphs: [
                      'Architech specializes in cloud-native web applications built on Azure and AWS. Their Toronto team builds serverless architectures, microservices-based platforms, and enterprise web applications that leverage the full power of cloud infrastructure. They are a strong choice for organizations migrating legacy systems to the cloud or building new platforms that need elastic scalability from day one.',
                    ],
                  },
                  {
                    num: '10', id: 'crowdlinker', name: 'Crowdlinker', category: 'Startup Web & Mobile',
                    emoji: '💡', accentColor: '#E11900', bgColor: 'transparent',
                    metric: 'Startup MVP & Growth-Stage Development',
                    paragraphs: [
                      'Crowdlinker is the go-to Toronto agency for startups and growth-stage companies. They build web and mobile products fast, with a focus on getting to market quickly and iterating based on real user feedback. Their lean methodology, combined with strong design chops and full-stack development capabilities, has helped dozens of Toronto startups secure funding and scale their user bases.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'var(--surface-alt)', border: '1px solid var(--line)',
                      borderRadius: 24, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}`, border: `1px solid ${app.bgColor}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'var(--body)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}`, border: `1px solid ${app.bgColor}`,
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

              {/* ── SIDEBAR ── */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
                  <div style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                      color: 'var(--faint)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
                          fontSize: 13, color: 'var(--muted)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'var(--faint)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                      color: 'var(--faint)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'transparent', border: '1px solid var(--brand)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: 'var(--brand)', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0 }}>CEO, Mapletech Labs</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Mapletech Labs. Has guided over 300+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                      color: 'var(--faint)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid var(--line)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--brand)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--line)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: 'var(--brand)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'var(--faint)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        <MediaBand media={blogImage(12 + 7)} ratio="21 / 7" />

        {/* ── BOTTOM CTA ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div
              className="reveal"
              style={{
                background: 'transparent', border: '1px solid var(--brand)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                  color: 'var(--brand)', marginBottom: 12,
                }}>Toronto Web Development</p>
                <h2 style={{
                  fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Start Your Web Project in Toronto
                </h2>
                <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether you need a high-performance marketing site, a complex SaaS platform, or an enterprise web application, our Toronto team is ready to build it. Get a fixed-price proposal within 48 hours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: 'var(--brand)', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your Web Project in Toronto →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', marginBottom: 32 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                { title: 'How Much Does a Website Cost in Canada?', href: '/blog/website-cost-canada' },
                { title: 'Top Software Development Companies in Canada', href: '/blog/top-software-development-companies-canada' },
                { title: 'Software Development Companies in Calgary', href: '/blog/software-development-companies-calgary' },
              ].map((post) => (
                <a key={post.href} href={post.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'var(--surface-alt)', border: '1px solid var(--line)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                  fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {post.title} →
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
