'use client';
import { useRef, useEffect } from 'react';

const posts = [
  {
    tag: 'Business',
    title: 'Top 10 Unicorn Apps of 2026',
    excerpt: 'The mobile-first companies that crossed $1B valuation this year share a common thread: ruthless product discipline and engineering excellence.',
    readTime: '8 min read',
    date: 'Mar 2026',
    href: '/blog/top-10-unicorn-apps-2026',
  },
  {
    tag: 'Business',
    title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026',
    excerpt: 'Learn the exact blueprint non-technical founders use to build, launch, and scale successful B2B SaaS applications, and why custom architecture matters in 2026.',
    readTime: '7 min read',
    date: 'Mar 2026',
    href: '/blog/saas-guide',
  },
  {
    tag: 'Digital Marketing',
    title: 'Top 10 SEO Companies in Canada (2026)',
    excerpt: 'A comprehensive, data-driven ranking of the top 10 SEO agencies in Canada for 2026, featuring Mapletech Labs and other industry leaders driving serious organic growth.',
    readTime: '9 min read',
    date: 'Mar 2026',
    href: '/blog/top-seo-companies-canada',
  },
];

export default function InsightsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="insights" className="section-padding" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 80, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Insights</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              From the<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Engineering Desk.</span>
            </h2>
          </div>
          <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: '0 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: '0.3s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
          >
            View All Articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Cards */}
        <div className="insights-grid">
          {posts.map((post, i) => (
            <a
              key={post.title}
              href={post.href}
              className={`reveal reveal-d${i + 1}`}
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 32,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
                background: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.25)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Image placeholder */}
              <div style={{ height: 200, background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d0d0d 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: '20%', right: '20%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(245,41,13,0.12) 0%, transparent 65%)', filter: 'blur(40px)' }} />
                <div style={{ position: 'relative', zIndex: 1, padding: '12px 20px', background: 'rgba(245,41,13,0.08)', border: '1px solid rgba(245,41,13,0.15)', borderRadius: 100 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#f5290d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{post.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{post.date}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
