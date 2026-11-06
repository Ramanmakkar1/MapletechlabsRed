import Link from 'next/link';
import { PROJECT_PRICING, type ProjectPricingKey } from '@/data/pricing';

export const COST_RANGE_ANCHOR = 'cost-range';

const cad = (amount: number) => `$${amount.toLocaleString('en-CA')}`;

function weeksLabel(weeksLow: number, weeksHigh: number) {
  return weeksLow === weeksHigh ? `${weeksLow} weeks` : `${weeksLow}–${weeksHigh} weeks`;
}

const cell = { padding: '12px 10px', borderBottom: '1px solid var(--line)', textAlign: 'left', verticalAlign: 'top' } as const;

/** Compact table of typical project cost ranges (CAD) and timelines, from PROJECT_PRICING only. */
export default function CostRangeSection({
  keys = Object.keys(PROJECT_PRICING) as ProjectPricingKey[],
  title,
}: {
  keys?: ProjectPricingKey[];
  title: string;
}) {
  if (!keys.length) return null;
  return (
    <section id={COST_RANGE_ANCHOR} style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)', scrollMarginTop: 80 }}>
      <div className="cb-container" style={{ maxWidth: '100%' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>{title}</h2>
        <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 22px', maxWidth: 720 }}>
          These are typical, scope-dependent ballparks in Canadian dollars, not quotes; we agree a fixed price after discovery.
        </p>
        <div style={{ overflowX: 'auto', maxWidth: 760 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'clamp(13.5px, 3.6vw, 15px)', color: 'var(--body)' }}>
            <thead>
              <tr>
                <th scope="col" style={{ ...cell, color: 'var(--ink)', fontWeight: 600 }}>Project</th>
                <th scope="col" style={{ ...cell, color: 'var(--ink)', fontWeight: 600 }}>Typical cost (CAD)</th>
                <th scope="col" style={{ ...cell, color: 'var(--ink)', fontWeight: 600 }}>Typical timeline</th>
              </tr>
            </thead>
            <tbody>
              {keys.map(key => {
                const item = PROJECT_PRICING[key];
                return (
                  <tr key={key}>
                    <th scope="row" style={{ ...cell, fontWeight: 500 }}>
                      {item.serviceHref ? <Link href={item.serviceHref}>{item.label}</Link> : item.label}
                    </th>
                    <td style={{ ...cell, color: 'var(--ink)', fontWeight: 600, whiteSpace: 'nowrap' }}>{cad(item.low)}–{cad(item.high)}</td>
                    <td style={{ ...cell, whiteSpace: 'nowrap' }}>{weeksLabel(item.weeksLow, item.weeksHigh)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, margin: '16px 0 0' }}>
          <Link href="/pricing">Full pricing &amp; engagement models</Link>
        </p>
      </div>
    </section>
  );
}
