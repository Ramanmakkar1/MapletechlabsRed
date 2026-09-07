import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';

const heroStats = ([['500K+', 'Learners Reached'], ['85%', 'Completion Rate'], ['4.8★', 'Learner Rating']] as [string, string][]).map(([value, label]) => ({ value, label }));
const challenges = [
                { icon: '🎯', title: 'Learner Engagement', desc: 'Combating drop-off with gamification, streaks, peer learning, and AI nudges that keep learners coming back day after day.' },
                { icon: '📡', title: 'Content Delivery at Scale', desc: 'Adaptive video streaming, offline-capable mobile apps, and CDN-optimised content that delivers flawlessly to learners in any bandwidth environment.' },
                { icon: '🧠', title: 'Personalised Learning', desc: 'AI-powered curriculum adaptation, spaced repetition algorithms, and learning style detection that optimise each learner\'s unique path to mastery.' },
              ];
const solutions = [
                { icon: '🧠', title: 'Adaptive Learning Platforms', desc: 'AI-driven curriculum that adjusts difficulty in real time, spaced repetition scheduling, mastery-based progression, and detailed analytics for educators and learners.' },
                { icon: '🎥', title: 'Live Tutoring & Classrooms', desc: 'WebRTC-powered virtual classrooms with interactive whiteboards, breakout rooms, screen sharing, session recording, and post-class AI summaries.' },
                { icon: '🏆', title: 'Gamification & Badges', desc: 'Points, streaks, leaderboards, and achievement systems that boost learner motivation and drive consistent daily engagement.' },
                { icon: '📚', title: 'LMS Integration', desc: 'Seamless SCORM and xAPI connections to Canvas, Moodle, and Google Classroom so your content works within existing institutional ecosystems.' },
                { icon: '📝', title: 'Assessment & Proctoring', desc: 'AI-powered exam proctoring, adaptive testing, auto-grading, and plagiarism detection that maintain academic integrity at scale.' },
                { icon: '📱', title: 'Offline-Capable Mobile', desc: 'Native and PWA learning apps with offline content sync, push notifications, and low-bandwidth optimisation for learners everywhere.' },
              ];
const tech = [
                { cat: 'Video', items: ['Agora', 'Daily.co', 'WebRTC', 'HLS', 'FFmpeg'] },
                { cat: 'AI', items: ['OpenAI', 'LangChain', 'spaCy', 'Recommendation ML'] },
                { cat: 'LMS', items: ['SCORM', 'xAPI', 'Canvas', 'Moodle', 'Google Classroom'] },
                { cat: 'Mobile', items: ['Flutter', 'React Native', 'Expo'] },
              ];
const whyUs = [
                { icon: '📚', title: 'Pedagogy-Informed Design', desc: 'Our product team includes learning designers who apply cognitive science principles — spaced repetition, interleaving, retrieval practice — to every feature we build.' },
                { icon: '♿', title: 'Accessibility-First', desc: 'WCAG 2.2 AA compliance, screen reader support, keyboard navigation, and high-contrast modes built in from day one so no learner is left behind.' },
                { icon: '🚀', title: 'Scale from Day 1', desc: 'We architect for the learner counts you want, not the ones you have. Our platforms handle 100 or 10 million users on the same codebase without rearchitecting.' },
              ];
const related = [
                { name: 'Web Development', href: '/services/web-development', desc: 'Accessible learning portals with LMS integration, video streaming and real-time collaboration.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Offline-capable learning apps with push notifications and adaptive content delivery.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Adaptive learning engines, AI tutoring assistants and automated assessment grading.' },
                { name: 'Game Development', href: '/services/game-development', desc: 'Gamified learning experiences with points, badges and interactive educational content.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant LMS platforms with subscription billing and institutional admin dashboards.' },
              ];

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="edtech"
      name="EdTech"
      copy={{ badge: "EdTech", title: <>We Build EdTech That <span style={{ color: 'var(--brand)' }}>Inspires Learning.</span></>, desc: <>Adaptive learning platforms, live tutoring apps, and AI-powered assessment tools that make education accessible to everyone.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "LearnPath", headline: "500K learners, 85% completion rate \u2014 industry avg is 15%", text: "We rebuilt their platform with an AI-powered adaptive engine, gamified progress tracking, and a native mobile app that works offline \u2014 tripling engagement within 60 days.", quote: "Our learner engagement tripled after the new platform launched.", cite: "Head of Product, LearnPath" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your EdTech Platform.", sub: "Engaging, accessible, and scalable \u2014 learning platforms that change lives." }}
    />
  );
}
