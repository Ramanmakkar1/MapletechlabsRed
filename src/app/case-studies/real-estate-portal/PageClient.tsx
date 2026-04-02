'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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

const techStack = ['React', 'Node.js', 'Python', 'TensorFlow', 'Elasticsearch', 'AWS', 'PostgreSQL', 'GraphQL'];

const metrics = [
  { value: '850K+', label: 'Active Listings' },
  { value: '2.4M', label: 'Monthly Visitors' },
  { value: '35%', label: 'Conversion Lift' },
  { value: '120ms', label: 'Search Latency' },
];

export default function RealEstateCaseStudyClient() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(100px, 12vw, 140px) 0 clamp(40px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(245,41,13,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'ML-Powered Real Estate Portal' },
              ]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 16 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(245,41,13,0.12)', color: '#f5290d',
                padding: '5px 14px', borderRadius: 100,
              }}>Real Estate</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>PropConnect Canada &middot; Toronto</span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              ML-Powered Real Estate Platform
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              We built a multi-listing real estate portal with machine learning-powered property recommendations serving 850K+ active listings across Canada.
            </p>

            {/* Placeholder image */}
            <div className="reveal reveal-d4" style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(245,41,13,0.08), rgba(255,255,255,0.03))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 48,
            }}>
              <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
                Case Study Visual — Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW GRID ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 24,
            }}>
              {[
                { title: 'Challenge', text: 'PropConnect was aggregating listings from 12 provincial MLS boards but facing low engagement. Buyers were overwhelmed by 850K+ listings with basic filtering, and sellers couldn\'t understand why their properties weren\'t converting.' },
                { title: 'Solution', text: 'Mapletech Labs built an ML-powered recommendation engine that predicts property appeal for each buyer, personalizes search results using behavioral data, and surfaces high-conversion listings first.' },
                { title: 'Results', text: 'Buyer conversion rate jumped 35%, time-to-conversion decreased 28%, and seller inquiries increased 42%. The platform now handles 2.4M monthly visitors with 120ms search latency using Elasticsearch and TensorFlow.' },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: 'clamp(24px, 4vw, 36px)', borderRadius: 24,
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#f5290d', marginBottom: 16,
                  }}>{card.title}</p>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#f5290d', marginBottom: 16,
              }}>The Challenge</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Real Estate Search That Actually Works</h2>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                PropConnect Canada aggregated real estate listings from 12 provincial MLS boards across Canada — a massive dataset of 850K+ active listings. But having the largest listing database meant nothing if buyers couldn&apos;t find what they wanted. Users were overwhelmed by choice paralysis, search results were sorted by price or date (generic and ineffective), and buyers were spending 3-4 hours on the platform to find 5 relevant properties.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                Sellers were frustrated too. A $650K home in Toronto would sit for months while an inferior property sold in weeks. PropConnect had no way to surface high-quality properties to the right buyers, and sellers blamed the platform instead of blaming the actual market dynamics. Real estate agents were switching to Zillow and Realtor.com because they had better recommendations.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                PropConnect needed to inject intelligence into search — using data on user behavior (which properties they clicked, which they saved, search history, time spent per listing) to predict what buyers actually wanted, then personalize results for each visitor. This meant building a real-time ML recommendation system that could score 850K+ properties in &lt;200ms.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR SOLUTION ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#f5290d', marginBottom: 16,
              }}>Our Solution</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>ML Recommendations with Real-Time Search</h2>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                We built a two-tier recommendation system. First, Elasticsearch indexes all 850K listings with metadata (price, location, sqft, property type, age, school district, walkability score). When a user searches, the Node.js API queries Elasticsearch for candidate properties (120ms with proper indexing). Second, a TensorFlow model trained on 2+ years of PropConnect user behavior (click data, saves, time spent, conversions) scores each candidate property in real-time for that user.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                The ML model uses collaborative filtering (if you liked homes similar to X, you&apos;ll like X) combined with content-based filtering (properties similar to your saved favorites) plus contextual signals (distance to work, school ratings, crime data). The model processes each user&apos;s behavioral profile (searchHistory, saveHistory, timeSpentPerProperty, dayOfWeek, timeOfDay) to personalize results. Results are re-ranked by predicted likelihood of conversion, not price or date posted.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 32 }}>
                The backend is Node.js + GraphQL exposing properties, user preferences, and recommendations. React frontend displays personalized results with explanations (&quot;We think you&apos;ll like this because it&apos;s similar to X and Y&quot;). We built automated feedback loops — every search, click, save, and listing view trains the model incrementally. Real estate agents get a dashboard showing &quot;seller insights&quot; (e.g., &quot;Your property matches 2,400 buyers in your price range, average time-to-view: 3 days&quot;) — this transparency increased seller satisfaction significantly.
              </p>

              {/* Tech stack badges */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {techStack.map(tech => (
                  <span key={tech} style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                    padding: '10px 20px', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 100, background: 'rgba(255,255,255,0.03)',
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY RESULTS ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#f5290d', marginBottom: 16,
            }}>Key Results</p>
            <h2 className="reveal" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff',
              letterSpacing: '-0.03em', marginBottom: 40,
            }}>Turning Data into Real Estate Gold</h2>

            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 24,
            }}>
              {metrics.map((m) => (
                <div key={m.label} style={{
                  padding: 'clamp(20px, 4vw, 36px)', borderRadius: 24, textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: '#f5290d', marginBottom: 8 }}>{m.value}</div>
                  <div style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              maxWidth: 760,
              padding: 'clamp(24px, 4vw, 48px)', borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(245,41,13,0.06), rgba(255,255,255,0.02))',
              border: '1px solid rgba(245,41,13,0.15)',
              position: 'relative',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24, opacity: 0.15 }}>
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#f5290d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#f5290d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{
                fontSize: 20, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7,
                fontStyle: 'italic', marginBottom: 24,
              }}>
                &ldquo;The ML recommendations changed everything. Our sellers are happier because their homes get in front of the right buyers. Our buyers find homes faster. Conversion rate jumped from 22% to 35% — that&apos;s a multi-million-dollar impact. Mapletech Labs didn&apos;t just give us a technical solution, they gave us a competitive advantage that&apos;s defensible and only gets stronger with more data.&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>CEO</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>PropConnect Canada</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              background: 'rgba(245,41,13,0.04)', border: '1px solid rgba(245,41,13,0.15)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#f5290d', marginBottom: 12,
                }}>Start a Similar Project</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Need ML Recommendations?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether it&apos;s real estate, e-commerce, or any data-driven platform — we build ML systems that scale and drive business results.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#f5290d', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get in Touch →
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
