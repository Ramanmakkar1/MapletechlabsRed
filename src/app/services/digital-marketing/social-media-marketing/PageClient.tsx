import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '50M+', label: 'Impressions generated' },
  { value: '5x', label: 'Avg engagement rate' },
  { value: '30+', label: 'Platforms managed' },
  { value: '2M+', label: 'Followers grown for clients' },
];

const services = [
  { icon: '🗺️', title: 'Social Media Strategy', desc: 'Platform selection, audience targeting, competitive positioning, and content pillars — a complete strategic roadmap built for your business goals.' },
  { icon: '🎨', title: 'Content Creation & Scheduling', desc: 'Scroll-stopping graphics, video reels, carousels, and captions crafted by our creative team and scheduled for optimal engagement times.' },
  { icon: '💬', title: 'Community Management', desc: 'Daily monitoring and engagement across all your social channels — responding to comments, DMs, and mentions to build a loyal, active community.' },
  { icon: '🤝', title: 'Influencer Marketing', desc: 'Influencer identification, outreach, briefing, and campaign management to amplify your brand through trusted voices in your niche.' },
  { icon: '📣', title: 'Paid Social (Meta/TikTok/LinkedIn)', desc: 'Targeted paid campaigns across Meta, TikTok, LinkedIn, and Pinterest — audience build, creative testing, and ROAS-focused optimisation.' },
  { icon: '📊', title: 'Social Analytics & Reporting', desc: 'Monthly performance reports covering reach, engagement, follower growth, and paid social results with clear recommendations for the next period.' },
];

const steps = [
  { num: '01', title: 'Audit & Strategy', desc: 'We audit your existing social presence, analyse your competitors, define your target audiences, and build a channel-specific content and paid strategy.' },
  { num: '02', title: 'Content Calendar', desc: 'A monthly content calendar is planned and approved before publishing — covering content pillars, formats, captions, and paid creative requirements.' },
  { num: '03', title: 'Publish & Engage', desc: 'Content goes live on schedule while our team actively manages your community — engaging followers, handling messages, and responding to trends.' },
  { num: '04', title: 'Analyse & Optimise', desc: 'Monthly performance analysis informs the next month\'s strategy, testing new formats, refining audiences, and doubling down on what drives results.' },
];

const faqs = [
  { q: 'Which social media platforms should my business be on?', a: 'It depends on your audience and goals. B2C brands with visual products thrive on Instagram and TikTok. B2B companies often see the best ROI from LinkedIn. We audit where your audience is most active and recommend the right platforms during strategy — rather than spreading thin across all of them.' },
  { q: 'How often should we post?', a: 'Quality beats frequency. For most platforms, 3–5 posts per week is the sweet spot, supplemented by daily Stories or short-form video. We will recommend platform-specific posting cadences as part of your content strategy.' },
  { q: 'Organic vs paid social — which should I prioritise?', a: 'Organic builds community and brand trust over time. Paid social drives immediate reach and conversions. We recommend a combined approach: use organic to nurture your audience and paid social to acquire new customers and amplify your best content.' },
  { q: 'How do you measure social media ROI?', a: 'We track platform-native metrics (reach, engagement, follower growth) alongside business outcomes — website traffic, lead form submissions, and attributed revenue from paid social campaigns. Every monthly report ties activity to measurable business results.' },
  { q: 'Do you create the content or do we?', a: 'We handle all content creation unless you prefer to provide assets — our team produces graphics, video edits, captions, and creative concepts. For some clients we work in a hybrid model, using your team\'s raw footage or photography with our creative direction and editing.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/digital-marketing", label: "Digital Marketing" }}
      name="Social Media Marketing"
      copy={{ badge: "DIGITAL MARKETING", title: <>Social Media That <span style={{ color: 'var(--brand)' }}>Builds Brands</span></>, desc: <>Strategy, content, community management, and paid social — a full-service social media team that grows your audience and drives measurable business results.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
