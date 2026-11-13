import Link from 'next/link';

type ServiceCityLinksProps = {
  id: string;
  heading: string;
  intro: string;
  links: { href: string; label: string; note: string }[];
};

export default function ServiceCityLinks({ id, heading, intro, links }: ServiceCityLinksProps) {
  return (
    <section aria-labelledby={id} style={{ padding: 'var(--section-y-sm) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <h2 id={id}>{heading}</h2>
        <p className="lede">{intro}</p>
        <ul className="lede" style={{ paddingLeft: 24 }}>
          {links.map(l => (
            <li key={l.href} style={{ marginBottom: 8 }}>
              <Link href={l.href}>{l.label}</Link>: {l.note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
