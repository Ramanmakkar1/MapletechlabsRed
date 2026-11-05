import Link from 'next/link';
import { PROJECT_PRICING, type ProjectPricingKey } from '@/data/pricing';
import { getServiceBySlug } from '@/data/services';

const cad = (amount: number) => `$${amount.toLocaleString('en-CA')}`;

const KEYS_BY_SERVICE: Partial<Record<string, ProjectPricingKey[]>> = {
  'web-development': ['website', 'webapp'],
  'mobile-app-development': ['mobile'],
  'saas-development': ['saas'],
  'ai-ml': ['ai'],
};

const DATA_TIER_SLUGS = new Set(['digital-marketing', 'product-design']);

function weeksLabel(weeksLow: number, weeksHigh: number) {
  return weeksLow === weeksHigh ? `${weeksLow} weeks` : `${weeksLow}–${weeksHigh} weeks`;
}

function guideLinkLabel(key: ProjectPricingKey): string {
  if (key === 'ai') return 'Canadian AI development cost guide';
  if (key === 'website' || key === 'webapp') return 'Canadian website & web app cost guide';
  if (key === 'mobile') return 'Canadian app development cost guide';
  if (key === 'saas') return 'Canadian SaaS development cost guide';
  return 'Cost guide';
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
  gap: 16,
  width: '100%',
} as const;

/** Shared ballpark pricing from PROJECT_PRICING — null when the service has no mapped tiers. */
export default function ServicePricing({ serviceSlug, serviceName }: { serviceSlug: string; serviceName: string }) {
  const keys = KEYS_BY_SERVICE[serviceSlug];
  if (keys?.length) {
    return (
      <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
        <div className="cb-container" style={{ maxWidth: '100%' }}>
          <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>
            Typical {serviceName} pricing (CAD)
          </h2>
          <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 22px', maxWidth: 720 }}>
            These are typical, scope-dependent ballparks in Canadian dollars — not quotes. Scope, integrations and platform choices move a project within or beyond these ranges; we agree a fixed price after discovery.
          </p>
          <div style={gridStyle}>
            {keys.map(key => {
              const item = PROJECT_PRICING[key];
              const aiNote =
                key === 'ai'
                  ? 'Typical for a scoped AI feature (chatbot, automation or LLM integration), not an entire AI product platform.'
                  : null;
              return (
                <article
                  key={key}
                  className="tile rise"
                  style={{ padding: 'clamp(18px, 3vw, 22px)', minWidth: 0, overflowWrap: 'anywhere' }}
                >
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 10px', color: 'var(--ink)' }}>{item.label}</h3>
                  <p style={{ fontSize: 'clamp(1.35rem, 4vw, 1.55rem)', fontWeight: 700, color: 'var(--brand)', margin: '0 0 6px', letterSpacing: '-0.03em' }}>
                    {cad(item.low)}–{cad(item.high)}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 12px' }}>{weeksLabel(item.weeksLow, item.weeksHigh)} typical delivery</p>
                  {aiNote ? (
                    <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.65, margin: '0 0 12px' }}>{aiNote}</p>
                  ) : null}
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>
                    {item.guideHref ? (
                      <>
                        <Link href={item.guideHref}>{guideLinkLabel(key)}</Link>
                        {' · '}
                      </>
                    ) : null}
                    <Link href="/pricing">Full pricing &amp; engagement models</Link>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (!DATA_TIER_SLUGS.has(serviceSlug)) return null;
  const tiers = getServiceBySlug(serviceSlug)?.pricingTiers;
  if (!tiers?.length) return null;

  const isMarketing = serviceSlug === 'digital-marketing';
  const h2 = isMarketing ? `Typical ${serviceName} marketing packages (CAD)` : `Typical ${serviceName} pricing (CAD)`;
  const intro = isMarketing
    ? 'These monthly marketing packages show typical scope-dependent ranges in Canadian dollars — not quotes. Starter covers one channel (SEO or PPC); Growth and Enterprise add channels, content volume and account support. We tailor scope after discovery.'
    : 'These are typical, scope-dependent ballparks in Canadian dollars — not quotes. Screen count, research depth and design-system scope move a project within or beyond these ranges; we agree a fixed price after discovery.';

  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ maxWidth: '100%' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>{h2}</h2>
        <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 22px', maxWidth: 720 }}>{intro}</p>
        <div style={gridStyle}>
          {tiers.map(tier => (
            <article key={tier.name} className="tile rise" style={{ padding: 'clamp(18px, 3vw, 22px)', minWidth: 0, overflowWrap: 'anywhere' }}>
              <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 10px', color: 'var(--ink)' }}>{tier.name}</h3>
              <p style={{ fontSize: 'clamp(1.35rem, 4vw, 1.55rem)', fontWeight: 700, color: 'var(--brand)', margin: '0 0 12px', letterSpacing: '-0.03em' }}>{tier.range}</p>
              <ul style={{ listStyle: 'none', margin: '0 0 14px', padding: 0, display: 'grid', gap: 8 }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--body)', lineHeight: 1.55 }}>
                    <span aria-hidden style={{ color: 'var(--brand)', flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>
                <Link href="/pricing">Full pricing &amp; engagement models</Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
