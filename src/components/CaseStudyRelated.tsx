import Link from 'next/link';

export type CaseStudyRelatedLink = { label: string; href: string };

type Props = {
  intro: string;
  services: CaseStudyRelatedLink[];
  city?: CaseStudyRelatedLink;
};

const h2 = {
  fontSize: 'var(--fs-h3)',
  fontWeight: 600 as const,
  color: 'var(--ink)',
  letterSpacing: '-0.03em',
  margin: '0 0 16px',
};

export default function CaseStudyRelated({ intro, services, city }: Props) {
  const links = city ? [...services, city] : services;

  return (
    <section style={{ paddingBottom: 'var(--section-y)', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ paddingTop: 'var(--section-y)' }}>
        <h2 style={h2}>Related services</h2>
        <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 24px', maxWidth: 720 }}>
          {intro}
        </p>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: 16,
          }}
        >
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={{
                  display: 'block',
                  padding: '18px 22px',
                  borderRadius: 16,
                  border: '1px solid var(--line)',
                  background: 'var(--surface-alt)',
                  color: 'var(--ink)',
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  lineHeight: 1.5,
                }}
              >
                {item.label}
                <span style={{ display: 'block', marginTop: 6, fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
