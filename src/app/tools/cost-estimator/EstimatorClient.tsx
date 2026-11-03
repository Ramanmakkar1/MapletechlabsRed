'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { MOBILE_PLATFORM_PRICING, PROJECT_PRICING, type Platform } from '@/data/pricing';

type ProjectType = 'website' | 'webapp' | 'saas' | 'mobile';
type Complexity = 'mvp' | 'standard' | 'complex';
type Urgency = 'flexible' | 'standard' | 'rush';
type AddOn = 'accounts' | 'payments' | 'admin' | 'ai' | 'integrations' | 'design-system';

const BASE = { ...PROJECT_PRICING, mobile: MOBILE_PLATFORM_PRICING };

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: 'website', label: 'Website' },
  { value: 'webapp', label: 'Web app' },
  { value: 'saas', label: 'SaaS product' },
  { value: 'mobile', label: 'Mobile app' },
];

const PLATFORMS: { value: Platform; label: string }[] = [
  { value: 'ios', label: 'iOS only' },
  { value: 'android', label: 'Android only' },
  { value: 'cross', label: 'Both (cross-platform)' },
  { value: 'native-both', label: 'Both (native)' },
];

const COMPLEXITY: Record<Complexity, { label: string; mult: number }> = {
  mvp: { label: 'MVP (core features only)', mult: 0.8 },
  standard: { label: 'Standard', mult: 1 },
  complex: { label: 'Complex', mult: 1.4 },
};

const ADD_ONS: Record<AddOn, { label: string; low: number; high: number; weeks: number }> = {
  accounts: { label: 'User accounts & login', low: 3_000, high: 8_000, weeks: 1 },
  payments: { label: 'Payments integration', low: 4_000, high: 12_000, weeks: 1 },
  admin: { label: 'Admin dashboard', low: 6_000, high: 18_000, weeks: 2 },
  ai: { label: 'AI features', low: PROJECT_PRICING.ai.low, high: PROJECT_PRICING.ai.high, weeks: PROJECT_PRICING.ai.weeksLow },
  integrations: { label: 'Third-party integrations', low: 5_000, high: 15_000, weeks: 2 },
  'design-system': { label: 'Custom design system', low: 8_000, high: 20_000, weeks: 2 },
};

const URGENCY: Record<Urgency, { label: string; cost: number; weeks: number }> = {
  flexible: { label: 'Flexible timeline', cost: 1, weeks: 1.15 },
  standard: { label: 'Normal timeline', cost: 1, weeks: 1 },
  rush: { label: 'Rush (need it fast)', cost: 1.25, weeks: 0.75 },
};

const roundK = (n: number) => Math.round(n / 1000) * 1000;
const fmt = (n: number) => `$${Math.round(n / 1000).toLocaleString('en-CA')}K`;

function estimate(type: ProjectType, platform: Platform, complexity: Complexity, addOns: AddOn[], urgency: Urgency) {
  const base = type === 'mobile' ? BASE.mobile[platform] : BASE[type];
  const c = COMPLEXITY[complexity].mult;
  const u = URGENCY[urgency];
  const extraLow = addOns.reduce((sum, a) => sum + ADD_ONS[a].low, 0);
  const extraHigh = addOns.reduce((sum, a) => sum + ADD_ONS[a].high, 0);
  const extraWeeks = addOns.reduce((sum, a) => sum + ADD_ONS[a].weeks, 0);
  const low = roundK((base.low + extraLow) * c * u.cost);
  const high = roundK((base.high + extraHigh) * c * u.cost);
  const weeksLow = Math.max(2, Math.round((base.weeksLow + extraWeeks / 2) * c * u.weeks));
  const weeksHigh = Math.max(weeksLow + 1, Math.round((base.weeksHigh + extraWeeks) * c * u.weeks));
  const breakdown = [
    `Base ${type === 'mobile' ? PLATFORMS.find(p => p.value === platform)?.label.toLowerCase() + ' app' : PROJECT_TYPES.find(p => p.value === type)?.label.toLowerCase()}: ${fmt(base.low)}–${fmt(base.high)}`,
    ...addOns.map(a => `${ADD_ONS[a].label}: +${fmt(ADD_ONS[a].low)}–${fmt(ADD_ONS[a].high)}`),
    `Complexity (${COMPLEXITY[complexity].label}): ×${c}`,
    ...(u.cost !== 1 ? [`${u.label}: ×${u.cost} cost, shorter schedule`] : []),
  ];
  return { low, high, weeksLow, weeksHigh, breakdown };
}

const fieldset: CSSProperties = { border: 'none', padding: 0, margin: '0 0 24px' };
const legend: CSSProperties = { fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, padding: 0 };
const select: CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 12, border: '1px solid var(--line-strong)',
  background: 'var(--surface-alt)', color: 'var(--ink)', fontSize: 15,
};

export default function EstimatorClient() {
  const [type, setType] = useState<ProjectType>('webapp');
  const [platform, setPlatform] = useState<Platform>('cross');
  const [complexity, setComplexity] = useState<Complexity>('standard');
  const [urgency, setUrgency] = useState<Urgency>('standard');
  const [addOns, setAddOns] = useState<AddOn[]>([]);

  const r = estimate(type, platform, complexity, addOns, urgency);
  const toggle = (a: AddOn) => setAddOns(prev => (prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a]));
  const contactHref = `/contact?project=${type}&budget=${r.low}-${r.high}`;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, alignItems: 'start' }}>
      <form onSubmit={e => e.preventDefault()} style={{
        background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 20, padding: 28,
      }}>
        <fieldset style={fieldset}>
          <legend style={legend}>Project type</legend>
          <select aria-label="Project type" style={select} value={type} onChange={e => setType(e.target.value as ProjectType)}>
            {PROJECT_TYPES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
          </select>
        </fieldset>

        {type === 'mobile' && (
          <fieldset style={fieldset}>
            <legend style={legend}>Platform</legend>
            <select aria-label="Platform" style={select} value={platform} onChange={e => setPlatform(e.target.value as Platform)}>
              {PLATFORMS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </fieldset>
        )}

        <fieldset style={fieldset}>
          <legend style={legend}>Complexity</legend>
          <select aria-label="Complexity" style={select} value={complexity} onChange={e => setComplexity(e.target.value as Complexity)}>
            {(Object.keys(COMPLEXITY) as Complexity[]).map(k => <option key={k} value={k}>{COMPLEXITY[k].label}</option>)}
          </select>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Add-ons</legend>
          <div style={{ display: 'grid', gap: 10 }}>
            {(Object.keys(ADD_ONS) as AddOn[]).map(a => (
              <label key={a} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--body)', cursor: 'pointer' }}>
                <input type="checkbox" checked={addOns.includes(a)} onChange={() => toggle(a)} style={{ accentColor: 'var(--brand)', width: 18, height: 18 }} />
                {ADD_ONS[a].label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset style={{ ...fieldset, marginBottom: 0 }}>
          <legend style={legend}>Timeline</legend>
          <select aria-label="Timeline urgency" style={select} value={urgency} onChange={e => setUrgency(e.target.value as Urgency)}>
            {(Object.keys(URGENCY) as Urgency[]).map(k => <option key={k} value={k}>{URGENCY[k].label}</option>)}
          </select>
        </fieldset>
      </form>

      <div aria-live="polite" style={{ border: '1px solid var(--line)', borderRadius: 20, padding: 28, background: 'var(--surface)' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Estimated cost (CAD)</p>
        <p style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 8px' }}>
          {fmt(r.low)} – {fmt(r.high)}
        </p>
        <p style={{ fontSize: 16, color: 'var(--body)', margin: '0 0 24px' }}>
          About <strong style={{ color: 'var(--ink)' }}>{r.weeksLow}–{r.weeksHigh} weeks</strong> to launch
        </p>
        <ul style={{ margin: '0 0 24px', paddingLeft: 18, display: 'grid', gap: 6 }}>
          {r.breakdown.map(line => <li key={line} style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{line}</li>)}
        </ul>
        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 12, padding: '10px 14px', margin: '0 0 24px' }}>
          Ballpark only, not a quote.
        </p>
        <Link href={contactHref} className="btn btn--primary">Get an exact quote</Link>
      </div>
    </div>
  );
}
