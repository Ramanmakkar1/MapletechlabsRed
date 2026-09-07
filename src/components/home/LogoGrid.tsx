const platforms = ['Stripe', 'Shopify', 'Salesforce', 'Microsoft', 'Google Cloud', 'AWS', 'Twilio', 'HubSpot', 'Zendesk', 'Atlassian', 'Datadog', 'Vercel', 'MongoDB', 'Cloudflare', 'Figma'];

/* Five-column wordmark grid. Framed as the platforms we build on, which is
   what these names actually are. */
export default function LogoGrid() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container">
        <h2 style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>Built on the Platforms<br />You Already Trust</h2>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {platforms.map(p => (
            <li key={p} style={{ height: 88, display: 'grid', placeItems: 'center', background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', fontSize: 15, fontWeight: 700, letterSpacing: '.02em', color: 'var(--muted)' }}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
