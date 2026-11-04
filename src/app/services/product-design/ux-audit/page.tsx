import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/page/PageHero';
import FaqSplit from '@/components/home/FaqSplit';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema, FaqSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import { serviceMedia } from '@/data/media';
import { canonicalUrl } from '@/lib/seo/canonical';

const url = canonicalUrl('/services/product-design/ux-audit');
const title = 'UX Audit Services Canada for Products | Mapletech Labs';
const description = 'Find friction in your app, SaaS or store with UX audit services in Canada. Get prioritised fixes and a redesign roadmap. Book a free audit consultation.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

const faqs = [
  {
    q: 'Which products are suited to a UX audit?',
    a: 'Existing websites, e-commerce stores, mobile apps, SaaS products and internal tools are good candidates when users struggle to complete important tasks. Bring a specific journey, such as signup, checkout or onboarding, so the review can focus on a measurable business goal.',
  },
  {
    q: 'What does a UX audit review?',
    a: 'The agreed scope combines heuristic evaluation, available analytics and accessibility review. We look at navigation, task flows, form feedback, mobile usability and barriers such as contrast, keyboard access and unclear labels. Analytics gaps are recorded so recommendations distinguish observed behaviour from issues that need validation.',
  },
  {
    q: 'Will we receive a prioritised redesign roadmap?',
    a: 'Yes. The audit provides a prioritised fix list and a roadmap that separates focused improvements from changes requiring broader redesign. Findings explain the affected journey, supporting evidence, user impact and recommended next step so your team can plan implementation.',
  },
  {
    q: 'How much does a UX audit cost in Canada?',
    a: 'We provide a fixed quote after a free audit consultation. Scope depends on the number of screens and journeys, user roles, platforms, analytics availability and depth of accessibility review. Research, prototypes and implementation are agreed separately when needed; the quote defines deliverables and milestones.',
  },
  {
    q: 'Should we book an audit or a full redesign?',
    a: 'Choose an audit when you need to understand friction and decide what to fix first. A full redesign makes sense when the findings call for changes across information architecture, core workflows or the design system. An audit can guide incremental improvements or define the scope of that larger project.',
  },
  {
    q: 'What should we bring to the free audit consultation?',
    a: 'Bring your product URL or a demo, the main user journeys, business goals, known pain points and relevant analytics or support feedback. Existing designs, accessibility concerns and technical constraints help us scope the review. If analytics are unavailable, tell us so we can agree what can be assessed and what needs further evidence.',
  },
];

const reviews = [
  { title: 'Heuristic evaluation', text: 'We walk through key tasks to assess navigation, consistency, feedback, error recovery and cognitive load. The review includes responsive behaviour so desktop and mobile journeys receive attention.' },
  { title: 'Analytics review', text: 'Available funnel data, device breakdowns and behaviour recordings help locate drop-offs and recurring friction. We connect those signals to interface findings and identify tracking gaps before drawing conclusions.' },
  { title: 'Accessibility review', text: 'We review the agreed journeys for barriers such as keyboard navigation, focus visibility, contrast and form labelling. Our design work targets WCAG 2.2 AA; the audit scope defines the coverage and remediation priorities.' },
];

export default function UxAuditPage() {
  const breadcrumbs = getServiceBreadcrumbs('product-design', 'ux-audit');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema name="UX Audit Services Canada" serviceType="UX Audit" description={description} url={url} />
      <FaqSchema faqs={faqs} />
      <Navbar />
      <main id="main-content">
        <PageHero
          crumbs={breadcrumbs.map((crumb, i) => ({ label: crumb.name, href: i < breadcrumbs.length - 1 ? crumb.item : undefined }))}
          copy={{
            badge: 'Product Design / UX Audit',
            title: 'UX Audit Services Canada',
            desc: 'Understand where users get stuck before investing in redesign. Mapletech Labs reviews your product experience and turns findings into prioritised fixes and a practical redesign roadmap.',
          }}
          photo={serviceMedia['product-design']}
          serviceName="UX Audit"
        />
        <section className="section-padding" style={{ background: 'var(--surface-alt)' }}>
          <div className="cb-container" style={{ maxWidth: 960 }}>
            <h2>Is your product ready for a UX audit?</h2>
            <p className="lede">An audit suits a live product with a clear task to improve: a store losing shoppers at checkout, a SaaS app with onboarding drop-offs, a mobile app with confusing navigation, or an internal tool that slows daily work.</p>
            <p className="lede">Start with the journeys that matter most to users and your business. For an early concept without a usable interface, explore our <Link href="/services/product-design">product design services</Link> to plan research, flows and prototypes.</p>
          </div>
        </section>
        <section className="section-padding">
          <div className="cb-container">
            <h2>What our UX audit reviews</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 28 }}>
              {reviews.map(review => (
                <article key={review.title} style={{ padding: 24, border: '1px solid var(--line)', borderRadius: 16 }}>
                  <h3>{review.title}</h3>
                  <p style={{ color: 'var(--body)', lineHeight: 1.75 }}>{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding" style={{ background: 'var(--surface-alt)' }}>
          <div className="cb-container" style={{ maxWidth: 960 }}>
            <h2>Prioritised findings and a redesign roadmap</h2>
            <p className="lede">Each finding connects an issue to its location, evidence and user impact, with a recommended change. We separate observed problems from hypotheses that need testing, then prioritise the work by severity, business relevance and implementation effort.</p>
            <p className="lede">The roadmap groups quick fixes, changes to test and larger redesign decisions. Your team can use it to plan the next iteration; research, wireframes, prototypes and development can be scoped as follow-on work.</p>
            <h2>UX audit versus full redesign</h2>
            <p className="lede">An audit helps you decide where to invest. It can reveal that clearer labels or a shorter form will address a specific problem. A full redesign addresses wider changes to product structure, workflows or visual systems, with design and implementation work beyond the review.</p>
            <h3>Broader redesign experience</h3>
            <p className="lede">Our <Link href="/case-studies/ecommerce-platform">Enterprise E-Commerce Platform case study</Link> reports 3x Revenue Growth, 2M+ Monthly Visitors, 99.9% Uptime and 1.2s Page Load. This was a broader platform migration and redesign engagement; these results describe that project rather than a standalone UX audit.</p>
          </div>
        </section>
        <section className="section-padding">
          <div className="cb-container" style={{ maxWidth: 960 }}>
            <h2>Scope and cost drivers</h2>
            <p className="lede">A focused checkout review differs from reviewing a multi-role SaaS product across web and mobile. Screen count, journey complexity, device coverage, access to analytics and accessibility review depth all affect scope. Agreeing these boundaries makes the findings useful and the quote clear.</p>
            <p className="lede">We provide a fixed quote after the free audit consultation. Deliverables and milestones are agreed for your scope. The existing service commitments apply: fixed scope and price, full ownership on final payment and a reply within one working day.</p>
            <h2>Prepare for your free audit consultation</h2>
            <ul className="lede" style={{ paddingLeft: 24 }}>
              <li>Your product URL or demo and the journeys you want reviewed.</li>
              <li>Your business goals, target users and known usability concerns.</li>
              <li>Available funnel data, support feedback and previous research.</li>
              <li>Existing designs, technical constraints and accessibility priorities.</li>
            </ul>
            <p className="lede">Missing data is useful context too. Tell us what is available so we can define a review that fits your product.</p>
            <Link href="/contact" className="btn btn--primary">Book a free audit consultation</Link>
          </div>
        </section>
        <FaqSplit faqs={faqs} title="UX audit questions" />
      </main>
      <Footer />
    </>
  );
}
