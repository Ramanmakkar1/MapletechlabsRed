import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { MOBILE_PLATFORM_PRICING } from '@/data/pricing';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '300+', label: 'Multi-Platform Apps' },
  { value: '50%', label: 'Lower Dev Cost' },
  { value: '1 Team', label: 'iOS, Android & Web' },
  { value: '10wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '🗺️', title: 'Platform Strategy Consulting', desc: 'We analyse your target audience, budget, and feature set to recommend the optimal cross-platform approach — Flutter, React Native, or a hybrid — with a clear cost-benefit breakdown.' },
  { icon: '🏗️', title: 'Shared Codebase Architecture', desc: 'Our architects design modular codebases that maximise reuse of business logic, networking, and state management, while allowing clean separation of platform-specific UI and hardware integrations.' },
  { icon: '✅', title: 'Native Feature Parity', desc: 'Cross-platform doesn\'t mean compromise. We ensure full feature parity with native apps — camera, GPS, biometrics, push notifications, and background tasks — all working flawlessly on every platform.' },
  { icon: '📊', title: 'Performance Benchmarking', desc: 'We run side-by-side performance benchmarks against native reference apps to validate frame rates, startup times, memory usage, and battery impact before any release.' },
  { icon: '🖼️', title: 'UI Adaptation per Platform', desc: 'Users expect iOS apps to feel like iOS apps and Android apps to feel like Android apps. We adapt navigation patterns, typography, gestures, and component styles to match each platform\'s conventions.' },
  { icon: '⚙️', title: 'CI/CD for Multiple Stores', desc: 'We configure unified CI/CD pipelines using Fastlane and GitHub Actions that build, test, sign, and submit to both the App Store and Play Store simultaneously on every release branch merge.' },
];

const steps = [
  { num: '01', title: 'Platform Audit', desc: 'We assess your target platforms, user demographics, feature requirements, and existing tech stack to define the cross-platform strategy and framework selection with full justification.' },
  { num: '02', title: 'Shared Architecture', desc: 'We design the shared module boundaries — what lives in shared code vs platform-specific layers — and establish the project structure, CI pipeline, and development workflow before coding begins.' },
  { num: '03', title: 'Platform-Specific Polish', desc: 'Once the core is built, we invest time in making each platform feel native — correct iOS transitions, Android back-stack behaviour, platform-appropriate icons, and adaptive layouts for every screen size.' },
  { num: '04', title: 'Unified Launch', desc: 'We coordinate simultaneous submissions to the App Store and Play Store, synchronise release notes, manage staged rollouts on both platforms, and monitor crash rates and performance post-launch.' },
];

const faqs = [
  { q: 'Which cross-platform framework is best?', a: 'There is no single answer — it depends on your team, design requirements, and integration needs. Flutter is best for custom, pixel-perfect UIs and multi-platform targets beyond mobile. React Native is ideal when you have a JavaScript/React team or need web code sharing. We help you evaluate objectively and pick the right fit for your project.' },
  { q: 'Do cross-platform apps feel native to users?', a: 'Modern cross-platform frameworks have closed the gap significantly. Flutter renders its own pixels (no native component overhead), and React Native renders actual native components. With thoughtful platform-adaptive UX design, users typically cannot tell the difference from a native app. We prioritise platform feel as a core deliverable.' },
  { q: 'How do you handle platform differences like navigation and gestures?', a: 'We implement platform-adaptive navigation — iOS-style stack with swipe-back, Android back-button and predictive-back gesture, and Material vs Cupertino UI components where appropriate. Our designers create platform variants for critical UX patterns rather than forcing a single design on both platforms.' },
  { q: 'What is the cost difference vs building separate native apps?', a: 'Cross-platform development typically reduces cost by 40–60% compared to maintaining two separate native codebases, since business logic, APIs, and state management are shared. Platform-specific UI work still requires native expertise, but the overall team size and timeline are substantially reduced.' },
  { q: 'Can you migrate our existing native app to a cross-platform framework?', a: 'Yes. We offer structured migration services with a phased approach — typically starting with new features built in the cross-platform framework while the existing native code continues to ship. This reduces risk and allows the team to build familiarity with the new stack before full migration.' },
];

const cad = (n: number) => `$${n.toLocaleString('en-CA')}`;
const cross = MOBILE_PLATFORM_PRICING.cross;
const nativeBoth = MOBILE_PLATFORM_PRICING['native-both'];
const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;
const cell = { padding: '10px 12px', borderBottom: '1px solid var(--line)', verticalAlign: 'top' } as const;
const head = { ...cell, fontWeight: 600, color: 'var(--ink)', textAlign: 'left' } as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>Cross-platform app development in Canada: what it costs and when it fits</h2>
        <p style={{ margin: '0 0 24px' }}>
          A cross-platform app built on one shared codebase typically costs {cad(cross.low)}–{cad(cross.high)} CAD and takes {cross.weeksLow}–{cross.weeksHigh} weeks, while separate native iOS and Android apps run {cad(nativeBoth.low)}–{cad(nativeBoth.high)} CAD over {nativeBoth.weeksLow}–{nativeBoth.weeksHigh} weeks. Cross-platform fits when you need both stores quickly on a tighter budget and can accept some platform-specific polish work; separate native apps fit when deep hardware, performance or platform-first UX is the priority.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 0 24px', fontSize: '0.95rem' }}>
          <caption style={{ captionSide: 'top', textAlign: 'left', padding: '0 0 10px', color: 'var(--body)' }}>
            Flutter vs React Native vs separate native apps — see our <Link href="/blog/flutter-vs-react-native-canada">Flutter vs React Native comparison</Link> for the full breakdown.
          </caption>
          <thead>
            <tr>
              <th scope="col" style={head}>Decision</th>
              <th scope="col" style={head}><Link href="/services/mobile-app-development/flutter-development">Flutter</Link></th>
              <th scope="col" style={head}><Link href="/services/mobile-app-development/react-native-apps">React Native</Link></th>
              <th scope="col" style={head}>Separate native apps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={head}>One codebase?</th>
              <td style={cell}>Yes — one Dart codebase for iOS, Android, web and desktop.</td>
              <td style={cell}>Yes — one JavaScript/TypeScript codebase for iOS and Android.</td>
              <td style={cell}>No — separate Swift and Kotlin codebases maintained in parallel.</td>
            </tr>
            <tr>
              <th scope="row" style={head}>Best for</th>
              <td style={cell}>Custom, pixel-perfect UI and teams targeting mobile plus web or desktop.</td>
              <td style={cell}>JavaScript/React teams that want to reuse skills and web code.</td>
              <td style={cell}>Heavy native SDKs, maximum performance and platform-first experiences.</td>
            </tr>
            <tr>
              <th scope="row" style={head}>Budget from pricing data</th>
              <td style={cell}>{cad(cross.low)}–{cad(cross.high)} CAD, {cross.weeksLow}–{cross.weeksHigh} weeks</td>
              <td style={cell}>{cad(cross.low)}–{cad(cross.high)} CAD, {cross.weeksLow}–{cross.weeksHigh} weeks</td>
              <td style={cell}>{cad(nativeBoth.low)}–{cad(nativeBoth.high)} CAD, {nativeBoth.weeksLow}–{nativeBoth.weeksHigh} weeks</td>
            </tr>
          </tbody>
        </table>
        <p style={{ margin: '0 0 12px' }}>
          Our <Link href="/blog/app-development-cost-canada">Canadian app development cost guide</Link> explains what moves the number, and our <Link href="/services/mobile-app-development">mobile app development services</Link> cover the full delivery process.
        </p>
        <p style={{ margin: 0 }}>
          Working with a local team? Explore cross-platform app development in{' '}
          {cityLinks.map(([name, slug], i) => (
            <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('mobile-app-development', slug)}>{name}</Link></span>
          ))}, or <Link href="/contact">contact us</Link> and we&apos;ll help scope it.
        </p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/mobile-app-development", label: "Mobile App Development" }}
      name="Cross-Platform App Development"
      copy={{ badge: "MULTI-PLATFORM STRATEGY", title: <>Reach Every Platform with{' '} <span style={{ color: 'var(--brand)' }}>Half the Investment</span></>, desc: <>We design and build cross-platform mobile apps that deliver a native-quality experience on iOS, Android, and beyond — from a single unified team and codebase. Maximise your reach while minimising your development cost.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Everything Your Multi-Platform App Needs"
      buyerContent={<BuyerContent />}
    />
  );
}
