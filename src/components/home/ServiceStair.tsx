import Link from 'next/link';
import { serviceCategories } from '@/data/nav';

const picks = [
  { href: '/services/mobile-app-development', title: 'Mobile App\nDevelopment', desc: 'Native iOS and Android, Flutter and React Native — apps engineered for performance, scale and App Store success.', cta: 'View Mobile Services' },
  { href: '/services/web-development', title: 'Web Platforms\n& Engineering', desc: 'As your product engineering partner we own the full lifecycle — from cloud-native web apps to complex enterprise portals.', cta: 'View Web Services' },
  { href: '/services/ai-ml', title: 'AI, Data and\nAnalytics Solutions', desc: 'We integrate LLMs, generative AI and machine learning to automate operations, predict trends and personalise at scale.', cta: 'View AI Services' },
  { href: '/services/cloud-devops', title: 'Cloud Operations\n& DevOps', desc: 'Cloud-native environments on AWS and Google Cloud, built on zero-trust principles, as scalable as they are secure.', cta: 'View Cloud Services' },
];

/* Four stepped columns — the reference's staircase layout. */
export default function ServiceStair() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <h2 style={{ textAlign: 'center', margin: '0 auto 12px', maxWidth: 720 }}>Beyond Development.<br />We Deliver Outcomes.</h2>
        <div className="stair" style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>
          {picks.map(p => {
            const icon = serviceCategories.find(c => c.href === p.href)?.icon;
            return (
              <div key={p.href}>
                <span style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--surface-alt)', color: 'var(--brand)', display: 'grid', placeItems: 'center', marginBottom: 44 }}>{icon}</span>
                <h3 style={{ fontSize: 'var(--fs-h3)', whiteSpace: 'pre-line', marginBottom: 14 }}>{p.title}</h3>
                <p style={{ color: 'var(--body)', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>{p.desc}</p>
                <Link href={p.href} className="btn btn--ghost btn--sm" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>{p.cta}</Link>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'clamp(36px, 5vw, 64px)' }}>
          <Link href="/services" className="btn btn--dark">View All Services</Link>
        </div>
      </div>
    </section>
  );
}
