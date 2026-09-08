'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FinalCta from '@/components/home/FinalCta';
import { humanMedia } from '@/data/media';
import type { Article, Block } from '@/data/articles';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 },
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="20 6 9 17 4 12" /></svg>
);

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case 'h2':
      return <h2 id={b.id} style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 20px', scrollMarginTop: 100 }}>{b.text}</h2>;
    case 'p':
      return <p style={{ fontSize: 16.5, color: 'var(--body)', lineHeight: 1.8, marginBottom: 18 }} dangerouslySetInnerHTML={{ __html: b.html }} />;
    case 'ul':
      return (
        <ul style={{ margin: '0 0 22px', paddingLeft: 22, display: 'grid', gap: 10 }}>
          {b.items.map((it, i) => <li key={i} style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: it }} />)}
        </ul>
      );
    case 'ol':
      return (
        <ol style={{ margin: '0 0 22px', paddingLeft: 4, listStyle: 'none', counterReset: 'ol', display: 'grid', gap: 16 }}>
          {b.items.map((it, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14, alignItems: 'start' }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--brand)', color: 'var(--brand)', fontSize: 14, fontWeight: 700, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75, paddingTop: 4 }} dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ol>
      );
    case 'checks':
      return (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gap: 16 }}>
          {b.items.map((it, i) => (
            <li key={i} style={{ display: 'flex', gap: 14 }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--brand)', color: 'var(--brand)', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 3 }}><Check /></span>
              <div>
                <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: 3 }}>{it.term}</strong>
                <span style={{ color: 'var(--body)', fontSize: 15.5, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: it.text }} />
              </div>
            </li>
          ))}
        </ul>
      );
    case 'cards':
      return (
        <div className="grid grid--2" style={{ marginBottom: 22 }}>
          {b.items.map((it, i) => (
            <div key={i} className="tile" style={{ padding: 'clamp(20px, 2vw, 26px)' }}>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>{it.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: it.text }} />
            </div>
          ))}
        </div>
      );
    case 'callout':
      return (
        <div style={{ border: `1px solid ${b.tone === 'brand' ? 'var(--brand)' : 'var(--line)'}`, background: b.tone === 'brand' ? 'transparent' : 'var(--surface-alt)', borderRadius: 16, padding: 'clamp(22px, 2.4vw, 28px)', margin: '0 0 22px' }}>
          {b.title && <p style={{ fontSize: 15, fontWeight: 700, color: b.tone === 'brand' ? 'var(--brand)' : 'var(--ink)', margin: '0 0 8px' }}>{b.title}</p>}
          <p style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.75, margin: 0, fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: b.text }} />
        </div>
      );
    case 'quote':
      return (
        <blockquote style={{ margin: '0 0 22px', paddingLeft: 22, borderLeft: '2px solid var(--brand)' }}>
          <p style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', color: 'var(--ink)', lineHeight: 1.55, fontWeight: 500, fontStyle: 'italic', margin: 0 }}>&ldquo;{b.text}&rdquo;</p>
          {b.cite && <cite style={{ display: 'block', marginTop: 10, fontSize: 14, color: 'var(--muted)', fontStyle: 'normal' }}>&mdash; {b.cite}</cite>}
        </blockquote>
      );
  }
}

export default function ArticleTemplate({ a }: { a: Article }) {
  const pageRef = useReveal();
  const toc = a.body.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2');
  const hero = humanMedia[a.heroKey as keyof typeof humanMedia] ?? humanMedia.team;
  const published = new Date(a.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: 'var(--surface)' }}>

        {/* HERO */}
        <section style={{ padding: 'var(--hero-top) 0 clamp(32px, 4vw, 52px)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: a.title }]} />
            <div className="reveal" style={{ marginTop: 28 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand)' }}>{a.category}</span>
              <h1 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.08, letterSpacing: '-0.035em', margin: '14px 0 20px', textWrap: 'balance' }}>{a.title}</h1>
              <p style={{ fontSize: 'clamp(17px, 1.5vw, 19px)', color: 'var(--body)', lineHeight: 1.7, marginBottom: 24, maxWidth: '62ch' }}>{a.dek}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontSize: 14, color: 'var(--muted)' }}>
                <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Raman Makkar</span>
                <span aria-hidden>&middot;</span><span>{published}</span>
                <span aria-hidden>&middot;</span><span>{a.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'clamp(32px, 4vw, 52px)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <div className="media media--lg fade" style={{ aspectRatio: '21 / 9' }}>
              <Image src={hero.src} alt={hero.alt} fill priority sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* BODY + TOC */}
        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start', maxWidth: 1140, margin: '0 auto' }}>
              <article>
                <div className="reveal" style={{ marginBottom: 44 }}>
                  {a.intro.map((p, i) => (
                    <p key={i} style={{ fontSize: 18.5, color: i === 0 ? 'var(--ink)' : 'var(--body)', lineHeight: 1.75, marginBottom: 18, fontWeight: i === 0 ? 500 : 400 }} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>

                {a.body.map((b, i) => (
                  <div key={i} className="reveal" style={{ marginBottom: b.type === 'h2' ? 4 : 0 }}>
                    <BlockView b={b} />
                  </div>
                ))}

                {/* Key takeaways */}
                <div className="reveal" style={{ marginTop: 20, padding: 'clamp(24px, 3vw, 34px)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', background: 'var(--surface-alt)' }}>
                  <h2 style={{ fontSize: 'var(--fs-h4)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 16px' }}>Key takeaways</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                    {a.keyTakeaways.map((t, i) => (
                      <li key={i} style={{ display: 'flex', gap: 12 }}>
                        <span style={{ color: 'var(--brand)', flexShrink: 0, marginTop: 3 }}><Check /></span>
                        <span style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.7 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                {a.faqs.length > 0 && (
                  <div className="reveal" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
                    <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: 20 }}>Frequently asked questions</h2>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
                      {a.faqs.map((f, i) => (
                        <li key={i} style={{ borderBottom: '1px solid var(--line)', padding: '22px 0' }}>
                          <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>{f.q}</h3>
                          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.75, margin: 0, maxWidth: '68ch' }}>{f.a}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Inline CTA */}
                <div className="reveal" style={{ marginTop: 'clamp(40px, 5vw, 60px)', padding: 'clamp(28px, 3.5vw, 44px)', borderRadius: 'var(--r-lg)', background: 'var(--surface-ink)', color: 'var(--on-ink-body)' }}>
                  <h2 style={{ color: 'var(--on-ink)', fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>Have a project in mind?</h2>
                  <p style={{ lineHeight: 1.7, margin: '0 0 22px', maxWidth: '52ch' }}>Tell us what you&rsquo;re building. A senior engineer will come back within one working day with a scope, a timeline and a fixed price.</p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link href="/contact" className="btn btn--on-ink">Start a project</Link>
                    <Link href={a.cta.href} className="btn btn--ghost-on-ink">{a.cta.label}</Link>
                  </div>
                </div>
              </article>

              {/* TOC sidebar */}
              <aside className="hide-mobile">
                <div style={{ position: 'sticky', top: 100, display: 'grid', gap: 20 }}>
                  <nav aria-label="On this page" style={{ background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 24 }}>
                    <p style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 14px' }}>On this page</p>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
                      {toc.map(h => (
                        <li key={h.id}><a href={`#${h.id}`} style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.45, display: 'block' }} className="mega-link">{h.text}</a></li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <FinalCta title="Let's build something worth keeping." sub="Tell us what you're building and a senior engineer will scope it within one working day." />
      </main>
      <Footer />
    </>
  );
}
