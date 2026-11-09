import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const profileUrl = canonicalUrl('/about/raman-makkar');
const title = 'Raman Makkar, Founder & CEO of Mapletech Labs';
const description =
  'Raman Makkar founded Mapletech Labs in Edmonton in 2018. 15+ years in software engineering and 500+ projects shipped across Canada. Meet the founder.';

export const metadata: Metadata = {
  title: seoTitle(title),
  description,
  alternates: { canonical: profileUrl },
  openGraph: {
    title,
    description,
    url: profileUrl,
    type: 'profile',
  },
};

const faqs = [
  {
    q: 'When was Mapletech Labs founded?',
    a: 'Mapletech Labs was founded in 2018 in Edmonton, Alberta. The company began as TML Branding Agency and grew into a full-service software development company.',
  },
  {
    q: 'Where is Raman Makkar based?',
    a: 'Raman Makkar is based in Edmonton, Alberta. He works with clients in Toronto, Vancouver, Calgary, Ottawa, Montreal, the US and Europe.',
  },
  {
    q: 'Can I talk to Raman about my project?',
    a: 'Yes. You can book a free consultation through the Mapletech Labs contact page to discuss your project directly with the founder.',
  },
];

export default function RamanPage() {
  const personId = `${profileUrl}#person`;
  const profileSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${profileUrl}#profilepage`,
        url: profileUrl,
        name: title,
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Raman Makkar',
        jobTitle: 'Founder & CEO',
        url: profileUrl,
        worksFor: { '@id': `${canonicalUrl('/')}#organization` },
        description:
          'Founded Mapletech Labs in 2018 with a mission to build world-class software without compromise. With 15+ years in software engineering, Raman Makkar has architected systems processing billions of transactions, scaled engineering teams, and mentored builders across fintech, healthcare, and enterprise.',
        knowsAbout: [
          'React',
          'Node.js',
          'Python',
          'PostgreSQL',
          'AWS',
          'Scaling systems',
          'Team architecture',
          'AI integration',
          'Mobile App Development',
          'SaaS Product Strategy',
          'Cloud Architecture (AWS/GCP)',
          'Product Design',
          'AI & Machine Learning',
        ],
        homeLocation: {
          '@type': 'Place',
          name: 'Edmonton, Alberta, Canada',
        },
        workLocation: {
          '@type': 'Place',
          name: 'Edmonton, Alberta, Canada',
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        style={{ background: 'var(--surface)', color: 'var(--ink)', minHeight: '100vh' }}
      >
        <BreadcrumbSchema
          items={[
            { position: 1, name: 'Home', item: canonicalUrl('/') },
            { position: 2, name: 'About', item: canonicalUrl('/about') },
            { position: 3, name: 'Raman Makkar', item: profileUrl },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, '\\u003c') }}
        />
        <FaqSchema faqs={faqs} />

        <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="cb-container">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Raman Makkar' },
              ]}
            />
            <h1 style={{ fontSize: '48px', fontWeight: 600, marginBottom: '24px' }}>Raman Makkar</h1>
            <p style={{ fontSize: '24px', color: 'var(--brand)', marginBottom: '32px' }}>Founder &amp; CEO</p>

            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', color: 'var(--body)', maxWidth: '800px' }}>
              Founded Mapletech Labs in 2018 with a mission to build world-class software without compromise. With 15+
              years in software engineering, Raman Makkar has architected systems processing billions of transactions,
              scaled engineering teams, and mentored builders across fintech, healthcare, and enterprise.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', color: 'var(--body)', maxWidth: '800px' }}>
              Raman Makkar is the founder and CEO of Mapletech Labs, a full-service software development company
              headquartered in Edmonton, Alberta. With 15+ years of experience in software engineering, product
              development, and digital transformation, Raman has led the delivery of 500+ projects for clients across
              Canada and internationally.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '32px', color: 'var(--body)', maxWidth: '800px' }}>
              Under his leadership, Mapletech Labs has grown into a team of 25+ engineers, designers, and strategists
              serving clients in fintech, healthcare, e-commerce, logistics, edtech, and enterprise sectors. The company
              specializes in building custom web applications, mobile apps, AI/ML solutions, cloud infrastructure, and
              SaaS platforms.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '32px',
                marginTop: '48px',
              }}
            >
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand)', marginBottom: '12px' }}>
                  Background
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                  Computer Science degree, 15+ years experience. Led engineering at 3 startup exits. Architected fintech
                  platform processing $1B+ annually.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand)', marginBottom: '12px' }}>
                  Expertise
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                  Full-stack: React, Node.js, Python, PostgreSQL, AWS. Specializes in scaling systems, team
                  architecture, and AI integration.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand)', marginBottom: '12px' }}>
                  Philosophy
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                  Great software starts with deep discovery. We build systems designed to scale, not features. Quality
                  first.
                </p>
              </div>
            </div>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>Speaking &amp; Thought Leadership</h2>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', listStyle: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '12px' }}>✓ Regular speaker at tech conferences (React Summit, Node Conf, Canadian tech events)</li>
                <li style={{ marginBottom: '12px' }}>✓ Published articles on software architecture, scaling, and AI integration</li>
                <li style={{ marginBottom: '12px' }}>✓ Guest on podcasts discussing software development best practices</li>
                <li>✓ Mentor to engineering teams and founders</li>
              </ul>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px' }}>What Raman and the team build</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Raman and the Mapletech Labs team deliver custom digital products and long-term engineering support for
                businesses across Canada. Explore the work through <Link href="/case-studies" style={{ color: 'var(--brand)' }}>Mapletech Labs case studies</Link>{' '}
                and the service areas below.
              </p>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', paddingLeft: '20px', maxWidth: '800px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/services/web-development" style={{ color: 'var(--brand)' }}>Custom software and web development</Link>:
                  build scalable web applications, portals, and SaaS products tailored to real business workflows.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)' }}>Mobile app development</Link>:
                  design and ship iOS and Android apps, including cross-platform products for startups and growing teams.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/services/ai-ml" style={{ color: 'var(--brand)' }}>AI development</Link>:
                  add practical AI and machine learning features such as automation, assistants, and data-driven tools.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/services/product-design" style={{ color: 'var(--brand)' }}>UI/UX design</Link>:
                  shape product strategy, interfaces, and design systems that make complex software easy to use.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--brand)' }}>Software development in Edmonton</Link>:
                  work with a local Edmonton team for discovery, delivery, and ongoing product support.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/locations/software-development-company-in-calgary" style={{ color: 'var(--brand)' }}>Software development in Calgary</Link>:
                  partner with Mapletech Labs on custom software projects for Calgary businesses.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/locations/software-development-company-in-toronto" style={{ color: 'var(--brand)' }}>Software development in Toronto</Link>:
                  support Toronto teams with product engineering, modernization, and new application builds.
                </li>
                <li>
                  <Link href="/locations/software-development-company-in-vancouver" style={{ color: 'var(--brand)' }}>Software development in Vancouver</Link>:
                  collaborate with Vancouver companies on web, mobile, and AI-driven software initiatives.
                </li>
              </ul>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>How Raman works with clients</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', maxWidth: '800px' }}>
                Tell us about your project idea during a free project consultation. A senior engineer reads your brief and gets back with honest first thoughts and questions that matter, responding within one working day. This initial conversation helps determine whether custom software, an off-the-shelf solution, or a smaller first release best fits your goals.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', maxWidth: '800px' }}>
                When the project looks like a good fit, the next step is a 30-minute discovery call focused on users, technical constraints, timeline, and budget. This creates a clearer picture of the scope and whether the teams should work together.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', maxWidth: '800px' }}>
                Once you accept, the team is assigned, environments are set up, and the first sprint is planned so you see working software early and often. Most projects run remotely with weekly demos, with in-person meetings when they help.
              </p>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>Selected client work</h2>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', paddingLeft: '20px', maxWidth: '800px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/case-studies/fintech-trading-platform" style={{ color: 'var(--brand)' }}>AI-Powered Trading Platform</Link>:
                  a real-time algorithmic trading system powered by machine learning and built for institutional-grade reliability.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/case-studies/ecommerce-platform" style={{ color: 'var(--brand)' }}>Enterprise E-Commerce Platform</Link>:
                  a modern headless architecture that tripled revenue, handles millions of monthly visitors, and delivers fast page loads during peak sales.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/case-studies/healthcare-telehealth" style={{ color: 'var(--brand)' }}>HIPAA-Compliant Telehealth Platform</Link>:
                  a compliant telehealth platform connecting patients with specialists through encrypted video, EHR workflows, and a mobile experience.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/case-studies/logistics-platform" style={{ color: 'var(--brand)' }}>Real-Time Logistics &amp; Fleet Management</Link>:
                  an intelligent logistics platform combining IoT fleet tracking, ML route optimization, and a real-time operations dashboard.
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/case-studies/payments-api-platform" style={{ color: 'var(--brand)' }}>PCI DSS Payments API</Link>:
                  a production-grade payments processing API certified for PCI DSS compliance and built to handle transactions securely and reliably.
                </li>
                <li>
                  <Link href="/case-studies/real-estate-portal" style={{ color: 'var(--brand)' }}>ML-Powered Real Estate Platform</Link>:
                  a multi-listing real estate portal with machine-learning property recommendations serving active listings across Canada.
                </li>
              </ul>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '20px' }}>Published articles</h2>
              <div style={{ display: 'grid', gap: '12px', maxWidth: '800px' }}>
                {[
                  { title: 'Top 10 AI Development Companies in Canada', href: '/blog/ai-development-companies-canada' },
                  { title: 'How Much Does a Custom Website Cost in Canada?', href: '/blog/website-cost-canada' },
                  { title: 'How to Choose a Software Development Company in Canada', href: '/blog/choose-software-development-company-canada' },
                  { title: 'SaaS Development Cost in Canada (2026)', href: '/blog/saas-development-cost-canada' },
                  { title: 'Top 10 Unicorn Apps of 2026', href: '/blog/top-10-unicorn-apps-2026' },
                  { title: 'Software Development Companies in Edmonton', href: '/blog/software-development-companies-edmonton' },
                  { title: 'How to Build a SaaS MVP in 8 Weeks', href: '/blog/build-saas-mvp-8-weeks' },
                ].map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    style={{
                      display: 'block',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      background: 'var(--surface-alt)',
                      border: '1px solid var(--line)',
                      textDecoration: 'none',
                      color: 'var(--ink)',
                      fontSize: '15px',
                      fontWeight: 500,
                    }}
                  >
                    {post.title} →
                  </Link>
                ))}
              </div>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>Frequently asked questions</h2>
              <div style={{ maxWidth: '800px' }}>
                {faqs.map((item) => (
                  <div key={item.q} style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}>{item.q}</h3>
                    <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', margin: 0 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  background: 'var(--brand)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '100px',
                  fontWeight: 700,
                  fontSize: '16px',
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
