import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Raman Makkar | Founder & CEO',
  description: 'Meet Raman Makkar, founder of Mapletech Labs. 15+ years in software engineering, building scalable systems for Fortune 500s and startups.',
  alternates: { canonical: canonicalUrl('/about/raman-makkar') },
};

export default function RamanPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px' }}>Raman Makkar</h1>
          <p style={{ fontSize: '24px', color: 'var(--brand)', marginBottom: '32px' }}>Founder & CEO</p>
          
          <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '32px', color: 'var(--body)', maxWidth: '800px' }}>
            Founded Mapletech Labs in 2018 with a mission to build world-class software without compromise. With 15+ years in software engineering, I've architected systems processing billions of transactions, scaled engineering teams, and mentored builders across fintech, healthcare, and enterprise.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginTop: '48px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--brand)', marginBottom: '12px' }}>Background</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                Computer Science degree, 15+ years experience. Led engineering at 3 startup exits. Architected fintech platform processing $1B+ annually.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--brand)', marginBottom: '12px' }}>Expertise</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                Full-stack: React, Node.js, Python, PostgreSQL, AWS. Specializes in scaling systems, team architecture, and AI integration.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--brand)', marginBottom: '12px' }}>Philosophy</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                Great software starts with deep discovery. We build systems designed to scale, not features. Quality first.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>Speaking & Thought Leadership</h2>
            <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ marginBottom: '12px' }}>✓ Regular speaker at tech conferences (React Summit, Node Conf, Canadian tech events)</li>
              <li style={{ marginBottom: '12px' }}>✓ Published articles on software architecture, scaling, and AI integration</li>
              <li style={{ marginBottom: '12px' }}>✓ Guest on podcasts discussing software development best practices</li>
              <li>✓ Mentor to engineering teams and founders</li>
            </ul>
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <a href="/contact" style={{ display: 'inline-block', padding: '12px 32px', background: 'var(--brand-grad-btn)', color: '#fff', textDecoration: 'none', borderRadius: '100px', fontWeight: 700, fontSize: '16px' }}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
