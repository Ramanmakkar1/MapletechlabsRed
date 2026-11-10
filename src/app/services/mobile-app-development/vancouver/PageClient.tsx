import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/page/PageHero';
import { ProcessSteps, ServicesGrid } from '@/components/page/Blocks';
import FaqSplit from '@/components/home/FaqSplit';
import FinalCta from '@/components/home/FinalCta';
import { officeMedia } from '@/data/media';
import { work } from '@/data/work';
import type { Faq, ServiceCard, Stat, Step } from '@/components/page/types';

const stats: Stat[] = [
  { value: '300+', label: 'Apps Shipped' },
  { value: '8 Wks', label: 'MVP Timeline' },
  { value: '98%', label: 'Client Retention' },
];

const platforms: ServiceCard[] = [
  {
    title: 'Native iOS',
    tag: 'Apple ecosystem',
    desc: 'Swift and SwiftUI apps for iPhone, iPad and Apple Watch, built for App Store review and smooth performance.',
    chips: ['Swift', 'SwiftUI', 'HealthKit', 'CloudKit'],
  },
  {
    title: 'Native Android',
    tag: 'Google ecosystem',
    desc: 'Kotlin-first Android apps for phones, tablets and foldables, tested across the device spectrum and prepared for Google Play.',
    chips: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase'],
  },
  {
    title: 'React Native',
    tag: 'Cross-platform',
    desc: 'One TypeScript codebase for both app stores, with native modules where an integration needs them.',
    chips: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'Flutter',
    tag: 'Cross-platform',
    desc: 'One Dart codebase with consistent, custom UI across iOS, Android, web and desktop.',
    chips: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    title: 'Progressive web apps',
    tag: 'Web-native',
    desc: 'Installable, offline-capable experiences delivered from the browser without an app-store install.',
  },
  {
    title: 'Wearable and IoT apps',
    tag: 'Emerging tech',
    desc: 'watchOS, Wear OS and connected-device apps for screens and sensors beyond the phone.',
  },
];

const steps: Step[] = [
  {
    num: '01',
    title: 'Discovery and strategy',
    desc: 'We define your users, business goals, features for launch and technical constraints, then agree a fixed scope and milestones.',
  },
  {
    num: '02',
    title: 'UX design and prototyping',
    desc: 'User journeys, wireframes and an interactive prototype are validated before development starts.',
  },
  {
    num: '03',
    title: 'Agile development',
    desc: 'Two-week sprints with staging builds, code reviews and API integration, so you see working software each week.',
  },
  {
    num: '04',
    title: 'QA and performance',
    desc: 'Testing across real devices and OS versions, plus load, security and accessibility checks before launch.',
  },
  {
    num: '05',
    title: 'Launch and growth',
    desc: 'App Store and Google Play submission, launch analytics and post-launch support as your user base grows.',
  },
];

const caseSlugs = ['healthcare-telehealth', 'fintech-trading-platform', 'ecommerce-platform'];
const caseStudies = caseSlugs
  .map(slug => work.find(project => project.slug === slug))
  .filter((project): project is (typeof work)[number] => Boolean(project));

const h2 = { fontSize: 'var(--fs-h3)', margin: '0 0 16px' } as const;
const body = { maxWidth: 760, lineHeight: 1.7, color: 'var(--body)', margin: '0 0 24px' } as const;

export default function PageClient({ faqs, contactHref }: { faqs: Faq[]; contactHref: string }) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Mobile App Development', href: '/services/mobile-app-development' },
            { label: 'Vancouver' },
          ]}
          copy={{
            badge: 'Mobile app development in Vancouver',
            title: (
              <>
                Mobile App Development Company in <span style={{ color: 'var(--brand)' }}>Vancouver</span>
              </>
            ),
            desc: (
              <>
                Mapletech Labs develops mobile apps for Vancouver businesses, building native iOS and Android and
                cross-platform apps from discovery through App Store and Google Play launch. We serve Vancouver from our
                Edmonton headquarters, one hour ahead, with fixed-scope quotes and one team from design to release. We
                do not have a Vancouver office; we work remotely with BC clients and can meet in person by arrangement.
              </>
            ),
          }}
          stats={stats}
          photo={officeMedia.desk}
          serviceName="Mobile App Development"
          city="Vancouver"
          contactHref={contactHref}
        />

        <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <h2 style={h2}>App types and platforms we build</h2>
            <p style={body}>
              The platform choice follows the product, not the other way around. We build native apps when a product
              depends on deep device access, and cross-platform apps when both stores and a tighter budget matter more.
              Read the full{' '}
              <Link href="/services/mobile-app-development">mobile app development service</Link> for capabilities
              across every platform.
            </p>
            <ServicesGrid title="Platforms and app types" items={platforms} />
          </div>
        </section>

        <ProcessSteps title="From discovery to launch" steps={steps} />

        <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <h2 style={h2}>How scope affects cost</h2>
            <p style={body}>
              Cost follows scope. A simple MVP typically starts at $2,500 CAD, consumer apps with full feature sets range
              from $8,000 to $25,000, and enterprise apps with complex integrations are quoted after discovery. Platform
              count, custom backend work, API integrations and store-readiness tasks are the biggest cost drivers.
            </p>
            <p style={body}>
              We quote a fixed price after a discovery call, so the number covers an agreed scope rather than an open
              hourly estimate. See <Link href="/pricing">our pricing page</Link> for how fixed-scope quotes and typical
              project sizes work.
            </p>
          </div>
        </section>

        <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <h2 style={h2}>Mobile app case studies</h2>
            <p style={body}>
              These existing projects show the range of apps we have shipped. Read each case study for the build,
              metrics and outcome.
            </p>
            <div className="grid grid--3">
              {caseStudies.map(project => (
                <article key={project.slug} className="tile">
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand)', margin: '0 0 8px' }}>
                    {project.category}
                  </p>
                  <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>
                    <Link href={project.href} style={{ color: 'var(--ink)', textDecoration: 'none' }}>
                      {project.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--faint)', margin: '0 0 12px' }}>
                    {project.client} in {project.city}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{project.desc}</p>
                </article>
              ))}
            </div>
            <p style={{ ...body, marginTop: 28 }}>
              Working with a Vancouver software team? See our{' '}
              <Link href="/locations/software-development-company-in-vancouver">
                software development company in Vancouver
              </Link>{' '}
              page for the wider engineering service, or{' '}
              <Link href={contactHref}>talk to us about your app project</Link>.
            </p>
            <p style={{ ...body, marginTop: 12 }}>
              Comparing local teams? Our{' '}
              <Link href="/locations/app-development-company-in-vancouver">
                app development company in Vancouver
              </Link>{' '}
              page covers local pricing guidance, sectors we serve and Vancouver FAQs.
            </p>
          </div>
        </section>

        <FaqSplit faqs={faqs} title="Vancouver mobile app FAQs" />
        <FinalCta contactHref={contactHref} />
      </main>
      <Footer />
    </>
  );
}
