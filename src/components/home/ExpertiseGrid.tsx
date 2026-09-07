import { serviceCategories } from '@/data/nav';

const items = [
  { href: '/services/ai-ml', title: 'Artificial Intelligence', desc: 'AI only creates value when it fits how a business actually works. We apply it where it improves decisions, removes manual effort and holds up in production.' },
  { href: '/services/ai-ml', title: 'Generative AI', desc: 'GenAI is most useful when it becomes part of everyday work. We integrate it into internal knowledge, customer interactions and operations — with the controls enterprises expect.' },
  { href: '/services/mobile-app-development', title: 'Mobile Engineering', desc: 'Native iOS and Android alongside Flutter and React Native, engineered for performance, App Store review and long-term maintainability.' },
  { href: '/services/web-development', title: 'Web Platforms', desc: 'Cloud-native web applications, SaaS products and enterprise portals built on React, Next.js and Node — fast, secure and built to scale.' },
  { href: '/services/cloud-devops', title: 'Cloud & DevOps', desc: 'Cloud modernisation is not a lift-and-shift. We rethink how applications and infrastructure are structured so systems stay resilient and ready to scale.' },
  { href: '/services/saas-development', title: 'Data & Analytics', desc: 'Data is only useful when teams can rely on it. We design data foundations and dashboards that give every function insight without added complexity.' },
  { href: '/services/cloud-devops', title: 'Cybersecurity', desc: 'Security is a design constraint, not a checklist. Governance, compliance and risk are accounted for from the first architectural decision.' },
  { href: '/services/blockchain-web3', title: 'Blockchain', desc: 'Distributed systems are useful where trust must be shared. We apply blockchain selectively — traceability, data integrity and controlled exchange.' },
  { href: '/services/ar-vr', title: 'AR / VR', desc: 'Immersive technology works best when it solves a specific problem. We use AR and VR for training, simulation and remote collaboration.' },
];

/* Three-column list with hairline dividers — no cards. */
export default function ExpertiseGrid() {
  return (
    <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
      <div className="cb-container">
        <h2 style={{ textAlign: 'center', margin: '0 auto clamp(28px, 4vw, 48px)', maxWidth: 680 }}>Deep Technical Expertise,<br />Supporting Modern Systems</h2>
        <div className="exp-grid">
          {items.map(it => (
            <div key={it.title}>
              <span style={{ color: 'var(--brand)', display: 'block', marginBottom: 16 }}>{serviceCategories.find(c => c.href === it.href)?.icon}</span>
              <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{it.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
