'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { BUSINESS, HQ_ADDRESS } from '@/lib/seo/business';
import { submitToSplitForms } from '@/lib/splitforms';
import { SERVICE_PROJECT_TYPE, contextFields, readEnquiryContext, type ContextOption } from '@/lib/enquiryContext';

const PROJECT_TYPES = ['Mobile App', 'Web Platform', 'AI / ML Solution', 'Product Design', 'Blockchain / Web3', 'Custom Engineering', 'SEO / Digital Marketing', 'Other'];
const TIMELINES = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Not sure yet'];

const DETAILS = [
  { label: 'General', value: 'hello@mapletechlabs.ca', href: 'mailto:hello@mapletechlabs.ca' },
  { label: 'Sales', value: 'sales@mapletechlabs.ca', href: 'mailto:sales@mapletechlabs.ca' },
  { label: 'Phone', value: BUSINESS.telephone, href: 'tel:' + BUSINESS.telephone },
  { label: 'Office', value: `${HQ_ADDRESS.addressLocality}, ${HQ_ADDRESS.addressRegion}, Canada`, href: null },
  { label: 'Response time', value: 'Within one working day', href: null },
];

const EMPTY = { name: '', email: '', company: '', projectType: '', timeline: '', description: '', botcheck: '' };

export default function ContactPage({ serviceOptions = [], cityOptions = [] }: { serviceOptions?: ContextOption[]; cityOptions?: ContextOption[] }) {
  const [form, setForm] = useState(EMPTY);
  // Optional service/city context from a service+city page link; only allowlisted slugs survive.
  const [ctx, setCtx] = useState({ service: '', city: '' });
  const [showCtx, setShowCtx] = useState(false);

  useEffect(() => {
    const found = readEnquiryContext(window.location.search, serviceOptions, cityOptions);
    if (!found.service && !found.city) return;
    setCtx(found);
    setShowCtx(true);
    const mapped = SERVICE_PROJECT_TYPE[found.service];
    if (mapped) setForm(p => (p.projectType ? p : { ...p, projectType: mapped }));
    // Read once after mounting; later edits are the visitor's own.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCtx = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCtx(p => ({ ...p, [name]: value }));
    const mapped = name === 'service' ? SERVICE_PROJECT_TYPE[value] : undefined;
    if (mapped) setForm(p => ({ ...p, projectType: mapped }));
  };
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const returningToForm = useRef(false);

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
    else if (returningToForm.current) {
      nameRef.current?.focus();
      returningToForm.current = false;
    }
  }, [submitted]);

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
        ...contextFields(ctx.service, ctx.city, serviceOptions, cityOptions),
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
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <div className="cp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}>

            {/* Left — everything you need to reach us */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--faint)', marginBottom: 20 }}>Contact</div>
              <h1 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 20px' }}>
                Contact Mapletech Labs about your project
              </h1>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 44px', maxWidth: 400 }}>
                Mapletech Labs is a software, app, AI and UI/UX development company serving Edmonton, Calgary, Toronto and Vancouver. Tell us about your project and a senior engineer at our Edmonton software development company replies within one working day with next steps, not a sales script.
              </p>

              <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>
                What happens after you send a message
              </h2>
              <ol style={{ margin: '0 0 20px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7 }}>A senior engineer reads your brief and replies within one working day with next steps.</li>
                <li style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7 }}>We walk through your scope on a call or video chat and say clearly which parts can be fixed-price.</li>
                <li style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7 }}>If you want confidentiality first, we sign an NDA before any details are shared.</li>
              </ol>
              <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 400 }}>
                <a href="/services" style={{ color: 'var(--brand)' }}>See our software development services</a> or <a href="/pricing" style={{ color: 'var(--brand)' }}>check our pricing</a> before you write.
              </p>

              <p style={{ fontSize: 15, color: 'var(--body)', margin: '0 0 36px' }}>
                <a href="/pricing" style={{ color: 'var(--brand)' }}>See pricing</a> · <a href="/tools/cost-estimator" style={{ color: 'var(--brand)' }}>Cost estimator</a>
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
              <div role="status" aria-live="polite" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>{isLoading ? 'Sending message...' : ''}</div>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h2 ref={successHeadingRef} tabIndex={-1} style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>Message sent.</h2>
                  <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, maxWidth: 340, margin: '0 auto 28px' }}>
                    We&apos;ve got your details. A senior engineer will be in touch within one working day.
                  </p>
                  <button onClick={() => { returningToForm.current = true; setSubmitted(false); }} style={{ background: 'none', border: '1px solid var(--line)', borderRadius: 100, padding: '12px 26px', color: 'var(--muted)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} aria-busy={isLoading} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {showCtx && (
                    <fieldset style={{ margin: 0, padding: '16px 18px', border: '1px solid var(--line)', borderRadius: 14, background: 'var(--surface)', minWidth: 0 }}>
                      <legend style={{ ...lbl, padding: '0 6px', marginBottom: 0 }}>Your enquiry is about</legend>
                      <div className="cp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <div>
                          <label htmlFor="cp-ctx-service" style={{ ...lbl, textTransform: 'none', letterSpacing: 0, fontSize: 13 }}>Service</label>
                          <select id="cp-ctx-service" name="service" value={ctx.service} onChange={handleCtx} style={sel} onFocus={fi} onBlur={fo}>
                            <option value="">Not specified</option>
                            {serviceOptions.map(o => <option key={o.slug} value={o.slug}>{o.name}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="cp-ctx-city" style={{ ...lbl, textTransform: 'none', letterSpacing: 0, fontSize: 13 }}>City</label>
                          <select id="cp-ctx-city" name="city" value={ctx.city} onChange={handleCtx} style={sel} onFocus={fi} onBlur={fo}>
                            <option value="">Not specified</option>
                            {cityOptions.map(o => <option key={o.slug} value={o.slug}>{o.name}</option>)}
                          </select>
                        </div>
                      </div>
                      <button type="button" onClick={() => { setCtx({ service: '', city: '' }); setShowCtx(false); nameRef.current?.focus(); }} style={{ marginTop: 10, minHeight: 44, background: 'none', border: 'none', padding: 0, color: 'var(--brand)', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline' }}>
                        Remove this context
                      </button>
                    </fieldset>
                  )}

                  <div>
                    <label htmlFor="cp-name" style={lbl}>Name *</label>
                    <input ref={nameRef} id="cp-name" name="name" value={form.name} onChange={handle} required placeholder="Alex Johnson" style={inp} onFocus={fi} onBlur={fo} />
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

      <section aria-labelledby="cp-cities" style={{ padding: '0 0 var(--section-y)' }}>
        <div className="cb-container">
          <h2 id="cp-cities" style={{ fontSize: 'var(--fs-h3, 28px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 24px' }}>
            Software, app, AI and UI/UX teams across Canada
          </h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75, maxWidth: 760, margin: '0 0 20px' }}>
            We are based in Edmonton and work with clients across Canada, in person in Alberta and remotely everywhere else. Pick your city or service to see local pricing, case studies and FAQs.
          </p>
          <ul className="cp-service-links" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { href: '/locations/software-development-company-in-edmonton', label: 'Software development in Edmonton' },
              { href: '/locations/software-development-company-in-calgary', label: 'Software development in Calgary' },
              { href: '/locations/software-development-company-in-toronto', label: 'Software development in Toronto' },
              { href: '/locations/software-development-company-in-vancouver', label: 'Software development in Vancouver' },
              { href: '/services/mobile-app-development', label: 'App development' },
              { href: '/services/ai-ml', label: 'AI development' },
              { href: '/services/product-design', label: 'UI/UX design' },
              { href: '/services/web-development', label: 'Web development' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ padding: '10px 18px', border: '1px solid var(--line)', borderRadius: 100, color: 'var(--brand)', fontSize: 15, textDecoration: 'none' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style>{`
        input::placeholder,textarea::placeholder{color:var(--faint);}
        .cp-service-links li{min-width:0;max-width:100%;}
        .cp-service-links a{display:flex;align-items:center;min-height:44px;max-width:100%;box-sizing:border-box;white-space:normal;overflow-wrap:anywhere;}
        .cp-service-links a:focus-visible{outline:3px solid var(--brand);outline-offset:2px;}
        @media(max-width:1024px){
          .cp-grid{grid-template-columns:1fr!important;gap:44px!important;}
        }
        @media(max-width:560px){
          .cp-form-row{grid-template-columns:1fr!important;}
          .cp-service-links{flex-direction:column;}
        }
      `}</style>
    </div>
  );
}
