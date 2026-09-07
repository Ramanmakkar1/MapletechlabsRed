import Link from 'next/link';

const caps = [
  { title: 'GenAI Integration', items: ['AI agents', 'Chatbots & copilots', 'Coding assistants'] },
  { title: 'Computer Vision', items: ['Quality control', 'Document & image analysis'] },
  { title: 'Data Engineering', items: ['Building the infrastructure that feeds the AI'] },
];

const Tick = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>;

/* Wordmark panel left, capability cards right — the reference's AI centre-of-excellence block. */
export default function AiLab() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container ailab">
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', minHeight: 300, display: 'grid', placeItems: 'center', padding: 40 }}>
          <div style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.05em', color: 'var(--ink)', lineHeight: 1 }}>
            Maple<span style={{ color: 'var(--brand)', fontWeight: 500 }}>AI</span>
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: 14 }}>Building AI Systems<br />That Fit How Your Business Works</h2>
          <p style={{ color: 'var(--body)', lineHeight: 1.7, marginBottom: 28, maxWidth: '62ch' }}>
            <strong style={{ color: 'var(--ink)' }}>MapleAI</strong> is our dedicated AI practice. From custom LLM integrations to automated workflows, we move your business past the hype into practical, revenue-generating AI in production.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 28 }}>
            {caps.map(c => (
              <div key={c.title} className="card card--flat" style={{ padding: 22 }}>
                <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 12 }}>{c.title}</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
                  {c.items.map(it => <li key={it} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--body)' }}><Tick /> {it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="btn-group" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--primary">Book an AI Advisory Session</Link>
            <Link href="/services/ai-ml" className="btn btn--ghost">Explore AI Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
