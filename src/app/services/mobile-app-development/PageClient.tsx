import Link from 'next/link';
import ServicePageTemplate from '@/components/page/ServicePageTemplate';
import ServiceCityLinks from '@/components/page/ServiceCityLinks';
import { serviceCaseMap } from '@/data/service-case-map';
import { work } from '@/data/work';

const stats = [
  { value: '300+', label: 'Apps Shipped' },
  { value: '4.9★', label: 'App Store Avg' },
  { value: '8 Wks', label: 'MVP Timeline' },
  { value: '98%', label: 'Client Retention' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'iOS App Development',
    tag: 'Apple Ecosystem',
    desc: 'Native Swift & SwiftUI apps engineered for performance, precision, and seamless App Store delivery. From consumer apps to enterprise tooling.',
    chips: ['SwiftUI', 'CoreML', 'ARKit', 'HealthKit', 'CloudKit'],
  },
  {
    title: 'Android Development',
    tag: 'Google Ecosystem',
    desc: 'Kotlin-first Android apps built for the full device spectrum — phones, tablets, and foldables. Google Play optimised from day one.',
    chips: ['Jetpack Compose', 'ML Kit', 'Room DB', 'Firebase', 'Play Store'],
  },
  { title: 'React Native', tag: 'Cross-Platform', desc: 'One codebase, two stores — without sacrificing native feel or performance.' },
  { title: 'Flutter', tag: 'Cross-Platform', desc: 'Pixel-perfect UIs that run identically on iOS, Android, Web and Desktop.' },
  { title: 'Progressive Web Apps', tag: 'Web-Native', desc: 'Offline-first, installable app-like experiences that live in the browser.' },
  { title: 'Wearable & IoT', tag: 'Emerging Tech', desc: 'WatchOS, WearOS and connected device apps for every screen and sensor.' },
];

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep-dive into your business goals, user personas, and technical constraints. Output: a bulletproof project roadmap with fixed scope and milestones.',
    deliverables: ['Product Brief', 'User Personas', 'Technical Spec', 'Project Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'UX Design & Prototyping',
    desc: 'User journeys, wireframes, and high-fidelity interactive prototypes — validated with real users before a single line of code is written.',
    deliverables: ['Wireframes', 'Interactive Prototype', 'Design System', 'User Test Report'],
    duration: '2–3 weeks',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with daily standups, live staging builds, and full code reviews. You see real progress every single week.',
    deliverables: ['Sprint Demos', 'Staging Builds', 'Code Reviews', 'API Integration'],
    duration: '4–10 weeks',
  },
  {
    num: '04',
    title: 'QA & Performance',
    desc: 'Rigorous testing across 200+ real device/OS combinations. Load testing, security audits, and accessibility reviews before launch.',
    deliverables: ['Test Reports', 'Performance Audit', 'Security Review', 'Crash Analytics'],
    duration: '1–2 weeks',
  },
  {
    num: '05',
    title: 'Launch & Growth',
    desc: 'App Store submission, ASO optimisation, and phased rollout. Post-launch SLA support keeps your app performant as you scale.',
    deliverables: ['App Store Submission', 'ASO Package', 'Launch Analytics', 'SLA Support'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'iOS', chips: ['Swift', 'SwiftUI', 'CoreML', 'ARKit', 'XCTest', 'TestFlight'] },
  { label: 'Android', chips: ['Kotlin', 'Jetpack Compose', 'ML Kit', 'Room DB', 'Espresso'] },
  { label: 'Cross-Platform', chips: ['Flutter', 'React Native', 'Expo', 'Dart', 'TypeScript'] },
  { label: 'Backend & Cloud', chips: ['Firebase', 'AWS Amplify', 'Node.js', 'PostgreSQL', 'Redis'] },
];

const industries = [
  { icon: '💰', title: 'FinTech', desc: 'Trading apps, digital wallets, payment gateways and PFM tools.' },
  { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant telehealth, EHR integrations and wellness tracking.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'High-conversion mobile storefronts with native checkout flows.' },
  { icon: '🚚', title: 'Logistics', desc: 'Driver apps, real-time tracking and fleet management platforms.' },
  { icon: '📚', title: 'EdTech', desc: 'Adaptive learning, live tutoring and offline-capable course apps.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Internal tools, field service apps and secure MDM-ready builds.' },
];

const faqs = [
  { q: 'Should I launch on iOS, Android, or both?', a: 'If your audience skews heavily to one platform, start native for best performance. If you need both platforms with a tighter budget, Flutter or React Native delivers 90% of native quality at significantly lower cost. Discovery establishes the launch scope, roadmap and milestones.' },
  { q: 'What are the tradeoffs between React Native and native development?', a: 'Native iOS and Android provide direct access to operating-system capabilities but require separate codebases and release cycles. React Native uses a shared codebase for both stores, although specialised integrations can still require native modules and platform expertise.' },
  { q: 'Will you handle App Store and Google Play submission?', a: 'Absolutely. We manage the full submission process for both App Store and Google Play — including screenshots, descriptions, metadata, rating compliance and any review feedback.' },
  { q: 'Can you integrate the app with our backend and existing APIs?', a: 'Yes. API integration is part of Agile Development, and Discovery & Strategy produces a technical spec. We regularly audit and extend existing apps, conducting a code review during discovery and giving you an honest assessment before committing to a scope.' },
  { q: 'What maintenance does an app need after launch?', a: 'Crash analytics are set up during QA & Performance, and launch analytics in our Launch & Growth step. Every engagement includes a 30-day post-launch warranty. Beyond that, we offer flexible SLA retainers covering monitoring, bug fixes, OS updates and feature development.' },
  { q: 'What factors affect mobile app project pricing?', a: 'Platform choice, feature set and backend or API integrations affect scope. Simple MVPs typically start at $2,500 CAD. Consumer apps with full feature sets range $8,000–$25,000. Enterprise apps with complex integrations vary. You receive a fixed-price quote after our discovery call.' },
  { q: 'How long does it take to build a mobile app?', a: 'Most MVPs ship in 8–12 weeks from discovery kickoff. Full-featured consumer apps typically run 4–6 months. You receive a detailed milestone plan before development begins.' },
  { q: 'Do you sign NDAs?', a: 'Always — on Day 1, before any project discussion. Your idea and IP are protected from the very first conversation.' },
];

const appCaseStudies = serviceCaseMap['mobile-app-development'].flatMap(slug => {
  const item = work.find(project => project.slug === slug);
  return item ? [item] : [];
});

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="mobile-app-development"
      caseStudySlugs={serviceCaseMap['mobile-app-development']}
      name="Mobile App Development"
      copy={{ badge: "Mobile App Development", title: <>Mobile App Development<br />That Drives <span style={{ color: 'var(--brand)' }}>Real Revenue.</span></>, desc: <>A Canadian mobile app development company building iOS, Android and cross-platform apps — from MVP to millions of users, engineered for the app stores and loved by your customers.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
      faqs={faqs}
      servicesTitle="Every Platform. Every Screen."
      buyerContent={
        <>
        <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 24px' }}>Choose the right app platform</h2>
            <div className="grid grid--2" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
              <div>
                <h2 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>Choose native <Link href="/services/mobile-app-development/ios-app-development">iOS</Link> or <Link href="/services/mobile-app-development/android-app-development">Android</Link></h2>
                <p>Choose a native build when the product depends on deep device integrations such as Bluetooth, health sensors, background location or advanced camera features, or needs demanding graphics and real-time performance. Native apps offer direct access to operating-system capabilities and familiar platform conventions. The trade-off is maintaining separate iOS and Android codebases, release cycles and store submissions. Offline support can be tailored closely to device storage and sync needs.</p>
                <h2 style={{ fontSize: 'var(--fs-h4)', margin: '20px 0 8px', color: 'var(--ink)' }}>Choose <Link href="/services/mobile-app-development/react-native-apps">React Native</Link> or Flutter</h2>
                <p>A <Link href="/services/mobile-app-development/cross-platform-apps">shared codebase</Link> is a practical fit when you need both app stores and want one team to deliver features across platforms efficiently. React Native and Flutter support polished app experiences, but specialised integrations can still require native modules and platform expertise. Offline use is achievable, though data storage and sync must be designed deliberately. You still prepare and maintain store releases for both platforms.</p>
                <h2 style={{ fontSize: 'var(--fs-h4)', margin: '20px 0 8px', color: 'var(--ink)' }}>Choose a progressive web app</h2>
                <p>A PWA suits browser-first services where a shareable link and no store installation make access easier. It can cache key screens for limited offline use, but browser support for device integrations and background tasks varies. Distribution is simpler because updates go live on the web, while users may need to add the app to their home screen themselves. Our <Link href="/blog/app-development-cost-canada">Canadian app development cost guide</Link> explains how scope affects the budget. For a practical buying checklist, read our <Link href="/blog/mobile-app-development-company-canada">mobile app development company guide for Canada</Link>, then compare delivery approaches in our <Link href="#mobile-app-case-studies">mobile app case-study hub</Link>.</p>
              </div>
              <div>
                <h2 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 12px', color: 'var(--ink)' }}>Bring this consultation checklist</h2>
                <p>Bring what you know to discovery; a short list of assumptions is useful even if some answers are still open:</p>
                <ul style={{ paddingLeft: 22, margin: '0 0 16px' }}>
                  <li>Who the users are, what devices they use and what problem they need solved.</li>
                  <li>Essential journeys for launch, such as sign-up, booking or checkout.</li>
                  <li>Required integrations, APIs, data sources and third-party services.</li>
                  <li>Target platforms and any camera, location, notification or offline requirements.</li>
                  <li>Launch constraints, including timing, store review, budget and internal approvals.</li>
                </ul>
                <p>These details help identify dependencies and trade-offs before a quote. <Link href="/contact#contact-form">Discuss your app project with our team</Link> to plan the next step.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="mobile-app-case-studies" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
          <div className="cb-container">
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand)', margin: '0 0 12px' }}>Mobile app case studies</p>
            <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 16px' }}>Find the right fit for your app project</h2>
            <p style={{ maxWidth: 700, lineHeight: 1.7, color: 'var(--body)', margin: '0 0 28px' }}>
              See how our existing app-related work maps to different product needs, from a HIPAA-compliant telehealth platform to high-scale e-commerce and fintech products. Read the full case studies, then <Link href="/services/mobile-app-development">return to our mobile app development service</Link> to compare platforms and delivery options. Calgary businesses can also read our <Link href="/services/mobile-app-development/calgary">mobile app development company in Calgary</Link> page, Edmonton businesses can read our <Link href="/services/mobile-app-development/edmonton">mobile app development in Edmonton</Link> page, Vancouver businesses can read our <Link href="/services/mobile-app-development/vancouver">mobile app development company in Vancouver</Link> page, and Toronto businesses can read our <Link href="/services/mobile-app-development/toronto">mobile app development company in Toronto</Link> page.
            </p>
            <div className="grid grid--3">
              {appCaseStudies.map(project => (
                <article key={project.slug} className="tile">
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand)', margin: '0 0 8px' }}>{project.category}</p>
                  <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>
                    <Link href={project.href} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{project.title}</Link>
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--faint)', margin: '0 0 12px' }}>{project.client} · {project.city}</p>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{project.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact#contact-form" className="btn btn--primary" style={{ textDecoration: 'none' }}>
                Discuss your app project →
              </Link>
            </div>
          </div>
        </section>
        <ServiceCityLinks
          id="mobile-app-cities"
          heading="App development in Edmonton, Calgary, Toronto and Vancouver"
          intro="Mapletech Labs is based in Edmonton and builds iOS, Android and cross-platform apps for businesses across Canada. See local pricing, process and FAQs for your city:"
          links={[
            { href: '/locations/app-development-company-in-edmonton', label: 'App development company in Edmonton', note: 'our home city, with in-person discovery workshops available' },
            { href: '/locations/app-development-company-in-calgary', label: 'App development company in Calgary', note: 'local app projects supported remotely or on site' },
            { href: '/locations/app-development-company-in-toronto', label: 'App development company in Toronto', note: 'app development for Toronto businesses, delivered remotely or on site' },
            { href: '/locations/app-development-company-in-vancouver', label: 'App development company in Vancouver', note: 'app development for Vancouver businesses, delivered remotely or on site' },
          ]}
        />
        </>
      }
    />
  );
}
