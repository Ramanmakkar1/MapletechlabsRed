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
        <section aria-labelledby="contact-answer">
          <h2 id="contact-answer" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>How to get a free project consultation from Mapletech Labs</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            To get a free project consultation from Mapletech Labs, send a short project brief using the form on this page, call <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a>, or email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a>. A senior engineer replies within one working day, and the first call is a free 30-minute discovery call. Our team is based in Edmonton, Alberta and works with clients in Calgary, Toronto, Vancouver, Ottawa and Montreal, and across Canada.
          </p>
        </section>
        <ContactInfo />
        <section aria-labelledby="contact-quick-facts">
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
        <section aria-labelledby="contact-options">
          <h2 id="contact-options" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>Which way should you contact Mapletech Labs?</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Use the contact form for a detailed project brief, call for an urgent question or a quick scoping chat, or email if you need to send files and existing documents. The form and email get a reply within one working day, and a senior engineer reads every message.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <caption style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, textAlign: 'left', paddingBottom: '12px' }}>Mapletech Labs contact channels at a glance</caption>
            <thead>
              <tr>
                <th scope="col" style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Channel</th>
                <th scope="col" style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Best for</th>
                <th scope="col" style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>What to expect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Contact form on this page</td>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Detailed project briefs, with a service and city preselected from the URL</td>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>A senior engineer replies within one working day</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Phone <a href="tel:+14036048692" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>+1 (403) 604-8692</a></td>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Urgent questions or a quick scoping chat</td>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Ask for the free 30-minute discovery call</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Email <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>hello@mapletechlabs.ca</a></td>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Sending files, specs or existing documents</td>
                <td style={{ padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Reply within one working day</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section aria-labelledby="contact-next-steps">
          <h2 id="contact-next-steps" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What happens after you get in touch</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Tell us about your project idea during our <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>free project consultation</Link>. Our senior engineer will read your brief and get back with honest first thoughts and questions that matter, responding within one working day. This initial conversation helps us understand whether custom software, an off-the-shelf solution, or a smaller first release best fits your goals.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            If the project looks like a good fit, we schedule a 30-minute discovery call to discuss users, technical constraints, timeline, and budget. You leave with a clearer picture of the scope and whether we should work together. When you accept, we assign your team, set up environments, and plan the first sprint so you see working software early and often.
          </p>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            Our headquarters is in Edmonton, Alberta, and our team has dedicated engineers in Edmonton, Calgary, Toronto, and Vancouver, so there&#8217;s always someone in your time zone. Most projects run remotely with weekly demos, and we meet in person when it helps. We work with clients across Canada, including Calgary, Toronto, Vancouver, Ottawa, and Montreal. <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>Explore our complete service catalog</Link> to learn about the custom software development, mobile apps, AI & automation, and other solutions we offer.
          </p>
        </section>

        <section aria-labelledby="contact-include-in-message">
          <h2 id="contact-include-in-message" style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>What to include in your message</h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, maxWidth: 760 }}>
            To help us reply with useful first thoughts, include the type of project you have in mind, a rough budget range, and your timeline. You do not need exact figures: our <Link href="/pricing" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>pricing page lists typical project ranges in CAD</Link> so you can see where your budget sits, and our <Link href="/services" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 }}>software development services</Link> show the kinds of work we take on. Share what you know so far and we will confirm the rest on the call.
          </p>
        </section>

        <section aria-labelledby="contact-project-types">
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
