/* Statement on the left, differentiators on the right — six of them,
   two columns of three, no boxes. */
const reasons = [
  { t: 'Fixed scope, fixed price',  d: 'You know the cost and the timeline before a line of code is written.' },
  { t: 'You own everything',        d: 'Source code, credentials and IP transfer to you on final payment.' },
  { t: 'Senior engineers only',     d: 'Every project is staffed by engineers with production experience.' },
  { t: 'Canadian data residency',   d: 'Built for PIPEDA and provincial privacy law, hosted where it matters.' },
  { t: '8-week MVP programme',      d: 'A fixed-price path from idea to a product real users can try.' },
  { t: 'Support after launch',      d: 'Tiered SLAs from monitoring to a dedicated team on 24/7 response.' },
];

export default function WhyUs() {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container why-split">
        <div>
          <h2 style={{ maxWidth: '14ch' }}>Why teams choose Mapletech Labs</h2>
          <p className="lede">
            We work as an accountable partner, not an outsourced vendor. That shows up in
            how we price, who we staff and what happens after launch.
          </p>
        </div>
        <ul className="grid grid--2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {reasons.map(r => (
            <li key={r.t} style={{ paddingTop: 20, borderTop: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, marginBottom: 8 }}>{r.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{r.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
