import type { ReactNode } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ServiceCityLinks from '@/components/ServiceCityLinks';
import ServiceProof from '@/components/ServiceProof';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import { defaultFaqs } from '@/data/faqs';
import { FaqSchema } from '@/components/ServiceSchema';
import InsightsSection from '@/components/InsightsSection';
import PageHero from './PageHero';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, ServicesGrid, ProcessSteps, TechBlocks, IndustryRow, WhyUs, SuccessStories, Voices, ResultsBand } from './Blocks';
import ServicePricing from './ServicePricing';
import { serviceMedia, defaultMedia, officeMedia } from '@/data/media';
import { work, type WorkItem } from '@/data/work';
import { serviceCategories } from '@/data/nav';
import { services as servicesAllowlist } from '@/data/services';
import { cities as citiesAllowlist } from '@/data/cities';
import { contactHrefFor, SERVICE_PROJECT_TYPE } from '@/lib/enquiryContext';
import type { Faq, HeroCopy, IndustryCard, ServiceCard, Stat, Step, TechCategory } from './types';

const heroShots = [officeMedia.open, officeMedia.desk, officeMedia.meeting];

/* Service-specific fit and preparation notes for the first conversation. */
const PROJECT_FIT: Record<string, { fit: string; prepare: string[] }> = {
  'mobile-app-development': {
    fit: 'A good fit if you need a native or cross-platform app for iOS and Android, an MVP to put in front of real users, or a rebuild of an app that has outgrown its current codebase.',
    prepare: ['The main user journey and the problem the app solves', 'Which platforms you need first: iOS, Android or both', 'Any existing designs, APIs or backend systems', 'Your target launch window and budget range'],
  },
  'web-development': {
    fit: 'A good fit if you need a marketing site, e-commerce store, web application or internal portal that is easy to update and built to grow with your business.',
    prepare: ['The pages or workflows the site must support', 'Any existing brand assets, content or CMS', 'The integrations you need, such as payments, CRM or analytics', 'Your launch date and budget range'],
  },
  'ai-ml': {
    fit: 'A good fit if you have a repetitive workflow, a document-heavy process or a product idea that could use AI, and you want a production-ready solution rather than a demo.',
    prepare: ['The workflow or decision you want to improve', 'What data you already have and where it lives', 'Any privacy, security or compliance requirements', 'Your timeline and budget range'],
  },
  'product-design': {
    fit: 'A good fit if you need user research, UI/UX design, a design system or a clearer product experience before or alongside development.',
    prepare: ['The product or feature you want to design', 'Who your users are and what they struggle with', 'Any existing research, analytics or brand guidelines', 'Your timeline and budget range'],
  },
  'blockchain-web3': {
    fit: 'A good fit if you need smart contracts, a dApp, an NFT or DeFi platform, or a clear assessment of whether blockchain is the right tool for your idea.',
    prepare: ['The problem you want blockchain to solve', 'Which chain or ecosystem you are considering, if any', 'Any token, wallet or compliance requirements', 'Your timeline and budget range'],
  },
  'cloud-devops': {
    fit: 'A good fit if you need to migrate to the cloud, stabilise infrastructure, automate deployments or bring cloud costs and reliability under control.',
    prepare: ['Your current hosting, cloud provider and architecture', 'The main reliability, cost or deployment problems', 'Any security, compliance or uptime requirements', 'Your timeline and budget range'],
  },
  'ar-vr': {
    fit: 'A good fit if you need an augmented, virtual or mixed reality experience for training, sales, field work or a customer-facing product.',
    prepare: ['The experience you want to build and who will use it', 'The devices or headsets your audience has', 'Any 3D assets, content or existing systems to connect', 'Your timeline and budget range'],
  },
  'digital-marketing': {
    fit: 'A good fit if you need SEO, local search, content, paid media or analytics support that is tied to leads and revenue rather than vanity metrics.',
    prepare: ['Your website, target markets and main competitors', 'The services or products you want more enquiries for', 'Any analytics, Search Console or ad account access', 'Your timeline and budget range'],
  },
  'wordpress-cms': {
    fit: 'A good fit if you need a WordPress site, a headless CMS, a WooCommerce store or a rebuild of an existing WordPress site.',
    prepare: ['The pages, content types and templates you need', 'Any existing WordPress site, plugins or theme', 'The integrations you need, such as payments or CRM', 'Your timeline and budget range'],
  },
  'game-development': {
    fit: 'A good fit if you need a game prototype, a mobile or PC title, a serious game for training, or Unity or Unreal development support.',
    prepare: ['The game concept, genre and target platforms', 'Any existing art, design or technical assets', 'The scope of the first playable build', 'Your timeline and budget range'],
  },
  branding: {
    fit: 'A good fit if you need a brand strategy, logo, visual identity or brand guidelines that give your company a consistent, recognisable presence.',
    prepare: ['What your company does and who it serves', 'Any existing logo, colours or brand materials', 'Where the brand will appear, online and offline', 'Your timeline and budget range'],
  },
  'saas-development': {
    fit: 'A good fit if you need a SaaS MVP, a multi-tenant platform, subscription billing, authentication or a rebuild of an existing SaaS product.',
    prepare: ['The core workflow your users will pay for', 'Any existing product, designs or codebase', 'The integrations you need, such as billing or SSO', 'Your timeline and budget range'],
  },
};

/* Service-category page, following the reference's service-page sequence. */
export default function ServicePageTemplate({ slug, name, copy, stats, services, steps, techCategories, industries, results, faqs, buyerContent, servicesTitle = 'Every Layer. Every Complexity.', caseStudySlugs }: {
  slug: string; name: string; copy: HeroCopy; stats: Stat[]; services: ServiceCard[]; steps: Step[]; techCategories?: TechCategory[]; industries?: IndustryCard[]; results?: { value: string; label: string; sub?: string }[]; faqs?: Faq[]; buyerContent?: ReactNode; servicesTitle?: string; caseStudySlugs?: string[];
}) {
  const contactHref = contactHrefFor(slug, undefined, servicesAllowlist, citiesAllowlist);
  const hero = heroShots[slug.length % heroShots.length];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: name }]} copy={copy} stats={stats} photo={hero} serviceName={name} contactHref={contactHref} />
        <StatRow stats={stats} />
        <ServicesGrid title={servicesTitle} sub={`Everything ${name} needs, engineered by one accountable team.`} items={services} />
        <SubServiceLinks slug={slug} name={name} />
        <ServiceProof slug={slug} name={name} contactHref={contactHref} />
        {buyerContent}
        <ServiceCityLinks serviceSlug={slug} serviceName={name} />
        <MediaBand media={serviceMedia[slug] ?? defaultMedia} />
        <ProcessSteps title={`How we deliver your ${name} project`} steps={steps} />
        <DiscoveryScoping slug={slug} name={name} contactHref={contactHref} />
        <ProjectFit slug={slug} name={name} contactHref={contactHref} />
        <ServicePricing serviceSlug={slug} serviceName={name} />
        <SuccessStories />
        {results?.length ? <ResultsBand items={results} /> : null}
        {caseStudySlugs?.length ? <ClientWork slugs={caseStudySlugs} /> : null}
        <WhyUs />
        {techCategories?.length ? <TechBlocks cats={techCategories} /> : null}
        {industries?.length ? <IndustryRow title={`${name} across every sector`} items={industries} /> : null}
        <Voices />
        <Credentials />
        <InsightsSection serviceSlug={slug} />
        <FaqSplit faqs={faqs} />
        <FaqSchema faqs={faqs ?? defaultFaqs} />
        <FinalCta contactHref={contactHref} />
      </main>
      <Footer />
    </>
  );
}

/* Discovery and fixed-price scoping. Reuses the process already described on
   /contact and /pricing; it does not repeat price ranges or FAQ answers. */
function DiscoveryScoping({ slug, name, contactHref }: { slug: string; name: string; contactHref: string }) {
  const projectType = SERVICE_PROJECT_TYPE[slug];
  const items = [
    {
      title: 'Free 30-minute discovery call',
      body: 'A senior engineer talks through your goals, the users you are serving, technical or budget constraints and your timeline, then says honestly whether custom software, an off-the-shelf tool or a smaller first release fits best.',
    },
    {
      title: 'Written scope and fixed price',
      body: 'Within a few days, usually no more than a week, you get a fixed-price or phased proposal: scope, deliverables, milestones, a schedule and a breakdown of where every dollar goes.',
    },
    {
      title: 'A clear answer on project fit',
      body: 'If we are not the right team for the job, we will say so on the call. Your idea stays under NDA from the first conversation, and the proposal is signed before any further details are exchanged.',
    },
  ];
  return (
    <section style={{ padding: 'var(--section-y-sm) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>
          Discovery, scope and a fixed price before we build
        </h2>
        <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 760 }}>
          Every {name} project starts with a free 30-minute discovery call. We use it to understand your users, technical constraints, timeline and budget, then agree a written scope and a fixed price in CAD before any code is written.
        </p>
        <div className="grid grid--3">
          {items.map(item => (
            <article key={item.title} className="tile" style={{ padding: 'clamp(18px, 3vw, 22px)', minWidth: 0 }}>
              <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>{item.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
            </article>
          ))}
        </div>
        <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, margin: '22px 0 0' }}>
          <Link href={contactHref} style={{ color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}>
            Start a {name} enquiry
          </Link>
          {projectType ? ` — the form opens with ${projectType} selected, so the right team picks it up.` : '.'}
        </p>
      </div>
    </section>
  );
}

/* Project fit and first-conversation preparation. The CTA carries the same
   validated service context as the discovery section above. */
function ProjectFit({ slug, name, contactHref }: { slug: string; name: string; contactHref: string }) {
  const fit = PROJECT_FIT[slug];
  if (!fit) return null;
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 12px' }}>
          When {name} is the right fit
        </h2>
        <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 760 }}>
          {fit.fit}
        </p>
        <h3 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 12px', color: 'var(--ink)' }}>
          What to prepare for the first conversation
        </h3>
        <ul style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 24px', paddingLeft: 22, maxWidth: 760 }}>
          {fit.prepare.map(item => <li key={item} style={{ marginBottom: 6 }}>{item}</li>)}
        </ul>
        <Link href={contactHref} className="btn btn--primary">
          Talk to us about {name}
        </Link>
      </div>
    </section>
  );
}

/* "Client work" — links the service page to the case studies that prove it.
   Copy comes straight from src/data/work.ts; nothing is reworded here. */
function ClientWork({ slugs }: { slugs: string[] }) {
  const items = slugs
    .map(s => work.find(w => w.slug === s))
    .filter((w): w is WorkItem => Boolean(w));
  if (!items.length) return null;
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 18 }}>Client work</h2>
        <div className="grid grid--3">
          {items.map(w => (
            <div key={w.slug} className="tile">
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand)', margin: '0 0 8px' }}>{w.category}</p>
              <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>
                <Link href={w.href} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{w.title}</Link>
              </h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', margin: 0 }}>{w.client} &middot; {w.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Each category page links its own sub-service pages. They used to hang off
   the mega menu alone, which left them one removed nav away from orphaned. */
function SubServiceLinks({ slug, name }: { slug: string; name: string }) {
  const cat = serviceCategories.find(c => c.href === `/services/${slug}`);
  if (!cat?.links.length) return null;
  return (
    <section style={{ padding: 'var(--section-y-sm) 0' }}>
      <div className="cb-container">
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 18 }}>Explore {name} in detail</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {cat.links.map(l => (
            <Link key={l.href} href={l.href} className="pill" style={{ height: 'auto', minHeight: 44, maxWidth: '100%', boxSizing: 'border-box', padding: '10px 20px', whiteSpace: 'normal', overflowWrap: 'anywhere', fontSize: 14 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
