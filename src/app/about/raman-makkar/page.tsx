import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const profileUrl = canonicalUrl('/about/raman-makkar');
const title = 'Raman Makkar, Founder & CEO of Mapletech Labs, Edmonton';
const description =
  'Raman Makkar founded Mapletech Labs in Edmonton in 2018. 15+ years in software engineering and 500+ projects shipped across Canada. Meet the founder today.';

export const metadata: Metadata = {
  title: seoTitle(title),
  description: seoDescription(description),
  alternates: { canonical: profileUrl },
  openGraph: {
    title: ogTitle(title),
    description: seoDescription(description),
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
    q: 'What is Raman Makkar\'s background?',
    a: 'Raman Makkar holds a Computer Science degree and has 15+ years of experience in software engineering. He led engineering at 3 startup exits, architected a fintech platform processing $1B+ annually, and founded Mapletech Labs in Edmonton in 2018.',
  },
  {
    q: 'How big is the Mapletech Labs team that Raman leads?',
    a: 'Raman leads a 25+ member team of engineers, designers and strategists at Mapletech Labs. The team has delivered 500+ projects for clients across Canada and internationally, from custom web applications and mobile apps to AI/ML solutions, cloud infrastructure and SaaS platforms.',
  },
  {
    q: 'Can I talk to Raman about my project?',
    a: 'Yes. You can book a free consultation through the Mapletech Labs contact page to discuss your project directly with the founder.',
  },
  {
    q: 'What does Mapletech Labs build?',
    a: 'Mapletech Labs builds custom web applications, mobile apps, AI/ML solutions, cloud infrastructure, and SaaS platforms. The team works with clients in fintech, healthcare, e-commerce, logistics, edtech, and enterprise. Its projects range from custom software and mobile apps to AI-powered platforms.',
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
            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '20px', color: 'var(--body)', maxWidth: '800px' }}>
              Raman Makkar is the founder and CEO of Mapletech Labs, an Edmonton-based software development company he
              founded in 2018. With 15+ years in software engineering and a 25+ member team, he has led the delivery of
              500+ projects. Explore the <Link href="/services" style={{ color: 'var(--brand)' }}>software development services</Link> he
              leads, see the results in the <Link href="/case-studies" style={{ color: 'var(--brand)' }}>Mapletech Labs case studies</Link>,
              or <Link href="/contact" style={{ color: 'var(--brand)' }}>contact Raman for a free consultation</Link>.
            </p>
            <p style={{ fontSize: '24px', color: 'var(--brand)', marginBottom: '32px' }}>Founder &amp; CEO</p>
            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '32px', color: 'var(--body)', maxWidth: '800px' }}>
              Raman Makkar is the founder and CEO of Mapletech Labs, a full-service software development company
              headquartered in Edmonton, Alberta, founded in 2018 with a mission to build world-class software without
              compromise. He has 15+ years of experience in software engineering and leads a 25+ member team of
              engineers, designers and strategists. The team has delivered 500+ projects for clients across Canada and
              internationally, including Edmonton, Calgary, Toronto and Vancouver, and builds custom web applications,
              mobile apps, AI/ML solutions, cloud infrastructure and SaaS platforms.
            </p>

            <section aria-labelledby="raman-at-a-glance" style={{ marginBottom: '32px' }}>
              <h2
                id="raman-at-a-glance"
                style={{ fontSize: '28px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}
              >
                Raman Makkar at a glance
              </h2>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', paddingLeft: '20px', maxWidth: '800px' }}>
                <li style={{ marginBottom: '8px' }}>Role: Founder &amp; CEO of Mapletech Labs</li>
                <li style={{ marginBottom: '8px' }}>Company: Mapletech Labs, founded in 2018 as TML Branding Agency</li>
                <li style={{ marginBottom: '8px' }}>Based in: Edmonton, Alberta</li>
                <li style={{ marginBottom: '8px' }}>
                  Experience: 15+ years in software engineering, product development and digital transformation
                </li>
                <li style={{ marginBottom: '8px' }}>
                  Team: 25+ engineers, designers and strategists serving clients across Canada and internationally
                </li>
                <li style={{ marginBottom: '8px' }}>Projects delivered: 500+ for clients across Canada and internationally</li>
                <li style={{ marginBottom: '8px' }}>
                  Main services: custom web applications, mobile apps, AI/ML solutions, cloud infrastructure and SaaS
                  platforms
                </li>
                <li>
                  Sectors and clients: fintech, healthcare, e-commerce, logistics, edtech and enterprise, with clients in
                  Edmonton, Calgary, Toronto, Vancouver and internationally
                </li>
              </ul>
            </section>

            <section aria-labelledby="raman-background" style={{ marginTop: '48px' }}>
              <h2 id="raman-background" style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>
                Background, expertise and approach
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '32px',
                }}
              >
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand)', marginBottom: '12px' }}>
                  Background
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                  Raman Makkar holds a Computer Science degree and has more than 15 years of experience in software
                  engineering. He led engineering at 3 startup exits and architected a fintech platform that processes
                  $1B+ annually. That background is why Mapletech Labs plans every project for real production load from
                  day one.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand)', marginBottom: '12px' }}>
                  Expertise
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                  Raman is a full-stack engineer who works with React, Node.js, Python, PostgreSQL and AWS. He
                  specializes in scaling systems, team architecture and AI integration, and he helps clients choose a
                  stack that their own team can maintain after launch.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand)', marginBottom: '12px' }}>
                  Philosophy
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)' }}>
                  Raman believes great software starts with deep discovery. Mapletech Labs builds systems designed to
                  scale, not just a list of features, and quality comes first at every stage. That is why every project
                  starts with a discovery call and a written scope before any code is written.
                </p>
              </div>
              </div>
            </section>

            <section aria-labelledby="raman-speaking" style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 id="raman-speaking" style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>Speaking &amp; Thought Leadership</h2>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', listStyle: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '12px' }}><span aria-hidden="true" style={{ color: 'var(--brand)', fontWeight: 700, marginRight: '8px' }}>✓</span>Regular speaker at tech conferences (React Summit, Node Conf, Canadian tech events)</li>
                <li style={{ marginBottom: '12px' }}><span aria-hidden="true" style={{ color: 'var(--brand)', fontWeight: 700, marginRight: '8px' }}>✓</span>Published articles on software architecture, scaling, and AI integration</li>
                <li style={{ marginBottom: '12px' }}><span aria-hidden="true" style={{ color: 'var(--brand)', fontWeight: 700, marginRight: '8px' }}>✓</span>Guest on podcasts discussing software development best practices</li>
                <li><span aria-hidden="true" style={{ color: 'var(--brand)', fontWeight: 700, marginRight: '8px' }}>✓</span>Mentor to engineering teams and founders</li>
              </ul>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px' }}>Services Raman leads</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Raman and the Mapletech Labs team deliver custom digital products and long-term engineering support for
                businesses across Canada.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                His work covers the full range of Mapletech Labs services, from custom web applications and mobile apps
                to AI/ML solutions, cloud infrastructure and SaaS platforms. You can review the{' '}
                <Link href="/services" style={{ color: 'var(--brand)' }}>custom software development services</Link>,
                see the results in the <Link href="/case-studies" style={{ color: 'var(--brand)' }}>Mapletech Labs case studies</Link>,
                or <Link href="/contact" style={{ color: 'var(--brand)' }}>contact the team</Link> to discuss a project.
              </p>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', paddingLeft: '20px', maxWidth: '800px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <Link href="/services/saas-development" style={{ color: 'var(--brand)' }}>custom SaaS development services</Link>:
                  build and scale subscription software products and SaaS platforms for growing businesses.
                </li>
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
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Tell us about your project idea during a free project consultation. A senior engineer reads your brief and gets back with honest first thoughts and questions that matter, responding within one working day. This initial conversation helps determine whether custom software, an off-the-shelf solution, or a smaller first release best fits your goals.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                When the project looks like a good fit, the next step is a 30-minute discovery call focused on users, technical constraints, timeline, and budget. This creates a clearer picture of the scope and whether the teams should work together.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Once you accept, the team is assigned, environments are set up, and the first sprint is planned so you see working software early and often. Most projects run remotely with weekly demos, with in-person meetings when they help.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginTop: '24px', marginBottom: '12px' }}>
                What to expect in the first sprint
              </h3>
              <ol style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', paddingLeft: '20px', maxWidth: '800px' }}>
                <li style={{ marginBottom: '8px' }}>
                  A free project consultation, with a senior engineer reading your brief and replying within one working day.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  A 30-minute discovery call covering users, technical constraints, timeline, and budget.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  A named team, set-up environments, and a planned first sprint so working software appears early.
                </li>
                <li>
                  Weekly demos and direct access to Raman from discovery through delivery, with in-person meetings when they help.
                </li>
              </ol>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '20px' }}>Raman&apos;s software engineering experience</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Raman&apos;s 15+ years in software engineering cover hands-on product building, team leadership, and
                technical strategy. He holds a Computer Science degree and has led engineering at 3 startup exits.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Full-stack engineering
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Raman works across the stack with React, Node.js, Python, PostgreSQL, and AWS. That range covers custom
                web applications, mobile apps, AI/ML solutions, cloud infrastructure, and SaaS platforms, so technical
                decisions stay connected to the product and the business.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Scaling systems and teams
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                He has architected systems processing billions of transactions and a fintech platform processing $1B+
                annually. He has also scaled engineering teams and mentored builders across fintech, healthcare, and
                enterprise, which shapes how Mapletech Labs plans architecture and team structure for growing products.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                AI integration and product strategy
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Raman specializes in scaling systems, team architecture, and AI integration. His product work includes
                SaaS product strategy, product design, and cloud architecture on AWS and GCP, with AI and machine
                learning applied to practical features rather than isolated experiments.
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Leadership and team building
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: 0, maxWidth: '800px' }}>
                Raman has scaled engineering teams and mentored builders across fintech, healthcare, and enterprise, and
                today leads a 25+ member team of engineers, designers, and strategists. He works directly with clients
                from discovery through delivery, runs projects in short agile cycles with weekly demos, and mentors
                engineering teams and founders on architecture and scaling decisions.
              </p>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>Selected work</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Explore the <Link href="/case-studies" style={{ color: 'var(--brand)' }}>Mapletech Labs case studies</Link>{' '}
                for project details and results, or start with one of the selected examples below.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', marginBottom: '20px', maxWidth: '800px' }}>
                Learn more about the company on the <Link href="/about" style={{ color: 'var(--brand)' }}>Mapletech Labs about page</Link>,
                or <Link href="/contact" style={{ color: 'var(--brand)' }}>contact the team</Link> to discuss a similar project.
              </p>
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
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '20px' }}>Results from recent projects</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--body)', maxWidth: '800px' }}>
                Across the 500+ projects Raman has led, the work includes a real-time trading engine with sub-50ms
                latency and 75K+ transactions a day with zero data loss, a HIPAA and PIPEDA-compliant telehealth
                platform serving 450K+ patient records, an e-commerce redesign that lifted conversion from 2.1% to 3.8%
                in 90 days for 2M+ monthly visitors, a fleet system tracking 500 trucks and 15K+ daily deliveries while
                cutting fuel cost by 25%, a PCI DSS payments API handling 12M+ monthly transactions, and an ML-powered
                real estate portal with property recommendations across 850K+ active listings. The projects in the{' '}
                <Link href="/case-studies" style={{ color: 'var(--brand)' }}>Mapletech Labs case studies</Link> show the
                range of that work, from a{' '}
                <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)' }}>mobile app development</Link>{' '}
                project to an AI-powered platform or a high-traffic e-commerce experience.
              </p>
            </section>

            <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '20px' }}>Published articles</h2>
              <div style={{ display: 'grid', gap: '12px', maxWidth: '800px' }}>
                {[
                  { title: 'Top 10 AI Development Companies in Canada (2026 Guide)', href: '/blog/ai-development-companies-canada' },
                  { title: 'Website Cost in Canada: 2026 CAD Prices', href: '/blog/website-cost-canada' },
                  { title: 'How to Choose a Software Development Company in Canada', href: '/blog/choose-software-development-company-canada' },
                  { title: 'SaaS Development Cost in Canada: 2026 CAD', href: '/blog/saas-development-cost-canada' },
                  { title: 'Unicorn Apps 2026: Top 10 Growth Stories for Founders', href: '/blog/top-10-unicorn-apps-2026' },
                  { title: 'Software Development Companies in Edmonton: How to Choose (2026)', href: '/blog/software-development-companies-edmonton' },
                  { title: 'How to Build a SaaS MVP in 8 Weeks: A Founder’s Playbook', href: '/blog/build-saas-mvp-8-weeks' },
                  { title: 'UI/UX Design Cost in Canada (2026 Guide)', href: '/blog/ui-ux-design-cost-canada' },
                  { title: 'AI Development Cost in Canada (2026): Chatbots, LLM Integration and Custom Models', href: '/blog/ai-development-cost-canada' },
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
                Book a free consultation with Raman
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
