import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema, ServiceSchema } from '@/components/ServiceSchema';
import FinalCta from '@/components/home/FinalCta';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const PATH = '/services/software-maintenance';
const TITLE = 'Software Maintenance Services Canada';
const DESCRIPTION = 'Software maintenance and support for Canadian businesses. See what is included, how an engagement is scoped, and what to prepare before you call.';
const URL = canonicalUrl(PATH);

const FAQS = [
  {
    q: 'What does software maintenance include?',
    a: 'Bug fixes, operating system and framework updates, security patches, monitoring, backups, and time for small changes. Major new features are scoped on their own. Hosting and third-party subscriptions are often billed separately, so the written plan should say what is included.',
  },
  {
    q: 'Can you support a product that is already live?',
    a: 'Yes. For a product already in use, including an existing SaaS codebase, we review the code, architecture, hosting and open issues, then send a written plan covering what to fix first, what to keep and what sits outside the monthly scope.',
  },
  {
    q: 'How is a maintenance engagement scoped?',
    a: 'We use the same shapes as our other work: a discovery sprint when the codebase needs a closer look, a fixed-scope project for a defined set of updates, or a monthly dedicated team when you want reserved capacity. Ongoing work is scoped and priced in CAD before it starts. The cost guide gives planning ranges. The price you receive is the CAD figure in the written plan.',
  },
  {
    q: 'What should I prepare before I contact you?',
    a: 'The product and its platforms, where the code and hosting live, known defects, how much change you expect each month, integrations that can force updates, and whether personal information must stay in Canada.',
  },
];

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Mapletech Labs`,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  alternates: { canonical: URL },
};

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 16px' };
const p = { fontSize: 17, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 16px' };

function A({ href, children }: { href: string; children: string }) {
  return <Link href={href} style={{ color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{children}</Link>;
}

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Services', item: canonicalUrl('/services') },
        { position: 3, name: 'Software Maintenance', item: URL },
      ]} />
      <ServiceSchema
        name={TITLE}
        description={DESCRIPTION}
        url={URL}
        serviceType="Software maintenance and support"
      />
      <FaqSchema faqs={FAQS} />
      <Navbar />
      <main id="main-content">
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 860 }}>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Software Maintenance' }]} />
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px' }}>
              Software maintenance and support in Canada
            </h1>
            <p style={{ ...p, fontSize: 19 }}>
              Mapletech Labs keeps custom software working after launch. We are headquartered in Edmonton and support products for businesses in Edmonton, Calgary, Toronto, Vancouver and across Canada. This page covers what maintenance includes, why teams look for it, how an engagement is scoped, and what to prepare before you <A href="/contact">contact us</A>.
            </p>

            <h2 style={h2}>What software maintenance includes</h2>
            <p style={p}>
              Maintenance is the work that keeps a live product secure and useful. It is separate from building a major new feature. The same list is on our <A href="/blog/software-maintenance-cost-canada">software maintenance cost guide</A>.
            </p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li>Bug fixes that users report or that monitoring catches.</li>
              <li>Operating system, framework, library and SDK updates, including mobile store requirements.</li>
              <li>Security patches, key rotation and access review.</li>
              <li>Uptime checks, error tracking, performance alerts and backups.</li>
              <li>Small copy and workflow changes that keep the product in step with the business.</li>
            </ul>
            <p style={p}>
              Hosting and third-party subscriptions are often billed separately, so the written plan should name what is included. We do this work on the products we build: <A href="/services/web-development">web applications</A>, <A href="/services/mobile-app-development">mobile apps</A> and <A href="/services/saas-development">SaaS products</A>, with <A href="/services/cloud-devops">cloud and deployment</A> work when the product needs it. Browse <A href="/services">all services</A> for the wider practice.
            </p>

            <h2 style={h2}>Why businesses look for maintenance</h2>
            <p style={p}>A product that nobody maintains slowly breaks. These are the situations teams describe when they ask for help.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li>Apple, Google or a web framework ships a version the product has not been updated for.</li>
              <li>A dependency has a security issue, or a payment, login or AI provider deprecates an API.</li>
              <li>The app stores change privacy labels, target SDK levels or account-deletion rules before the next release.</li>
              <li>Staff want small improvements, and the business relies on the product every day.</li>
              <li>Skipping updates has turned into a larger repair, and someone needs to read the code before changing it.</li>
            </ul>

            <h2 style={h2}>How an engagement is scoped</h2>
            <p style={p}>
              Quotes are in Canadian dollars. Projects run from our Edmonton headquarters, and the price follows the scope. The engagement shapes are the ones on our <A href="/pricing">pricing page</A>.
            </p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><strong>Discovery sprint.</strong> A short review when the codebase, hosting or open issues are not clear yet.</li>
              <li><strong>Fixed-scope project.</strong> A defined set of updates, with acceptance criteria agreed before the work.</li>
              <li><strong>Monthly dedicated team.</strong> Reserved capacity for a product that changes often or that the business depends on every day. Larger changes are quoted separately.</li>
            </ul>
            <p style={p}>
              If the product is already live, including an existing SaaS codebase, we review the code, architecture, hosting and open issues first. You then get a written plan for what to fix first, what to keep and what sits outside the monthly scope. Ongoing work is scoped and priced in CAD before it starts. The 15-20% rule and monthly ranges in the cost guide are an industry planning figure. The price you receive is the CAD figure in the written plan.
            </p>

            <h2 style={h2}>Questions to prepare before you ask</h2>
            <p style={p}>A shorter brief gets a clearer scope. Have these ready when you <A href="/contact">contact Mapletech Labs</A>, or call +1-403-604-8692.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li>What the product is (website, web app, mobile app or SaaS) and who uses it.</li>
              <li>Where the repository, hosting, domains and credentials live, and who owns the source code.</li>
              <li>Known defects, recent outages, and whether monitoring and backups are already in place.</li>
              <li>How much change you want each month, and which requests are small fixes versus new features.</li>
              <li>Integrations that can force an update, such as payments, app stores, maps or AI APIs.</li>
              <li>Whether personal information must stay in Canada, especially for health or public-sector data.</li>
            </ul>
            <p style={p}>You own the source code we create for your project, so your team can continue with us or take the product in-house later.</p>

            <h2 style={h2}>Frequently asked questions</h2>
            {FAQS.map(f => (
              <article key={f.q} style={{ borderBottom: '1px solid var(--line)', padding: '18px 0' }}>
                <h3 style={{ color: 'var(--ink)', margin: '0 0 8px', fontSize: 18 }}>{f.q}</h3>
                <p style={{ ...p, margin: 0 }}>{f.a}</p>
              </article>
            ))}
          </div>
        </section>
        <FinalCta
          title="Keep the product you already run"
          sub="Tell us what is live today. A senior engineer will come back within one working day with a scope, a timeline and a fixed price."
          cta="Talk about maintenance"
          contactHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
