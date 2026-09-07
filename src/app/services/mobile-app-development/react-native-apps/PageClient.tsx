import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

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

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/mobile-app-development", label: "Mobile App Development" }}
      name="React Native Apps"
      copy={{ badge: "JAVASCRIPT-POWERED MOBILE", title: <>React Native Apps with{' '} <span style={{ color: 'var(--brand)' }}>True Native Feel</span></>, desc: <>We leverage the full React Native ecosystem — including the New Architecture — to build fast, maintainable iOS and Android apps that share up to 70% of their codebase. Ship faster without compromising on quality.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Full React Native Capability"
    />
  );
}
