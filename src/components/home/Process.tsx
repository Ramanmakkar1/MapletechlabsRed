import Image from 'next/image';
import { humanMedia } from '@/data/media';

/* A real five-step sequence, so the numbers carry information rather
   than decorating the page. One timeline, no cards. */
const steps = [
  { t: 'Discovery',  d: 'We map the business problem, the users and the constraints, then agree what success looks like in numbers.', w: '1–2 weeks' },
  { t: 'Design',     d: 'Flows, interface design and a clickable prototype, so the hard decisions are settled before engineering starts.', w: '2–4 weeks' },
  { t: 'Build',      d: 'Two-week sprints against a fixed scope. You see working software every fortnight, not a status report.', w: '8–16 weeks' },
  { t: 'Launch',     d: 'Load testing, security review, migration and a rollout plan — with someone from the build team on call.', w: '1–2 weeks' },
  { t: 'Scale',      d: 'Monitoring, iteration and a support SLA. Most clients keep building with us long after go-live.', w: 'Ongoing' },
];

export default function Process() {
  const m = humanMedia.standup;
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2>How we work</h2>
            <p className="lede">One process, five stages, fixed milestones. You always know what is happening and what it costs.</p>
          </div>
        </div>

        <div className="process-split">
          <ol className="timeline">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 'var(--fs-h4)', margin: 0 }}>{s.t}</h3>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>{s.w}</span>
                  </div>
                  <p style={{ color: 'var(--body)', lineHeight: 1.7, maxWidth: '52ch' }}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="media media--lg hide-mobile fade" style={{ minHeight: 420 }}>
            <Image src={m.src} alt={m.alt} fill sizes="(max-width: 1023px) 100vw, 38vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
