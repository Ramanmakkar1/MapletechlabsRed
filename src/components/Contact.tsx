'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitToSplitForms } from '@/lib/splitforms';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  useGSAP(() => {
    gsap.from('.contact-inner > *', { opacity: 0, y: 50, stagger: 0.15, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '#contact', start: 'top 85%', once: true } });
    ScrollTrigger.refresh();
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitToSplitForms(`New enquiry — ${formData.name}`, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, background: 'transparent', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-inner contact-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Left — copy */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', border: '1px solid var(--brand)', borderRadius: 100, padding: '10px 24px', marginBottom: 32 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--brand)' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', letterSpacing: '-0.005em', textTransform: 'none' }}>Let&apos;s Build Together</span>
            </div>

            <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.05em', lineHeight: 1.1, margin: '0 0 24px' }}>
              Your Vision Is One<br />
              <span style={{ color: 'var(--brand)' }}>Conversation Away.</span>
            </h2>

            <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.6, margin: '0 0 32px' }}>
              Tell us about your project and we&apos;ll scope it, plan it, and build it — on time, on budget, every time.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="mailto:hello@mapletechlabs.ca" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, background: 'var(--brand)', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px transparent'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                Email Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/services/mobile-app-development" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, border: '1px solid var(--line-strong)', color: 'var(--ink)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--line-strong)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line-strong)'; }}
              >
                View Services
              </Link>
            </div>

            <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16 }}>
              See our <a href="/case-studies" style={{ color: 'var(--brand)', textDecoration: 'none' }}>case studies</a> for real client results.
            </p>

            <div className="contact-badges" style={{ display: 'flex', gap: 32, marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--line)', flexWrap: 'wrap' }}>
              {['NDA Signed on Day 1', 'Fixed-Price Guarantee', '8-Week MVP Programme'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E11900" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <span style={{ fontSize: 13, color: 'var(--body)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 24, padding: 'clamp(20px, 4vw, 40px)' }}>
            {submitted ? (
              <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(225,25,0,0.10)', border: '2px solid #E11900', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>&#10003;</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto' }}>
                  Our team will review your message and respond within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>Name *</label>
                  <input
                    id="contact-name"
                    required
                    aria-required="true"
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                    placeholder="Your name"
                    style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid var(--line)', background: 'var(--surface-alt)', color: 'var(--ink)', fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>Email *</label>
                  <input
                    id="contact-email"
                    required
                    aria-required="true"
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                    placeholder="you@company.com"
                    style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid var(--line)', background: 'var(--surface-alt)', color: 'var(--ink)', fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 8 }}>Project details</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    placeholder="Tell us about your project..."
                    style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid var(--line)', background: 'var(--surface-alt)', color: 'var(--ink)', fontSize: 16, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{ height: 52, borderRadius: 100, background: 'var(--brand)', color: '#fff', fontSize: 15, fontWeight: 700, border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: '0.3s', opacity: isLoading ? 0.7 : 1 }}
                  onMouseEnter={e => { if(!isLoading){ e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px transparent'; } }}
                  onMouseLeave={e => { if(!isLoading){ e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; } }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
