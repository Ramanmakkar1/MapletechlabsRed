import Link from 'next/link';

interface ToolCtaLink {
  href: string;
  label: string;
}

interface ToolServiceCtaProps {
  title: string;
  copy: string;
  links: ToolCtaLink[];
}

export default function ToolServiceCta({ title, copy, links }: ToolServiceCtaProps) {
  return (
    <div style={{
      marginTop: 48,
      border: '1px solid var(--line)',
      borderRadius: 20,
      padding: 'clamp(24px, 4vw, 36px)',
      background: 'var(--surface-alt)',
    }}>
      <h2 style={{
        fontSize: 'var(--fs-h3)',
        fontWeight: 600,
        color: 'var(--ink)',
        letterSpacing: '-0.02em',
        margin: '0 0 10px',
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: 16,
        color: 'var(--muted)',
        lineHeight: 1.7,
        margin: '0 0 24px',
        maxWidth: 720,
      }}>
        {copy}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {links.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            className={idx === 0 ? 'btn btn--primary' : 'btn btn--ghost'}
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
