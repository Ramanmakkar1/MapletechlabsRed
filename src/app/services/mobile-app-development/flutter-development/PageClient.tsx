import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { MOBILE_PLATFORM_PRICING } from '@/data/pricing';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '100+', label: 'Flutter Apps Shipped' },
  { value: '60%', label: 'Cost Saving vs Native' },
  { value: '1 Codebase', label: 'iOS + Android' },
  { value: '8wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '🐦', title: 'Dart & Flutter SDK', desc: 'We write clean, idiomatic Dart using Flutter\'s latest SDK. Our engineers stay current with every Flutter release, ensuring your app benefits from the latest performance improvements and APIs.' },
  { icon: '🧩', title: 'Custom Widget Library', desc: 'We design and build reusable custom widget libraries tailored to your brand, ensuring visual consistency across screens while keeping the codebase DRY and maintainable.' },
  { icon: '⚡', title: 'Native Performance', desc: 'Flutter compiles to native ARM code, delivering 60/120fps animations without a JavaScript bridge. We profile and optimise rendering pipelines to ensure buttery-smooth performance on all devices.' },
  { icon: '🔌', title: 'Platform Channels', desc: 'When you need to access device-specific APIs not covered by existing plugins, we write custom Platform Channels in Swift/Kotlin to bridge Flutter with native functionality seamlessly.' },
  { icon: '🖥️', title: 'Flutter Web & Desktop', desc: 'Extend your Flutter app beyond mobile to web browsers, macOS, Windows, and Linux — all from the same codebase. We architect shared business logic with platform-adaptive UIs for each target.' },
  { icon: '🔄', title: 'State Management (Riverpod/Bloc)', desc: 'We implement scalable state management using Riverpod or Bloc depending on your app\'s complexity, ensuring a predictable, testable, and maintainable application architecture.' },
];

const steps = [
  { num: '01', title: 'Architecture Design', desc: 'We define the app architecture — folder structure, state management approach, routing strategy, and third-party package selection — establishing a solid foundation before writing a single widget.' },
  { num: '02', title: 'Widget Development', desc: 'UI is built widget by widget in Flutter, with our designers and developers collaborating closely to produce pixel-perfect implementations of your Figma designs across both iOS and Android.' },
  { num: '03', title: 'Platform Testing', desc: 'We run comprehensive tests on real iOS and Android devices, covering golden widget tests, integration tests, and manual QA to catch any platform-specific rendering or behaviour differences.' },
  { num: '04', title: 'Multi-Store Launch', desc: 'We submit simultaneously to the App Store and Play Store, managing all signing, store metadata, and screenshots for both platforms. One team, one timeline, two successful launches.' },
];

const faqs = [
  { q: 'Is Flutter truly native or a web wrapper?', a: 'Flutter is not a web wrapper or WebView. It compiles your Dart code directly to native ARM machine code and renders every pixel using its own Skia/Impeller rendering engine, bypassing both the native UI framework and a JavaScript bridge. The result is consistently fast, visually custom apps.' },
  { q: 'Flutter vs React Native — which should we choose?', a: 'Flutter excels at pixel-perfect custom UIs, consistent cross-platform rendering, and pure Dart teams. React Native is a better fit when you have a strong JavaScript/React team and need deep integration with the native component ecosystem. We can help you evaluate the right choice based on your specific needs.' },
  { q: 'Can our existing native app be ported to Flutter?', a: 'Yes, we offer Flutter migration services. We typically recommend a screen-by-screen migration strategy, running Flutter and native code side by side using Add-to-App until the full migration is complete, minimising risk and disruption to your existing users.' },
  { q: 'How does Flutter performance compare to native?', a: 'For most app categories, Flutter performance is indistinguishable from native — both achieve 60/120fps animations and fast startup times. Complex platform integrations like maps or camera may have slight overhead from Platform Channels, but these are imperceptible in practice.' },
  { q: 'Who maintains a Flutter app long-term?', a: 'Flutter is backed by Google with a strong open-source community and a growing plugin ecosystem (pub.dev). We provide post-launch maintenance packages and stay current with Flutter SDK updates, Dart upgrades, and OS compatibility requirements so your app never falls behind.' },
  {
    q: 'How much does Flutter app development cost in Canada?',
    a: `For general planning, our published cross-platform app range is $${MOBILE_PLATFORM_PRICING.cross.low.toLocaleString('en-CA')}–$${MOBILE_PLATFORM_PRICING.cross.high.toLocaleString('en-CA')} CAD over ${MOBILE_PLATFORM_PRICING.cross.weeksLow}–${MOBILE_PLATFORM_PRICING.cross.weeksHigh} weeks. That guidance applies to any cross-platform build, not a Flutter-specific quote. A fixed Flutter estimate follows discovery on features, custom Platform Channels, web or desktop targets and store requirements. The Canadian app development cost guide on our blog breaks down what moves the number.`,
  },
  {
    q: 'How do you scope a native-to-Flutter migration?',
    a: 'We start with repository access, a feature map of your current iOS and Android apps, and a list of native SDKs and device capabilities you rely on. We identify screens that can move to Flutter first, where Add-to-App embedding is required, and any plugins or Platform Channels we must build. You receive a phased plan with risks, dependencies and a scoped estimate per phase before we replace production code.',
  },
];

const engagements = [
  {
    title: 'Build a new iOS and Android app in Flutter',
    desc: 'For a product that needs both app stores from one Dart codebase, starting from an idea, prototype or validated web product.',
    inputs: ['Target users, core journeys and must-have features', 'Designs or brand assets, if they exist', 'APIs, auth and third-party services to integrate', 'Device needs such as camera, maps, push, offline or payments'],
    deliverables: ['Architecture and state-management plan aligned to your release roadmap', 'Production Flutter app for iOS and Android with tested integrations', 'Simultaneous App Store and Google Play submissions', 'CI build pipeline, signing docs and release notes for your team'],
  },
  {
    title: 'Extend an existing Flutter app',
    desc: 'For teams with a live Flutter product that needs new features, performance work, SDK upgrades or extra engineering capacity.',
    inputs: ['Repository access and current build or flavor setup', 'Crash, analytics and store review history', 'Prioritised feature, bug or upgrade list', 'Who owns releases, code review and design today'],
    deliverables: ['Honest code and dependency review with risk summary', 'Features shipped through your existing release process', 'Performance or upgrade work measured on real devices', 'Updated docs for architecture or packages we touch'],
  },
  {
    title: 'Phased native-to-Flutter migration',
    desc: 'For products on separate native codebases (or a partial Flutter embed) that need a controlled move to a single Flutter app without a big-bang rewrite.',
    inputs: ['Current native repositories and architecture overview', 'Native features, SDKs and background work the app depends on', 'Team skills and who will maintain Dart after each phase', 'Budget, timing and store or enterprise constraints'],
    deliverables: ['Screen-by-screen migration plan with Add-to-App milestones', 'Custom Platform Channels or plugins where pub.dev is not enough', 'Parallel native and Flutter releases until cutover is safe', 'Scoped estimate and schedule for each migration phase'],
  },
];

const handover = [
  'Repositories: Flutter source, branches and CI access transferred to accounts you own.',
  'Store accounts: App Store Connect and Google Play Console owned by your organisation, with signing keys and certificates documented.',
  'Platform Channels: a list of every custom Swift/Kotlin bridge and third-party SDK, with versions and why each is needed.',
  'Release documentation: build flavors, versioning, store submission and hotfix steps a new developer can follow.',
  'Maintenance responsibilities: who handles Flutter SDK upgrades, Dart dependency updates, OS compatibility, crash monitoring and store policy changes after launch.',
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
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>Hire Flutter developers for your next release</h2>
        <p style={{ margin: '0 0 24px' }}>
          Mapletech Labs has shipped 100+ Flutter apps for Canadian teams. Choose the engagement that matches where your product is today. Still comparing stacks? Read our{' '}
          <Link href="/blog/native-vs-cross-platform-vs-pwa">native vs cross-platform vs PWA comparison</Link>, then see how{' '}
          <Link href="/services/mobile-app-development/react-native-apps">React Native development</Link> differs if your team is JavaScript-first.
        </p>
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
            <h2 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>Launch deliverables and handover</h2>
            <p>Every Flutter project ends with assets your team can run without us — the same discipline we use across our <Link href="/services/mobile-app-development">mobile app development services</Link>:</p>
            <ul style={list}>{handover.map(h => <li key={h}>{h}</li>)}</ul>
            <p style={{ marginTop: 16 }}>
              Ready to talk scope? <Link href="/contact">Contact us</Link> with your timeline and we will reply within one working day.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' }}>Budget guidance and timelines</h2>
            <p>
              Our published range for a general cross-platform app is {cad(cross.low)}–{cad(cross.high)} CAD over {cross.weeksLow}–{cross.weeksHigh} weeks. That is planning guidance for any cross-platform build, not a Flutter-specific quote — your fixed price follows discovery. Many greenfield Flutter products align with our 8wk average timeline once scope is locked, but project-specific schedules depend on integrations, migration phases and store review timing. The{' '}
              <Link href="/blog/app-development-cost-canada">Canadian app development cost guide</Link> explains what moves the number.
            </p>
            <p>
              Working with a local team? Explore app development in{' '}
              {cityLinks.map(([name, slug], i) => (
                <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('mobile-app-development', slug)}>{name}</Link></span>
              ))}.
            </p>
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
      name="Flutter Development"
      copy={{ badge: "CROSS-PLATFORM NATIVE", title: <>Flutter App Development —{' '}<span style={{ color: 'var(--brand)' }}>One Codebase. Every Platform. Native Speed.</span></>, desc: <>Flutter lets us ship beautiful, high-performance apps for iOS, Android, web, and desktop from a single Dart codebase — cutting your development cost by up to 60% without sacrificing quality or native feel.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Complete Flutter Development Services"
      buyerContent={<BuyerContent />}
    />
  );
}
