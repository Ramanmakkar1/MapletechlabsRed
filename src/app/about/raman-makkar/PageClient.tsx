'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function RamanMakkarPageClient() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Raman Makkar' },
          ]} />
        </div>

        {/* Hero */}
        <section style={{ padding: 'clamp(40px, 5vw, 80px) 0' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'linear-gradient(135deg, #f5290d, #ff6b35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, fontWeight: 700, color: '#fff',
              }}>RM</div>
              <div>
                <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
                  Raman Makkar
                </h1>
                <p style={{ fontSize: 16, color: '#f5290d', fontWeight: 600, margin: '4px 0 0' }}>CEO & Founder, Mapletech Labs</p>
              </div>
            </div>

            <div style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)' }}>
              <p style={{ marginBottom: 24 }}>
                Raman Makkar is the founder and CEO of Mapletech Labs, a full-service software development company headquartered in Edmonton, Alberta. With over a decade of experience in software engineering, product development, and digital transformation, Raman has led the delivery of 500+ projects for clients across Canada and internationally.
              </p>
              <p style={{ marginBottom: 24 }}>
                Under his leadership, Mapletech Labs has grown into a team of 25+ engineers, designers, and strategists serving clients in fintech, healthcare, e-commerce, logistics, edtech, and enterprise sectors. The company specializes in building custom web applications, mobile apps, AI/ML solutions, cloud infrastructure, and SaaS platforms.
              </p>
              <p style={{ marginBottom: 24 }}>
                Raman is passionate about leveraging technology to solve real business problems. He believes in a client-first approach, combining deep technical expertise with strategic thinking to deliver solutions that drive measurable results. His areas of expertise include React, Next.js, Node.js, Python, AWS, and AI/ML engineering.
              </p>
              <p>
                Based in Edmonton, Raman works with clients across all major Canadian cities including Toronto, Vancouver, Calgary, Ottawa, and Montréal, as well as international clients in the US and Europe.
              </p>
            </div>

            {/* Expertise */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Areas of Expertise</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Full-Stack Development', 'AI & Machine Learning', 'Cloud Architecture (AWS/GCP)', 'Mobile App Development', 'SaaS Product Strategy', 'Team Leadership', 'Digital Transformation', 'DevOps & CI/CD', 'Agile Methodology', 'Product Design'].map((skill) => (
                  <span key={skill} style={{
                    padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                  }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Published Articles</h2>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { title: 'Top 10 AI Development Companies in Canada', href: '/blog/ai-development-companies-canada' },
                  { title: 'How Much Does a Custom Website Cost in Canada?', href: '/blog/website-cost-canada' },
                  { title: 'How to Choose a Software Development Company in Canada', href: '/blog/choose-software-development-company-canada' },
                  { title: 'SaaS Development Cost in Canada (2026)', href: '/blog/saas-development-cost-canada' },
                  { title: 'Top 10 Unicorn Apps of 2026', href: '/blog/top-10-unicorn-apps-2026' },
                ].map((post) => (
                  <a key={post.href} href={post.href} style={{
                    display: 'block', padding: '16px 20px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    textDecoration: 'none', color: '#fff', fontSize: 15, fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}>
                    {post.title} →
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 60, padding: '40px', borderRadius: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Work With Raman</h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
                Have a project in mind? Get a free consultation directly with the founder.
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 48, padding: '0 28px', borderRadius: 100,
                background: '#f5290d', color: '#fff', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Schedule a Call
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
