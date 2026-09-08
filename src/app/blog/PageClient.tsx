'use client';
import Image from 'next/image';
import { blogImage, blogMedia } from '@/data/media';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import MediaBand from '@/components/MediaBand';
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

const FEATURED = 'top-10-unicorn-apps-2026';

const posts = [
  {
    slug: 'what-is-agentic-ai', category: 'AI/ML',
    title: 'What Is Agentic AI? A Plain-English Guide for Business Leaders',
    excerpt: 'What agentic AI actually means in plain English — where it genuinely helps a business, where it quietly fails, and how to decide whether it belongs in your operations yet.',
    author: 'RM', authorName: 'Raman Makkar', date: 'Sep 2026', readTime: '9 min read',
  },
  {
    slug: 'build-saas-mvp-8-weeks', category: 'Business',
    title: 'How to Build a SaaS MVP in 8 Weeks: A Founder’s Playbook',
    excerpt: 'Eight weeks is enough to launch a real SaaS MVP with ruthless scope and the right early decisions. The week-by-week playbook, what to cut, and when 8 weeks is not realistic.',
    author: 'RM', authorName: 'Raman Makkar', date: 'Sep 2026', readTime: '10 min read',
  },
  {
    slug: 'native-vs-cross-platform-vs-pwa', category: 'Engineering',
    title: 'Native vs Cross-Platform vs PWA: Choosing Your App Approach (2026)',
    excerpt: 'Native, cross-platform or PWA? What each does best, where each falls down, and a simple framework for choosing the right app approach for your product and budget.',
    author: 'RM', authorName: 'Raman Makkar', date: 'Sep 2026', readTime: '9 min read',
  },
  {
    slug: 'custom-software-vs-off-the-shelf', category: 'Business',
    title: 'Custom Software vs Off-the-Shelf: How to Decide (2026)',
    excerpt: 'Building custom when you could have bought is expensive — and so is forcing your business into software that does not fit. An honest framework for deciding which is right.',
    author: 'RM', authorName: 'Raman Makkar', date: 'Sep 2026', readTime: '9 min read',
  },
  {
    slug: 'use-claude-for-free',
    category: 'AI/ML',
    title: 'How to Use Claude for Free in 2026: A Practical Guide',
    excerpt: 'No credit card, no install: how Claude’s free plan actually works in 2026, what you can do with it, where the limits sit, and how to get better answers from every message.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Sep 2026',
    readTime: '8 min read',
  },
  {
    slug: 'run-ai-models-locally-free',
    category: 'AI/ML',
    title: 'How to Run AI Models Locally for Free in 2026',
    excerpt: 'Run capable AI on your own machine — private, offline and free. The tools, the open models worth downloading, the hardware you really need, and where local hits its limits.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Sep 2026',
    readTime: '10 min read',
  },
  {
    slug: 'saas-development-company-canada',
    category: 'Business',
    title: 'How to Choose a SaaS Development Company in Canada (2026)',
    excerpt: 'What separates a strong Canadian SaaS development partner from an expensive mistake: what to look for, engagement models and real costs, red flags, and the questions to ask before you sign.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Sep 2026',
    readTime: '9 min read',
  },
  {
    slug: 'website-development-company-canada',
    category: 'Engineering',
    title: 'How to Choose a Website Development Company in Canada (2026)',
    excerpt: 'Anyone can build a website; few build one that is fast, ranks and sells. How to choose a Canadian web development company that earns its fee — standards, costs, red flags and questions.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Sep 2026',
    readTime: '9 min read',
  },
  {
    slug: 'agentic-ai-in-production',
    category: 'AI/ML',
    title: 'Agentic AI in Production: What Actually Works in 2026',
    excerpt: 'The hype-free version: what agentic AI really is, the patterns that hold up in production, the failure modes nobody demos, and how to deploy agents without betting the business on a demo.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Sep 2026',
    readTime: '11 min read',
  },
  {
    slug: 'what-profitable-saas-gets-right',
    category: 'Business',
    title: 'What the Most Profitable SaaS Products Get Right',
    excerpt: 'The durable SaaS businesses win on unglamorous fundamentals — retention, expansion, a moat that deepens. Here is what they actually get right.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Sep 2026',
    readTime: '9 min read',
  },
  {
    slug: 'saas-ideas-2026',
    category: 'Business',
    title: '12 SaaS Ideas Worth Building in 2026 (and Why)',
    excerpt: 'Not a listicle of app names — a way to find ideas that can become a real business, with twelve concrete directions grounded in genuine Canadian market gaps.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Sep 2026',
    readTime: '10 min read',
  },
  {
    slug: 'saas-guide',
    category: 'Business',
    title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026',
    excerpt: 'Learn the exact blueprint non-technical founders use to build, launch, and scale successful B2B SaaS applications, and why custom architecture matters.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '7 min read',
  },
  {
    slug: 'top-seo-companies-canada',
    category: 'Digital Marketing',
    title: 'Top 10 SEO Companies in Canada (2026)',
    excerpt: 'A comprehensive, data-driven ranking of the top 10 SEO agencies in Canada for 2026, featuring Mapletech Labs and other industry leaders driving serious organic growth.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'top-software-development-companies-canada',
    category: 'Engineering',
    title: 'Top 10 Software Development Companies in Canada (2026)',
    excerpt: 'Canada has emerged as a global powerhouse in technology. We ranked the absolute top 10 software companies doing the best engineering work across the country.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '10 min read',
  },
  {
    slug: 'app-development-cost-canada',
    category: 'Business',
    title: 'How Much Does App Development Cost in Canada? (2026 Guide)',
    excerpt: 'Complete breakdown of mobile app development costs in Canada — from simple MVPs to enterprise-grade platforms. Real pricing data from Canadian agencies.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'ai-development-companies-canada',
    category: 'AI/ML',
    title: 'Top 10 AI Development Companies in Canada (2026)',
    excerpt: 'Ranking the best AI and machine learning development companies in Canada, from LLM integration specialists to computer vision experts.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'app-development-companies-edmonton',
    category: 'Mobile',
    title: 'Top 10 App Development Companies in Edmonton (2026)',
    excerpt: 'Ranking the best mobile app development companies in Edmonton, Alberta — from homegrown startups to established agencies delivering world-class iOS and Android apps.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'website-cost-canada',
    category: 'Business',
    title: 'How Much Does a Website Cost in Canada? (2026 Guide)',
    excerpt: 'From simple landing pages to complex web applications — a complete guide to website development costs across Canada with real pricing benchmarks.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '7 min read',
  },
  {
    slug: 'choose-software-development-company-canada',
    category: 'Business',
    title: 'How to Choose a Software Development Company in Canada',
    excerpt: 'Expert guide to selecting the right software development partner — what to look for, red flags to avoid, and questions every CTO should ask.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'web-development-companies-toronto',
    category: 'Engineering',
    title: 'Top 10 Web Development Companies in Toronto (2026)',
    excerpt: 'Ranking the best web development companies in Toronto — from Next.js specialists to full-stack agencies building enterprise-grade digital products.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'saas-development-cost-canada',
    category: 'Business',
    title: 'How Much Does SaaS Development Cost in Canada? (2026)',
    excerpt: 'Complete cost breakdown for building a SaaS product in Canada — MVP pricing, scaling costs, and what drives development budgets in 2026.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'blockchain-development-companies-canada',
    category: 'Engineering',
    title: 'Top 10 Blockchain Development Companies in Canada (2026)',
    excerpt: 'Ranking the best blockchain and Web3 development companies in Canada — smart contracts, DeFi protocols, and enterprise blockchain solutions.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'digital-marketing-cost-canada',
    category: 'Digital Marketing',
    title: 'How Much Does Digital Marketing Cost in Canada? (2026)',
    excerpt: 'Complete guide to digital marketing costs in Canada — SEO, PPC, social media, and content marketing pricing from top Canadian agencies.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '7 min read',
  },
  {
    slug: 'software-development-companies-calgary',
    category: 'Engineering',
    title: 'Top 10 Software Development Companies in Calgary (2026)',
    excerpt: 'Ranking the best software development companies in Calgary, Alberta — from energy-tech specialists to full-stack product studios.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
];

const categoryColors: Record<string, string> = { default: '#E11900' };

export default function BlogPage() {
  const pageRef = useReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Engineering', 'AI/ML', 'Mobile', 'Business', 'Digital Marketing'];

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: 'var(--surface)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'var(--hero-top) 0 var(--section-y)', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
            width: 800, height: 800,
            background: 'transparent',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <span style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                color: 'var(--brand)',
              }}>
                Mapletech Labs Journal
              </span>
            </div>
            <h1 className="reveal reveal-d1" style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24, maxWidth: 800,
            }}>
              Software Development<br />Insights & Guides
            </h1>
            <p className="reveal reveal-d2" style={{
              fontSize: 18, color: 'var(--muted)', lineHeight: 1.7,
              maxWidth: 560, marginBottom: 48,
            }}>
              Deep dives into engineering, product, and the technology shaping tomorrow.
            </p>

            {/* Search bar */}
            <div className="reveal reveal-d3" style={{ marginBottom: 40, maxWidth: 520 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'var(--surface-alt)', border: '1px solid var(--line)',
                borderRadius: 100, padding: '12px 20px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <span style={{ fontSize: 14, color: 'var(--faint)' }}>Search articles…</span>
              </div>
            </div>

            {/* Category filter pills */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    background: activeCategory === cat ? '#E11900' : 'var(--line)',
                    color: activeCategory === cat ? 'var(--ink)' : 'var(--body)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <MediaBand media={blogMedia[2]} />

        {/* ── FEATURED POST ── */}
        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <h2 style={{ marginBottom: 32 }}>The one to read first</h2>
            <Link href={`/blog/${FEATURED}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className="reveal"
                style={{
                  background: 'var(--surface-alt)', border: '1px solid var(--line)',
                  borderRadius: 28, padding: 48, display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 48, alignItems: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
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
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <span style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                      background: 'transparent', border: '1px solid var(--brand)', color: 'var(--brand)',
                      padding: '4px 12px', borderRadius: 100,
                    }}>Business</span>
                    <span style={{ fontSize: 13, color: 'var(--faint)' }}>March 2026</span>
                    <span style={{ fontSize: 13, color: 'var(--faint)' }}>·</span>
                    <span style={{ fontSize: 13, color: 'var(--faint)' }}>8 min read</span>
                  </div>
                  <h2 style={{
                    fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                    letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16,
                  }}>
                    Top 10 Unicorn Apps of 2026
                  </h2>
                  <p style={{
                    fontSize: 16, color: 'var(--muted)', lineHeight: 1.7,
                    maxWidth: 620, marginBottom: 28,
                  }}>
                    The mobile apps that achieved billion-dollar valuations in 2026 share one thing in common: they were built different from the start. We analysed each one to extract the engineering and product decisions that made the difference.
                  </p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: 14, fontWeight: 600, color: 'var(--brand)',
                  }}>
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
                <div className="media media--zoom" style={{ width: 220, height: 220, flexShrink: 0, maxWidth: '100%' }}>
                  <Image
                    src={blogImage(0).src}
                    alt={blogImage(0).alt}
                    fill
                    sizes="220px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── POSTS GRID ── */}
        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <h2 style={{ marginBottom: 40 }}>Latest articles</h2>
            <div className="grid grid--3">
              {posts.filter(p => p.slug !== FEATURED && (activeCategory === 'All' || p.category === activeCategory)).map((post, i) => {
                const accentColor = 'var(--brand)';
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article
                      className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                      style={{
                        background: 'var(--surface)', border: '1px solid var(--line)',
                        borderRadius: 24, overflow: 'hidden', height: '100%',
                        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                        display: 'flex', flexDirection: 'column', gap: 0,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.10)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Photo header */}
                      <div className="media media--flat media--zoom" style={{ height: 190 }}>
                        <Image
                          src={blogImage(i + 1).src}
                          alt={blogImage(i + 1).alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      <div style={{ padding: 'clamp(20px, 4vw, 28px)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        {/* Category badge */}
                        <div style={{ marginBottom: 20 }}>
                          <span style={{
                            fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                            background: 'var(--brand)', color: '#fff',
                            padding: '4px 12px', borderRadius: 100,
                          }}>
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize: 18, fontWeight: 600, color: 'var(--ink)',
                          letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 12,
                        }}>
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p style={{
                          fontSize: 14, color: 'var(--muted)', lineHeight: 1.7,
                          marginBottom: 28, flexGrow: 1,
                        }}>
                          {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          marginTop: 'auto', paddingTop: 20,
                          borderTop: '1px solid var(--line)',
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            {/* Author avatar */}
                            <div style={{
                              width: 30, height: 30, borderRadius: '50%',
                              background: 'transparent', border: '1px solid var(--brand)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 11, fontWeight: 700, color: 'var(--brand)',
                            }}>
                              {post.author}
                            </div>
                            <div>
                              <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0 }}>{post.date}</p>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                            </svg>
                            <span style={{ fontSize: 12, color: 'var(--faint)' }}>{post.readTime}</span>
                          </div>
                        </div>

                        <div style={{ marginTop: 16 }}>
                          <span style={{
                            fontSize: 13, fontWeight: 600, color: 'var(--brand)',
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                          }}>
                            Read More
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <FinalCta title="Have a project in mind?" sub="Reading is one thing, shipping is another. Tell us what you’re building and a senior engineer will scope it within one working day." />

      </main>
      <Footer />
    </>
  );
}
