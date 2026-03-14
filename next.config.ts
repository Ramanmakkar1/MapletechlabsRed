import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'logo.clearbit.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
