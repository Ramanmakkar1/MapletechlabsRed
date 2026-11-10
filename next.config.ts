import path from 'node:path';
import { execSync } from 'node:child_process';
import type { NextConfig } from "next";

function buildSha(): string {
  const fromEnv = process.env.BUILD_SHA || process.env.VERCEL_GIT_COMMIT_SHA || process.env.GIT_COMMIT || process.env.SOURCE_COMMIT;
  if (fromEnv) return fromEnv.slice(0, 7);
  try {
    return execSync('git rev-parse --short=7 HEAD', { cwd: __dirname, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() || 'unknown';
  } catch {
    return 'unknown';
  }
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  env: { BUILD_SHA: buildSha(), BUILD_TIME: new Date().toISOString() },
  // This repo sits inside another project that has its own package-lock.json.
  // Pin the root so Next/Turbopack never pick the parent folder.
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: { root: path.resolve(__dirname) },
  // Next's default bot list plus the AI, search and social bots, so those crawlers get the full HTML head before streaming.
  htmlLimitedBots: /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight|Googlebot|GPTBot|ChatGPT-User|OAI-SearchBot|PerplexityBot|ClaudeBot|anthropic-ai|Bytespider/i,
  // ISR expire time in seconds (this is not a 300 s revalidate).
  expireTime: 3600,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'logo.clearbit.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org', pathname: '/**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      // Other HTML pages. Middleware no longer runs on them; browsers still
      // revalidate and the CDN keeps the copy for 1 h. /api, /_next and files
      // are excluded so they keep Next's own cache headers. The key pages
      // below replace this value.
      {
        source: '/((?!api|_next|.*\\..*).*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate, s-maxage=3600, stale-while-revalidate=86400' }],
      },
      {
        source: '/',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }],
      },
      {
        source: '/case-studies',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/case-studies/:slug',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/blog/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/services/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/faq',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/pricing',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/industries/:slug',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/industries/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/locations',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/locations/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      // The keyword city pages and the city+service mesh are the slowest
      // templates in the audit. They are fully static, so let the CDN keep
      // them for a day and serve stale for a week while the edge revalidates.
      {
        source: '/locations/:slug',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/locations/:city/:service',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
      {
        source: '/locations/ai-development-company-in-vancouver',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400' }],
      },
    ];
  },
  async redirects() {
    // Priority services moved from the /locations/<city>/<service> mesh to keyword URLs.
    // 301 the old mesh URLs so there is no duplicate content / cannibalization.
    const cityHubs = ['edmonton', 'toronto', 'vancouver', 'calgary', 'ottawa', 'montreal', 'winnipeg', 'halifax', 'victoria', 'saskatoon', 'kitchener', 'london-on', 'mississauga', 'hamilton', 'surrey', 'burnaby', 'regina', 'quebec-city', 'brampton', 'markham', 'windsor', 'kelowna', 'laval', 'gatineau'];
    const cityLandingRedirects = cityHubs.map(c => ({ source: `/locations/${c}`, destination: `/locations/software-development-company-in-${c}`, statusCode: 301 as const }));
    const priority: [string, string][] = [['ai-ml', 'ai-development'], ['saas-development', 'saas-development'], ['mobile-app-development', 'app-development'], ['web-development', 'web-development'], ['digital-marketing', 'seo'], ['product-design', 'ui-ux-design']];
    const serviceCityMeshRedirects = cityHubs.flatMap(c => priority.map(([svc, kw]) => ({ source: `/locations/${c}/${svc}`, destination: `/locations/${kw}-company-in-${c}`, statusCode: 301 as const })));
    // Niche services (blockchain-web3, ar-vr, game-development) are not in the priority
    // keyword list. For non-major cities, their /locations/<city>/<service> mesh pages
    // are not indexable and return errors. Redirect them to the core service page.
    const majorTechCities = new Set(['toronto', 'vancouver', 'montreal', 'calgary', 'edmonton', 'ottawa']);
    const nicheServices = ['blockchain-web3', 'ar-vr', 'game-development'] as const;
    const nicheMeshRedirects = cityHubs
      .filter(c => !majorTechCities.has(c))
      .flatMap(c => nicheServices.map(svc => ({ source: `/locations/${c}/${svc}`, destination: `/services/${svc}`, statusCode: 301 as const })));
    const frNicheMeshRedirects = cityHubs
      .filter(c => !majorTechCities.has(c))
      .flatMap(c => nicheServices.map(svc => ({ source: `/fr/locations/${c}/${svc}`, destination: `/services/${svc}`, statusCode: 301 as const })));
    // /fr versions of the same rules, pointing straight at the final keyword URLs so
    // old French URLs redirect in ONE hop instead of chaining through /fr/:path*
    // (e.g. /fr/locations/calgary/digital-marketing -> /locations/seo-company-in-calgary).
    const frServiceCityMeshRedirects = cityHubs.flatMap(c => priority.map(([svc, kw]) => ({ source: `/fr/locations/${c}/${svc}`, destination: `/locations/${kw}-company-in-${c}`, statusCode: 301 as const })));
    const frCityLandingRedirects = cityHubs.map(c => ({ source: `/fr/locations/${c}`, destination: `/locations/software-development-company-in-${c}`, statusCode: 301 as const }));
    const frKeywordRedirects = cityHubs.flatMap(c => priority.map(([, kw]) => ({ source: `/fr/locations/${kw}-company-in-${c}`, destination: `/locations/${kw}-company-in-${c}`, statusCode: 301 as const })));
    return [
      // The old French locale (/fr/*) no longer exists; 301 to the English pages.
      // Destinations never start with /fr, so this cannot loop.
      { source: '/fr', destination: '/', statusCode: 301 as const },
      // Trailing-slash variant of the French homepage, in one hop (the :path*
      // catch-all below can be ambiguous about an empty path after the slash).
      { source: '/fr/', destination: '/', statusCode: 301 as const },
      // /fr mesh + landing + keyword rules go BEFORE the generic /fr/:path* catch-all
      // so old French URLs land on the final keyword URL in one hop (no 2-hop chain).
      ...frServiceCityMeshRedirects,
      ...frCityLandingRedirects,
      ...frKeywordRedirects,
      ...frNicheMeshRedirects,
      { source: '/fr/:path*', destination: '/:path*', statusCode: 301 as const },
      ...serviceCityMeshRedirects,
      ...nicheMeshRedirects,
      // City landing pages live at keyword URLs; 301 the bare /locations/<city> paths.
      // Exact path only, so the /locations/<city>/<service> mesh is unaffected.
      ...cityLandingRedirects,
      // WWW to non-www redirect (handles both http and https from www)
      {
        source: '/:path*',
        destination: 'https://mapletechlabs.ca/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.mapletechlabs.ca',
          },
        ],
      },
      // Old root-level slugs -> final keyword URLs (one hop, no chains)
      { source: '/software-development-company-in-edmonton', destination: '/locations/software-development-company-in-edmonton', permanent: true },
      { source: '/software-development-company-in-toronto', destination: '/locations/software-development-company-in-toronto', permanent: true },
      { source: '/software-development-company-in-vancouver', destination: '/locations/software-development-company-in-vancouver', permanent: true },
      { source: '/software-development-company-in-calgary', destination: '/locations/software-development-company-in-calgary', permanent: true },
      { source: '/software-development-company-in-ottawa', destination: '/locations/software-development-company-in-ottawa', permanent: true },
      { source: '/software-development-company-in-montreal', destination: '/locations/software-development-company-in-montreal', permanent: true },
      { source: '/app-development-company-in-edmonton', destination: '/locations/app-development-company-in-edmonton', permanent: true },
      { source: '/app-development-company-in-toronto', destination: '/locations/app-development-company-in-toronto', permanent: true },
      { source: '/app-development-company-in-vancouver', destination: '/locations/app-development-company-in-vancouver', permanent: true },
      { source: '/app-development-company-in-calgary', destination: '/locations/app-development-company-in-calgary', permanent: true },
      { source: '/web-development-company-in-edmonton', destination: '/locations/web-development-company-in-edmonton', permanent: true },
      { source: '/web-development-company-in-toronto', destination: '/locations/web-development-company-in-toronto', permanent: true },
      { source: '/web-development-company-in-vancouver', destination: '/locations/web-development-company-in-vancouver', permanent: true },
      { source: '/web-development-company-in-calgary', destination: '/locations/web-development-company-in-calgary', permanent: true },
      { source: '/digital-marketing-company-in-edmonton', destination: '/locations/seo-company-in-edmonton', permanent: true },
      { source: '/digital-marketing-company-in-toronto', destination: '/locations/seo-company-in-toronto', permanent: true },
      { source: '/digital-marketing-company-in-vancouver', destination: '/locations/seo-company-in-vancouver', permanent: true },
      { source: '/digital-marketing-company-in-calgary', destination: '/locations/seo-company-in-calgary', permanent: true },
      { source: '/seo-company-in-edmonton', destination: '/locations/seo-company-in-edmonton', permanent: true },
      { source: '/seo-company-in-toronto', destination: '/locations/seo-company-in-toronto', permanent: true },
      { source: '/seo-company-in-vancouver', destination: '/locations/seo-company-in-vancouver', permanent: true },
      { source: '/seo-company-in-calgary', destination: '/locations/seo-company-in-calgary', permanent: true },
      { source: '/ui-ux-design-company-in-edmonton', destination: '/locations/ui-ux-design-company-in-edmonton', permanent: true },
      { source: '/ui-ux-design-company-in-toronto', destination: '/locations/ui-ux-design-company-in-toronto', permanent: true },
      { source: '/ui-ux-design-company-in-vancouver', destination: '/locations/ui-ux-design-company-in-vancouver', permanent: true },
      { source: '/ui-ux-design-company-in-calgary', destination: '/locations/ui-ux-design-company-in-calgary', permanent: true },
      { source: '/ai-development-company-in-edmonton', destination: '/locations/ai-development-company-in-edmonton', permanent: true },
      { source: '/ai-development-company-in-toronto', destination: '/locations/ai-development-company-in-toronto', permanent: true },
      { source: '/ai-development-company-in-vancouver', destination: '/locations/ai-development-company-in-vancouver', permanent: true },
      { source: '/ai-development-company-in-calgary', destination: '/locations/ai-development-company-in-calgary', permanent: true },
      // ── Legacy URLs reported as 404 in Google Search Console (16 URLs) ──
      // These are indexed leftovers from the previous WordPress/.com site.
      // Each 301s to its closest current equivalent so the link equity is kept
      // and the "Not found (404)" report drains instead of growing.
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/mobile-app-development', destination: '/services/mobile-app-development', permanent: true },
      { source: '/mobile-app-development-in-edmonton', destination: '/locations/app-development-company-in-edmonton', permanent: true },
      { source: '/custom-android-apps-2', destination: '/services/mobile-app-development/android-app-development', permanent: true },
      { source: '/react-native-app-development-company', destination: '/services/mobile-app-development/react-native-apps', permanent: true },
      { source: '/services/blockchain', destination: '/services/blockchain-web3', permanent: true },
      { source: '/services/saas-development/saas-development/multi-tenant', destination: '/services/saas-development/multi-tenant-architecture', permanent: true },
      { source: '/app-development-company-in-saskatchewan-2', destination: '/locations/app-development-company-in-saskatoon', permanent: true },
      { source: '/software-development-company-in-red-deer', destination: '/locations/software-development-company-in-edmonton', permanent: true },
      // Vertical landing pages from the old site → nearest industry or service page
      { source: '/fintech-app-development-company', destination: '/industries/fintech', permanent: true },
      { source: '/insuretech-app-development-company', destination: '/industries/fintech', permanent: true },
      { source: '/education-app-development-company', destination: '/industries/edtech', permanent: true },
      { source: '/construction-app-development-company', destination: '/services/mobile-app-development', permanent: true },
      { source: '/hospitality-app-development-company', destination: '/services/mobile-app-development', permanent: true },
      { source: '/travel-app-development-company', destination: '/services/mobile-app-development', permanent: true },
      { source: '/sports-app-development-company', destination: '/services/mobile-app-development', permanent: true },
      // Old .com domain paths (catch common patterns)
      { source: '/mobile-app-development-:city', destination: '/locations/app-development-company-in-:city', permanent: true },
      { source: '/web-development-:city', destination: '/locations/web-development-company-in-:city', permanent: true },
      { source: '/software-development-:city', destination: '/locations/software-development-company-in-:city', permanent: true },
    ];
  },
};

export default nextConfig;
