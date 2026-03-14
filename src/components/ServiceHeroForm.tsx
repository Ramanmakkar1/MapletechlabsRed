'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ServiceHeroFormProps {
  service?: string;
  city?: string;
}

export default function ServiceHeroForm({ service, city }: ServiceHeroFormProps = {}) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        budget: form.budget,
        message: form.message,
        ...(service && { service }),
        ...(city && { city }),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'inherit',
    transition: '0.3s',
    outline: 'none',
  };

  return (
    <div style={{
      position: 'relative',
      borderRadius: 24,
      border: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3vw, 32px)',
      boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
    }}>
      {/* Glow accent */}
      <div style={{ position: 'absolute', top: -1, left: '20%', right: '20%', height: 2, background: 'linear-gradient(90deg, transparent, #f5290d, transparent)', borderRadius: 2 }} />

      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>
          Get a Free Quote
        </h3>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0 }}>
          Tell us about your project and get a detailed estimate within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(245,41,13,0.1)', border: '2px solid #f5290d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5290d" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Thank You!</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>We&apos;ll get back to you within 24 hours.</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          />
          <input
            type="email"
            placeholder="Work Email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          />
          <select
            value={form.budget}
            onChange={e => setForm({ ...form, budget: e.target.value })}
            style={{ ...inputStyle, color: form.budget ? '#fff' : 'rgba(255,255,255,0.4)', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          >
            <option value="" disabled>Project Budget</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k-100k">$50,000 – $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
          <textarea
            placeholder="Tell us about your project..."
            rows={3}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: 'none' }}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(245,41,13,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: 52,
              borderRadius: 12,
              border: 'none',
              background: 'linear-gradient(135deg, #f5290d, #FF5733)',
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              transition: '0.3s',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
            onMouseEnter={e => { if(!isLoading){ e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(245,41,13,0.4)'; } }}
            onMouseLeave={e => { if(!isLoading){ e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; } }}
          >
            {isLoading ? 'Sending...' : 'Get Free Quote'}
            {!isLoading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
          </button>
        </form>
      )}

      {/* Trust badges */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(10px, 2vw, 20px)', marginTop: 20, flexWrap: 'wrap' as const, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {[
          { icon: '🔒', text: 'NDA Protected' },
          { icon: '⚡', text: '24hr Response' },
          { icon: '💬', text: 'Free Consultation' },
        ].map(b => (
          <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            <span style={{ fontSize: 12 }}>{b.icon}</span>
            {b.text}
          </div>
        ))}
      </div>
    </div>
  );
}
