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
    return [
      // City landing pages moved to keyword URLs (/locations/<city> → /locations/software-development-company-in-<city>).
      // Exact path only, so the /locations/<city>/<service> mesh is unaffected.
      { source: '/locations/edmonton', destination: '/locations/software-development-company-in-edmonton', permanent: true },
      { source: '/locations/toronto', destination: '/locations/software-development-company-in-toronto', permanent: true },
      { source: '/locations/vancouver', destination: '/locations/software-development-company-in-vancouver', permanent: true },
      { source: '/locations/calgary', destination: '/locations/software-development-company-in-calgary', permanent: true },
      { source: '/locations/ottawa', destination: '/locations/software-development-company-in-ottawa', permanent: true },
      { source: '/locations/montreal', destination: '/locations/software-development-company-in-montreal', permanent: true },
      { source: '/locations/winnipeg', destination: '/locations/software-development-company-in-winnipeg', permanent: true },
      { source: '/locations/halifax', destination: '/locations/software-development-company-in-halifax', permanent: true },
      { source: '/locations/victoria', destination: '/locations/software-development-company-in-victoria', permanent: true },
      { source: '/locations/saskatoon', destination: '/locations/software-development-company-in-saskatoon', permanent: true },
      { source: '/locations/kitchener', destination: '/locations/software-development-company-in-kitchener', permanent: true },
      { source: '/locations/london-on', destination: '/locations/software-development-company-in-london-on', permanent: true },
      // WWW to non-www redirect (handles both http and https from www)
      {
        source: '/:path((?!.*))*',
        destination: '/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.mapletechlabs.ca',
          },
        ],
      },
      // Old city+service slug pattern: /service-in-city → /locations/city/service
      { source: '/software-development-company-in-edmonton', destination: '/locations/edmonton/web-development', permanent: true },
      { source: '/software-development-company-in-toronto', destination: '/locations/toronto/web-development', permanent: true },
      { source: '/software-development-company-in-vancouver', destination: '/locations/vancouver/web-development', permanent: true },
      { source: '/software-development-company-in-calgary', destination: '/locations/calgary/web-development', permanent: true },
      { source: '/software-development-company-in-ottawa', destination: '/locations/ottawa/web-development', permanent: true },
      { source: '/software-development-company-in-montreal', destination: '/locations/montreal/web-development', permanent: true },
      { source: '/app-development-company-in-edmonton', destination: '/locations/edmonton/mobile-app-development', permanent: true },
      { source: '/app-development-company-in-toronto', destination: '/locations/toronto/mobile-app-development', permanent: true },
      { source: '/app-development-company-in-vancouver', destination: '/locations/vancouver/mobile-app-development', permanent: true },
      { source: '/app-development-company-in-calgary', destination: '/locations/calgary/mobile-app-development', permanent: true },
      { source: '/web-development-company-in-edmonton', destination: '/locations/edmonton/web-development', permanent: true },
      { source: '/web-development-company-in-toronto', destination: '/locations/toronto/web-development', permanent: true },
      { source: '/web-development-company-in-vancouver', destination: '/locations/vancouver/web-development', permanent: true },
      { source: '/web-development-company-in-calgary', destination: '/locations/calgary/web-development', permanent: true },
      { source: '/digital-marketing-company-in-edmonton', destination: '/locations/edmonton/digital-marketing', permanent: true },
      { source: '/digital-marketing-company-in-toronto', destination: '/locations/toronto/digital-marketing', permanent: true },
      { source: '/digital-marketing-company-in-vancouver', destination: '/locations/vancouver/digital-marketing', permanent: true },
      { source: '/digital-marketing-company-in-calgary', destination: '/locations/calgary/digital-marketing', permanent: true },
      { source: '/ai-development-company-in-edmonton', destination: '/locations/edmonton/ai-ml', permanent: true },
      { source: '/ai-development-company-in-toronto', destination: '/locations/toronto/ai-ml', permanent: true },
      { source: '/ai-development-company-in-vancouver', destination: '/locations/vancouver/ai-ml', permanent: true },
      { source: '/ai-development-company-in-calgary', destination: '/locations/calgary/ai-ml', permanent: true },
      // Old .com domain paths (catch common patterns)
      { source: '/mobile-app-development-:city', destination: '/locations/:city/mobile-app-development', permanent: true },
      { source: '/web-development-:city', destination: '/locations/:city/web-development', permanent: true },
      { source: '/software-development-:city', destination: '/locations/:city/web-development', permanent: true },

      // ── Legacy URLs reported as 404 in Google Search Console (16 URLs) ──
      // These are indexed leftovers from the previous WordPress/.com site.
      // Each 301s to its closest current equivalent so the link equity is kept
      // and the "Not found (404)" report drains instead of growing.
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/mobile-app-development', destination: '/services/mobile-app-development', permanent: true },
      { source: '/mobile-app-development-in-edmonton', destination: '/locations/edmonton/mobile-app-development', permanent: true },
      { source: '/custom-android-apps-2', destination: '/services/mobile-app-development/android-app-development', permanent: true },
      { source: '/react-native-app-development-company', destination: '/services/mobile-app-development/react-native-apps', permanent: true },
      { source: '/services/blockchain', destination: '/services/blockchain-web3', permanent: true },
      { source: '/services/saas-development/saas-development/multi-tenant', destination: '/services/saas-development/multi-tenant-architecture', permanent: true },
      { source: '/app-development-company-in-saskatchewan-2', destination: '/locations/saskatoon/mobile-app-development', permanent: true },
      { source: '/software-development-company-in-red-deer', destination: '/locations/edmonton/web-development', permanent: true },
      // Vertical landing pages from the old site → nearest industry or service page
      { source: '/fintech-app-development-company', destination: '/industries/fintech', permanent: true },
      { source: '/insuretech-app-development-company', destination: '/industries/fintech', permanent: true },
      { source: '/education-app-development-company', destination: '/industries/edtech', permanent: true },
      { source: '/construction-app-development-company', destination: '/services/mobile-app-development', permanent: true },
      { source: '/hospitality-app-development-company', destination: '/services/mobile-app-development', permanent: true },
      { source: '/travel-app-development-company', destination: '/services/mobile-app-development', permanent: true },
      { source: '/sports-app-development-company', destination: '/services/mobile-app-development', permanent: true },
    ];
  },
};

export default nextConfig;
