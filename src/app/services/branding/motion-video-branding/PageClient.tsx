import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '500+', label: 'Motion assets created' },
  { value: '10M+', label: 'Video views generated' },
  { value: 'AE & Lottie', label: 'Expert team' },
  { value: 'Broadcast', label: 'Quality standard' },
];

const services = [
  { icon: '✨', title: 'Logo Animation & Sting', desc: 'A signature animated logo sting that brings your brand to life — crafted in After Effects with multiple timing variants (3s, 5s, 10s) for different contexts from social to broadcast.' },
  { icon: '🎞️', title: 'Brand Motion Guidelines', desc: 'A motion design language system defining your brand\'s animation principles — easing curves, timing, transition styles, and motion personality that all animated assets must follow.' },
  { icon: '📱', title: 'Social Media Motion Templates', desc: 'A library of editable motion templates for Instagram, TikTok, LinkedIn, and YouTube — Stories, Reels, feed posts, and ads — enabling your team to produce on-brand animated content at scale.' },
  { icon: '🎬', title: 'Explainer Video Production', desc: 'Script, storyboard, voiceover, and full motion graphics production for explainer videos that communicate complex products or services in under 90 seconds with visual clarity and brand consistency.' },
  { icon: '⚡', title: 'Lottie Animations for Web & App', desc: 'Lightweight, scalable Lottie JSON animations for web and mobile applications — micro-interactions, loading states, onboarding animations, and icon animations that enhance UX without performance cost.' },
  { icon: '📡', title: 'Broadcast Graphics & Lower-Thirds', desc: 'Broadcast-quality animated graphics packages for live events, virtual conferences, and video productions — lower-thirds, transitions, title cards, and bug animations delivered in broadcast-ready formats.' },
];

const steps = [
  { num: '01', title: 'Brief & Storyboard', desc: 'We develop a detailed creative brief and storyboard — mapping every scene, transition, and timing beat before any animation begins, ensuring full alignment on the visual direction.' },
  { num: '02', title: 'Style Development', desc: 'A motion styleframe is designed and approved — establishing the visual look, colour palette, typography treatment, and animation mood before full production commences.' },
  { num: '03', title: 'Animation Production', desc: 'Our After Effects team animates the approved storyboard, with two rounds of revision included — refining timing, easing, and details until every frame is perfect.' },
  { num: '04', title: 'File Delivery', desc: 'Final files delivered in all required formats — MP4, MOV, GIF, WebM, Lottie JSON, and editable After Effects project files — with a clear file naming and usage guide.' },
];

const faqs = [
  { q: 'What is a logo sting?', a: 'A logo sting (also called a logo reveal or logo animation) is a short animated sequence — typically 3–10 seconds — that animates your logo on screen. Used at the start or end of videos, in ads, and on brand intro cards, it adds a layer of polish and brand recognition that static logos cannot achieve.' },
  { q: 'Lottie vs GIF vs MP4 for web animations?', a: 'Lottie (JSON) is the superior choice for web and app animations — it is vector-based (scales perfectly), incredibly lightweight (often 10x smaller than GIF), and fully interactive/controllable via code. GIF has no alpha channel and poor quality. MP4 works well for video but requires autoplay considerations. We always recommend Lottie for UI animations.' },
  { q: 'How long does a brand video take to produce?', a: 'A 60–90 second explainer video typically takes 4–6 weeks from brief to delivery: 1 week for script and storyboard, 1 week for styleframes, 2–3 weeks for animation, and 1 week for revisions and final delivery. Logo stings and short motion assets are faster — typically 1–2 weeks.' },
  { q: 'Do you provide editable After Effects files?', a: 'Yes — all After Effects project files are included in our standard deliverable package. We structure projects cleanly with labelled compositions, organised layers, and clear notes so your in-house team or future agency can make updates without starting from scratch.' },
  { q: 'Can motion assets match our existing static brand?', a: 'Absolutely — and this is typically where we start. We review your existing brand guidelines, colour system, typography, and static identity, then develop a motion language that feels like a natural extension of your visual identity rather than a departure from it.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/branding", label: "Branding & Identity" }}
      name="Motion & Video Branding"
      copy={{ badge: "BRANDING & IDENTITY", title: <>Motion That Makes Brands <span style={{ color: 'var(--brand)' }}>Come Alive</span></>, desc: <>Broadcast-quality motion branding — from logo animations and Lottie web assets to explainer videos and social motion templates — that gives your brand a dynamic visual presence across every screen.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
