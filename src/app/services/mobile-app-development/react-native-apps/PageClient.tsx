import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { MOBILE_PLATFORM_PRICING } from '@/data/pricing';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '80+', label: 'React Native Apps Shipped' },
  { value: '70%', label: 'Code Shared iOS/Android' },
  { value: 'JS', label: 'Expertise Leverage' },
  { value: '9wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '⚛️', title: 'React Native Core', desc: 'We build performant React Native apps using the New Architecture (Fabric renderer + JSI) for improved performance, lower bridge overhead, and better support for concurrent React features.' },
  { icon: '📱', title: 'Expo & Bare Workflow', desc: 'We choose the right workflow for your project: Expo Managed for fast iteration and easy OTA updates, or Bare Workflow for full native control. We can also help you eject from Expo when you outgrow it.' },
  { icon: '🔧', title: 'Native Modules', desc: 'When an existing library doesn\'t cut it, we write custom Native Modules in Swift and Kotlin that expose platform-specific APIs — Bluetooth, NFC, biometrics, hardware sensors — directly to your JS layer.' },
  { icon: '🔄', title: 'OTA Updates with CodePush', desc: 'Deploy JavaScript bundle updates to your users instantly without going through App Store or Play Store review. We set up Microsoft AppCenter CodePush with staged rollouts and rollback capabilities.' },
  { icon: '🧭', title: 'React Navigation', desc: 'We architect complex navigation flows using React Navigation — stack, tab, drawer, and modal navigators — with smooth native transitions, deep linking support, and proper back-stack management.' },
  { icon: '🚀', title: 'Performance Optimization', desc: 'We profile apps using Flipper and React DevTools to identify and eliminate JS thread bottlenecks, unnecessary re-renders, and list performance issues, ensuring 60fps UI on mid-range devices.' },
];

const steps = [
  { num: '01', title: 'Scoping & Stack Decision', desc: 'We evaluate your team\'s skills, integration requirements, and performance needs to select the optimal React Native setup — Expo vs bare, state management library, navigation approach, and testing strategy.' },
  { num: '02', title: 'Component Design', desc: 'We build a shared component library in TypeScript, with platform-adaptive styles that honour iOS and Android design conventions where appropriate while maintaining a consistent brand identity.' },
  { num: '03', title: 'Native Integration', desc: 'Native Modules, platform-specific code, third-party SDKs, and deep OS integrations are wired in and thoroughly tested on real devices across a range of OS versions and manufacturers.' },
  { num: '04', title: 'Deployment', desc: 'We manage App Store and Play Store submissions, configure CodePush for OTA updates, set up Fastlane for automated builds, and establish a CD pipeline for ongoing releases.' },
];

const faqs = [
  { q: 'React Native vs Flutter — which is right for us?', a: 'React Native is the better choice when your team already knows JavaScript/TypeScript and React, when you need to share code with a web app, or when deep native component integration matters. Flutter wins on pixel-perfect custom UIs and consistent cross-platform rendering. We can help you make the right call based on your specific context.' },
  { q: 'Can our web React developers build a React Native app?', a: 'React developers can contribute quickly, but React Native is not just React for mobile — it has its own layout engine (Yoga/Flexbox), platform APIs, performance considerations, and native build tooling. We recommend pairing web developers with at least one experienced React Native engineer for production apps.' },
  { q: 'How are native APIs accessed in React Native?', a: 'Native APIs are accessed through the JavaScript-to-Native bridge (or JSI in the New Architecture). The community provides hundreds of pre-built libraries on npm for common APIs. For anything custom, we write Native Modules in Swift (iOS) and Kotlin (Android) that are called from JavaScript.' },
  { q: 'Expo Managed vs Bare Workflow — what\'s the difference?', a: 'Expo Managed gives you a curated set of APIs, easy OTA updates, and no Xcode/Android Studio needed for basic builds — great for fast iteration. Bare Workflow gives you full control over native code, enabling any third-party SDK and custom native features. Most production apps eventually move to Bare or use Expo with EAS Build.' },
  { q: 'Will our React Native app be approved by the App Store?', a: 'Yes — React Native apps are fully compliant with App Store and Play Store policies. They compile to native binaries and are indistinguishable from native apps to the review team. The key is ensuring your app content and functionality comply with guidelines, which we handle as part of our submission process.' },
];

const engagements = [
  {
    title: 'Build a new iOS and Android app',
    desc: 'For a product that needs both app stores from one React Native codebase, starting from an idea, prototype or validated web product.',
    inputs: ['Target users, launch journeys and must-have features', 'Designs or brand assets, if they exist', 'APIs, data sources and third-party services to integrate', 'Device needs such as camera, location, push or offline use'],
    deliverables: ['Scoped release plan and React Native setup decision (Expo or bare)', 'TypeScript app for iOS and Android with tested native integrations', 'App Store and Google Play submissions', 'Build pipeline and release notes for future updates'],
  },
  {
    title: 'Extend an existing React Native app',
    desc: 'For teams with a live app that needs new features, performance work, an upgrade to the New Architecture or extra engineering capacity.',
    inputs: ['Repository access and current build instructions', 'Crash, performance and store review history', 'Prioritised feature or bug list', 'Who owns releases and code review today'],
    deliverables: ['Code and dependency review with an honest risk summary', 'Features shipped through your existing release process', 'Upgrade or performance fixes measured on real devices', 'Updated documentation for anything we change'],
  },
  {
    title: 'Assess a migration to React Native',
    desc: 'For teams weighing a move from separate native apps, a web app or another framework before committing budget.',
    inputs: ['Current apps, repositories and architecture overview', 'Native features and SDKs the product relies on', 'Team skills and who will maintain the app', 'Budget, timing and store constraints'],
    deliverables: ['Feature-by-feature fit review, including native module needs', 'Recommended path: migrate, rebuild in stages or stay native', 'Phased plan with risks and dependencies', 'Scoped estimate for the recommended option'],
  },
];

const handover = [
  'Repositories: source code, branches and CI access transferred to accounts you own.',
  'Store accounts: App Store Connect and Google Play Console owned by your organisation, with signing keys and certificates documented.',
  'Native modules: a list of every custom Swift/Kotlin module and third-party SDK, with versions and why each is needed.',
  'Release documentation: build, versioning, OTA update and store submission steps a new developer can follow.',
  'Maintenance responsibilities: who handles OS updates, dependency upgrades, crash monitoring and store policy changes after launch.',
];

const cad = (n: number) => `$${n.toLocaleString('en-CA')}`;
const cross = MOBILE_PLATFORM_PRICING.cross;
const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;
const h3 = { fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' } as const;
const list = { paddingLeft: 22, margin: '0 0 12px' } as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>Hire React Native developers for your project</h2>
        <p style={{ margin: '0 0 24px' }}>Already decided on React Native? Pick the engagement that matches where your app is today. If you are still choosing a platform, read our <Link href="/blog/native-vs-cross-platform-vs-pwa">native vs cross-platform vs PWA comparison</Link> first.</p>
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
        <div className="grid grid--2">
          <div>
            <h2 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>React Native handover checklist</h2>
            <p>Every project ends with a handover you can run without us:</p>
            <ul style={list}>{handover.map(h => <li key={h}>{h}</li>)}</ul>
          </div>
          <div>
            <h2 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>Budget guidance and proof</h2>
            <p>Our published range for a general cross-platform app is {cad(cross.low)}–{cad(cross.high)} CAD over {cross.weeksLow}–{cross.weeksHigh} weeks. That is a planning range for any cross-platform build, not a React Native quote: your quote follows discovery and depends on scope, integrations and native module work. The <Link href="/blog/app-development-cost-canada">Canadian app development cost guide</Link> explains what moves the number.</p>
            <p>See our mobile work in the <Link href="/case-studies/healthcare-telehealth">telehealth app case study</Link>, built with React Native, and the <Link href="/case-studies/logistics-platform">logistics platform case study</Link>.</p>
            <p>Working with a local team? See app development in {cityLinks.map(([name, slug], i) => (
              <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('mobile-app-development', slug)}>{name}</Link></span>
            ))}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/mobile-app-development", label: "Mobile App Development" }}
      name="React Native Apps"
      copy={{ badge: "JAVASCRIPT-POWERED MOBILE", title: <>React Native App Development{' '}<span style={{ color: 'var(--brand)' }}>Company</span></>, desc: <>Our React Native apps have a true native feel. We leverage the full React Native ecosystem — including the New Architecture — to build fast, maintainable iOS and Android apps that share up to 70% of their codebase. Ship faster without compromising on quality.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Full React Native Capability"
      buyerContent={<BuyerContent />}
    />
  );
}
