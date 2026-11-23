import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '120+', label: 'Next.js Projects' },
  { value: 'Sub-1s', label: 'LCP Achieved' },
  { value: '99/100', label: 'Lighthouse Score' },
  { value: '6wk', label: 'Avg Delivery' },
];

const services = [
  { icon: '🏗️', title: 'App Router & Server Components', desc: 'We build with Next.js 14+ App Router, using React Server Components to eliminate unnecessary client-side JavaScript, reduce bundle sizes, and deliver faster initial page loads by default.' },
  { icon: '⚡', title: 'Static & Dynamic Rendering', desc: 'We choose the right rendering strategy per page — Static Generation (SSG), Incremental Static Regeneration (ISR), or Server-Side Rendering (SSR) — to balance performance, freshness, and infrastructure cost.' },
  { icon: '🔌', title: 'API Routes & Middleware', desc: 'Full-stack capability built in: we implement secure API routes, authentication middleware, rate limiting, and request validation directly within your Next.js project for a cohesive, monorepo architecture.' },
  { icon: '🌐', title: 'Edge Functions', desc: 'Performance-critical logic — A/B testing, geo-routing, authentication, and personalisation — runs at the edge via Next.js Middleware, executing in milliseconds worldwide before the page even renders.' },
  { icon: '🔍', title: 'SEO & Core Web Vitals', desc: 'We implement structured data, dynamic OG images, canonical tags, next/image optimisation, and font strategies to achieve top Core Web Vitals scores and maximum search visibility.' },
  { icon: '☁️', title: 'Vercel & AWS Deployment', desc: 'We configure production deployments on Vercel with preview environments, or self-host on AWS with ECS/Lambda and CloudFront for teams requiring full infrastructure control or custom compliance requirements.' },
];

const steps = [
  { num: '01', title: 'Architecture Planning', desc: 'We map out the rendering strategy, data fetching patterns, caching layers, and deployment target before any code is written — ensuring the architecture scales from day one without costly rewrites.' },
  { num: '02', title: 'Component System', desc: 'We build a typed, reusable component library using TypeScript and Storybook, establishing consistent design tokens, layout primitives, and a shared UI kit that accelerates every subsequent page.' },
  { num: '03', title: 'Performance Optimisation', desc: 'We profile Core Web Vitals with Lighthouse and WebPageTest, optimise images with next/image, implement route prefetching, and tune caching headers to achieve sub-second LCP across all pages.' },
  { num: '04', title: 'Production Deploy', desc: 'We set up CI/CD with GitHub Actions, configure preview deployments, establish monitoring with Sentry and Vercel Analytics, and perform load testing before any traffic hits production.' },
];

const faqs = [
  { q: 'Why Next.js over plain React?', a: 'Next.js adds file-based routing, server-side rendering, static generation, image optimisation, API routes, and edge middleware on top of React — dramatically reducing boilerplate and infrastructure complexity. You get better SEO, faster performance, and a full-stack framework out of the box without stitching together separate tools.' },
  { q: 'App Router vs Pages Router — which do you use?', a: 'For new projects we use the App Router exclusively. It unlocks React Server Components, streaming, nested layouts, and improved data fetching patterns. For existing projects on the Pages Router, we can migrate incrementally or continue to build in Pages Router based on your team\'s readiness.' },
  { q: 'How does SSR help with SEO?', a: 'Server-side rendered pages deliver fully formed HTML to search engine crawlers, eliminating the need for Googlebot to execute JavaScript before indexing content. Combined with proper metadata, structured data, and Core Web Vitals optimisation, SSR-powered Next.js sites consistently outperform client-rendered SPAs in search rankings.' },
  { q: 'Should we self-host or use Vercel?', a: 'Vercel is the fastest way to production and the recommended platform for Next.js — it handles edge caching, preview deployments, and serverless scaling automatically. For teams with strict data sovereignty, custom networking, or cost optimisation requirements at scale, we architect self-hosted deployments on AWS or GCP with full CI/CD.' },
  { q: 'Can you migrate our existing React app to Next.js?', a: 'Yes. We offer structured React-to-Next.js migrations using the Pages Router as an incremental adoption path, allowing you to migrate page by page without a full rewrite. We handle routing refactoring, SSR implementation, and resolving client-only library incompatibilities throughout the process.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/web-development", label: "Web Development" }}
      name="Next.js Development"
      copy={{ badge: "REACT FRAMEWORK", title: <>Next.js Websites Built for{' '} <span style={{ color: 'var(--brand)' }}>Speed & Search</span></>, desc: <>We specialise in Next.js development — building production-ready web applications with perfect Lighthouse scores, sub-second load times, and SEO-optimised architecture. From marketing sites to complex web apps, we do it right.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Full-Stack Next.js Expertise"
    />
  );
}
