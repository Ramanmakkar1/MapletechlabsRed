import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema, FaqSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const PATH = '/services/software-development/dedicated-development-team';
const TITLE = 'Dedicated Development Team Canada';
const DESCRIPTION = seoDescription(
  'Hire a dedicated development team in Canada for ongoing product work: a consistent crew, month-to-month capacity, CAD pricing and a clear handover plan.'
);
const URL = canonicalUrl(PATH);

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: `${TITLE} | Mapletech Labs`,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  alternates: {
    canonical: URL,
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'Services', item: canonicalUrl('/services') },
          { position: 3, name: 'Software Development', item: canonicalUrl('/services/software-development') },
          { position: 4, name: 'Dedicated Development Team', item: URL },
        ]}
      />
      <ServiceSchema
        name={TITLE}
        description={seoDescription(DESCRIPTION)}
        url={URL}
        serviceType="Dedicated development team"
      />
      <FaqSchema
        faqs={[
          { q: 'What is a dedicated development team?', a: 'A dedicated development team is a consistent group of engineers, designers and a delivery lead reserved for your product, engaged month to month against an agreed capacity. Instead of a one-off project, you get a standing team that keeps building, fixing and improving your software as priorities evolve.' },
          { q: 'When is a dedicated team a better fit than a fixed-scope project?', a: 'A dedicated team fits when you have ongoing product work: a product that changes often, a backlog that keeps growing, or a business that depends on the software every day. A fixed-scope project fits a defined set of deliverables with a clear end. If you are not sure which shape fits, start with a discovery phase and we will recommend the engagement that matches your workload.' },
          { q: 'Which roles are on a dedicated team?', a: 'The mix is agreed for your product during scoping. Typical roles include a delivery lead who owns the plan and communication, front-end and back-end engineers, a UI/UX designer when the product needs design work, a QA engineer for test coverage, and a DevOps engineer for hosting, CI/CD and releases. You see the named people on the team in the written plan.' },
          { q: 'How is a dedicated team priced in Canada?', a: 'The team is engaged month to month against an agreed capacity, quoted in Canadian dollars. The written plan names the monthly capacity, the roles included, the work covered and what is billed separately, so the price follows the agreed scope. Larger changes can be quoted as their own project. See our pricing page for typical CAD ranges and engagement models.' },
          { q: 'Who owns the code and intellectual property?', a: 'Ownership of the delivered code and project materials, source-code access and handover are agreed in writing in your engagement terms before work starts. Third-party licences, vendor APIs and components that carry their own terms are documented so you know what you control at the end of the engagement.' },
          { q: 'How does communication work with a dedicated team?', a: 'Communication cadence is agreed in the engagement: a named delivery lead, a regular planning and delivery rhythm, and a channel you choose for updates and decisions. The cadence and escalation path are part of the written plan, so you always know who to reach and what to expect from each cycle.' },
          { q: 'What happens at the end of the engagement?', a: 'Handover is planned from the start and agreed in the engagement terms. It covers documentation, source-code access, credentials and deployment notes, so your in-house team can take over the product. After handover you can maintain it in-house or continue with our software maintenance service for security updates, monitoring and planned improvements.' },
        ]}
      />
      <PageClient />
    </>
  );
}
