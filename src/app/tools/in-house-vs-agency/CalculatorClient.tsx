'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { PROJECT_PRICING, type ProjectPricingKey } from '@/data/pricing';

/*
 * Every number here is an editable assumption, not a statutory rate.
 * Employer payroll costs (CPP, EI, health benefits) change every year:
 * users should check current CRA rates for their own situation.
 */
const PROJECT_KEYS = Object.keys(PROJECT_PRICING) as ProjectPricingKey[];
const isProjectKey = (v: string): v is ProjectPricingKey => v in PROJECT_PRICING;

const num = (v: string) => {
  const n = Number(v.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : 0;
};
const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);
const money = (n: number) => `$${(Math.round(n / 100) * 100).toLocaleString('en-CA')}`;
const months = (n: number) => `${n} month${n === 1 ? '' : 's'}`;

function estimateInHouse(input: {
  developers: number;
  salary: number;
  payrollPct: number;
  recruitingPct: number;
  equipment: number;
  hireMonths: number;
  projectMonths: number;
}) {
  const developers = clamp(Math.round(input.developers), 1, 10);
  const hireMonths = clamp(Math.round(input.hireMonths), 0, 24);
  const projectMonths = clamp(Math.round(input.projectMonths), 1, 36);
  const perDevMonthly = (input.salary * (1 + input.payrollPct / 100) + input.equipment) / 12;
  const monthly = perDevMonthly * developers;
  const recruiting = input.salary * (input.recruitingPct / 100) * developers;
  const projectCost = monthly * projectMonths;
  const hiringCost = monthly * hireMonths;
  return {
    developers, hireMonths, projectMonths, monthly, recruiting, projectCost, hiringCost,
    total: projectCost + hiringCost + recruiting,
  };
}

const fieldset: CSSProperties = { border: 'none', padding: 0, margin: '0 0 24px' };
const legend: CSSProperties = { fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 10, padding: 0 };
const input: CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 12, border: '1px solid var(--line-strong)',
  background: 'var(--surface-alt)', color: 'var(--ink)', fontSize: 15,
};
const help: CSSProperties = { fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: '8px 0 0' };
const row: CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: 15, color: 'var(--body)', padding: '10px 0', borderTop: '1px solid var(--line)' };
const label: CSSProperties = { fontSize: 13, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' };
const big: CSSProperties = { fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 6px' };

export default function CalculatorClient() {
  const [project, setProject] = useState<ProjectPricingKey>('webapp');
  const [developers, setDevelopers] = useState('2');
  const [salary, setSalary] = useState('110000');
  const [payroll, setPayroll] = useState('15');
  const [recruiting, setRecruiting] = useState('20');
  const [equipment, setEquipment] = useState('4000');
  const [hireMonths, setHireMonths] = useState('3');
  const [projectMonths, setProjectMonths] = useState('6');

  const r = estimateInHouse({
    developers: num(developers),
    salary: num(salary),
    payrollPct: num(payroll),
    recruitingPct: num(recruiting),
    equipment: num(equipment),
    hireMonths: num(hireMonths),
    projectMonths: num(projectMonths),
  });
  const agency = PROJECT_PRICING[project];
  const comparison = r.total > agency.high
    ? `about ${money(r.total - agency.high)} more than the top of the agency range`
    : r.total < agency.low
      ? `about ${money(agency.low - r.total)} less than the bottom of the agency range`
      : 'inside the agency range';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, alignItems: 'start' }}>
      <form onSubmit={e => e.preventDefault()} style={{
        background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 20, padding: 28,
      }}>
        <p style={{ ...help, margin: '0 0 24px', fontSize: 14 }}>
          Every field below is an assumption. Change any of them to match your situation.
        </p>

        <fieldset style={fieldset}>
          <legend style={legend}>Project type (for the agency range)</legend>
          <select aria-label="Project type" style={input} value={project} onChange={e => { if (isProjectKey(e.target.value)) setProject(e.target.value); }}>
            {PROJECT_KEYS.map(k => <option key={k} value={k}>{PROJECT_PRICING[k].label}</option>)}
          </select>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Number of developers (1–10)</legend>
          <input aria-label="Number of developers" type="number" min={1} max={10} step={1} style={input} value={developers} onChange={e => setDevelopers(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Annual base salary per developer (CAD)</legend>
          <input aria-label="Annual base salary per developer in CAD" inputMode="numeric" style={input} value={salary} onChange={e => setSalary(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Employer payroll costs and benefits (% of salary)</legend>
          <input aria-label="Employer payroll costs and benefits as a percent of salary" inputMode="decimal" style={input} value={payroll} onChange={e => setPayroll(e.target.value)} />
          <p style={help}>Covers employer CPP and EI contributions plus health benefits. Rates change every year, so check current CRA rates.</p>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Recruiting cost per hire (% of salary)</legend>
          <input aria-label="Recruiting cost per hire as a percent of salary" inputMode="decimal" style={input} value={recruiting} onChange={e => setRecruiting(e.target.value)} />
          <p style={help}>Agency fees, job ads and interview time. Set it to 0 if you hire without a recruiter.</p>
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Equipment and software per developer per year (CAD)</legend>
          <input aria-label="Equipment and software per developer per year in CAD" inputMode="numeric" style={input} value={equipment} onChange={e => setEquipment(e.target.value)} />
        </fieldset>

        <fieldset style={fieldset}>
          <legend style={legend}>Months to hire and ramp up</legend>
          <input aria-label="Months to hire and ramp up" type="number" min={0} max={24} step={1} style={input} value={hireMonths} onChange={e => setHireMonths(e.target.value)} />
          <p style={help}>Counted at the full monthly team cost, as time before the team is fully productive.</p>
        </fieldset>

        <fieldset style={{ ...fieldset, marginBottom: 0 }}>
          <legend style={legend}>Project length (months)</legend>
          <input aria-label="Project length in months" type="number" min={1} max={36} step={1} style={input} value={projectMonths} onChange={e => setProjectMonths(e.target.value)} />
        </fieldset>
      </form>

      <div aria-live="polite" style={{ border: '1px solid var(--line)', borderRadius: 20, padding: 28, background: 'var(--surface)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20, marginBottom: 24 }}>
          <div>
            <p style={label}>In-house total (CAD)</p>
            <p style={big}>{money(r.total)}</p>
            <p style={{ ...help, margin: 0 }}>{months(r.hireMonths + r.projectMonths)} from start to finish</p>
          </div>
          <div>
            <p style={label}>Agency range (CAD)</p>
            <p style={big}>{money(agency.low)} – {money(agency.high)}</p>
            <p style={{ ...help, margin: 0 }}>
              {agency.label}, {agency.weeksLow === agency.weeksHigh ? `about ${agency.weeksLow}` : `${agency.weeksLow}–${agency.weeksHigh}`} weeks
            </p>
          </div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={row}><span>Fully loaded monthly cost ({r.developers} developer{r.developers === 1 ? '' : 's'})</span><strong style={{ color: 'var(--ink)' }}>{money(r.monthly)}</strong></div>
          <div style={row}><span>Project months ({months(r.projectMonths)})</span><span>{money(r.projectCost)}</span></div>
          <div style={row}><span>Months lost to hiring and ramp-up ({months(r.hireMonths)})</span><span>{money(r.hiringCost)}</span></div>
          <div style={row}><span>Recruiting</span><span>{money(r.recruiting)}</span></div>
          <div style={row}><span>In-house compared with agency</span><strong style={{ color: 'var(--ink)', textAlign: 'right' }}>{comparison}</strong></div>
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink)', background: 'var(--surface-alt)', border: '1px solid var(--line)', borderRadius: 12, padding: '12px 14px', margin: '0 0 24px', lineHeight: 1.6 }}>
          <strong>Rough planning estimate only.</strong> It uses the assumptions you entered, not current statutory
          rates, and leaves out office space, management time and turnover. The agency range is our typical price band
          for this project type; your quote depends on scope.
        </p>
        <Link href="/contact" className="btn btn--primary">Get a quote for your project</Link>
      </div>
    </div>
  );
}
