import Image from 'next/image';
import { blogImage } from '@/data/media';

const featuredCaseStudy = {
  tag: 'Case Study',
  title: 'AI-Powered FinTech Trading Platform',
  excerpt: 'How we built a real-time trading engine processing 2M+ daily transactions with ML-driven sentiment analysis for a leading fintech client.',
  readTime: '5 min read',
  date: 'Mar 2026',
  href: '/case-studies/fintech-trading-platform',
};

const posts = [
  {
    tag: 'Business',
    title: 'Top 10 Unicorn Apps of 2026',
    excerpt: 'The mobile-first companies that crossed $1B valuation this year share a common thread: ruthless product discipline and engineering excellence.',
    readTime: '8 min read',
    date: 'Mar 2026',
    href: '/blog/top-10-unicorn-apps-2026',
  },
  {
    tag: 'Business',
    title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026',
    excerpt: 'Learn the exact blueprint non-technical founders use to build, launch, and scale successful B2B SaaS applications, and why custom architecture matters in 2026.',
    readTime: '7 min read',
    date: 'Mar 2026',
    href: '/blog/saas-guide',
  },
  {
    tag: 'Digital Marketing',
    title: 'Top 10 SEO Companies in Canada (2026)',
    excerpt: 'A comprehensive, data-driven ranking of the top 10 SEO agencies in Canada for 2026, featuring Mapletech Labs and other industry leaders driving serious organic growth.',
    readTime: '9 min read',
    date: 'Mar 2026',
    href: '/blog/top-seo-companies-canada',
  },
];

const servicePosts: Record<string, typeof posts> = {
  'mobile-app-development': [
    { tag: 'Business', title: 'App Development Cost in Canada (2026 Guide)', excerpt: 'Compare Canadian app development price ranges, from a focused MVP to a more complex mobile product.', readTime: '8 min read', date: 'Mar 2026', href: '/blog/app-development-cost-canada' },
    { tag: 'Engineering', title: 'Native vs Cross-Platform vs PWA: Choosing an App Approach', excerpt: 'Understand the trade-offs between native apps, cross-platform development and progressive web apps.', readTime: '9 min read', date: 'Sep 2026', href: '/blog/native-vs-cross-platform-vs-pwa' },
    { tag: 'Engineering', title: 'Privacy Compliance for Canadian Apps', excerpt: 'Plan for PIPEDA, Quebec Law 25 and provincial health privacy requirements when building an app.', readTime: '9 min read', date: 'Nov 2026', href: '/blog/app-privacy-compliance-canada' },
    { tag: 'Engineering', title: 'Healthcare Software Development in Canada: A Buyer’s Guide', excerpt: 'Plan project scope, privacy questions, EHR integration and vendor selection for Canadian healthcare software.', readTime: '10 min read', date: 'Nov 2026', href: '/blog/healthcare-software-development-canada' },
  ],
  'ai-ml': [
    { tag: 'AI/ML', title: 'AI Development Cost in Canada', excerpt: 'Explore the factors that shape the cost of building and integrating AI products in Canada.', readTime: '9 min read', date: 'Nov 2026', href: '/blog/ai-development-cost-canada' },
    { tag: 'AI/ML', title: 'AI Chatbot Development Cost in Canada', excerpt: 'See what an AI chatbot costs in Canada and which scope decisions change the price.', readTime: '9 min read', date: 'Nov 2026', href: '/blog/ai-chatbot-development-cost-canada' },
    { tag: 'AI/ML', title: 'AI Development Companies in Canada', excerpt: 'Compare Canadian AI development teams, capabilities and areas of specialization.', readTime: '9 min read', date: 'Mar 2026', href: '/blog/ai-development-companies-canada' },
    { tag: 'AI/ML', title: 'What Is Agentic AI?', excerpt: 'Learn how agentic AI systems plan and carry out multi-step tasks, and where they fit in products.', readTime: '9 min read', date: 'Sep 2026', href: '/blog/what-is-agentic-ai' },
    { tag: 'Engineering', title: 'Healthcare Software Development in Canada: A Buyer’s Guide', excerpt: 'Learn how to scope AI-assisted and other healthcare software with privacy, EHR integration and vendor checks.', readTime: '10 min read', date: 'Nov 2026', href: '/blog/healthcare-software-development-canada' },
  ],
  'product-design': [
    { tag: 'Business', title: 'UI/UX Design Companies in Canada', excerpt: 'A guide to Canadian product design and UI/UX teams and the work they specialize in.', readTime: '9 min read', date: 'Nov 2026', href: '/blog/ui-ux-design-companies-canada' },
    { tag: 'Engineering', title: 'Native vs Cross-Platform vs PWA: Choosing an App Approach', excerpt: 'See how platform choices affect product experience, reach and design decisions.', readTime: '9 min read', date: 'Sep 2026', href: '/blog/native-vs-cross-platform-vs-pwa' },
    { tag: 'Business', title: 'Build a SaaS MVP in 8 Weeks', excerpt: 'A practical, week-by-week approach to shaping, designing and launching a focused SaaS MVP.', readTime: '10 min read', date: 'Sep 2026', href: '/blog/build-saas-mvp-8-weeks' },
  ],
  'digital-marketing': [
    { tag: 'Digital Marketing', title: 'Top SEO Companies in Canada (2026)', excerpt: 'Compare leading Canadian SEO agencies and the organic growth work they deliver.', readTime: '9 min read', date: 'Mar 2026', href: '/blog/top-seo-companies-canada' },
    { tag: 'Digital Marketing', title: 'Digital Marketing Cost in Canada (2026)', excerpt: 'Review typical Canadian budgets for SEO, paid ads, social media and content marketing.', readTime: '7 min read', date: 'Mar 2026', href: '/blog/digital-marketing-cost-canada' },
    { tag: 'Business', title: 'Website Cost in Canada (2026 Guide)', excerpt: 'Compare website project pricing, from landing pages to custom web applications.', readTime: '7 min read', date: 'Mar 2026', href: '/blog/website-cost-canada' },
  ],
};

export default function InsightsSection({ serviceSlug }: { serviceSlug?: string }) {
  const recommendedPosts = serviceSlug ? servicePosts[serviceSlug] ?? posts : posts;

  return (
    <section id="insights" className="section-padding" style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'clamp(20px, 4vw, 40px)', marginBottom: 'clamp(40px, 8vw, 80px)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', textTransform: 'none', color: 'var(--faint)', marginBottom: 20 }}>Insights</div>
            <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              From the<br /><span style={{ color: 'var(--faint)' }}>Engineering Desk.</span>
            </h2>
          </div>
          <a href="/blog" className="insights-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: '0 28px', borderRadius: 100, border: '1px solid var(--line)', color: 'var(--muted)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: '0.3s', whiteSpace: 'nowrap' }}>
            View All Articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Featured Case Study */}
        <a
          href={featuredCaseStudy.href}
          className="reveal insights-featured"
          style={{
            display: 'flex',
            border: '1px solid var(--brand)',
            borderRadius: 'clamp(20px, 4vw, 32px)',
            overflow: 'hidden',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            background: 'var(--surface)',
            marginBottom: 40,
          }}
        >
          <div style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, width: 'fit-content', padding: '6px 14px', borderRadius: 100, background: 'transparent', border: '1px solid var(--brand)' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand)', letterSpacing: '-0.005em', textTransform: 'none' }}>{featuredCaseStudy.tag}</span>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.3, margin: 0 }}>{featuredCaseStudy.title}</h3>
            <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{featuredCaseStudy.excerpt}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8, fontSize: 13, fontWeight: 700, color: 'var(--brand)' }}>
              Read Case Study
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </div>
        </a>

        {/* Cards */}
        <div className="insights-grid">
          {recommendedPosts.map((post, i) => (
            <a
              key={post.title}
              href={post.href}
              className={`reveal insights-card reveal-d${i + 1}`}
              style={{
                border: '1px solid var(--line)',
                borderRadius: 'clamp(20px, 4vw, 32px)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                background: 'var(--surface-alt)',
              }}
            >
              {/* Photo header with the category chip over it */}
              <div className="media media--flat media--zoom" style={{ height: 200 }}>
                <Image
                  src={blogImage(i).src}
                  alt={blogImage(i).alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <span className="media__chip">{post.tag}</span>
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, margin: 0, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                  <span style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 600 }}>{post.date}</span>
                  <span style={{ fontSize: 12, color: 'var(--faint)', fontWeight: 600 }}>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
