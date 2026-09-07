import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '80+', label: 'Games Shipped' },
  { value: '50M+', label: 'Downloads' },
  { value: '4.8★', label: 'App Store Avg' },
  { value: '15', label: 'Platforms Supported' },
];

const services = [
  { icon: '📱', title: 'Mobile Games', desc: 'iOS and Android games from hyper-casual to mid-core — designed for high Day-1 retention, strong LTV and scalable UA economics.' },
  { icon: '🖥️', title: 'PC & Console', desc: 'Unity and Unreal Engine titles for Steam, PlayStation, Xbox and Nintendo Switch — AAA-quality at independent studio scale.' },
  { icon: '🌐', title: 'Web & HTML5 Games', desc: 'Instant-play browser games for portals, ads and casual audiences — no download required, broad platform reach.' },
  { icon: '⛓️', title: 'Blockchain Games', desc: 'Play-to-earn mechanics, NFT item ownership and on-chain progression built on EVM-compatible chains with seamless wallet integration.' },
  { icon: '🎨', title: 'Game UI/UX Design', desc: 'Menus, HUD design, onboarding flows and in-game economy UI that reduce friction and maximise engagement at every session touchpoint.' },
  { icon: '🔄', title: 'Live Operations', desc: 'Post-launch content updates, seasonal events, battle passes and A/B-tested monetisation systems that keep your DAU and ARPU climbing.' },
];

const steps = [
  { num: '01', title: 'Concept', desc: 'Genre selection, target audience, core loop design, competitive benchmarking and monetisation model — all validated before any production resources are committed.' },
  { num: '02', title: 'Prototype', desc: 'A playable vertical slice that proves the core loop is fun. We test retention mechanics, pacing and monetisation hooks before scaling production.' },
  { num: '03', title: 'Production', desc: 'Full game build with art, audio, narrative and feature implementation. Weekly playtests, soft launch in select markets and KPI tracking throughout.' },
  { num: '04', title: 'Launch & LiveOps', desc: 'App store submission, UA campaign setup, performance monitoring and ongoing live operations — events, updates and balance patches driven by player data.' },
];

const results = [
  { value: '50M+', label: 'Downloads', sub: 'across shipped titles' },
  { value: '45min', label: 'Avg Session Length', sub: 'best-performing mid-core titles' },
  { value: '4.8★', label: 'App Store Rating', sub: 'portfolio average' },
];

const faqs = [
  { q: 'What game engines do you work with?', a: 'Unity is our primary engine for mobile and cross-platform titles. Unreal Engine 5 for PC and console projects requiring photorealistic visuals. Phaser and PlayCanvas for HTML5. Godot for projects requiring open-source flexibility.' },
  { q: 'Can you build a game from concept, or only take over existing projects?', a: 'Both. We handle full game development from concept through launch, and we also take on rescue projects, port existing games to new platforms, or add features and live operations to shipped titles.' },
  { q: 'How do you approach mobile game monetisation?', a: 'Monetisation strategy is defined during concept — before a line of code is written. We design IAP economies, ad placement strategies and battle pass systems that maximise LTV without harming retention. We also run A/B tests post-launch to optimise.' },
  { q: 'Do you handle App Store and Google Play submission?', a: 'Yes. We manage all submission requirements including store listings, screenshots, trailers, metadata optimisation, rating questionnaires and compliance with both Apple and Google policies.' },
  { q: 'What does a typical mobile game project cost?', a: 'Hyper-casual titles start around $5K–$12K. Mid-core mobile games typically range from $15K–$50K depending on feature depth and art style. We provide detailed estimates after a scoping session based on your game design document or brief.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="game-development"
      name="Game Development"
      copy={{ badge: "Game Development", title: <>We Build Games That <span style={{ color: 'var(--brand)' }}>Players Love.</span></>, desc: <>Mobile games, PC/console titles, and web-based experiences — engineered for engagement, retention and monetisation.</> }}
      stats={stats}
      services={services}
      steps={steps}
      results={results}
      faqs={faqs}
      servicesTitle="Game Development Services"
    />
  );
}
