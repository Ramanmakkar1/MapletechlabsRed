import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import ContactInfo, { CONTACT_FAQS } from '@/components/ContactInfo';
import { FaqSchema } from '@/components/ServiceSchema';
import Footer from '@/components/Footer';

const ContactPage = dynamic(() => import('@/components/ContactPage'), {
  loading: () => <div aria-hidden="true" style={{ minHeight: 720 }} />,
});
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { BUSINESS, HQ_ADDRESS, LOCAL_BUSINESS_AREA_SERVED } from '@/lib/seo/business';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { SERVICE_PROJECT_TYPE } from '@/lib/enquiryContext';

// Allowlists for ?service=&city= enquiry context (validated client-side in ContactPage).
const SERVICE_OPTIONS = services.filter(s => s.slug in SERVICE_PROJECT_TYPE).map(s => ({ slug: s.slug, name: s.name }));
const CITY_OPTIONS = cities.map(c => ({ slug: c.slug, name: c.name }));

const TITLE = 'Contact Mapletech Labs | Free Project Consultation';
const DESCRIPTION = 'Contact Mapletech Labs for a free project consultation. Custom software development company in Edmonton, Canada. Response within one working day.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/contact',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/contact'),
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${canonicalUrl('/contact')}#contactpage`,
  url: canonicalUrl('/contact'),
  name: TITLE,
  description: DESCRIPTION,
  about: { '@id': 'https://mapletechlabs.ca/#organization' },
  mainEntity: {
    '@type': 'ProfessionalService',
    '@id': 'https://mapletechlabs.ca/#localbusiness',
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    priceRange: '$$-$$$',
    address: HQ_ADDRESS,
    areaServed: LOCAL_BUSINESS_AREA_SERVED,
    parentOrganization: { '@id': 'https://mapletechlabs.ca/#organization' },
    sameAs: BUSINESS.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: 'sales',
      areaServed: 'CA',
      availableLanguage: ['English'],
    },
  },
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <ContactPage serviceOptions={SERVICE_OPTIONS} cityOptions={CITY_OPTIONS} />
        <section style={{ padding: '0 0 var(--section-y)' }}>
          <div className="cb-container">
            <div style={{ maxWidth: 860, display: 'grid', gap: 40 }}>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-answer">
          <h2 id="contact-answer" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>How to get a free project consultation from Mapletech Labs</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            To get a free project consultation from Mapletech Labs, send a short project brief using the form on this page, call <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a>, or email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a>. A senior engineer replies within one working day, and the first call is a free 30-minute discovery call. Our team is based in Edmonton, Alberta and works with clients in Calgary, Toronto, Vancouver, Ottawa and Montreal, and across Canada.
          </p>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-brief-consultation">
          <h2 id="contact-brief-consultation" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What to include in a project brief and what to expect in the free consultation</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            A good project brief tells us the problem, who it is for, your rough budget and your target date, and in return the free consultation gives you honest first thoughts, a clearer scope and a recommendation on the best next step. You do not need a finished specification to get started.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Include these five points in your message:
          </p>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            <li>The problem you want solved, or the idea you want to build.</li>
            <li>Who will use it and what they need to get done.</li>
            <li>The closest fit from our <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development services</Link>, such as <Link href="/services/saas-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>custom software</Link>, <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>mobile apps</Link> or <Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>web development</Link>.</li>
            <li>A rough budget range or budget stage; our <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>pricing page lists typical project ranges in CAD</Link> so you can see where your budget sits.</li>
            <li>Any fixed launch date or deadline, plus links or documents that help explain the project.</li>
          </ul>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            In the free 30-minute consultation, a senior engineer talks through your goals, users, technical constraints, timeline and budget. You leave with a clearer picture of the scope, an honest view of whether custom software, an off-the-shelf tool or a smaller first release fits best, and whether we should work together. If the project is a fit, we follow up with a written scope and estimate, usually within a week, and your idea stays under NDA from the first conversation.
          </p>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-discovery-call">
          <h2 id="contact-discovery-call" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What happens during the free 30-minute discovery call</h2>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            <li><strong>Goals and users.</strong> We confirm the problem you want solved, who will use the product and what a successful outcome looks like.</li>
            <li><strong>Technical constraints.</strong> We review existing systems, integrations, platforms and any security or data needs.</li>
            <li><strong>Timeline and budget.</strong> We compare custom software, an off-the-shelf tool and a smaller first release against your launch date and rough budget range.</li>
            <li><strong>Recommendation and next step.</strong> We say honestly whether the project is a fit and agree what happens next, including a written scope and estimate after the call if it is.</li>
          </ul>
        </section>
            </div>
          </div>
        </section>
        <ContactInfo />
        <section style={{ padding: '0 0 var(--section-y)' }}>
          <div className="cb-container">
            <div style={{ maxWidth: 860, display: 'grid', gap: 40 }}>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-quick-facts">
          <h2 id="contact-quick-facts" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Contact Mapletech Labs at a glance</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Contact Mapletech Labs for a free project consultation about custom software, mobile apps, AI & automation. Our Edmonton team responds within one working day and works with clients across Canada.
          </p>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            <li>Phone: <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a></li>
            <li>Email: <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a></li>
            <li>Office: Edmonton, Alberta (T5J 1B9)</li>
            <li>Response time: within one working day</li>
            <li>Service areas: Edmonton, Calgary, Toronto, Vancouver, Ottawa and Montreal, with remote work across Canada</li>
          </ul>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-options">
          <h2 id="contact-options" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Which way should you contact Mapletech Labs?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Use the contact form for a detailed project brief, call for an urgent question or a quick scoping chat, or email if you need to send files and existing documents. The form and email get a reply within one working day, and a senior engineer reads every message.
          </p>
          <div className="contact-channels">
          <table>
            <caption style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, textAlign: 'left', paddingBottom: '12px' }}>Mapletech Labs contact channels at a glance</caption>
            <thead>
              <tr>
                <th scope="col">Channel</th>
                <th scope="col">Best for</th>
                <th scope="col">What to expect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Channel">Contact form on this page</td>
                <td data-label="Best for">Detailed project briefs, with a service and city preselected from the URL</td>
                <td data-label="What to expect">A senior engineer replies within one working day</td>
              </tr>
              <tr>
                <td data-label="Channel">Phone <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a></td>
                <td data-label="Best for">Urgent questions or a quick scoping chat</td>
                <td data-label="What to expect">Ask for the free 30-minute discovery call</td>
              </tr>
              <tr>
                <td data-label="Channel">Email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a></td>
                <td data-label="Best for">Sending files, specs or existing documents</td>
                <td data-label="What to expect">Reply within one working day</td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-next-steps">
          <h2 id="contact-next-steps" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What happens after you get in touch</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            After your free project consultation, if the project is a fit, we follow up with a written scope and estimate, usually within a week, and your idea stays under NDA from the first conversation. When you accept, we assign your team, set up environments and plan the first sprint so you see working software early and often.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Our headquarters is in Edmonton, Alberta, and our team has dedicated engineers in Edmonton, Calgary, Toronto, and Vancouver, so there&#8217;s always someone in your time zone. Most projects run remotely with weekly demos, and we meet in person when it helps. We work with clients across Canada, including Calgary, Toronto, Vancouver, Ottawa, and Montreal. <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Explore our complete service catalog</Link> to learn about the custom software development, mobile apps, AI & automation, and other solutions we offer.
          </p>
        </section>

        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-project-types">
          <h2 id="contact-project-types" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Which Mapletech Labs service fits your project?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            The contact form can take a service and a city from the URL, so the quickest way to reach the right team is to pick the closest service from the list below. Choose the option that sounds most like your project, even if it is not an exact match. Each service page explains the work involved, the technology we use and the kind of problems we solve, so it is a useful place to start before you write your brief. If two services seem relevant, mention both in your message. A senior engineer reads every message, and the team confirms the real scope, timeline and budget on the free 30-minute discovery call.
          </p>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            {services.slice(0, 8).map(s => <li key={s.slug}><Link href={`/services/${s.slug}`} style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>{s.name}</Link></li>)}
          </ul>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Not sure which one fits? Describe the problem in the form above and we will point you to the <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>right service</Link> on the call.
          </p>
        </section>

        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-service-areas">
          <h2 id="contact-service-areas" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Where Mapletech Labs works with clients</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Mapletech Labs is a software development company with its head office in Edmonton, Alberta. Our team has dedicated engineers in Edmonton, Calgary, Toronto and Vancouver, and we work with clients in Calgary, Toronto, Vancouver, Ottawa and Montreal and across Canada. Most projects run remotely with weekly demos, so you can see working software and give feedback as the work moves forward. When a project benefits from meeting in person, we arrange it. Wherever you are in Canada, the first step is the same: send a short project brief and a senior engineer replies within one working day. Choose your city below to see how we work with local businesses.
          </p>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            <li><Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Edmonton</Link></li>
            <li><Link href="/locations/software-development-company-in-calgary" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Calgary</Link></li>
            <li><Link href="/locations/software-development-company-in-toronto" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Toronto</Link></li>
            <li><Link href="/locations/software-development-company-in-vancouver" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Vancouver</Link></li>
            <li><Link href="/locations/software-development-company-in-ottawa" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Ottawa</Link></li>
            <li><Link href="/locations/software-development-company-in-montreal" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Montreal</Link></li>
          </ul>
        </section>
            </div>
          </div>
        </section>
      </main>
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Contact', item: canonicalUrl('/contact') },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <FaqSchema faqs={CONTACT_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))} />
      <Footer />
    </>
  );
}
