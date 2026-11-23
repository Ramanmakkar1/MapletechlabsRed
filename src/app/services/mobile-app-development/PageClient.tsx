import ServicePageTemplate from '@/components/page/ServicePageTemplate';

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
  { q: 'How long does it take to build a mobile app?', a: 'Most MVPs ship in 8–12 weeks from discovery kickoff. Full-featured consumer apps typically run 4–6 months. You receive a detailed milestone plan before development begins.' },
  { q: 'iOS, Android, or cross-platform — which should I choose?', a: 'If your audience skews heavily to one platform, start native for best performance. If you need both platforms with a tighter budget, Flutter or React Native delivers 90% of native quality at significantly lower cost.' },
  { q: 'Do you provide post-launch support?', a: 'Yes — every engagement includes a 30-day post-launch warranty. Beyond that, we offer flexible SLA retainers covering monitoring, bug fixes, OS updates and feature development.' },
  { q: 'How much does a mobile app cost?', a: 'Simple MVPs typically start at $2,500 CAD. Consumer apps with full feature sets range $8,000–$25,000. Enterprise apps with complex integrations vary. You receive a fixed-price quote after our discovery call.' },
  { q: 'Will you handle App Store submission?', a: 'Absolutely. We manage the full submission process for both App Store and Google Play — including screenshots, descriptions, metadata, rating compliance and any review feedback.' },
  { q: 'Can you work with our existing codebase?', a: 'Yes. We regularly audit and extend existing apps. We\'ll conduct a code review in our discovery phase and give you an honest assessment before committing to a scope.' },
  { q: 'Do you sign NDAs?', a: 'Always — on Day 1, before any project discussion. Your idea and IP are protected from the very first conversation.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="mobile-app-development"
      name="Mobile App Development"
      copy={{ badge: "Mobile App Development", title: <>Mobile App Development<br />That Drives <span style={{ color: 'var(--brand)' }}>Real Revenue.</span></>, desc: <>A Canadian mobile app development company building iOS, Android and cross-platform apps — from MVP to millions of users, engineered for the app stores and loved by your customers.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
      faqs={faqs}
      servicesTitle="Every Platform. Every Screen."
    />
  );
}
