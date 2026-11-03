'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { PROJECT_PRICING, type ProjectPricingKey } from '@/data/pricing';

/*
 * Everything stays in the browser: no network calls and no storage.
 * The brief is rebuilt from the form state on every render.
 */
const PROJECT_TYPES: { value: string; label: string; pricing?: ProjectPricingKey }[] = [
  { value: 'webapp', label: 'Web app', pricing: 'webapp' },
  { value: 'mobile', label: 'Mobile app', pricing: 'mobile' },
  { value: 'saas', label: 'SaaS product', pricing: 'saas' },
  { value: 'website', label: 'Website', pricing: 'website' },
  { value: 'ai', label: 'AI feature', pricing: 'ai' },
  { value: 'other', label: 'Other' },
];

const INTEGRATIONS = ['Payments', 'CRM', 'ERP', 'Maps', 'AI / LLM', 'Other'];
const PLATFORMS = ['iOS', 'Android', 'Web'];
const PRIVACY = [
  'Personal information',
  'Health data (PHIPA)',
  'Quebec users (Law 25)',
  'Government (Protected B)',
];

/* Bands built from the project ranges shown on /pricing (src/data/pricing.ts). */
const BUDGETS = [
  'Not sure yet',
  'Under $10,000',
  '$10,000 to $25,000',
  '$25,000 to $50,000',
  '$50,000 to $100,000',
  '$100,000 to $200,000',
  'Over $200,000',
];
const TIMELINES = ['Not sure yet', 'As soon as possible', 'Within 3 months', '3 to 6 months', '6 to 12 months', 'Flexible'];
const FUNDING = ['Not sure', 'Yes, SR&ED', 'Yes, NRC IRAP', 'Yes, both SR&ED and IRAP', 'No'];

const cad = (n: number) => `$${n.toLocaleString('en-CA')}`;
const lines = (v: string) => v.split('\n').map(s => s.replace(/^\s*[-*•]\s*/, '').trim()).filter(Boolean);
const toggle = (list: string[], item: string) => (list.includes(item) ? list.filter(x => x !== item) : [...list, item]);
const orNone = (v: string) => v.trim() || '_Not specified_';
const bullets = (items: string[]) => (items.length ? items.map(i => `- ${i}`).join('\n') : '_None listed_');

export type BriefInput = {
  type: string;
  goal: string;
  users: string;
  mustHave: string;
  niceToHave: string;
  integrations: string[];
  otherIntegration: string;
  platforms: string[];
  budget: string;
  timeline: string;
  privacy: string[];
  funding: string;
};

export function buildBrief(b: BriefInput): string {
  const typeLabel = PROJECT_TYPES.find(t => t.value === b.type)?.label ?? 'Other';
  const integrations = b.integrations.map(i => (i === 'Other' && b.otherIntegration.trim() ? `Other: ${b.otherIntegration.trim()}` : i));
  return [
    `# Project brief: ${typeLabel}`,
    '',
    '## Goal',
    orNone(b.goal),
    '',
    '## Target users',
    orNone(b.users),
    '',
    '## Must-have features',
    bullets(lines(b.mustHave)),
    '',
    '## Nice-to-have features',
    bullets(lines(b.niceToHave)),
    '',
    '## Integrations',
    bullets(integrations),
    '',
    '## Platforms',
    bullets(b.platforms),
    '',
    '## Budget and timeline',
    `- Budget (CAD): ${b.budget}`,
    `- Timeline: ${b.timeline}`,
    '',
    '## Data and privacy',
    b.privacy.length ? bullets(b.privacy) : '_No special data or privacy needs listed_',
    '',
    '## Funding',
    `- SR&ED / IRAP funding wanted: ${b.funding}`,
    '',
  ].join('\n');
}

const fieldset: CSSProperties = { border: 'none', padding: 0, margin: '0 0 24px' };
const legend: CSSProperties = { fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, padding: 0 };
const input: CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 12, border: '1px solid var(--line-strong)',
  background: 'var(--surface-alt)', color: 'var(--ink)', fontSize: 15, fontFamily: 'inherit',
};
const help: CSSProperties = { fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: '8px 0 0' };
const check: CSSProperties = { display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, color: 'var(--body)', cursor: 'pointer' };
const checks: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 };
const a: CSSProperties = { color: 'var(--brand)', fontWeight: 600 };

function Checks({ name, options, value, onChange }: { name: string; options: string[]; value: string[]; onChange: (v: string[]) => void }) {
  return (
    <div style={checks}>
      {options.map(o => (
        <label key={o} style={check}>
          <input type="checkbox" name={name} checked={value.includes(o)} onChange={() => onChange(toggle(value, o))} />
          {o}
        </label>
      ))}
    </div>
  );
}

export default function BriefClient() {
  const [type, setType] = useState('webapp');
  const [goal, setGoal] = useState('');
  const [users, setUsers] = useState('');
  const [mustHave, setMustHave] = useState('');
  const [niceToHave, setNiceToHave] = useState('');
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [otherIntegration, setOtherIntegration] = useState('');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [timeline, setTimeline] = useState(TIMELINES[0]);
  const [privacy, setPrivacy] = useState<string[]>([]);
  const [funding, setFunding] = useState(FUNDING[0]);
  const [status, setStatus] = useState('');

  const brief = buildBrief({ type, goal, users, mustHave, niceToHave, integrations, otherIntegration, platforms, budget, timeline, privacy, funding });
  const pricingKey = PROJECT_TYPES.find(t => t.value === type)?.pricing;
  const range = pricingKey ? PROJECT_PRICING[pricingKey] : undefined;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setStatus('Brief copied to your clipboard.');
    } catch {
      setStatus('Could not copy automatically. Select the text in the preview and copy it by hand.');
    }
  };

  const download = () => {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/markdown;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'project-brief.md';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus('Brief downloaded as project-brief.md.');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, alignItems: 'start' }}>
      <form onSubmit={e => e.preventDefault()} style={{
        background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 20, padding: 28,
      }}>
        <p style={{ ...help, margin: '0 0 24px', fontSize: 14 }}>
          Fill in what you know and skip the rest. Nothing you type leaves your browser.
        </p>

        <fieldset style={fieldset}>
          <legend style={legend}>Project type</legend>
          <select aria-label="Project type" style={input} value={type} onChange={e => setType(e.target.value)}>
            {PROJECT_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Goal in one line</legend>
          <input aria-label="Goal in one line" style={input} value={goal} maxLength={200} placeholder="e.g. Let customers book and pay for repairs online" onChange={e => setGoal(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Target users</legend>
          <input aria-label="Target users" style={input} value={users} maxLength={200} placeholder="e.g. Homeowners in Alberta and our 12 field technicians" onChange={e => setUsers(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Must-have features (one per line)</legend>
          <textarea aria-label="Must-have features, one per line" rows={5} style={{ ...input, resize: 'vertical' }} value={mustHave} onChange={e => setMustHave(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Nice-to-have features (one per line)</legend>
          <textarea aria-label="Nice-to-have features, one per line" rows={4} style={{ ...input, resize: 'vertical' }} value={niceToHave} onChange={e => setNiceToHave(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Integrations</legend>
          <Checks name="integrations" options={INTEGRATIONS} value={integrations} onChange={setIntegrations} />
          {integrations.includes('Other') && (
            <input aria-label="Other integration" style={{ ...input, marginTop: 10 }} value={otherIntegration} maxLength={120} placeholder="Which system?" onChange={e => setOtherIntegration(e.target.value)} />
          )}
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Platforms</legend>
          <Checks name="platforms" options={PLATFORMS} value={platforms} onChange={setPlatforms} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Budget (CAD)</legend>
          <select aria-label="Budget in CAD" style={input} value={budget} onChange={e => setBudget(e.target.value)}>
            {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
          {range && (
            <p style={help}>
              A typical {range.label.toLowerCase()} costs {cad(range.low)} to {cad(range.high)}. See our{' '}
              <Link href="/pricing" style={a}>pricing</Link>.
            </p>
          )}
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Timeline</legend>
          <select aria-label="Timeline" style={input} value={timeline} onChange={e => setTimeline(e.target.value)}>
            {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Data and privacy needs</legend>
          <Checks name="privacy" options={PRIVACY} value={privacy} onChange={setPrivacy} />
          <p style={help}>
            Health data, Quebec users and government work each add legal rules that shape the design. Read our{' '}
            <Link href="/blog/app-privacy-compliance-canada" style={a}>privacy compliance checklist for Canadian apps</Link>.
          </p>
        </fieldset>

        <fieldset style={{ ...fieldset, marginBottom: 0 }}>
          <legend style={legend}>Do you want SR&amp;ED or IRAP funding?</legend>
          <select aria-label="SR&ED or IRAP funding wanted" style={input} value={funding} onChange={e => setFunding(e.target.value)}>
            {FUNDING.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
          <p style={help}>
            Get a rough credit range with the{' '}
            <Link href="/tools/sred-estimator" style={a}>SR&amp;ED estimator</Link>, or read our guide to{' '}
            <Link href="/blog/nrc-irap-funding-software-canada" style={a}>NRC IRAP funding for software</Link>.
          </p>
        </fieldset>
      </form>

      <div style={{ border: '1px solid var(--line)', borderRadius: 20, padding: 28, background: 'var(--surface)' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>
          Your brief (updates as you type)
        </p>
        <pre aria-label="Project brief preview" style={{
          whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
          fontSize: 14, lineHeight: 1.7, color: 'var(--ink)', background: 'var(--surface-alt)', border: '1px solid var(--line)',
          borderRadius: 12, padding: 18, margin: '0 0 20px', maxHeight: 640, overflow: 'auto',
        }}>{brief}</pre>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
          <button type="button" className="btn btn--ghost" onClick={copy}>Copy brief</button>
          <button type="button" className="btn btn--ghost" onClick={download}>Download .md</button>
          <Link href="/contact" className="btn btn--primary">Send this brief to Mapletech</Link>
        </div>
        <p aria-live="polite" style={{ ...help, minHeight: 21 }}>{status}</p>
      </div>
    </div>
  );
}
