import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { MOBILE_PLATFORM_PRICING } from '@/data/pricing';
import { contactHrefFor } from '@/lib/enquiryContext';
import { services as servicesAllowlist } from '@/data/services';
import { cities as citiesAllowlist } from '@/data/cities';

const stats = [
  { value: '200+', label: 'iOS Apps Delivered' },
  { value: '4.8★', label: 'Avg App Store Rating' },
  { value: '50M+', label: 'Total Downloads' },
  { value: '12wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '🍎', title: 'Native Swift & SwiftUI', desc: 'We build fully native iOS applications using Swift and SwiftUI, ensuring peak performance, smooth animations, and seamless integration with Apple\'s latest APIs and frameworks.' },
  { icon: '📈', title: 'App Store Optimization', desc: 'From metadata and keyword strategy to screenshot design and review management, we maximize your app\'s visibility and conversion rate on the App Store.' },
  { icon: '🔔', title: 'Push Notifications & Analytics', desc: 'Implement rich push notifications, in-app messaging, and deep analytics with tools like Firebase, Mixpanel, and Apple\'s own analytics suite to drive engagement and retention.' },
  { icon: '💳', title: 'In-App Purchases & Subscriptions', desc: 'We implement StoreKit 2 for seamless in-app purchases, auto-renewable subscriptions, and consumable products with full receipt validation and server-side verification.' },
  { icon: '🎨', title: 'iOS UI/UX Design', desc: 'Our designers craft pixel-perfect interfaces that follow Apple\'s Human Interface Guidelines, creating intuitive and visually stunning experiences that users love.' },
  { icon: '⌚', title: 'Apple Platform Integration', desc: 'Extend your app to watchOS, tvOS, and visionOS. We build unified experiences across iPhone, iPad, Apple Watch, Apple TV, and Apple Vision Pro.' },
];

const steps = [
  { num: '01', title: 'Discovery & Spec', desc: 'We deep-dive into your product goals, target users, and technical requirements to define a clear specification, architecture plan, and project roadmap.' },
  { num: '02', title: 'Design & Prototype', desc: 'Our designers create high-fidelity Figma prototypes with interactive flows, ensuring the UX is validated before a single line of Swift is written.' },
  { num: '03', title: 'Swift Development', desc: 'Our engineers build your app using modern Swift and SwiftUI, with clean architecture (MVVM/TCA), thorough unit testing, and continuous integration via Xcode Cloud.' },
  { num: '04', title: 'App Store Launch', desc: 'We handle App Store Connect setup, TestFlight beta testing, App Review submission, and post-launch monitoring to ensure a successful and stable release.' },
];

const engagements = [
  {
    title: 'Build a new native iOS app',
    desc: 'For a product that needs the App Store from day one — a new iPhone and iPad app built in Swift and SwiftUI, from idea to launch.',
    inputs: ['Target users, launch journeys and must-have features', 'Designs or brand assets, if they exist', 'APIs, data sources and third-party services to integrate', 'Device needs such as camera, location, push, offline use or Apple Watch'],
    deliverables: ['Scoped release plan and Swift/SwiftUI architecture', 'Native iOS app with unit tests and CI via Xcode Cloud', 'TestFlight build with your team and users testing on real devices', 'App Store submission, review follow-up and launch'],
  },
  {
    title: 'Extend an existing Swift or Objective-C app',
    desc: 'For teams with a live iOS app that needs new features, performance work, a SwiftUI migration or extra engineering capacity.',
    inputs: ['Repository access and current build instructions', 'Crash, performance and App Store review history', 'Prioritised feature or bug list', 'Who owns releases and code review today'],
    deliverables: ['Code review with an honest risk summary, including Objective-C to Swift migration options', 'Features shipped through your existing release process', 'Performance and compatibility fixes measured on real devices', 'Updated documentation for anything we change'],
  },
  {
    title: 'Take an app to the App Store',
    desc: 'For a near-complete app that needs TestFlight acceptance, App Store readiness and a clean submission.',
    inputs: ['Current build and what is finished versus outstanding', 'App Store Connect account and your review criteria', 'Privacy, analytics and crash reporting setup', 'Launch date and marketing assets'],
    deliverables: ['TestFlight plan with acceptance criteria and a feedback loop', 'App Store metadata, screenshots and privacy nutrition label', 'Submission, review follow-up and approval', 'Launch-day monitoring and a post-launch plan'],
  },
];

const handover = [
  'Source code: repositories, branches and CI access transferred to accounts you own.',
  'Store account: App Store Connect owned by your organisation, with signing certificates and profiles documented.',
  'Dependencies: a list of every third-party SDK with versions and why each is needed.',
  'Release documentation: build, versioning and store submission steps a new developer can follow.',
  'Post-launch responsibilities: who handles iOS version updates, dependency upgrades, crash monitoring and store policy changes after launch.',
];

const decision = [
  { choice: 'Native iOS (Swift & SwiftUI)', fits: 'Performance is the product: graphics-heavy apps, real-time camera, AR, on-device ML, Apple Watch or Vision Pro, and a flawless feel on iPhone and iPad.', href: '/services/mobile-app-development/ios-app-development', label: 'our iOS app development service' },
  { choice: 'React Native', fits: 'One TypeScript codebase for both app stores with native modules where needed — the pragmatic default for most business apps.', href: '/services/mobile-app-development/react-native-apps', label: 'our React Native service' },
  { choice: 'Flutter', fits: 'One Dart codebase with pixel-perfect custom UI and consistent rendering across iOS and Android.', href: '/services/mobile-app-development/flutter-development', label: 'our Flutter service' },
];

const ios = MOBILE_PLATFORM_PRICING.ios;
const cad = (n: number) => `$${n.toLocaleString('en-CA')}`;
const contactHref = contactHrefFor('mobile-app-development', undefined, servicesAllowlist, citiesAllowlist);
const h3 = { fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' } as const;
const list = { paddingLeft: 22, margin: '0 0 12px' } as const;
const th = { textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line)', color: 'var(--muted)', fontWeight: 600 } as const;
const td = { padding: '10px 12px', borderBottom: '1px solid var(--line)' } as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>Hire an iOS development team for your app</h2>
        <p style={{ margin: '0 0 24px' }}>Pick the engagement that matches where your app is today. If you are still choosing between native and cross-platform, read our <Link href="/blog/native-vs-cross-platform-vs-pwa">native vs cross-platform vs PWA comparison</Link> first.</p>
        <div className="grid grid--3" style={{ marginBottom: 32 }}>
          {engagements.map(e => (
            <div key={e.title}>
              <h3 style={h3}>{e.title}</h3>
              <p>{e.desc}</p>
              <p style={{ margin: '0 0 4px', fontWeight: 600, color: 'var(--ink)' }}>What we need from you</p>
              <ul style={list}>{e.inputs.map(i => <li key={i}>{i}</li>)}</ul>
              <p style={{ margin: '0 0 4px', fontWeight: 600, color: 'var(--ink)' }}>What you receive</p>
              <ul style={list}>{e.deliverables.map(d => <li key={d}>{d}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="grid grid--2" style={{ marginBottom: 32 }}>
          <div>
            <h2 style={h3}>Native vs cross-platform — how to decide</h2>
            <p>Native iOS earns its cost when performance is the product. Our <Link href="/blog/native-vs-cross-platform-vs-pwa">comparison guide</Link> covers the full decision framework; the table below maps each approach to the work it fits.</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr>
                    <th scope="col" style={th}>Approach</th>
                    <th scope="col" style={th}>Choose it when</th>
                  </tr>
                </thead>
                <tbody>
                  {decision.map(d => (
                    <tr key={d.choice}>
                      <th scope="row" style={{ ...th, color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                        <Link href={d.href} style={{ color: 'var(--brand)' }}>{d.label}</Link>
                      </th>
                      <td style={td}>{d.fits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 style={h3}>Budget and timeline guidance</h2>
            <p>Our published planning range for a native iOS app is {cad(ios.low)}–{cad(ios.high)} CAD across a {ios.weeksLow}–{ios.weeksHigh} week planning window. That is a planning range for scoping conversations, not a quote: the window spans the full scope spread, with focused apps landing at the shorter end and apps with custom backends, real-time features or hardware integrations running longer. Your quote and timeline follow discovery, and the <Link href="/blog/app-development-cost-canada">Canadian app development cost guide</Link> explains what moves the number.</p>
          </div>
        </div>
        <h2 style={h3}>TestFlight acceptance before launch</h2>
        <p>Every app we ship goes through TestFlight before it reaches the App Store. We set up internal and external tester groups, define acceptance criteria with you, and run structured rounds: crash-free sessions, core journey walkthroughs, App Review guideline checks and a sign-off checklist. You approve the release build in TestFlight before we submit it, so there are no surprises at review time.</p>
        <div className="grid grid--2">
          <div>
            <h2 style={h3}>Source-code handover checklist</h2>
            <p>Every project ends with a handover you can run without us:</p>
            <ul style={list}>{handover.map(h => <li key={h}>{h}</li>)}</ul>
          </div>
          <div>
            <h2 style={h3}>Post-launch responsibilities</h2>
            <p>Launch is the start, not the end. After release we monitor crash reporting and App Store analytics, ship fixes for review feedback and keep the app compatible with each new iOS version. Ongoing work runs on a monthly retainer: OS compatibility updates, dependency upgrades, performance monitoring, store policy changes and feature enhancements. You can also hand the app to your own team at any time — the checklist above is built for that.</p>
            <p>Ready to scope your iOS app? <Link href={contactHref}>Talk to our mobile development team</Link> — we will come back with a scoped plan and a fixed estimate.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'Swift or Objective-C — which do you use?', a: 'We exclusively use Swift for all new iOS projects. Swift is Apple\'s modern, safe, and expressive language with significantly better performance and tooling than Objective-C. If you have an existing Objective-C codebase, we can incrementally migrate it to Swift.' },
  { q: 'What are the biggest App Store rejection risks?', a: 'Common rejection reasons include guideline violations around in-app purchases, privacy permissions without proper justifications, incomplete functionality, and misleading metadata. We review every submission against the latest App Store Review Guidelines before submitting, dramatically reducing rejection risk.' },
  { q: 'How long does it take to build an iOS app?', a: 'A typical iOS app with standard features takes 10–14 weeks from kickoff to App Store approval. Simple apps can be delivered in 6–8 weeks, while complex apps with custom backends, real-time features, or hardware integrations may take 16–24 weeks.' },
  { q: 'Should we use SwiftUI or UIKit?', a: 'For new projects targeting iOS 16+, we recommend SwiftUI for its declarative syntax, live previews, and rapid iteration. For apps requiring support for older iOS versions or complex custom UI, UIKit remains a strong choice. Many of our projects use both together.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. We offer flexible post-launch support packages covering bug fixes, iOS version compatibility updates, performance monitoring, and feature enhancements. Most clients engage us on a monthly retainer to keep their app healthy and evolving.' },
  { q: 'Who owns the app and the source code?', a: 'You do. From day one the code lives in repositories under your organisation, the App Store Connect account is owned by your company, and signing certificates and profiles are documented for your team. At handover you receive everything needed to build, release and maintain the app without us.' },
  { q: 'What do you need from me to quote an iOS app?', a: 'A description of the product and its users, the must-have features for launch, any existing designs or brand assets, the APIs and services the app must integrate with, and your target launch window. With that we can give you a scoped estimate; a discovery session refines it into a fixed-scope quote.' },
  { q: 'What does iOS app maintenance cover?', a: 'Our maintenance retainers cover new iOS version compatibility, dependency and SDK upgrades, crash monitoring and fixes, App Store policy changes, performance monitoring and small feature enhancements. Store presence work — metadata, screenshots and review management — is included so the app keeps converting after launch.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/mobile-app-development", label: "Mobile App Development" }}
      name="iOS App Development"
      copy={{ badge: "APPLE ECOSYSTEM", title: <>iOS Apps Built for the{' '} <span style={{ color: 'var(--brand)' }}>App Store Top Charts</span></>, desc: <>We craft high-performance native iOS applications using Swift and SwiftUI that users love and Apple approves. From concept to App Store launch, our team delivers polished, scalable apps across the entire Apple ecosystem.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Full-Spectrum iOS Development"
      buyerContent={<BuyerContent />}
    />
  );
}
