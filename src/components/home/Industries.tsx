import Image from 'next/image';
import Link from 'next/link';
import { industryMedia } from '@/data/media';

/* Exactly six sectors, three and three, each carrying a photograph
   rather than another icon. */
const sectors = [
  { key: 'fintech',    name: 'FinTech',     href: '/industries/fintech',    d: 'Payments, trading and compliance systems built for PCI DSS and OSFI from day one.' },
  { key: 'healthcare', name: 'Healthcare',  href: '/industries/healthcare', d: 'Telehealth, EHR and patient portals with HIPAA and PIPEDA designed in, not bolted on.' },
  { key: 'ecommerce',  name: 'Retail & e-commerce', href: '/industries/ecommerce', d: 'Headless commerce and multi-vendor platforms engineered around checkout conversion.' },
  { key: 'logistics',  name: 'Logistics',   href: '/industries/logistics',  d: 'Fleet tracking, route optimisation and warehouse automation with IoT in the field.' },
  { key: 'edtech',     name: 'Education',   href: '/industries/edtech',     d: 'Adaptive learning platforms and assessment tools for schools and training providers.' },
  { key: 'enterprise', name: 'Enterprise',  href: '/industries/enterprise', d: 'ERP, business intelligence and workflow automation that connect the whole organisation.' },
];

export default function Industries() {
  return (
    <section style={{ padding: 'var(--section-y) 0' }}>
      <div className="cb-container">
        <div className="head">
          <div>
            <h2>Industries we know well</h2>
            <p className="lede">Sectors where the regulation, the data model and the failure modes are already familiar to us.</p>
          </div>
          <Link href="/industries" className="btn btn--ghost">All industries</Link>
        </div>

        <div className="grid grid--3">
          {sectors.map(s => {
            const m = industryMedia[s.key];
            return (
              <Link key={s.key} href={s.href} className="tile rise" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="media media--flat media--zoom" style={{ aspectRatio: '16 / 10' }}>
                  <Image src={m.src} alt={m.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'clamp(22px, 2.2vw, 28px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{s.name}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
