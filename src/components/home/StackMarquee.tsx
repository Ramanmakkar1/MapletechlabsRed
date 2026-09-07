const stack = ['React', 'Next.js', 'TypeScript', 'Flutter', 'Swift', 'Kotlin', 'React Native', 'Node.js', 'Python', 'GraphQL', 'PostgreSQL', 'Redis', 'TensorFlow', 'OpenAI', 'LangChain', 'AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Solidity', 'Hardhat'];

/* Scrolling technology pills — the reference's alliances marquee, with the
   stack we genuinely build on. */
export default function StackMarquee() {
  const items = [...stack, ...stack];
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)', overflow: 'hidden' }}>
      <div className="cb-container">
        <h2 style={{ textAlign: 'center', marginBottom: 'clamp(24px, 3vw, 40px)' }}>The Stack Behind Every Build</h2>
      </div>
      {[0, 1].map(row => (
        <div key={row} className="marquee-mask" style={{ marginTop: row ? 14 : 0 }}>
          <div className="marquee-track" style={{ animationDirection: row ? 'reverse' : 'normal', animationDuration: '60s' }} aria-hidden={row === 1}>
            {items.map((t, i) => <span key={i} className="pill" style={{ height: 44, padding: '0 22px', fontSize: 14.5, background: '#fff' }}>{t}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
}
