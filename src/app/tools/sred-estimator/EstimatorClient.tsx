'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';

/*
 * SR&ED figures used by the estimate. These change with federal budgets:
 * always check CRA's current rates, expenditure limit and proxy percentage
 * (canada.ca/sred) before relying on them.
 */
const CCPC_ENHANCED_RATE = 0.35; // CCPC rate on qualified spend up to the expenditure limit
const BASE_RATE = 0.15; // CCPC rate above the limit, and the non-CCPC rate (non-refundable)
const EXPENDITURE_LIMIT = 6_000_000; // CAD, CCPC expenditure limit for the enhanced rate (Budget 2025 figure)
const PROXY_RATE = 0.55; // proxy overhead amount as a share of eligible salaries
const CONTRACTOR_ELIGIBLE_SHARE = 0.8; // eligible share of arm's-length contract payments
const LOW_FACTOR = 0.7; // the CRA may disallow part of a claim
const HIGH_FACTOR = 1;

type CompanyType = 'ccpc' | 'non-ccpc';

const num = (v: string) => {
  const n = Number(v.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const money = (n: number) => `$${(Math.round(n / 100) * 100).toLocaleString('en-CA')}`;
const range = (n: number) => `${money(n * LOW_FACTOR)} – ${money(n * HIGH_FACTOR)}`;

function estimateSred(company: CompanyType, salaries: number, contractors: number, materials: number, proxy: boolean, provincialPct: number) {
  const overhead = proxy ? salaries * PROXY_RATE : 0;
  const contractorEligible = contractors * CONTRACTOR_ELIGIBLE_SHARE;
  const qualified = salaries + overhead + contractorEligible + materials;
  const federal = company === 'ccpc'
    ? Math.min(qualified, EXPENDITURE_LIMIT) * CCPC_ENHANCED_RATE + Math.max(0, qualified - EXPENDITURE_LIMIT) * BASE_RATE
    : qualified * BASE_RATE;
  const provincial = qualified * (Math.min(Math.max(provincialPct, 0), 100) / 100);
  return { overhead, contractorEligible, qualified, federal, provincial, total: federal + provincial };
}

const fieldset: CSSProperties = { border: 'none', padding: 0, margin: '0 0 24px' };
const legend: CSSProperties = { fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, padding: 0 };
const input: CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 12, border: '1px solid var(--line-strong)',
  background: 'var(--surface-alt)', color: 'var(--ink)', fontSize: 15,
};
const help: CSSProperties = { fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: '8px 0 0' };
const row: CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: 15, color: 'var(--body)', padding: '10px 0', borderTop: '1px solid var(--line)' };

export default function EstimatorClient() {
  const [company, setCompany] = useState<CompanyType>('ccpc');
  const [salaries, setSalaries] = useState('200000');
  const [contractors, setContractors] = useState('0');
  const [materials, setMaterials] = useState('0');
  const [proxy, setProxy] = useState(true);
  const [provincial, setProvincial] = useState('0');

  const r = estimateSred(company, num(salaries), num(contractors), num(materials), proxy, num(provincial));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, alignItems: 'start' }}>
      <form onSubmit={e => e.preventDefault()} style={{
        background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 20, padding: 28,
      }}>
        <fieldset style={fieldset}>
          <legend style={legend}>Company type</legend>
          <select aria-label="Company type" style={input} value={company} onChange={e => setCompany(e.target.value as CompanyType)}>
            <option value="ccpc">Canadian-controlled private corporation (CCPC)</option>
            <option value="non-ccpc">Other corporation (non-CCPC)</option>
          </select>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Eligible developer salaries (CAD)</legend>
          <input aria-label="Eligible developer salaries in CAD" inputMode="numeric" style={input} value={salaries} onChange={e => setSalaries(e.target.value)} />
          <p style={help}>Only the share of salaries spent on eligible SR&amp;ED work.</p>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Contractor costs (CAD)</legend>
          <input aria-label="Arm's-length contractor costs in CAD" inputMode="numeric" style={input} value={contractors} onChange={e => setContractors(e.target.value)} />
          <p style={help}>Enter the arm&apos;s-length portion. We count 80% of it as eligible.</p>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Materials (CAD)</legend>
          <input aria-label="Materials in CAD" inputMode="numeric" style={input} value={materials} onChange={e => setMaterials(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Overhead method</legend>
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--body)', cursor: 'pointer' }}>
            <input type="checkbox" checked={proxy} onChange={e => setProxy(e.target.checked)} style={{ accentColor: 'var(--brand)', width: 18, height: 18 }} />
            Use the proxy method (overhead = 55% of eligible salaries)
          </label>
        </fieldset>

        <fieldset style={{ ...fieldset, marginBottom: 0 }}>
          <legend style={legend}>Provincial credit % (optional)</legend>
          <input aria-label="Provincial credit percent" inputMode="decimal" style={input} value={provincial} onChange={e => setProvincial(e.target.value)} />
          <p style={help}>Rates vary by province and change over time. Type your province&apos;s current rate, or leave it at 0.</p>
        </fieldset>
      </form>

      <div aria-live="polite" style={{ border: '1px solid var(--line)', borderRadius: 20, padding: 28, background: 'var(--surface)' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Estimated total credit (CAD)</p>
        <p style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 20px' }}>
          {range(r.total)}
        </p>
        <div style={{ marginBottom: 24 }}>
          <div style={row}><span>Qualified spend</span><strong style={{ color: 'var(--ink)' }}>{money(r.qualified)}</strong></div>
          {proxy && <div style={row}><span>Proxy overhead (55%)</span><span>{money(r.overhead)}</span></div>}
          {r.contractorEligible > 0 && <div style={row}><span>Eligible contractors (80%)</span><span>{money(r.contractorEligible)}</span></div>}
          <div style={row}>
            <span>Federal credit{company === 'non-ccpc' ? ' (non-refundable)' : ''}</span>
            <strong style={{ color: 'var(--ink)' }}>{range(r.federal)}</strong>
          </div>
          <div style={row}><span>Provincial credit</span><strong style={{ color: 'var(--ink)' }}>{range(r.provincial)}</strong></div>
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink)', background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 12, padding: '12px 14px', margin: '0 0 24px', lineHeight: 1.6 }}>
          <strong>Estimate only, not tax advice.</strong> Eligibility depends on whether your work tried to resolve real
          technological uncertainty, and the CRA may disallow part of a claim, so the range runs from 70% to 100% of
          the full figure. Confirm with your accountant or an SR&amp;ED specialist.
        </p>
        <Link href="/contact" className="btn btn--primary">Talk to us about your R&amp;D project</Link>
      </div>
    </div>
  );
}
