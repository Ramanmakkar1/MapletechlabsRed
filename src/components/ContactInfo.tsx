import Link from 'next/link';
import { BUSINESS, HQ_ADDRESS } from '@/lib/seo/business';
import { serviceCityPath } from '@/data/serviceCity';

const CITIES = [
  { slug: 'edmonton', name: 'Edmonton' },
  { slug: 'calgary', name: 'Calgary' },
  { slug: 'toronto', name: 'Toronto' },
  { slug: 'vancouver', name: 'Vancouver' },
  { slug: 'ottawa', name: 'Ottawa' },
  { slug: 'montreal', name: 'Montreal' },
];

const LOCATION_PAGES = [
  { name: 'Edmonton', href: '/locations/software-development-company-in-edmonton' },
  { name: 'Calgary', href: '/locations/software-development-company-in-calgary' },
  { name: 'Toronto', href: '/locations/software-development-company-in-toronto' },
  { name: 'Vancouver', href: '/locations/software-development-company-in-vancouver' },
  { name: 'Ottawa', href: '/locations/software-development-company-in-ottawa' },
  { name: 'Montreal', href: '/locations/software-development-company-in-montreal' },
];

const CITY_SERVICES = [
  { serviceSlug: 'ai-ml', label: 'AI development' },
  { serviceSlug: 'mobile-app-development', label: 'App development' },
  { serviceSlug: 'web-development', label: 'Web development' },
  { serviceSlug: 'saas-development', label: 'SaaS development' },
  { serviceSlug: 'product-design', label: 'UI/UX design' },
  { serviceSlug: 'digital-marketing', label: 'SEO' },
];

const STEPS = [
  {
    title: 'We reply within one working day',
    body: 'A senior engineer — not a salesperson — reads your brief and replies with honest first thoughts, relevant experience, and the questions that actually matter for a build like yours.',
  },
  {
    title: 'Free 30-minute discovery call',
    body: 'We talk through your goals, the users you are serving, technical or budget constraints, and your timeline. You leave with a clearer picture of the scope, whether or not we work together.',
  },
  {
    title: 'Written scope and estimate',
    body: 'Within a few days you get a fixed-price or phased proposal: deliverables, milestones, a schedule, and a breakdown of where every dollar goes. Signed under NDA before any details are exchanged.',
  },
  {
    title: 'Kick-off',
    body: 'Once you accept, the team is assigned, repositories and environments are set up, and we plan the first sprint together so you see working software early and often.',
  },
];

const COST_PREFIX = 'Most engagements start with a short discovery phase, so we scope before we quote instead of guessing. As a rough guide, marketing websites typically land in the tens of thousands, while native apps run higher. Our guides on ';
const COST_SUFFIX = ' break down real numbers, our pricing page lists typical ranges in CAD, and our free cost estimator gives you a ballpark in two minutes.';

export const CONTACT_FAQS = [
  {
    question: 'How much does a project cost?',
    answer: `${COST_PREFIX}website cost in Canada and app development cost in Canada${COST_SUFFIX}`,
  },
  {
    question: 'Do you sign an NDA?',
    answer: 'Yes, and before any details are shared. We are happy to sign your mutual non-disclosure agreement, or provide our own standard one that you are welcome to have reviewed. Confidentiality covers your idea, your data, and anything you tell us about your roadmap and competitors.',
  },
  {
    question: 'Do you work with clients outside Edmonton?',
    answer: 'Absolutely. Edmonton is home base, but most of our clients sit elsewhere in Canada and we collaborate remotely as standard. We work across time zones with shared boards, weekly demos, and a named engineer you can reach directly rather than a ticket queue.',
  },
  {
    question: 'Who owns the code?',
    answer: 'You do. On final payment you own all intellectual property: source code, design files, documentation, and anything we built for you. We hand over the repositories and infrastructure access, so you can take the project to another team at any point without lock-in.',
  },
  {
    question: 'Can you work with an existing codebase?',
    answer: 'Often, yes. We start with a short technical review: architecture, test coverage, deployment, and where the product hurts today. From there we can take over maintenance, ship the next release, or refactor toward something your team can own long term.',
  },
  {
    question: 'Do you work with startups using SR&ED or IRAP?',
    answer: 'Yes. We document eligible R&D activity, keep time and deliverables audit-friendly, and align milestones with funding cycles where that helps your cash flow. Tell us about your grant or advisor on the form and we will factor it into the proposal.',
  },
];

const COST_LINKS: Record<string, string> = {
  'website cost in Canada': '/blog/website-cost-canada',
  'app development cost in Canada': '/blog/app-development-cost-canada',
  'free cost estimator': '/tools/cost-estimator',
  'pricing page': '/pricing',
};

const link: React.CSSProperties = { color: 'var(--brand)', textDecoration: 'none', fontWeight: 500 };

const HELP_AREAS = [
  {
    title: 'Custom software',
    body: 'When off-the-shelf tools do not fit the way your team works, we can shape a purpose-built application around the process. We help clarify the requirements, choose a practical technical approach, and build software that can adapt as your needs change.',
    href: '/services/saas-development',
    label: 'Explore custom software development',
  },
  {
    title: 'Web development',
    body: 'We build websites and web applications that make it easier for people to understand your offer and get things done. That can include a new public-facing site, a customer portal, or a more involved product, with attention to performance and maintainability.',
    href: '/services/web-development',
    label: 'Explore web development',
  },
  {
    title: 'Mobile apps',
    body: 'If your idea belongs in people’s hands, we can help plan and build a mobile app for the platforms that make sense. We work through the key user journeys, connect the app to the systems it needs, and make room for future improvements.',
    href: '/services/mobile-app-development',
    label: 'Explore mobile app development',
  },
  {
    title: 'AI & automation',
    body: 'We help teams assess where machine learning or automation could reduce repetitive work or support a better product experience. The work starts with the actual problem and available data, then moves into a suitable integration with sensible human oversight.',
    href: '/services/ai-ml',
    label: 'Explore AI and machine learning',
  },
  {
    title: 'UI/UX design',
    body: 'If an existing product feels confusing or dated, tell us where users get stuck. We can audit the current experience, map priority user journeys, explore prototypes, and prepare design handoff your engineering team can implement without guesswork.',
    href: '/services/product-design',
    label: 'Explore UI/UX and product design services',
  },
  {
    title: 'SEO & digital marketing',
    body: 'For SEO enquiries, share your website URL, the services and cities you want to be found for, and your current search goals. That helps us see whether you need technical fixes, content planning, or local visibility before we suggest sensible next steps.',
    href: '/services/digital-marketing/seo-services',
    label: 'Explore SEO services and digital marketing',
  },
];

function Answer({ text }: { text: string }) {
  const pattern = new RegExp(`(${Object.keys(COST_LINKS).join('|')})`);
  return (
    <>
      {text.split(pattern).map((part, i) =>
        COST_LINKS[part] ? <Link key={i} href={COST_LINKS[part]} style={link}>{part}</Link> : part,
      )}
    </>
  );
}

export default function ContactInfo() {
  return (
    <section style={{ padding: '0 0 var(--section-y)', background: 'var(--surface)' }}>
      <div className="cb-container">
        <div style={{ maxWidth: 760 }}>
          <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>
            What happens after you reach out
          </h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 28px' }}>
            No black box, and no chasing us for updates. Here is exactly how an enquiry becomes a project.
          </p>
          <ol style={{ margin: '0 0 64px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 22 }}>
            {STEPS.map(step => (
              <li key={step.title} style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{step.title}</strong>
                {' — '}
                {step.body}
              </li>
            ))}
          </ol>

          <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>
            What we can help with
          </h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 28px' }}>
            From a first idea to a system your team already relies on, we can help plan and build software around the work you need done.
            Not sure what to write?{' '}
            <Link href="/tools/project-brief" style={link}>Build a brief first</Link> with our free project brief builder.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 64px', display: 'grid', gap: 22 }}>
            {HELP_AREAS.map(area => (
              <li key={area.title}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{area.title}</strong>
                <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '6px 0 0' }}>{area.body}</p>
                <Link href={area.href} style={link}>{area.label} →</Link>
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>
            Our office and the cities we serve
          </h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 28px' }}>
            {BUSINESS.name} is based in {HQ_ADDRESS.addressLocality}, {HQ_ADDRESS.addressRegion} ({HQ_ADDRESS.postalCode}), and works with clients across Canada.
            {' '}Call us at <a href={'tel:' + BUSINESS.telephone} style={link}>{BUSINESS.telephone}</a> or email{' '}
            <a href={'mailto:' + BUSINESS.email} style={link}>{BUSINESS.email}</a>.
            {' '}Our team has dedicated engineers in Edmonton, Calgary, Toronto and Vancouver, so there is always someone in your time zone.
            {' '}Most projects run remotely with weekly demos, and we meet in person in Edmonton and Calgary when it helps.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gap: 22 }}>
            {CITIES.map(city => (
              <li key={city.slug} style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{city.name}</strong>
                <br />
                {CITY_SERVICES.map((s, i) => (
                  <span key={s.serviceSlug}>
                    {i > 0 && ' · '}
                    <Link href={serviceCityPath(s.serviceSlug, city.slug)} style={link}>{s.label} in {city.name}</Link>
                  </span>
                ))}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 64px' }}>
            Software development company in{' '}
            {LOCATION_PAGES.map((loc, i) => (
              <span key={loc.href}>
                {i > 0 && ' · '}
                <Link href={loc.href} style={link}>{loc.name}</Link>
              </span>
            ))}
          </p>

          <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 14px' }}>
            Common questions
          </h2>
          <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 32px' }}>
            The things people ask us before they hit send. If yours is not here, just put it in the message above.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {CONTACT_FAQS.map(faq => (
              <div key={faq.question} style={{ borderTop: '1px solid var(--line)', paddingTop: 26 }}>
                <h3 style={{ fontSize: 19, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.35, margin: '0 0 10px' }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
                  <Answer text={faq.answer} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
