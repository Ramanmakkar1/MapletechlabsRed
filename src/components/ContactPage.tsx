'use client';
import { useState } from 'react';
import { submitToSplitForms } from '@/lib/splitforms';

const PROJECT_TYPES = ['Mobile App', 'Web Platform', 'AI / ML Solution', 'Product Design', 'Blockchain / Web3', 'Custom Engineering', 'Other'];
const TIMELINES = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Not sure yet'];

const DETAILS = [
  { label: 'General', value: 'hello@mapletechlabs.ca', href: 'mailto:hello@mapletechlabs.ca' },
  { label: 'Sales', value: 'sales@mapletechlabs.ca', href: 'mailto:sales@mapletechlabs.ca' },
  { label: 'Response time', value: 'Within one working day', href: null },
];

const EMPTY = { name: '', email: '', company: '', projectType: '', timeline: '', description: '', botcheck: '' };

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.botcheck) return; // honeypot — bots fill every field
    setIsLoading(true);
    setError('');
    try {
      await submitToSplitForms(`New project enquiry — ${form.name}`, {
        name: form.name,
        email: form.email,
        company: form.company,
        projectType: form.projectType,
        timeline: form.timeline,
        description: form.description,
      });
      setSubmitted(true);
      setForm(EMPTY);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please email hello@mapletechlabs.ca and we’ll pick it up right away.');
    } finally {
      setIsLoading(false);
    }
  };

  const inp: React.CSSProperties = { width: '100%', padding: '15px 18px', fontSize: 16, fontFamily: 'inherit', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 14, color: 'var(--ink)', outline: 'none', transition: 'border-color 0.25s', boxSizing: 'border-box' };
  const sel: React.CSSProperties = { ...inp, appearance: 'none' as const, backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center' };
  const lbl: React.CSSProperties = { display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--body)', marginBottom: 8 };
  const fi = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = 'var(--brand)'; };
  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = 'var(--line)'; };

  return (
    <div style={{ background: 'var(--surface)', color: 'var(--ink)' }}>
      <section id="contact-form" style={{ padding: 'calc(var(--section-y) + 40px) 0 var(--section-y)', scrollMarginTop: 80 }}>
        <div className="cb-container">
          <div className="cp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}>

            {/* Left — everything you need to reach us */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--faint)', marginBottom: 20 }}>Contact</div>
              <h1 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 20px' }}>
                Tell us about<br /><span style={{ color: 'var(--brand)' }}>your project.</span>
              </h1>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 44px', maxWidth: 400 }}>
                Send us the short version — a senior engineer replies within one working day with next steps, not a sales script.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 36 }}>
                {DETAILS.map(item => (
                  <div key={item.label}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 5 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: 17, color: 'var(--brand)', fontWeight: 500, textDecoration: 'none' }}>{item.value}</a>
                      : <div style={{ fontSize: 17, color: 'var(--ink)', fontWeight: 500 }}>{item.value}</div>}
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.65, margin: 0, paddingTop: 24, borderTop: '1px solid var(--line)', maxWidth: 400 }}>
                Every enquiry is covered by an NDA — your idea stays confidential from the first conversation.
              </p>
            </div>

            {/* Right — the form */}
            <div style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 28, padding: 'clamp(24px, 4vw, 44px)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h2 style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>Message sent.</h2>
                  <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, maxWidth: 340, margin: '0 auto 28px' }}>
                    We&apos;ve got your details. A senior engineer will be in touch within one working day.
                  </p>
                  <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: '1px solid var(--line)', borderRadius: 100, padding: '12px 26px', color: 'var(--muted)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label htmlFor="cp-name" style={lbl}>Name *</label>
                    <input id="cp-name" name="name" value={form.name} onChange={handle} required placeholder="Alex Johnson" style={inp} onFocus={fi} onBlur={fo} />
                  </div>

                  <div>
                    <label htmlFor="cp-email" style={lbl}>Work email *</label>
                    <input id="cp-email" name="email" type="email" value={form.email} onChange={handle} required placeholder="alex@company.com" style={inp} onFocus={fi} onBlur={fo} />
                  </div>

                  <div>
                    <label htmlFor="cp-company" style={lbl}>Company</label>
                    <input id="cp-company" name="company" value={form.company} onChange={handle} placeholder="Acme Corp" style={inp} onFocus={fi} onBlur={fo} />
                  </div>

                  <div className="cp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label htmlFor="cp-projectType" style={lbl}>Project type *</label>
                      <select id="cp-projectType" name="projectType" value={form.projectType} onChange={handle} required style={{ ...sel, color: form.projectType ? 'var(--ink)' : 'var(--faint)' }} onFocus={fi} onBlur={fo}>
                        <option value="" disabled>Select type</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cp-timeline" style={lbl}>Timeline</label>
                      <select id="cp-timeline" name="timeline" value={form.timeline} onChange={handle} style={{ ...sel, color: form.timeline ? 'var(--ink)' : 'var(--faint)' }} onFocus={fi} onBlur={fo}>
                        <option value="" disabled>Select timeline</option>
                        {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cp-description" style={lbl}>Project description *</label>
                    <textarea id="cp-description" name="description" value={form.description} onChange={handle} required rows={5} placeholder="What are you building, and what does success look like?" style={{ ...inp, resize: 'vertical' as const, minHeight: 130 }} onFocus={fi} onBlur={fo} />
                  </div>

                  {/* honeypot — bots fill every field */}
                  <input type="text" name="botcheck" value={form.botcheck} onChange={handle} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />

                  {error && <div role="alert" style={{ color: 'var(--brand)', fontSize: 13, lineHeight: 1.6, border: '1px solid var(--brand)', padding: '12px 16px', borderRadius: 12 }}>{error}</div>}

                  <button type="submit" disabled={isLoading} style={{ marginTop: 4, height: 58, borderRadius: 100, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: isLoading ? 'var(--surface-sunk)' : 'var(--brand)', color: isLoading ? 'var(--muted)' : '#fff', fontSize: 15, fontWeight: 700, cursor: isLoading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: '0.25s' }}>
                    {isLoading ? 'Sending…' : 'Send message'}
                    {!isLoading && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input::placeholder,textarea::placeholder{color:var(--faint);}
        @media(max-width:1024px){
          .cp-grid{grid-template-columns:1fr!important;gap:44px!important;}
        }
        @media(max-width:560px){
          .cp-form-row{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}
