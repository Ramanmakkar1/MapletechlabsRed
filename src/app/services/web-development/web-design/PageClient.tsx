import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import Link from 'next/link';
import { PROJECT_PRICING } from '@/data/pricing';

function BuyerContent() {
  const cad = (amount: number) => new Intl.NumberFormat('en-CA', {
    style: 'currency', currency: 'CAD', maximumFractionDigits: 0,
  }).format(amount);
  const planningRange = (range: typeof PROJECT_PRICING.website | typeof PROJECT_PRICING.webapp) =>
    `${cad(range.low)}–${cad(range.high)} CAD over ${range.weeksLow}–${range.weeksHigh} weeks`;

  return (
    <section className="section-padding-sm" aria-labelledby="web-design-compare">
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="web-design-compare">Web design vs web development: which do you need?</h2>
            <p className="lede">Web design covers how a site looks, how it guides visitors and how it converts. Web development covers the code, integrations and infrastructure that make it work. Most projects need both, but the table below shows where each one starts.</p>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Need</th>
                <th scope="col">Web design</th>
                <th scope="col">Web development</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Marketing site</th>
                <td>Layout, messaging hierarchy, UX and conversion paths</td>
                <td>Responsive build, CMS, forms and analytics integration</td>
              </tr>
              <tr>
                <th scope="row">Redesign</th>
                <td>Audit, new visual system, page templates and content structure</td>
                <td>Migration, redirects, performance work and rollout</td>
              </tr>
              <tr>
                <th scope="row">Web app / portal</th>
                <td>Product UX, wireframes and interface design for complex tasks</td>
                <td>Application logic, APIs, authentication and data</td>
              </tr>
              <tr>
                <th scope="row">E-commerce</th>
                <td>Store layout, product pages, cart and checkout experience</td>
                <td>Platform setup, payments, inventory and integrations</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="lede" style={{ marginTop: 24 }}>
          A marketing website design and build generally falls in the {planningRange(PROJECT_PRICING.website)} range. For the build itself, see our <Link href="/services/web-development">custom web development</Link> services, or explore <Link href="/services/product-design">UI/UX design services</Link> and <Link href="/services/wordpress-cms">WordPress development</Link> for editable content. We work with businesses across Canada, including <Link href="/locations/web-development-company-in-edmonton">web design and development in Edmonton</Link>, <Link href="/locations/web-development-company-in-calgary">web design and development in Calgary</Link>, <Link href="/locations/web-development-company-in-toronto">web design and development in Toronto</Link> and <Link href="/locations/web-development-company-in-vancouver">web design and development in Vancouver</Link>. Compare budgets in our <Link href="/blog/website-cost-canada">Canadian website cost guide</Link>, then <Link href="/contact?service=web-development">request a free web design quote</Link>.
        </p>
      </div>
    </section>
  );
}

const stats = [
  { value: '200+', label: 'Web Projects' },
  { value: '150+', label: 'Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40ms', label: 'Avg Load' },
];

const services = [
  { icon: '🎨', title: 'Custom website design', desc: 'Every site is designed around your brand, your customers and your goals — not a recycled template — with page layouts built to explain your offer and earn the enquiry.' },
  { icon: '📱', title: 'Responsive/mobile-first design', desc: 'We design and build mobile-first, then scale up to tablet and desktop, so the site is fast, readable and easy to use on the phones most of your visitors use.' },
  { icon: '🎯', title: 'UX & conversion design', desc: 'We map the visitor journey, then design clear calls to action, forms and page structure that turn more visitors into leads instead of dead ends.' },
  { icon: '🔄', title: 'Website redesign', desc: 'We audit your current site and deliver a redesign that keeps what works and fixes what does not — sharper design, faster pages and a clear path to conversion.' },
  { icon: '♿', title: 'Accessible design (WCAG 2.1 AA / AODA)', desc: 'We design to WCAG 2.1 AA and AODA expectations: readable contrast, keyboard-friendly navigation, accessible forms and semantic structure.' },
  { icon: '🔍', title: 'SEO-ready design & build', desc: 'Clean heading structure, descriptive metadata, fast load times, structured data and sensible URLs are built into the design and build from the start.' },
];

const steps = [
  { num: '01', title: 'Discovery & sitemap', desc: 'We map your goals, audience, competitors and content to agree the sitemap, page types and conversion goals before design starts.' },
  { num: '02', title: 'Wireframes & design', desc: 'We wireframe the key pages, agree the structure, then design the full visual system and responsive layouts for your review.' },
  { num: '03', title: 'Build & content', desc: 'We build the approved designs into a fast, responsive site, load your content and connect the forms, CMS and integrations you need.' },
  { num: '04', title: 'Launch & SEO handover', desc: 'We test performance, accessibility and search fundamentals, launch the site and hand over analytics, metadata and editing guidance.' },
];

const faqs = [
  {
    q: 'How much does web design cost in Canada?',
    a: `A custom marketing website typically falls in the ${'$'}${PROJECT_PRICING.website.low.toLocaleString('en-CA')}–${'$'}${PROJECT_PRICING.website.high.toLocaleString('en-CA')} CAD range, depending on page count, design complexity and integrations. We give a fixed quote for your scope after discovery. See our Canadian website cost guide at mapletechlabs.ca/blog/website-cost-canada for the factors that move the budget.`,
  },
  {
    q: 'How long does it take to design a website?',
    a: `A typical website design and build takes about ${PROJECT_PRICING.website.weeksLow}–${PROJECT_PRICING.website.weeksHigh} weeks from discovery to launch. Smaller sites can move faster, while larger sites with more content, custom features or integrations take longer. You get a timeline with your quote.`,
  },
  {
    q: 'What is the difference between web design and web development?',
    a: 'Web design is the look, layout and user experience — how the site looks, how visitors move through it and how it turns them into leads. Web development is the engineering that makes it work: responsive code, CMS, forms, integrations, performance and hosting. Most projects need both, and we deliver them together.',
  },
  {
    q: 'Do you redesign existing websites without losing Google rankings?',
    a: 'Yes. We audit the current site, keep the URLs, titles and content that already rank, and add 301 redirects from any changed URLs to the closest matching page. We also preserve metadata and internal links and check the new site before launch so existing search visibility carries over.',
  },
  {
    q: 'Do you work with businesses outside Edmonton?',
    a: 'Yes. We are based in Edmonton and work remotely across Canada, including Calgary, Toronto, Vancouver and other cities. Discovery, design reviews and launch can all be handled online, with on-site workshops available where useful.',
  },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/web-development", label: "Web Development" }}
      name="Web Design"
      copy={{ badge: "WEBSITE DESIGN", title: <>Web Design Company for{' '}<span style={{ color: 'var(--brand)' }}>Canadian Businesses</span></>, desc: <>Mapletech Labs is a Canadian web design company headquartered in Edmonton. We design and build custom, mobile-first websites for businesses in Edmonton, Calgary, Toronto, Vancouver and across Canada, with UX research, conversion-focused layouts, on-page SEO and fast Next.js or WordPress builds.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Web Design Services"
      buyerContent={<BuyerContent />}
    />
  );
}
