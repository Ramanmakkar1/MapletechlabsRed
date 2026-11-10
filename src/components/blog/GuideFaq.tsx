export default function GuideFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <div style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
      <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', marginBottom: 20 }}>Frequently asked questions</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
        {faqs.map((f, i) => (
          <li key={i} style={{ borderBottom: '1px solid var(--line)', padding: '22px 0' }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>{f.q}</h3>
            <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.75, margin: 0, maxWidth: '68ch' }}>{f.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
