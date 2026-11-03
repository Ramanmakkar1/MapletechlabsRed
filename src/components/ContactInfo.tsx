import Link from 'next/link';

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
const COST_SUFFIX = ' break down real numbers, and our free cost estimator gives you a ballpark in two minutes.';

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
];

const COST_LINKS: Record<string, string> = {
  'website cost in Canada': '/blog/website-cost-canada',
  'app development cost in Canada': '/blog/app-development-cost-canada',
  'free cost estimator': '/tools/cost-estimator',
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
