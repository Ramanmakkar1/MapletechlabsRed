'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { blogImage } from '@/data/media';
import MediaBand from '@/components/MediaBand';
import BlogCityLinks from '@/components/blog/BlogCityLinks';

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

const tocItems = [
  { id: 'intro', label: 'Introduction', emoji: '🍁' },
  { id: 'freelancer', label: 'When a Freelancer Fits', emoji: '🧑‍💻' },
  { id: 'agency', label: 'When a Software Agency Fits', emoji: '🏢' },
  { id: 'in-house', label: 'When an In-House Team Fits', emoji: '🏠' },
  { id: 'comparison', label: 'Freelancer vs Agency vs In-House', emoji: '⚖️' },
  { id: 'checklist', label: 'Decision Checklist', emoji: '✅' },
  { id: 'questions', label: 'What to Ask Any Vendor', emoji: '❓' },
  { id: 'faqs', label: 'Frequently Asked Questions', emoji: '💬' },
];

export default function FreelancerVsAgencyVsInHouseClient({
  answer,
  faqs,
}: { answer?: string; faqs: { q: string; a: string }[] }) {
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
        <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Freelancer vs Agency vs In-House Team in Canada' },
          ]} />
        </div>

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
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'var(--faint)' }}>November 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'var(--faint)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'var(--faint)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                9 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Freelancer vs Agency vs In-House Team in Canada (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'var(--muted)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              How to decide whether to hire a freelancer, a software agency, or an in-house team for your Canadian project — covering cost, speed, risk, ownership, and support after launch.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--line-strong)' }}>Raman Makkar</a></p>
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

        {/* QUICK ANSWER BOX */}
        {answer && (
          <section aria-labelledby="article-answer-heading" style={{ background: 'var(--surface-alt)', borderBottom: '1px solid var(--line)', padding: 'clamp(24px, 3vw, 32px)' }}>
            <div className="cb-container" style={{ maxWidth: 900 }}>
              <h2 id="article-answer-heading" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 12px' }}>Quick answer</h2>
              <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>{answer}</p>
            </div>
          </section>
        )}

        <MediaBand media={blogImage(8)} />

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{
                    fontSize: 18, color: 'var(--body)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The short answer: hire a freelancer for small, well-defined work, a software agency when you need a full product team, and an in-house team when development is continuous and long-term. Match the model to your budget, timeline, and how much ongoing work you have after launch.
                  </p>
                  <p style={{
                    fontSize: 18, color: 'var(--body)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Choosing who builds your software is one of the first and most important decisions a Canadian business makes. The three main options — a freelancer, a software agency, or an in-house team — each fit a different shape of project, and picking the wrong one is a common cause of missed timelines and budget overruns.
                  </p>
                  <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    A freelancer is one person you contract. An agency is a team you buy capacity from. An in-house team is people you employ. None is universally better; each is the right answer for a different combination of budget, timeline, complexity, and how much ongoing development you need after launch.
                  </p>
                  <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8 }}>
                    This guide explains when each model works, how they compare on cost structure, control, speed, and fit, and the questions to ask any vendor before you commit. It is general guidance, not a quote: actual prices depend on scope, seniority, and location.
                  </p>
                </div>

                {/* When a freelancer fits */}
                <div className="reveal" style={{ marginBottom: 56 }} id="freelancer">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'transparent', border: '1px solid var(--brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🧑‍💻</div>
                    <h2 style={{
                      fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>1. When a Freelancer Fits</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 16 }}>
                    A freelancer is usually the right starting point when the work is well-defined, short-term, and does not require a full product team.
                  </p>
                  <ul style={{ margin: '0 0 22px', paddingLeft: 22, display: 'grid', gap: 10 }}>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>A fixed-scope deliverable:</strong> a landing page, a single integration, a prototype, or one feature added to an existing product.
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>A tight budget:</strong> you can pay only for the hours or the fixed project fee, without carrying salaries between projects.
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>You can manage the work:</strong> you or someone on your team can write requirements, review code, and accept delivery.
                    </li>
                  </ul>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    The main trade-offs are capacity and continuity. One person has limited specialties, may become unavailable, and is a single point of failure if they get sick or take another contract mid-project.
                  </p>
                </div>

                {/* When a software agency fits */}
                <div className="reveal" style={{ marginBottom: 56 }} id="agency">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'transparent', border: '1px solid var(--brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🏢</div>
                    <h2 style={{
                      fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>2. When a Software Agency Fits</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 16 }}>
                    An agency tends to fit when you need a whole product team — product design, development, QA, and project management — without hiring and managing each role yourself.
                  </p>
                  <ul style={{ margin: '0 0 22px', paddingLeft: 22, display: 'grid', gap: 10 }}>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>A full product build:</strong> an MVP, a SaaS platform, or a customer-facing portal with several moving parts.
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>No in-house hiring:</strong> you need the capability now and do not want to recruit, onboard, and retain employees.
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>A defined handoff:</strong> you want a contract, milestones, and a team accountable for the schedule and the delivered code.
                    </li>
                  </ul>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    The trade-off is cost and control. Agencies charge more than a single freelancer, and you rely on the agency&apos;s staffing decisions. Before signing, confirm who will actually build the product — employees or subcontractors — and that the contract assigns the code and IP to you.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
                    For context on evaluating a development partner end to end, see our <Link href="/blog/choose-software-development-company-canada" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>guide to choosing a software development company in Canada</Link>, and our <Link href="/case-studies" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>case studies</Link> show real work we have shipped for Canadian clients. You can also explore our <Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>software development services</Link> and <Link href="/services/software-discovery" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>software discovery</Link> to see how we scope and deliver a build.
                  </p>
                </div>

                {/* When an in-house team fits */}
                <div className="reveal" style={{ marginBottom: 56 }} id="in-house">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'transparent', border: '1px solid var(--brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>🏠</div>
                    <h2 style={{
                      fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>3. When an In-House Team Fits</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 16 }}>
                    An in-house team tends to fit when development is continuous rather than project-based, and when you need the team embedded in your day-to-day operations.
                  </p>
                  <ul style={{ margin: '0 0 22px', paddingLeft: 22, display: 'grid', gap: 10 }}>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Ongoing product work:</strong> a platform that ships weekly changes, runs experiments, and needs immediate incident response.
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Deep domain context:</strong> the team works alongside your product, support, and sales people full time.
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Long-term ownership:</strong> you want to build and keep institutional knowledge about your codebase and customers.
                    </li>
                  </ul>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
                    The trade-off is cost and speed. Salary, benefits, equipment, and overhead are fixed regardless of how much building happens in a given month, and hiring takes weeks to months. If your need is a one-off build, an in-house team is usually the most expensive way to get it.
                  </p>
                </div>

                {/* Comparison table */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'transparent', border: '1px solid var(--brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>⚖️</div>
                    <h2 style={{
                      fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>4. Freelancer vs Agency vs In-House: Side by Side</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 20 }}>
                    These are general tendencies, not quotes. Actual pricing and capability vary by provider, city, and project.
                  </p>
                  <div style={{
                    overflowX: 'auto', border: '1px solid var(--line)', borderRadius: 16,
                  }}>
                    <table style={{
                      width: '100%', borderCollapse: 'collapse', fontSize: 14, color: 'var(--body)', lineHeight: 1.6,
                    }}>
                      <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--line-strong)' }}>
                          <th style={{ padding: '12px 16px', color: 'var(--ink)', fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Factor</th>
                          <th style={{ padding: '12px 16px', color: 'var(--ink)', fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Freelancer</th>
                          <th style={{ padding: '12px 16px', color: 'var(--ink)', fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Software agency</th>
                          <th style={{ padding: '12px 16px', color: 'var(--ink)', fontWeight: 600, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>In-house team</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--line)' }}>
                          <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)' }}>Cost structure</td>
                          <td style={{ padding: '12px 16px' }}>Hourly rate or fixed project fee</td>
                          <td style={{ padding: '12px 16px' }}>Fixed project price or monthly retainer</td>
                          <td style={{ padding: '12px 16px' }}>Salary plus benefits, equipment, overhead</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--line)' }}>
                          <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)' }}>Control</td>
                          <td style={{ padding: '12px 16px' }}>You manage the freelancer directly</td>
                          <td style={{ padding: '12px 16px' }}>Agency owns staffing and process; you approve milestones</td>
                          <td style={{ padding: '12px 16px' }}>You direct the team day to day</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--line)' }}>
                          <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)' }}>Speed</td>
                          <td style={{ padding: '12px 16px' }}>Fast to start, subject to availability</td>
                          <td style={{ padding: '12px 16px' }}>Quick once the scope is agreed</td>
                          <td style={{ padding: '12px 16px' }}>Slowest; hiring takes weeks to months</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--line)' }}>
                          <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)' }}>Best fit</td>
                          <td style={{ padding: '12px 16px' }}>Small, well-defined tasks</td>
                          <td style={{ padding: '12px 16px' }}>Full product builds needing design, development, QA, and project management</td>
                          <td style={{ padding: '12px 16px' }}>Continuous, long-term product work</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--line)' }}>
                          <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)' }}>IP and ownership</td>
                          <td style={{ padding: '12px 16px' }}>Must be assigned in writing</td>
                          <td style={{ padding: '12px 16px' }}>Must be assigned in writing</td>
                          <td style={{ padding: '12px 16px' }}>Normally assigned to the employer</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--line)' }}>
                          <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--ink)' }}>Support after launch</td>
                          <td style={{ padding: '12px 16px' }}>Often limited or none</td>
                          <td style={{ padding: '12px 16px' }}>Maintenance packages or retainers common</td>
                          <td style={{ padding: '12px 16px' }}>Team owns updates directly</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 16, lineHeight: 1.7 }}>
                    We are based in Edmonton and work with clients across Canada; our founder Raman Makkar leads engineering strategy. For how we price engagements, see our <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>pricing</Link>, and for SaaS scoped builds, our <Link href="/services/saas-development/saas-mvp-development" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>SaaS MVP development</Link> page. If you want help choosing a model, <Link href="/contact" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>book a consultation</Link>.
                  </p>
                </div>

                {/* Decision checklist */}
                <div className="reveal" style={{ marginBottom: 56 }} id="checklist">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'transparent', border: '1px solid var(--brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>✅</div>
                    <h2 style={{
                      fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>5. Decision Checklist</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 20 }}>
                    Answer these before you pick a model:
                  </p>
                  <ul style={{ margin: '0 0 22px', paddingLeft: 22, display: 'grid', gap: 10 }}>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      What am I actually building — one feature, a whole product, or an ongoing roadmap?
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                    What is my total budget, including post-launch support?
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      How fast do I need to start, and how fast do I need to ship?
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      Can I manage requirements, code review, and acceptance myself?
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      Who will own the code and IP, and how is that confirmed in writing?
                    </li>
                    <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }}>
                      Who will maintain the product after launch, and what will that cost?
                    </li>
                  </ul>
                  <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                    If most answers point to a short, well-scoped build, a freelancer may be enough. If they point to a whole product with ongoing change, an agency or in-house team is more appropriate. If you are unsure, our <Link href="/tools/in-house-vs-agency" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>freelancer vs agency vs in-house comparison tool</Link> walks through the same decision factors.
                  </p>
                </div>

                {/* What to ask any vendor */}
                <div className="reveal" style={{ marginBottom: 56 }} id="questions">
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: 'transparent', border: '1px solid var(--brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>❓</div>
                    <h2 style={{
                      fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>6. What to Ask Any Vendor</h2>
                  </div>
                  <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, marginBottom: 20 }}>
                    Ask every freelancer and agency these questions before you sign:
                  </p>
                  <ol style={{ margin: '0 0 22px', paddingLeft: 4, listStyle: 'none', counterReset: 'ol', display: 'grid', gap: 16 }}>
                    {[
                      'Who will actually do the work — employees or subcontractors?',
                      'Can I speak with references from clients with similar projects?',
                      'Is pricing fixed, hourly, or a retainer, and what is included and excluded?',
                      'Who owns the code and IP, and when does ownership transfer to me?',
                      'Will I receive repository access, deployment credentials, and documentation?',
                      'What support is included after launch, and what does ongoing maintenance cost?',
                      'Where will the code be hosted, and will I have admin access to accounts?',
                    ].map((q, i) => (
                      <li key={i} style={{
                        display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14, alignItems: 'start',
                      }}>
                        <span style={{
                          width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--brand)',
                          color: 'var(--brand)', fontSize: 14, fontWeight: 700, display: 'grid',
                          placeItems: 'center', flexShrink: 0, marginTop: 3,
                        }}>{i + 1}</span>
                        <span style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75, paddingTop: 4 }}>{q}</span>
                      </li>
                    ))}
                  </ol>
                </div>

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
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
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
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none',
                      color: 'var(--faint)', marginBottom: 16,
                    }}>Related guides</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {[
                        { slug: 'choose-software-development-company-canada', title: 'How to Choose a Software Development Company in Canada', category: 'Business', readTime: '8 min' },
                        { slug: 'software-development-contract-canada', title: 'Software Development Contracts in Canada', category: 'Business', readTime: '7 min' },
                        { slug: 'software-maintenance-cost-canada', title: 'Software Maintenance Cost in Canada', category: 'Business', readTime: '8 min' },
                      ].map(post => (
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

        <MediaBand media={blogImage(8 + 7)} ratio="21 / 7" />

        {/* ── CITY LINKS ── */}
        <section style={{ paddingBottom: 'var(--section-y-sm)' }}>
          <div className="cb-container">
            <BlogCityLinks />
          </div>
        </section>

        {/* ── FAQS ── */}
        <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
            <div className="reveal" style={{ marginBottom: 40 }} id="faqs">
              <h2 style={{
                fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)',
                letterSpacing: '-0.03em', marginBottom: 20,
              }}>Frequently Asked Questions</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
                {faqs.map((f, i) => (
                  <li key={i} style={{ borderBottom: '1px solid var(--line)', padding: '22px 0' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>{f.q}</h3>
                    <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.75, margin: 0, maxWidth: '68ch' }}>{f.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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
                }}>Still deciding?</p>
                <h2 style={{
                  fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Talk Through Your Options
                </h2>
                <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, lineHeight: 1.7 }}>
                  Not sure whether a freelancer, agency, or in-house team fits your project? Share your idea and we will help you compare the options honestly, with no obligation.
                </p>
              </div>
              <Link href="/contact" className="btn btn--primary btn--lg" style={{ textDecoration: 'none' }}>Book a Consultation →</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
