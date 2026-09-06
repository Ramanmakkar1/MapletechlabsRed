'use client';
import { useRef, useEffect } from 'react';

const testimonials = [
  {
    name: 'Jessica Chen',
    role: 'VP Engineering, Axion Capital · Toronto',
    initials: 'JC',
    color: 'var(--brand)',
    stars: 5,
    text: 'Mapletech Labs rebuilt our trading infrastructure from scratch. Went from 100ms latency to sub-50ms, processing 75K transactions daily with zero data loss. Their engineering is meticulous.',
    metric: '75K+',
    metricLabel: 'Daily Transactions',
    platform: 'Clutch',
    datePublished: '2024-01-15',
  },
  {
    name: 'Dr. Ravinder Patel',
    role: 'Chief Medical Officer, ClinicFlow Health · Vancouver',
    initials: 'RP',
    color: '#0E7490',
    stars: 5,
    text: 'They built our patient management system with HIPAA compliance baked in from day one. Reduced our admin overhead by 40% and our patients actually use it. Worth every penny.',
    metric: '450K+',
    metricLabel: 'Patient Records',
    platform: 'Google',
    datePublished: '2024-02-20',
  },
  {
    name: 'Marcus Thompson',
    role: 'CEO, NorthStar E-Commerce · Montreal',
    initials: 'MT',
    color: '#047857',
    stars: 5,
    text: 'Redesigned our entire checkout flow. Conversion rate jumped from 2.1% to 3.8% within 90 days. The team understood our business better than we did — strategic partners, not just devs.',
    metric: '3.8%',
    metricLabel: 'Conversion Rate',
    platform: 'Clutch',
    datePublished: '2024-03-10',
  },
  {
    name: 'Sarah Kowalski',
    role: 'Operations Director, RouteLogic Inc. · Calgary',
    initials: 'SK',
    color: '#B45309',
    stars: 5,
    text: 'Their real-time fleet tracking system saved us $180K annually in fuel costs alone. The IoT integration was seamless, and the platform handles our 500-truck network flawlessly.',
    metric: '180K',
    metricLabel: 'Annual Savings',
    platform: 'Google',
    datePublished: '2024-04-05',
  },
  {
    name: 'David Rodriguez',
    role: 'Founder & CEO, PayBridge Solutions · Ottawa',
    initials: 'DR',
    color: 'var(--brand)',
    stars: 5,
    text: 'Built our payments API from ground up with PCI DSS certification. Handles 12M transactions monthly, rock-solid stability. The documentation and support are exceptional — a true partner.',
    metric: '12M+',
    metricLabel: 'Monthly Transactions',
    platform: 'Clutch',
    datePublished: '2024-05-12',
  },
];

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f5290d" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Add Review schemas for each testimonial
    testimonials.forEach((t) => {
      const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Review",
        author: {
          "@type": "Person",
          name: t.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.stars.toString(),
        },
        reviewBody: t.text,
        datePublished: t.datePublished,
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(reviewSchema);
      document.head.appendChild(script);
    });
  }, []);

  return (
    <section ref={ref} id="testimonials" className="section-padding" style={{ background: 'var(--surface-alt)', borderTop: '1px solid var(--line)' , position: 'relative', overflow: 'hidden'}}>
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 20 }}>Testimonials</div>
          <div className="testimonials-heading-grid">
            <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Trusted by People<br /><span style={{ color: 'var(--faint)' }}>Changing the World.</span>
            </h2>
            <div>
              <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Hear directly from the founders and CTOs who've shipped with us.
              </p>
              {/* Aggregate rating */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', border: '1px solid rgba(245,41,13,0.2)', borderRadius: 100, background: 'rgba(245,41,13,0.05)' }}>
                <Stars count={5} />
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>4.9</span>
                <span style={{ fontSize: 13, color: 'var(--body)' }}>·</span>
                <span style={{ fontSize: 13, color: 'var(--body)' }}>500+ reviews on Clutch</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal reveal-d${i + 1}`}
              style={{ padding: 'clamp(24px, 4vw, 40px) clamp(20px, 3vw, 36px)', border: '1px solid var(--line)', borderRadius: 36, display: 'flex', flexDirection: 'column', gap: 24, transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', cursor: 'default', background: 'var(--surface-alt)', position: 'relative' as const }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.2)'; e.currentTarget.style.background = 'rgba(245,41,13,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(20,17,24,0.10), 0 0 40px rgba(245,41,13,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'var(--surface-alt)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Quote mark */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--muted)" style={{ position: 'absolute', top: 16, right: 16 }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/>
              </svg>

              {/* Stars + platform */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stars count={t.stars} />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.platform}</span>
              </div>

              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, margin: 0, flex: 1 }}>&ldquo;{t.text}&rdquo;</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
                {/* Avatar + name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `rgba(${t.color === '#f5290d' ? '245,41,13' : '125,235,62'},0.15)`, border: `1px solid ${t.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: t.color }}>{t.initials}</span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--faint)', marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.08em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.role}</div>
                  </div>
                </div>
                {/* Metric */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1 }}>{t.metric}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{t.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Post-testimonials CTA */}
        <div style={{
          textAlign: 'center',
          padding: '60px 0 0',
        }}>
          <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 20 }}>
            Join 150+ companies who&apos;ve shipped with Mapletech Labs
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 44, padding: '0 24px', borderRadius: 100,
              background: 'var(--brand)', color: '#fff', fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
            }}>
              Start Your Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/case-studies" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 44, padding: '0 24px', borderRadius: 100,
              background: 'var(--surface-sunk)', border: '1px solid var(--line)',
              color: 'var(--ink)', fontSize: 14, fontWeight: 600,
              textDecoration: 'none',
            }}>
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
