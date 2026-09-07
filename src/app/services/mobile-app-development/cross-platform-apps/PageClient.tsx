import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

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
    />
  );
}
