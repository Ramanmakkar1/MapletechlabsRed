import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '150+', label: 'Android Apps Delivered' },
  { value: '10M+', label: 'Play Store Installs' },
  { value: '4.7★', label: 'Avg Rating' },
  { value: '10wk', label: 'Avg Timeline' },
];

const services = [
  { icon: '🤖', title: 'Kotlin & Jetpack Compose', desc: 'We build modern Android apps with Kotlin and Jetpack Compose, Google\'s declarative UI toolkit. Clean architecture patterns like MVVM and Clean Architecture ensure maintainable, testable codebases.' },
  { icon: '🎨', title: 'Material Design 3', desc: 'Your app will look and feel at home on Android with full Material You implementation — dynamic colour theming, adaptive layouts, and motion design that meets Google\'s standards.' },
  { icon: '📦', title: 'Google Play Publishing', desc: 'We manage the full Play Store submission process including store listing optimisation, content rating setup, staged rollouts, and Play Console monitoring post-launch.' },
  { icon: '🔥', title: 'Firebase Integration', desc: 'From Firestore and Realtime Database to Remote Config, Crashlytics, and FCM push notifications, we leverage the full Firebase ecosystem to accelerate development and operations.' },
  { icon: '📺', title: 'Android Wear & TV', desc: 'Extend your reach beyond phones. We develop companion apps for Wear OS smartwatches and Android TV / Google TV, giving users a seamless experience across all their screens.' },
  { icon: '⚙️', title: 'Background Services & Notifications', desc: 'We implement WorkManager, foreground services, and Android\'s modern notification system to keep your app reliable, battery-efficient, and engaging even when not in the foreground.' },
];

const steps = [
  { num: '01', title: 'Research & Architecture', desc: 'We analyse your target audience, device landscape, and business requirements to define the optimal Android architecture, third-party integrations, and development approach.' },
  { num: '02', title: 'UI/UX Design', desc: 'Our designers create adaptive layouts that look great on every screen size — from compact phones to large foldables — following Material Design 3 principles throughout.' },
  { num: '03', title: 'Kotlin Development', desc: 'We write clean, idiomatic Kotlin using Jetpack Compose for UI, coroutines for async work, Hilt for dependency injection, and Retrofit for networking with full unit and UI test coverage.' },
  { num: '04', title: 'Play Store Launch', desc: 'We configure signing, create all required store assets, submit for review, and monitor the rollout via Play Console — then iterate rapidly based on early user feedback.' },
];

const faqs = [
  { q: 'Kotlin or Java — which do you use?', a: 'Kotlin is our default for all new Android projects. It is Google\'s officially preferred language for Android, offering null safety, coroutines, extension functions, and significantly more concise code than Java. For legacy Java codebases we can maintain or incrementally migrate to Kotlin.' },
  { q: 'How do you handle Android device fragmentation?', a: 'We design adaptive layouts using Jetpack\'s WindowSizeClass system, test across a matrix of screen densities, OS versions, and OEM skins using Firebase Test Lab, and define a clear minimum API level strategy based on your target audience\'s device data.' },
  { q: 'How long does Google Play approval take?', a: 'Initial Play Store reviews typically take 1–3 days for new apps and a few hours for updates. We prepare complete, policy-compliant submissions to avoid delays. Sensitive app categories (health, finance, VPN) may require additional review and verification steps.' },
  { q: 'What is the minimum Android version you support?', a: 'We typically target Android 8.0 (API 26) as the minimum, which covers over 95% of active Android devices. For apps with specific hardware requirements or enterprise deployments, we can adjust the min SDK based on your actual user demographics.' },
  { q: 'Can you port our iOS app to Android?', a: 'Yes. We offer structured iOS-to-Android porting with a proper architecture review rather than a literal translation. This often results in a better app since we can take advantage of Android-specific patterns and Jetpack libraries while maintaining feature parity with your iOS version.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/mobile-app-development", label: "Mobile App Development" }}
      name="Android App Development"
      copy={{ badge: "GOOGLE ECOSYSTEM", title: <>Android Apps That Dominate the{' '} <span style={{ color: 'var(--brand)' }}>Play Store</span></>, desc: <>We build high-quality native Android applications in Kotlin with Jetpack Compose that perform flawlessly across the full spectrum of Android devices. From Play Store strategy to production launch, we cover every step.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="End-to-End Android Expertise"
    />
  );
}
