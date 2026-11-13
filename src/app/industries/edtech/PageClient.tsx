import { serviceCityPath } from '@/data/serviceCity';
import Link from 'next/link';
import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';
import { industryFaqs } from '@/data/industry-faqs';

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
  { name: 'SaaS Development Company in Edmonton', href: serviceCityPath('saas-development', 'edmonton'), desc: 'LMS and e-learning platforms from our SaaS development team in Edmonton.' },
  { name: 'SaaS Development Company in Calgary', href: serviceCityPath('saas-development', 'calgary'), desc: 'LMS and e-learning platforms from our SaaS development team in Calgary.' },
  { name: 'SaaS Development Company in Toronto', href: serviceCityPath('saas-development', 'toronto'), desc: 'LMS and e-learning platforms from our SaaS development team in Toronto.' },
  { name: 'SaaS Development Company in Vancouver', href: serviceCityPath('saas-development', 'vancouver'), desc: 'LMS and e-learning platforms from our SaaS development team in Vancouver.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'Accessible learning portals with LMS integration, video streaming and real-time collaboration.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Offline-capable learning apps with push notifications and adaptive content delivery.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Adaptive learning engines, AI tutoring assistants and automated assessment grading.' },
                { name: 'Game Development', href: '/services/game-development', desc: 'Gamified learning experiences with points, badges and interactive educational content.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant LMS platforms with subscription billing and institutional admin dashboards.' },
              ];

const cityLinks = [
  { label: 'App Development Company in Toronto', href: serviceCityPath('mobile-app-development', 'toronto') },
  { label: 'App Development Company in Vancouver', href: serviceCityPath('mobile-app-development', 'vancouver') },
  { label: 'UI/UX Design Company in Toronto', href: serviceCityPath('product-design', 'toronto') },
  { label: 'UI/UX Design Company in Vancouver', href: serviceCityPath('product-design', 'vancouver') },
];

const linkStyle = { color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } as const;
const cardStyle = { border: '1px solid var(--line, #e5e7eb)', borderRadius: 12, padding: 'clamp(16px, 4vw, 28px)', scrollMarginTop: 96, minWidth: 0 } as const;
const pStyle = { fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 12px' } as const;

const buyerTracks = [
  {
    id: 'lms-development',
    title: 'LMS development',
    start: 'You sell or deliver courses on a generic tool and need your own branded learning platform with your rules for enrolment, progress and certificates.',
    workflow: 'One course end to end: enrol, lessons, quiz, progress tracking, certificate.',
    access: 'Existing course content and formats (video, SCORM, xAPI), student records, payment provider and any school or HR system to sync with.',
    accept: 'A learner enrols, completes a course on a phone, progress and scores reach the admin report, and content works with Canvas, Moodle or Google Classroom where agreed.',
    extra: <>We build the platform itself with our <Link href="/services/saas-development" style={linkStyle}>SaaS development</Link> and <Link href="/services/web-development" style={linkStyle}>web development</Link> teams.</>,
  },
  {
    id: 'e-learning-app-development',
    title: 'E-learning app development',
    start: 'Learners are on phones and drop off on a web-only course.',
    workflow: 'Sign-in, daily lesson, offline download, reminders and streaks.',
    access: 'Content library, push notification accounts, Apple and Google developer accounts.',
    accept: 'Lessons play offline and sync later, reminders arrive, and completion is tracked per learner.',
    extra: <>See our <Link href="/services/mobile-app-development" style={linkStyle}>mobile app development</Link> service and the <Link href="/blog/native-vs-cross-platform-vs-pwa" style={linkStyle}>native vs cross-platform vs PWA guide</Link> before choosing a build approach.</>,
  },
  {
    id: 'virtual-classroom-development',
    title: 'Virtual classroom and live tutoring',
    start: 'Live classes run on a general video tool with no link to attendance, recordings or homework.',
    workflow: 'One live class type: schedule, join, whiteboard, recording, follow-up.',
    access: 'Timetable or booking system, tutor list, storage for recordings.',
    accept: 'Students join from a browser, attendance is recorded, recordings are available to the right class only.',
    extra: <>Tutoring assistants and auto-grading use our <Link href="/services/ai-ml" style={linkStyle}>AI and machine learning</Link> work, and the class experience is shaped by <Link href="/services/product-design" style={linkStyle}>UI/UX design</Link>.</>,
  },
];

const checklist = [
  ['Learners and roles', 'Who signs in (learners, tutors, admins, parents or managers) and what each role may see, change or approve.'],
  ['Content formats and ownership', 'Which formats you already have (video, SCORM, xAPI, PDF), who owns the content and how it is updated after launch.'],
  ['Existing systems (LMS, SIS, HR)', 'The student information, HR or LMS tools in use today and which one is the source of truth for each record.'],
  ['Student privacy', 'What learner data you collect, who may access it and which consent and retention rules apply, using the Canadian privacy checklist.'],
  ['Accessibility (WCAG 2.2 AA)', 'The accessibility standard you must meet and the devices and assistive technology your learners rely on.'],
  ['Scale and peak times (exams, term start)', 'Expected learner numbers, concurrent exams and term-start spikes so hosting and support are sized for them.'],
  ['Support after launch', 'Support hours, who triages learner issues, uptime targets, release windows and how incidents are reported.'],
];

const buyerContent = (
  <section aria-labelledby="edtech-buyer-guide" style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 id="edtech-buyer-guide" style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Scoping an EdTech or LMS development project</h2>
      <p style={{ ...pStyle, maxWidth: 720 }}>Mapletech Labs is an EdTech software development company in Canada. We build learning management systems (LMS), e-learning apps and virtual classrooms for schools, training companies and EdTech startups, from our Edmonton head office.</p>
      <p style={{ ...pStyle, maxWidth: 720 }}>Most EdTech buyers come to us for one of three projects. Jump to <a href="#lms-development" style={linkStyle}>LMS development</a>, <a href="#e-learning-app-development" style={linkStyle}>e-learning app development</a>, <a href="#virtual-classroom-development" style={linkStyle}>virtual classrooms and live tutoring</a> or the <a href="#edtech-procurement-checklist" style={linkStyle}>procurement checklist</a>.</p>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', marginTop: 20 }}>
        {buyerTracks.map(t => (
          <article key={t.id} id={t.id} style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>{t.title}</h3>
            <p style={pStyle}><strong>Starting point:</strong> {t.start}</p>
            <p style={pStyle}><strong>First workflow to scope:</strong> {t.workflow}</p>
            <p style={pStyle}><strong>System access needed:</strong> {t.access}</p>
            <p style={pStyle}><strong>Acceptance criteria:</strong> {t.accept}</p>
            <p style={{ ...pStyle, marginBottom: 0 }}>{t.extra}</p>
          </article>
        ))}
      </div>
      <div id="edtech-procurement-checklist" style={{ ...cardStyle, marginTop: 28 }}>
        <h3 style={{ marginTop: 0, marginBottom: 8 }}>EdTech procurement checklist</h3>
        <p style={pStyle}>Agree these requirements in discovery so the quote, timeline and statement of work reflect your real environment. Your privacy and compliance team stays the authority on legal obligations; we build to the requirements you confirm.</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          {checklist.map(([k, v]) => (
            <li key={k} style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>{k}:</strong> {v}</li>
          ))}
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>Budgeting an EdTech build? Compare <Link href="/pricing" style={linkStyle}>typical project price ranges in CAD</Link>, book a <Link href="/services/software-discovery" style={linkStyle}>software discovery sprint</Link> to scope it properly, and read our <Link href="/blog/app-privacy-compliance-canada" style={linkStyle}>PIPEDA and Law 25 privacy checklist</Link> before you collect learner data.</p>
      </div>
    </div>
  </section>
);

const extra = (
  <section style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Services for this sector</h2>
      <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/services/web-development" style={linkStyle}>Web development</Link></li>
        <li><Link href="/services/mobile-app-development" style={linkStyle}>Mobile app development</Link></li>
        <li><Link href="/services/ai-ml" style={linkStyle}>AI & machine learning</Link></li>
      </ul>
    </div>
  </section>
);

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="edtech"
      name="EdTech"
      copy={{ badge: "EdTech", title: <>EdTech Development That <span style={{ color: 'var(--brand)' }}>Inspires Learning.</span></>, desc: <>EdTech and e-learning software development — adaptive learning platforms, LMS builds, live tutoring apps and AI-powered assessment tools that make education accessible to everyone.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "LearnPath", headline: "500K learners, 85% completion rate \u2014 industry avg is 15%", text: "We rebuilt their platform with an AI-powered adaptive engine, gamified progress tracking, and a native mobile app that works offline \u2014 tripling engagement within 60 days.", quote: "Our learner engagement tripled after the new platform launched.", cite: "Head of Product, LearnPath" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your EdTech Platform.", sub: "Engaging, accessible, and scalable \u2014 learning platforms that change lives." }}
      faqs={industryFaqs.edtech}
      cityLinks={cityLinks}
      buyerContent={buyerContent}
      extra={extra}
    />
  );
}
