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
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BUSINESS, HQ_ADDRESS, LOCAL_BUSINESS_AREA_SERVED } from '@/lib/seo/business';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { PROJECT_PRICING } from '@/data/pricing';
import { SERVICE_PROJECT_TYPE } from '@/lib/enquiryContext';

// Allowlists for ?service=&city= enquiry context (validated client-side in ContactPage).
const SERVICE_OPTIONS = services.filter(s => s.slug in SERVICE_PROJECT_TYPE).map(s => ({ slug: s.slug, name: s.name }));
const CITY_OPTIONS = cities.map(c => ({ slug: c.slug, name: c.name }));

const TITLE = 'Contact a Software Development Company in Edmonton';
const DESCRIPTION = 'Book a free project consultation with Mapletech Labs, an Edmonton, Canada software development company. A senior engineer replies within one working day.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        <section style={{ padding: 'calc(var(--section-y) + 40px) 0 0' }} aria-labelledby="contact-intro">
          <div className="cb-container">
            <h1 id="contact-intro" style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 20px', maxWidth: 840 }}>Contact Mapletech Labs for software, app, AI, UI/UX or digital marketing help</h1>
            <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.7, maxWidth: 860, margin: '0 0 16px' }}>
              To reach Mapletech Labs, call <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a>, email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a> or send the form below, and a senior engineer replies within one business day. The first call is a free 30-minute scoping call where we confirm scope, timeline and budget before any work starts.
            </p>
            <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.7, maxWidth: 860, margin: 0 }}>
              To request help, send the form below with your goal, rough budget and target date, or call <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a> or email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a>. A senior engineer replies within one working day, and the first 30-minute project consultation is free. Mapletech Labs is an Edmonton, Alberta software development company that builds custom software, mobile apps, AI and automation, UI/UX design, websites and SEO for clients across Canada. Start with our <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development services</Link>, see <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>typical project pricing in CAD</Link>, browse <Link href="/case-studies" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development case studies</Link>, or learn how we work as a <Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development company in Edmonton</Link>.
            </p>
          </div>
        </section>
        <ContactPage serviceOptions={SERVICE_OPTIONS} cityOptions={CITY_OPTIONS} />
        <section style={{ padding: '0 0 var(--section-y)' }} aria-labelledby="contact-services">
          <div className="cb-container">
            <div style={{ maxWidth: 860 }}>
              <h2 id="contact-services" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Services you can ask about</h2>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
                Mention the service closest to your project in the form and a senior engineer will confirm the right scope on the free scoping call.
              </p>
              <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760, display: 'grid', gap: 10 }}>
                <li><Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Web development</Link> — marketing sites, online stores, redesigns and CMS builds with SEO foundations.</li>
                <li><Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Mobile app development</Link> — iOS, Android and cross-platform apps, from a first MVP to store release.</li>
                <li><Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>AI and machine learning development</Link> — automation, chatbots, LLM integrations and predictive analytics.</li>
                <li><Link href="/services/ui-ux-design" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>UI/UX design</Link> — audits, user journeys, prototypes and design systems for products that feel hard to use.</li>
              </ul>
            </div>
          </div>
        </section>
        <section style={{ padding: '0 0 var(--section-y)' }} aria-labelledby="contact-direct">
          <div className="cb-container">
            <div style={{ maxWidth: 860 }}>
              <h2 id="contact-direct" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>How do you contact Mapletech Labs, and how quickly do you reply?</h2>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
                To contact Mapletech Labs, call <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a>, email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a>, or send the form above. A senior engineer replies within one working day, and the first 30-minute consultation is free. We are based in Edmonton, Alberta (T5J 1B9) and work with clients in Calgary, Toronto, Vancouver, Ottawa and Montreal, mostly remotely with weekly demos.
              </p>
              <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
                Tell us the problem, who it is for, your rough budget and your target date. We reply with honest first thoughts, then a written scope and fixed-price estimate if the project is a fit. The services people contact us about most are:
              </p>
              <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760, display: 'grid', gap: 10 }}>
                <li><Link href="/services/software-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Custom software development</Link> — new platforms, SaaS products and internal tools built around how your business actually works.</li>
                <li><Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Mobile app development</Link> — iOS, Android and cross-platform apps, from a first MVP to store release and updates.</li>
                <li><Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>AI and machine learning development</Link> — automation, chatbots, LLM integrations and predictive analytics.</li>
                <li><Link href="/services/product-design" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>UI/UX and product design</Link> — audits, user journeys, prototypes and design handoff for products that feel hard to use.</li>
              </ul>
            </div>
          </div>
        </section>
        <section style={{ padding: '0 0 var(--section-y)' }}>
          <div className="cb-container">
            <div style={{ maxWidth: 860, display: 'grid', gap: 40 }}>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-what-we-build">
          <h2 id="contact-what-we-build" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What does Mapletech Labs build, where does it work, and what does it cost?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Mapletech Labs is an Edmonton, Alberta software development company that builds custom software, SaaS platforms, mobile apps, AI and automation, UI/UX design, websites and SEO for clients across Canada. We work from Edmonton with clients in Calgary, Toronto, Vancouver, Ottawa and Montreal, mostly remotely with weekly demos. Most projects are fixed-scope: after a free 30-minute discovery call we send a written scope and a fixed price, with typical CAD ranges of ${PROJECT_PRICING.website.low.toLocaleString('en-CA')}-${PROJECT_PRICING.website.high.toLocaleString('en-CA')} for a website, ${PROJECT_PRICING.webapp.low.toLocaleString('en-CA')}-${PROJECT_PRICING.webapp.high.toLocaleString('en-CA')} for a web app, ${PROJECT_PRICING.saas.low.toLocaleString('en-CA')}-${PROJECT_PRICING.saas.high.toLocaleString('en-CA')} for a SaaS MVP and ${PROJECT_PRICING.mobile.low.toLocaleString('en-CA')}-${PROJECT_PRICING.mobile.high.toLocaleString('en-CA')} for a mobile app. See our <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development pricing in Canada</Link> for current ranges and our <Link href="/case-studies" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development case studies</Link> for shipped work. Send a short brief and a senior engineer replies within one working day.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Start with the <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development services we offer</Link>, or see how we work with local businesses as a <Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development company in Edmonton</Link>.
          </p>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-service-fit">
          <h2 id="contact-service-fit" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Which Mapletech Labs service fits your project?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Choose <Link href="/services/software-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>custom software development</Link> when you need a new platform, SaaS product or internal tool built around how your business actually works. Choose <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>mobile app development</Link> when the product lives on phones, and <Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>AI and machine learning development</Link> when you want to automate work, add a chatbot or turn your data into predictions. If the product works but feels hard to use, start with <Link href="/services/product-design" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>UI/UX and product design</Link>.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Choose <Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>web development</Link> for a marketing site, online store or redesign, and <Link href="/services/digital-marketing/seo-services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>SEO services</Link> when you need more qualified leads from search. We do this work with local businesses as a <Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development company in Edmonton</Link>, <Link href="/locations/software-development-company-in-calgary" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Calgary</Link>, <Link href="/locations/software-development-company-in-toronto" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Toronto</Link> and <Link href="/locations/software-development-company-in-vancouver" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Vancouver</Link>.
          </p>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-answer">
          <h2 id="contact-answer" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>How to get a free project consultation from Mapletech Labs</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Mapletech Labs is based in Edmonton, Alberta (T5J 1B9). Call <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a> or email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a> and a senior engineer replies within one working day. The first 30-minute consultation is free, and project pricing is fixed-scope in CAD, with typical ranges of ${PROJECT_PRICING.website.low.toLocaleString('en-CA')}-${PROJECT_PRICING.website.high.toLocaleString('en-CA')} for a website, ${PROJECT_PRICING.webapp.low.toLocaleString('en-CA')}-${PROJECT_PRICING.webapp.high.toLocaleString('en-CA')} for a web app, ${PROJECT_PRICING.saas.low.toLocaleString('en-CA')}-${PROJECT_PRICING.saas.high.toLocaleString('en-CA')} for a SaaS MVP and ${PROJECT_PRICING.mobile.low.toLocaleString('en-CA')}-${PROJECT_PRICING.mobile.high.toLocaleString('en-CA')} for a mobile app.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Mapletech Labs is a software development company based in Edmonton, Alberta that builds custom software, mobile apps, AI and automation, UI/UX design, websites and SEO for clients across Canada. A senior engineer replies to every enquiry within one working day.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            To get a free project consultation from Mapletech Labs, send a short project brief using the form on this page, call <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a>, or email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a>. A senior engineer replies within one working day with next steps. Our Edmonton, Alberta team builds custom software, mobile apps, AI and automation, UI/UX design, websites and SEO for clients in Calgary, Toronto, Vancouver, Ottawa, Montreal and across Canada. The first call is a free 30-minute discovery call, and if the project is a fit we follow up with a written scope and estimate.
          </p>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-brief-consultation">
          <h2 id="contact-brief-consultation" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What should you include in a project brief, and what happens in the free consultation?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            A good project brief tells us the problem, who it is for, your rough budget and your target date, and in return the free consultation gives you honest first thoughts, a clearer scope and a recommendation on the best next step. You do not need a finished specification to get started.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Include these five points in your message:
          </p>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            <li>The problem you want solved, or the idea you want to build.</li>
            <li>Who will use it and what they need to get done.</li>
            <li>The closest fit from our <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development services</Link>, such as <Link href="/services/software-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>custom software</Link>, <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>mobile apps</Link> or <Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>web development</Link>.</li>
            <li>A rough budget range or budget stage; our <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>pricing page lists typical project ranges in CAD</Link> so you can see where your budget sits.</li>
            <li>Any fixed launch date or deadline, plus links or documents that help explain the project.</li>
          </ul>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            In the free 30-minute consultation, a senior engineer talks through your goals, users, technical constraints, timeline and budget. You leave with a clearer picture of the scope, an honest view of whether custom software, an off-the-shelf tool or a smaller first release fits best, and whether we should work together. If the project is a fit, we follow up with a written scope and estimate, usually within a week, and your idea stays under NDA from the first conversation.
          </p>
        </section>
        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-discovery-call">
          <h2 id="contact-discovery-call" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What happens during the free 30-minute discovery call?</h2>
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
          <h2 id="contact-quick-facts" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What are the Mapletech Labs contact details at a glance?</h2>
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
          <h2 id="contact-next-steps" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What happens after you contact us</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            After you get in touch, a senior engineer replies within one working day, and the project moves through four clear steps.
          </p>
          <ol style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            <li><strong>Reply within one working day.</strong> A senior engineer reads your brief and comes back with honest first thoughts and the questions that matter. Start with the <Link href="#contact-form" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>free project consultation</Link> form above.</li>
            <li><strong>Free 30-minute discovery call.</strong> If the project looks like a good fit, we talk through users, technical constraints, timeline and budget, and whether custom software, an off-the-shelf solution or a smaller first release fits best.</li>
            <li><strong>Written scope and estimate.</strong> If the project is a fit, we send a written scope and estimate, usually within a week, and your idea stays under NDA from the first conversation.</li>
            <li><strong>Kick-off.</strong> When you accept, we assign your team, set up environments and plan the first sprint, so you see working software early and often, with weekly demos.</li>
          </ol>
        </section>

        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-project-types">
          <h2 id="contact-project-types" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>How do you choose the right service for your project?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Choose a service by the outcome you need, not by the technology name. Pick the closest fit below, open that service page to see the process, tech and typical scope, then send your brief with that service selected. If two services overlap, mention both and a senior engineer will confirm the right scope on the free 30-minute discovery call.
          </p>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760, display: 'grid', gap: 10 }}>
            <li><strong>New software platform, SaaS product or internal tool:</strong> start with <Link href="/services/software-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>custom software development services</Link>, or <Link href="/services/saas-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>SaaS product development</Link> if you are building a subscription platform.</li>
            <li><strong>iOS or Android app, or one app for both platforms:</strong> see <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>mobile app development for iOS, Android and cross-platform apps</Link>.</li>
            <li><strong>AI automation, chatbots, LLM integration or predictive analytics:</strong> explore <Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>AI and machine learning development</Link>, or <Link href="/services/ai-consulting" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>AI consulting</Link> if you need a strategy and roadmap first.</li>
            <li><strong>Website, online store or a redesign:</strong> choose <Link href="/services/web-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>web development and e-commerce builds</Link>.</li>
            <li><strong>Interfaces that are hard to use, or a brand that needs a refresh:</strong> look at <Link href="/services/product-design" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>UI/UX and product design services</Link>.</li>
            <li><strong>More qualified leads from search, ads or social:</strong> see <Link href="/services/digital-marketing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>digital marketing services</Link>, including <Link href="/services/digital-marketing/seo-services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>SEO services</Link> and <Link href="/services/digital-marketing/google-ads-ppc" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Google Ads management</Link>.</li>
            <li><strong>Cloud infrastructure, deployment or scaling problems:</strong> start with <Link href="/services/cloud-devops" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>cloud and DevOps services</Link>.</li>
          </ul>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Still unsure? Describe the problem in the form above and we will point you to the <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>right service across all Mapletech Labs services</Link> on the call.
          </p>
        </section>

        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-project-types-table">
          <h2 id="contact-project-types-table" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What kinds of projects does Mapletech Labs take on?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Mapletech Labs takes on websites, web apps, SaaS products, mobile apps and AI features, from a first MVP to a rebuild of an existing system. The table below shows the typical scope, timeline and CAD range for each project type, so you can see where your idea sits before you send a brief.
          </p>
          <div className="contact-channels">
            <table>
              <caption style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, textAlign: 'left', paddingBottom: '12px' }}>Typical Mapletech Labs project types, timelines and CAD ranges</caption>
              <thead>
                <tr>
                  <th scope="col">Project type</th>
                  <th scope="col">Typical scope</th>
                  <th scope="col">Typical timeline</th>
                  <th scope="col">Typical range (CAD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Project type">Website or online store</td>
                  <td data-label="Typical scope">Marketing site, e-commerce, CMS and SEO foundations</td>
                  <td data-label="Typical timeline">{PROJECT_PRICING.website.weeksLow}-{PROJECT_PRICING.website.weeksHigh} weeks</td>
                  <td data-label="Typical range (CAD)">${PROJECT_PRICING.website.low.toLocaleString('en-CA')}-${PROJECT_PRICING.website.high.toLocaleString('en-CA')}</td>
                </tr>
                <tr>
                  <td data-label="Project type">Web app or internal tool</td>
                  <td data-label="Typical scope">Accounts, dashboards, workflows and integrations</td>
                  <td data-label="Typical timeline">{PROJECT_PRICING.webapp.weeksLow}-{PROJECT_PRICING.webapp.weeksHigh} weeks</td>
                  <td data-label="Typical range (CAD)">${PROJECT_PRICING.webapp.low.toLocaleString('en-CA')}-${PROJECT_PRICING.webapp.high.toLocaleString('en-CA')}</td>
                </tr>
                <tr>
                  <td data-label="Project type">SaaS MVP</td>
                  <td data-label="Typical scope">Subscription billing, onboarding, core product and admin</td>
                  <td data-label="Typical timeline">{PROJECT_PRICING.saas.weeksLow}-{PROJECT_PRICING.saas.weeksHigh} weeks</td>
                  <td data-label="Typical range (CAD)">${PROJECT_PRICING.saas.low.toLocaleString('en-CA')}-${PROJECT_PRICING.saas.high.toLocaleString('en-CA')}</td>
                </tr>
                <tr>
                  <td data-label="Project type">Mobile app (iOS, Android or cross-platform)</td>
                  <td data-label="Typical scope">Native or cross-platform app, API, store release and updates</td>
                  <td data-label="Typical timeline">{PROJECT_PRICING.mobile.weeksLow}-{PROJECT_PRICING.mobile.weeksHigh} weeks</td>
                  <td data-label="Typical range (CAD)">${PROJECT_PRICING.mobile.low.toLocaleString('en-CA')}-${PROJECT_PRICING.mobile.high.toLocaleString('en-CA')}</td>
                </tr>
                <tr>
                  <td data-label="Project type">AI feature or automation</td>
                  <td data-label="Typical scope">LLM integration, chatbot, document processing or predictive model</td>
                  <td data-label="Typical timeline">About {PROJECT_PRICING.ai.weeksLow} weeks</td>
                  <td data-label="Typical range (CAD)">${PROJECT_PRICING.ai.low.toLocaleString('en-CA')}-${PROJECT_PRICING.ai.high.toLocaleString('en-CA')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            These are typical ballpark ranges, not quotes. Scope, platform and integrations decide the final price, and we confirm it in a written estimate after the free consultation. See the full <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development pricing in Canada</Link> for engagement models and cost guides.
          </p>
        </section>

        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-project-fit">
          <h2 id="contact-project-fit" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Is your project a good fit for Mapletech Labs?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            We are the best fit when you have a clear business problem and want a senior team to design, build and ship the software. If you need a new platform or internal tool, start with <Link href="/services/software-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>custom software development</Link>. If the product lives on phones, see <Link href="/services/mobile-app-development" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>mobile app development</Link>. If you want to automate work or add intelligence, explore <Link href="/services/ai-ml" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>AI development</Link>. If the product works but feels hard to use, look at <Link href="/services/product-design" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>UI/UX design</Link>. If you need more qualified leads, see <Link href="/services/digital-marketing/seo-services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>SEO services</Link>.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Not sure where you fit? That is normal, and it is what the free consultation is for. Check <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>typical project pricing in CAD</Link> to see where your budget sits, and browse our <Link href="/case-studies" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development case studies</Link> to see the kind of work we ship. If your project is a poor fit, we will say so and point you to a better option.
          </p>
        </section>

        <section style={{ background: 'var(--surface)' }} aria-labelledby="contact-service-areas">
          <h2 id="contact-service-areas" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Where does Mapletech Labs work with clients?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Mapletech Labs is a software development company with its head office in Edmonton, Alberta. Our team has dedicated engineers in Edmonton, Calgary, Toronto and Vancouver, so there is always someone in your time zone, and we work with clients in Calgary, Toronto, Vancouver, Ottawa and Montreal and across Canada. Most projects run remotely with weekly demos, so you can see working software and give feedback as the work moves forward. When a project benefits from meeting in person, we arrange it. Wherever you are in Canada, the first step is the same: send a short project brief and a senior engineer replies within one working day. Choose your city below to see how we work with local businesses.
          </p>
          <ul style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            <li><Link href="/locations/software-development-company-in-edmonton" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Edmonton</Link> — our head office and the team that handles most Alberta projects.</li>
            <li><Link href="/locations/software-development-company-in-calgary" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Calgary</Link> — custom software, apps and web platforms for Calgary businesses.</li>
            <li><Link href="/locations/software-development-company-in-toronto" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Toronto</Link> — SaaS, fintech and enterprise product work in the GTA.</li>
            <li><Link href="/locations/software-development-company-in-vancouver" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Vancouver</Link> — app, AI and product design projects across BC.</li>
            <li><Link href="/locations/software-development-company-in-ottawa" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Ottawa</Link> — secure software and integrations for the capital region.</li>
            <li><Link href="/locations/software-development-company-in-montreal" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Montreal</Link> — bilingual web, app and AI development in Quebec.</li>
            <li><Link href="/locations/software-development-company-in-mississauga" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Mississauga</Link> — web apps and e-commerce for the Peel region.</li>
            <li><Link href="/locations/software-development-company-in-winnipeg" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Winnipeg</Link> — custom software and mobile apps in Manitoba.</li>
            <li><Link href="/locations/software-development-company-in-halifax" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Halifax</Link> — Atlantic Canada software, web and AI projects.</li>
            <li><Link href="/locations/software-development-company-in-victoria" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Victoria</Link> — product design and app development on Vancouver Island.</li>
            <li><Link href="/locations/software-development-company-in-kitchener" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in Kitchener</Link> — SaaS and startup product builds in Waterloo Region.</li>
            <li><Link href="/locations/software-development-company-in-london-on" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Software development company in London, Ontario</Link> — web platforms and internal tools for Southwestern Ontario.</li>
          </ul>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            We also work with clients in Windsor, Markham, Hamilton, Laval, Quebec City and Kelowna, and remotely with businesses anywhere in Canada. If your city is not listed, send the form above and we will confirm whether we can help.
          </p>
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
