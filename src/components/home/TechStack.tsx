/* Compact: six named groups on divider rows. No logo wall. */
const groups = [
  { g: 'Frontend',       t: ['React', 'Next.js', 'TypeScript', 'Vue', 'Tailwind'] },
  { g: 'Backend',        t: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'GraphQL', 'Redis'] },
  { g: 'Mobile',         t: ['Swift', 'Kotlin', 'Flutter', 'React Native'] },
  { g: 'Cloud',          t: ['AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'] },
  { g: 'AI & data',      t: ['OpenAI', 'LangChain', 'PyTorch', 'dbt', 'Snowflake'] },
  { g: 'Infrastructure', t: ['GitHub Actions', 'Datadog', 'Cloudflare', 'Vercel'] },
];

export default function TechStack() {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2>The stack behind the work</h2>
            <p className="lede">Chosen per project for what it has to do, not for what is fashionable.</p>
          </div>
        </div>
        <ul className="rows">
          {groups.map(g => (
            <li key={g.g}>
              <h3 style={{ fontSize: 'var(--fs-h4)', margin: 0 }}>{g.g}</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {g.t.map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
