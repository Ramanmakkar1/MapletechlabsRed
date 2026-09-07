import Link from 'next/link';

export default function CtaBand() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)', textAlign: 'center' }}>
      <div className="cb-container" style={{ maxWidth: 820 }}>
        <h2 style={{ marginBottom: 16 }}>Enterprise technology succeeds when architecture, intelligence and execution align.</h2>
        <p style={{ color: 'var(--body)', lineHeight: 1.7, margin: '0 auto 28px', maxWidth: '58ch' }}>Connect with Mapletech Labs&apos; consulting and engineering teams to build systems that last, scale responsibly and stand up to real-world complexity.</p>
        <Link href="/contact" className="btn btn--primary btn--lg">Discuss Your Technology Strategy</Link>
      </div>
    </section>
  );
}
