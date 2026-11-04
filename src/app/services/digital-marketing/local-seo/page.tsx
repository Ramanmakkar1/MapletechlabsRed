import type { Metadata } from 'next';
import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { ServiceSchema } from '@/components/ServiceSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';

const url = canonicalUrl('/services/digital-marketing/local-seo');
const title = 'Local SEO Services Canada for Google and Bing Maps';
const description = 'Reach nearby customers with local SEO services across Canada. Google Business Profile, Bing Places, citations and enquiry tracking. Book a consultation.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: {
    title, description, url, type: 'website', locale: 'en_CA', siteName: 'Mapletech Labs',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Mapletech Labs local SEO services in Canada' }],
  },
  twitter: {
    card: 'summary_large_image', site: '@mapletechlabs', creator: '@mapletechlabs',
    title, description, images: ['/images/og-default.jpg'],
  },
};

const services = [
  { title: 'Google Business Profile', desc: 'Audit ownership, categories, services, hours, photos and website links. Align the profile with the real business and support owner-led verification.' },
  { title: 'Bing Places for Business', desc: 'Claim or update eligible listings, review imported details and keep categories, contact information and opening hours aligned with your website.' },
  { title: 'Business details and citations', desc: 'Build a consistent name, address and phone record. Prioritise relevant directories, correct conflicting listings and track duplicate cleanup.' },
  { title: 'Service-area content', desc: 'Explain the services you actually deliver and where customers can book them. Connect useful location content to service pages and enquiry routes.' },
  { title: 'Reviews and local trust', desc: 'Create a process to request honest customer reviews and respond helpfully. Keep review requests neutral and avoid incentives or review gating.' },
  { title: 'Enquiry measurement', desc: 'Track organic enquiries, profile visits and calls where measurement is available. Connect search visibility to qualified leads and booked work.' },
];

const steps = [
  { num: '01', title: 'Initial local search audit', desc: 'Review Google and Bing listings, business details, citations, indexability, service pages and tracking. Deliver a baseline and prioritised roadmap with access requirements and owners.' },
  { num: '02', title: 'Agree the implementation scope', desc: 'Set target services and genuine service areas. Agree profile corrections, citation cleanup, page improvements, measurement events and approval responsibilities before work begins.' },
  { num: '03', title: 'Improve profiles and pages', desc: 'Apply approved listing edits, repair inconsistent details and improve service content, internal links and structured data. Record changes and outstanding verification steps.' },
  { num: '04', title: 'Ongoing delivery and reporting', desc: 'Provide a monthly change log, citation status, profile maintenance, agreed content updates and enquiry reporting. Review lead quality and prioritise the next work against the baseline.' },
];

const faqs = [
  { q: 'Who needs local SEO rather than national SEO?', a: 'Local SEO suits businesses whose customers visit a location or book services within a defined area. National SEO suits offers sold across Canada without proximity driving the purchase. A multi-location business may need local profiles and location pages alongside a broader national content strategy.' },
  { q: 'Do you work on both Google and Bing?', a: 'Yes. The scope includes Google Business Profile and Bing Places for eligible businesses, plus website improvements for Google and Bing organic search. We review each platform separately because ownership, verification and published details can differ.' },
  { q: 'Can a service-area business use local SEO without a storefront?', a: 'Yes, where the business meets the platform eligibility rules. We review the actual operating model, public address settings and service areas before recommending changes. We do not create virtual offices or duplicate profiles to target cities where the business has no eligible presence.' },
  { q: 'What does local SEO cost in Canada?', a: 'We quote after reviewing your locations, competition, existing listings and website. Citation cleanup, profile access problems, content requirements, language coverage and tracking integrations affect the cost. The proposal separates initial audit and setup from ongoing deliverables, with scope and reporting agreed before you start.' },
  { q: 'How will we know whether local SEO generates enquiries?', a: 'We establish a baseline, tag profile website links and configure agreed enquiry events. Reports distinguish Google and Bing organic traffic, profile interactions, submitted forms and available call data. We review qualified enquiries or booked jobs with your team; a click on a phone number alone does not prove a completed call or sale.' },
  { q: 'How long does local SEO take, and can you guarantee rankings?', a: 'Corrections can improve customer information once published, while competitive visibility usually needs sustained work. Timing depends on verification, website condition, competition and the searcher location. We report changes and results against the baseline; we cannot guarantee a map position, a fixed lead count or inclusion in AI answers.' },
];

export default function LocalSeoPage() {
  return (
    <>
      <ServiceSchema name="Local SEO Services Canada" serviceType="Local SEO" description={description} url={url} />
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Services', item: canonicalUrl('/services') },
        { position: 3, name: 'Digital Marketing', item: canonicalUrl('/services/digital-marketing') },
        { position: 4, name: 'Local SEO', item: url },
      ]} />
      <SubServicePageTemplate
        parent={{ href: '/services/digital-marketing', label: 'Digital Marketing' }}
        name="Local SEO"
        copy={{
          badge: 'DIGITAL MARKETING / LOCAL SEO',
          title: 'Local SEO Services Canada',
          desc: 'Help nearby customers find and contact your business through Google and Bing. Mapletech Labs connects accurate listings, useful service-area pages and enquiry measurement into one local search plan.',
        }}
        stats={[]}
        services={services}
        steps={steps}
        faqs={faqs}
        capabilitiesTitle="What our local SEO service covers"
        buyerContent={(
          <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
            <div className="cb-container" style={{ maxWidth: 960 }}>
              <h2>Local visibility for businesses serving Canadian communities</h2>
              <p className="lede">A clinic needs appointments from nearby patients; a trades business needs enquiries inside its working radius; a retailer needs accurate directions and opening hours. Local SEO connects those needs to your business profiles and website. A Canada-wide online product instead needs broader <Link href="/services/digital-marketing/seo-services">technical and national SEO services</Link>. We can scope both when your business serves local and national buyers.</p>
              <p className="lede">Our specialist local search service supports businesses across Canada, from one operating location to several regional branches. For advice on choosing an SEO company in your market, explore the city services below. We build your local plan around your actual locations, services and customers.</p>
              <h2>Accurate profiles, consistent details and useful local pages</h2>
              <p className="lede">We start with an agreed business record: trading name, real address or appropriate service-area settings, phone, website and regular and holiday hours. Google Business Profile and Bing Places changes require the right owner access; verification remains subject to each platform. We identify duplicate listings and conflicting directory records, prioritise relevant Canadian and industry citations, and maintain a record of submitted and published corrections.</p>
              <p className="lede">Service-area pages should help a customer decide whether you can do the job. We use real coverage boundaries, available services, booking details and applicable project proof. We avoid swapping city names across duplicate pages or implying offices that do not exist. Clear headings, crawlable links and matching Service and business schema help search engines understand the offer.</p>
              <h2>Measure enquiries alongside rankings</h2>
              <p className="lede">The initial audit checks Google Search Console, Bing Webmaster Tools and available analytics. We agree which forms, calls and booking actions matter, use tagged profile links and test the enquiry path on mobile. Monthly reporting separates visibility from customer actions and records tracking gaps, so profile clicks are not mistaken for sales. Consistent entity details also support clear interpretation by AI search systems, without promising recommendations.</p>
              <h2>Mapletech Labs SEO results across the company</h2>
              <p className="lede">Our broader <Link href="/services/digital-marketing/seo-services">SEO services work reports 200% average organic traffic growth, 500+ keywords ranked #1, a 12-month ROI proven timeframe and 80+ clients served</Link>. These are company-wide SEO results across engagements, rather than a local-only case study or a forecast for your campaign. Your local audit establishes its own starting point and success measures.</p>
              <h2>Pricing depends on the work your business needs</h2>
              <p className="lede">A single-location business with clean listings needs a different scope from a multi-location operator with duplicates, inconsistent phone numbers and missing pages. Location count, market competition, citation repair, website changes, languages and measurement integrations determine the quote. We separate initial audit and setup from ongoing maintenance, content and reporting, and agree deliverables and approval steps before starting.</p>
              <h2>Book a local SEO consultation</h2>
              <p className="lede">Bring your website, Google and Bing listing links, services, operating locations and target service areas. Tell us which enquiries become good customers and what has already been tried. We will use that context to scope the audit and ongoing work.</p>
              <Link href="/contact" className="btn btn--primary">Book a local SEO consultation</Link>
            </div>
          </section>
        )}
      />
    </>
  );
}
