import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  expireTime: 600,
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
    ];
  },
  async redirects() {
    // Priority services moved from the /locations/<city>/<service> mesh to keyword URLs.
    // 301 the old mesh URLs so there is no duplicate content / cannibalization.
    const cityHubs = ['edmonton', 'toronto', 'vancouver', 'calgary', 'ottawa', 'montreal', 'winnipeg', 'halifax', 'victoria', 'saskatoon', 'kitchener', 'london-on', 'mississauga', 'hamilton', 'surrey', 'burnaby', 'regina', 'quebec-city', 'brampton', 'markham', 'windsor', 'kelowna', 'laval', 'gatineau'];
    const cityLandingRedirects = cityHubs.map(c => ({ source: `/locations/${c}`, destination: `/locations/software-development-company-in-${c}`, statusCode: 301 as const }));
    const priority: [string, string][] = [['ai-ml', 'ai-development'], ['saas-development', 'saas-development'], ['mobile-app-development', 'app-development'], ['web-development', 'web-development']];
    const serviceCityMeshRedirects = cityHubs.flatMap(c => priority.map(([svc, kw]) => ({ source: `/locations/${c}/${svc}`, destination: `/locations/${kw}-company-in-${c}`, statusCode: 301 as const })));
    return [
      // The old French locale (/fr/*) no longer exists; 301 to the English pages.
      // Destinations never start with /fr, so this cannot loop.
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
      ...serviceCityMeshRedirects,
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
      { source: '/digital-marketing-company-in-edmonton', destination: '/locations/edmonton/digital-marketing', permanent: true },
      { source: '/digital-marketing-company-in-toronto', destination: '/locations/toronto/digital-marketing', permanent: true },
      { source: '/digital-marketing-company-in-vancouver', destination: '/locations/vancouver/digital-marketing', permanent: true },
      { source: '/digital-marketing-company-in-calgary', destination: '/locations/calgary/digital-marketing', permanent: true },
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
