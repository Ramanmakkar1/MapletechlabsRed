import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { MOBILE_PLATFORM_PRICING } from '@/data/pricing';
import { contactHrefFor } from '@/lib/enquiryContext';
import { services as servicesAllowlist } from '@/data/services';
import { cities as citiesAllowlist } from '@/data/cities';

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
  { q: 'What do you need from me to quote an Android app?', a: 'A description of the product and its users, the must-have features for launch, any existing designs or an iOS app to match, the APIs and services the app must integrate with, the devices you need to support and your target launch window. With that we can give you a scoped estimate; a discovery session refines it into a fixed-scope quote.' },
  { q: 'Who owns the Android app, the code and the Play Console account?', a: 'You do. The code lives in repositories under your organisation, the Google Play Console developer account is registered to your company, and the upload key and Play App Signing setup are documented for your team. At handover you receive everything needed to build, release and maintain the app without us.' },
];

const engagements = [
  {
    title: 'Build a new Android app in Kotlin',
    desc: 'For a product that needs Google Play from day one: a native Kotlin and Jetpack Compose app, from idea to production launch.',
    inputs: ['Target users, launch journeys and must-have features', 'Designs or brand assets, if they exist', 'APIs, data sources and third-party services to integrate', 'Device needs such as camera, location, push, offline use, Wear OS or Android TV'],
    deliverables: ['Scoped release plan and Kotlin/Compose architecture', 'Native Android app with unit and UI tests and CI builds', 'Internal and closed testing tracks on Google Play for real-device feedback', 'Play Store listing, submission, staged rollout and launch'],
  },
  {
    title: 'Port an iOS app to Android',
    desc: 'For teams with a proven iPhone app who need feature parity on Android without copying iOS patterns that feel wrong to Android users.',
    inputs: ['Access to the iOS app, its repository and any design files', 'Backend API documentation and authentication setup', 'Analytics showing which features users rely on most', 'Features that must match exactly versus ones that can differ'],
    deliverables: ['Feature parity map and Android-specific UX decisions', 'Kotlin app sharing your existing backend and data', 'Side-by-side test plan covering both platforms', 'Google Play release with listing assets adapted for Android'],
  },
  {
    title: 'Modernise an existing Android app',
    desc: 'For a live Java or older Kotlin app that needs a Compose migration, target SDK updates, performance work or extra engineering capacity.',
    inputs: ['Repository access and current build instructions', 'Crash, ANR and Play Console vitals history', 'Prioritised feature or bug list', 'Who owns releases and code review today'],
    deliverables: ['Code review with an honest risk summary and Java-to-Kotlin migration options', 'Target SDK and Play policy compliance updates', 'Performance and stability fixes measured in Android vitals', 'Updated documentation for anything we change'],
  },
];

const handover = [
  'Repository ownership: source code, branches and CI access transferred to accounts your organisation owns.',
  'Play Console ownership: the Google Play developer account registered to your company, with our access removed or limited on request.',
  'Signing documentation: upload key location, Play App Signing setup and the steps to reset a lost upload key.',
  'Device testing: the device and Android version matrix we tested, plus Firebase Test Lab or real-device results for the release build.',
  'Maintenance responsibilities: who handles target SDK updates, dependency upgrades, crash and ANR monitoring and Play policy changes after launch.',
];

const android = MOBILE_PLATFORM_PRICING.android;
const cad = (n: number) => `$${n.toLocaleString('en-CA')}`;
const contactHref = contactHrefFor('mobile-app-development', undefined, servicesAllowlist, citiesAllowlist);
const h3 = { fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' } as const;
const list = { paddingLeft: 22, margin: '0 0 12px' } as const;
const label = { margin: '0 0 4px', fontWeight: 600, color: 'var(--ink)' } as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>Hire an Android development team in Canada</h2>
        <p style={{ margin: '0 0 24px' }}>Pick the engagement that matches where your app is today. If you are still choosing between native and cross-platform, read our <Link href="/blog/native-vs-cross-platform-vs-pwa">native vs cross-platform vs PWA comparison</Link> first.</p>
        <div className="grid grid--3" style={{ marginBottom: 32 }}>
          {engagements.map(e => (
            <div key={e.title}>
              <h3 style={h3}>{e.title}</h3>
              <p>{e.desc}</p>
              <p style={label}>What we need from you</p>
              <ul style={list}>{e.inputs.map(i => <li key={i}>{i}</li>)}</ul>
              <p style={label}>What you receive</p>
              <ul style={list}>{e.deliverables.map(d => <li key={d}>{d}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="grid grid--2">
          <div>
            <h2 style={h3}>Budget and timeline guidance</h2>
            <p>Our published planning range for a native Android app is {cad(android.low)}–{cad(android.high)} CAD across a {android.weeksLow}–{android.weeksHigh} week planning window. That is a planning range for scoping conversations, not a quote: focused apps land at the shorter end, while apps with custom backends, real-time features, Wear OS or TV companions run longer. Your quote and timeline follow discovery, and the <Link href="/blog/app-development-cost-canada">Canadian app development cost guide</Link> explains what moves the number.</p>
            <p>Ready to scope your Android app? <Link href={contactHref}>Book a consultation with our mobile development team</Link> and we will come back with a scoped plan and an estimate.</p>
          </div>
          <div>
            <h2 style={h3}>Android handover checklist</h2>
            <p>Every project ends with a handover you can run without us:</p>
            <ul style={list}>{handover.map(h => <li key={h}>{h}</li>)}</ul>
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
      name="Android App Development"
      copy={{ badge: "GOOGLE ECOSYSTEM", title: <>Android App Development Services in Canada, Built for the{' '} <span style={{ color: 'var(--brand)' }}>Play Store</span></>, desc: <>We build high-quality native Android applications in Kotlin with Jetpack Compose that perform flawlessly across the full spectrum of Android devices. From Play Store strategy to production launch, we cover every step.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="End-to-End Android Expertise"
      buyerContent={<BuyerContent />}
    />
  );
}
