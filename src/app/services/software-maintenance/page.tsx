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
const DESCRIPTION = 'Software maintenance and support for Canadian businesses: retainers, security updates, incident response, handover and inherited codebase reviews.';
const URL = canonicalUrl(PATH);

const FAQS = [
  {
    q: 'What does software maintenance include?',
    a: 'Bug fixes, operating system and framework updates, security patches, monitoring, backups, and time for small changes. Major new features are scoped on their own. Hosting and third-party subscriptions are often billed separately, so the written plan should say what is included.',
  },
  {
    q: 'Do you offer monthly maintenance retainers?',
    a: 'Yes. A monthly dedicated team gives you reserved capacity for a product that changes often or that the business depends on every day. The written plan names the monthly capacity, the work included, the escalation path and what is billed separately. Larger changes are quoted as their own project.',
  },
  {
    q: 'Can you support a product that is already live?',
    a: 'Yes. For a product already in use, including an existing SaaS codebase, we review the code, architecture, hosting and open issues, then send a written plan covering what to fix first, what to keep and what sits outside the monthly scope.',
  },
  {
    q: 'How do you estimate maintenance effort?',
    a: 'We look at the size and age of the codebase, the number of dependencies, test coverage, open defects, integrations that can force updates, release frequency and the support hours you need. A discovery sprint is the usual way to turn that into a reliable monthly figure. The cost guide gives planning ranges; the price you receive is the CAD figure in the written plan.',
  },
  {
    q: 'What happens if we want to move maintenance in-house or to another team?',
    a: 'You own the source code we create for your project. Handover covers repository access, deployment notes, environment and credential ownership, open issues and the current support plan. We scope handover work in writing so your team or another supplier can continue without losing the product history.',
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
              Software maintenance covers the ongoing work that keeps a live product secure, supported and compatible: bug fixes, security and dependency updates, monitoring, backups, small changes and planned compatibility work. It is separate from building major new features, which are scoped as their own project.
            </p>
            <p style={p}>
              Mapletech Labs keeps custom software working after launch. We are headquartered in Edmonton and support products for businesses in Edmonton, Calgary, Toronto, Vancouver and across Canada. This page covers what maintenance includes, how support is scoped, what to expect when something goes wrong, and what to prepare before you <A href="/contact">contact us</A>.
            </p>

            <h2 style={h2}>What software maintenance includes</h2>
            <p style={p}>
              Maintenance is the work that keeps a live product secure and useful. The same list is on our <A href="/blog/software-maintenance-cost-canada">software maintenance cost guide</A>.
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

            <h2 style={h2}>Support scope: what a retainer covers</h2>
            <p style={p}>
              A maintenance retainer is a monthly agreement for a set amount of engineering capacity. The written plan should separate three things: the routine work included each month, the small changes that fit inside that capacity, and the larger features or repairs that are quoted as their own project. It should also name the support hours, the people who can request work, and the systems that are in scope.
            </p>
            <p style={p}>
              We use the same engagement shapes as our other work. A <strong>discovery sprint</strong> is a short review when the codebase, hosting or open issues are not clear yet. A <strong>fixed-scope project</strong> covers a defined set of updates with acceptance criteria agreed before the work. A <strong>monthly dedicated team</strong> gives you reserved capacity for a product that changes often or that the business depends on every day. Quotes are in Canadian dollars and the price follows the scope on our <A href="/pricing">pricing page</A>.
            </p>

            <h2 style={h2}>Incident response expectations</h2>
            <p style={p}>
              Incident response is agreed in writing before work starts. The plan should state who to contact, how an outage is reported, the severity levels, the hours covered and what happens outside those hours. We do not publish a blanket response time here because it depends on the product, the retainer and the support hours you choose. Ask for the response and escalation terms in the written plan, and check that they match how your business actually uses the product.
            </p>
            <p style={p}>
              For a product that is already live, we review the code, architecture, hosting and open issues first. You then get a written plan for what to fix first, what to keep and what sits outside the monthly scope. Ongoing work is scoped and priced in CAD before it starts.
            </p>

            <h2 style={h2}>Security and dependency updates</h2>
            <p style={p}>
              Most maintenance risk sits in dependencies that quietly fall behind. The plan should set a review cadence for security advisories, framework and library upgrades, and secrets. In practice that means tracking known vulnerabilities, testing patches before they reach production, rotating keys, reviewing who has access, and keeping backups that have been restored at least once.
            </p>
            <p style={p}>
              Dependency work is not only about security. A payment, login, maps or AI provider can deprecate an API, and a framework can drop support for the version you run. We plan those upgrades with a test window rather than waiting for a production failure. The same discipline applies to <A href="/services/cloud-devops">cloud and deployment</A> work, where infrastructure and access changes need the same review.
            </p>

            <h2 style={h2}>Compatibility work</h2>
            <p style={p}>
              Compatibility work keeps the product usable as the platforms around it change. That includes browser and operating system versions, app store target SDK levels and privacy rules, device testing, and the APIs the product depends on. Apple and Google can change requirements before a release, and a web framework can ship a major version that changes how the product builds.
            </p>
            <p style={p}>
              We handle this on <A href="/services/web-development">web applications</A> and <A href="/services/mobile-app-development">mobile apps</A>, and on <A href="/services/saas-development">SaaS products</A> where a multi-tenant release has to stay compatible for every customer. Compatibility work is planned into the maintenance calendar so it does not become an emergency.
            </p>

            <h2 style={h2}>Assessing an inherited codebase</h2>
            <p style={p}>
              An inherited codebase needs a read before anyone promises a timeline. We start with repository access and a review of the architecture, dependencies and licences, test coverage, build and deployment pipeline, hosting, monitoring, secrets and open defects. We also check who owns the domains, accounts and source code, because missing ownership is a common reason a product cannot be changed safely.
            </p>
            <p style={p}>
              The output is a written assessment that ranks the risks and separates must-fix work from optional improvements. That assessment is the basis for a <A href="/services/software-discovery">software discovery sprint</A> or a fixed-scope repair project. It also tells you whether a monthly retainer is the right shape or whether a one-time stabilization project should come first.
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

            <h2 style={h2}>Maintenance work in practice</h2>
            <p style={p}>
              Maintenance is judged on uptime and steady delivery. These projects show the kind of systems we support:
            </p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><A href="/case-studies/fintech-trading-platform">AI-powered trading platform</A> for Axion Capital, running at 99.99% uptime with 75K+ daily transactions.</li>
              <li><A href="/case-studies/healthcare-telehealth">HIPAA-compliant telehealth platform</A> for ClinicFlow Health, serving 450K+ patient records.</li>
              <li><A href="/case-studies/logistics-platform">Real-time fleet management system</A> for RouteLogic Inc., tracking 500 trucks and 15K+ daily deliveries.</li>
            </ul>
            <p style={p}>
              You can read more on the <A href="/case-studies">case studies page</A>, or see how we approach <A href="/services/software-discovery">software discovery</A> when the first step is understanding an existing product.
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
