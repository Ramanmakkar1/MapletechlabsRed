import type { ReactNode } from 'react';

export interface NavLink { label: string; href: string }
export interface ServiceCategory {
  title: string;
  icon: ReactNode;
  href: string;
  links: NavLink[];
}

// ── Mega menu data ──────────────────────────────────────────────────
export const serviceCategories = [
  {
    title: 'Mobile App Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    href: '/services/mobile-app-development',
    links: [
      { label: 'iOS App Development', href: '/services/mobile-app-development/ios-app-development' },
      { label: 'Android App Development', href: '/services/mobile-app-development/android-app-development' },
      { label: 'Flutter Development', href: '/services/mobile-app-development/flutter-development' },
      { label: 'React Native Apps', href: '/services/mobile-app-development/react-native-apps' },
      { label: 'Cross-Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' },
    ],
  },
  {
    title: 'Web Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    href: '/services/web-development',
    links: [
      { label: 'Next.js Development', href: '/services/web-development/nextjs-development' },
      { label: 'SaaS Platforms', href: '/services/web-development/saas-platforms' },
      { label: 'E-Commerce Systems', href: '/services/web-development/ecommerce-systems' },
      { label: 'API & Backend', href: '/services/web-development/api-backend' },
      { label: 'Enterprise Portals', href: '/services/web-development/enterprise-portals' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      </svg>
    ),
    href: '/services/ai-ml',
    links: [
      { label: 'LLM Integration', href: '/services/ai-ml/llm-integration' },
      { label: 'AI Automation', href: '/services/ai-ml/ai-automation' },
      { label: 'Computer Vision', href: '/services/ai-ml/computer-vision' },
      { label: 'Predictive Analytics', href: '/services/ai-ml/predictive-analytics' },
      { label: 'AI Chatbots', href: '/services/ai-ml/ai-chatbots' },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    href: '/services/blockchain-web3',
    links: [
      { label: 'Smart Contracts', href: '/services/blockchain-web3/smart-contracts' },
      { label: 'DeFi Protocols', href: '/services/blockchain-web3/defi-protocols' },
      { label: 'NFT Platforms', href: '/services/blockchain-web3/nft-platforms' },
      { label: 'Crypto Wallets', href: '/services/blockchain-web3/crypto-wallets' },
      { label: 'Web3 dApps', href: '/services/blockchain-web3/web3-dapps' },
    ],
  },
  {
    title: 'Product Design',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    href: '/services/product-design',
    links: [
      { label: 'UI/UX Strategy', href: '/services/product-design/ui-ux-strategy' },
      { label: 'Wireframing', href: '/services/product-design/wireframing' },
      { label: 'Prototyping', href: '/services/product-design/prototyping' },
      { label: 'Design Systems', href: '/services/product-design/design-systems' },
      { label: 'Brand Identity', href: '/services/product-design/brand-identity' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    href: '/services/cloud-devops',
    links: [
      { label: 'AWS Architecture', href: '/services/cloud-devops/aws-architecture' },
      { label: 'Kubernetes & Docker', href: '/services/cloud-devops/kubernetes-docker' },
      { label: 'CI/CD Pipelines', href: '/services/cloud-devops/ci-cd-pipelines' },
      { label: 'Infrastructure as Code', href: '/services/cloud-devops/infrastructure-as-code' },
      { label: 'Performance & Scaling', href: '/services/cloud-devops/performance-scaling' },
    ],
  },
  {
    title: 'AR & VR Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    href: '/services/ar-vr',
    links: [
      { label: 'Mobile AR (ARKit/ARCore)', href: '/services/ar-vr/mobile-ar' },
      { label: 'VR Applications', href: '/services/ar-vr/vr-applications' },
      { label: 'WebXR Experiences', href: '/services/ar-vr/webxr-experiences' },
      { label: 'Apple Vision Pro', href: '/services/ar-vr/apple-vision-pro' },
      { label: 'Industrial AR', href: '/services/ar-vr/industrial-ar' },
    ],
  },
  {
    title: 'Game Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01M7 12h.01" /><path d="M17 10v4" /><path d="M15 12h4" />
      </svg>
    ),
    href: '/services/game-development',
    links: [
      { label: 'Mobile Games (iOS/Android)', href: '/services/game-development/mobile-games' },
      { label: 'Unity Development', href: '/services/game-development/unity-development' },
      { label: 'Unreal Engine', href: '/services/game-development/unreal-engine' },
      { label: 'Hyper-Casual Games', href: '/services/game-development/hyper-casual-games' },
      { label: 'Multiplayer & LiveOps', href: '/services/game-development/multiplayer-liveops' },
    ],
  },
  {
    title: 'Digital Marketing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    href: '/services/digital-marketing',
    links: [
      { label: 'SEO Services', href: '/services/digital-marketing/seo-services' },
      { label: 'Google Ads (PPC)', href: '/services/digital-marketing/google-ads-ppc' },
      { label: 'Social Media Marketing', href: '/services/digital-marketing/social-media-marketing' },
      { label: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
      { label: 'Performance Analytics', href: '/services/digital-marketing/performance-analytics' },
    ],
  },
  {
    title: 'Branding & Identity',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    href: '/services/branding',
    links: [
      { label: 'Brand Strategy', href: '/services/branding/brand-strategy' },
      { label: 'Logo & Visual Identity', href: '/services/branding/logo-visual-identity' },
      { label: 'Brand Guidelines', href: '/services/branding/brand-guidelines' },
      { label: 'Rebranding', href: '/services/branding/rebranding' },
      { label: 'Motion & Video Branding', href: '/services/branding/motion-video-branding' },
    ],
  },
  {
    title: 'WordPress & CMS',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" /><path d="M4 9h16M9 4v16" />
      </svg>
    ),
    href: '/services/wordpress-cms',
    links: [
      { label: 'Custom WordPress Themes', href: '/services/wordpress-cms/custom-wordpress-themes' },
      { label: 'WooCommerce Stores', href: '/services/wordpress-cms/woocommerce-stores' },
      { label: 'Headless WordPress', href: '/services/wordpress-cms/headless-wordpress' },
      { label: 'Strapi / Sanity CMS', href: '/services/wordpress-cms/strapi-sanity-cms' },
      { label: 'Site Speed Optimisation', href: '/services/wordpress-cms/site-speed-optimisation' },
    ],
  },
  {
    title: 'SaaS Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    href: '/services/saas-development',
    links: [
      { label: 'SaaS MVP Development', href: '/services/saas-development/saas-mvp-development' },
      { label: 'Multi-Tenant Architecture', href: '/services/saas-development/multi-tenant-architecture' },
      { label: 'Billing & Subscriptions', href: '/services/saas-development/billing-subscriptions' },
      { label: 'Auth & SSO', href: '/services/saas-development/auth-sso' },
      { label: 'Analytics & Dashboards', href: '/services/saas-development/analytics-dashboards' },
    ],
  },
];

export const industryLinks = [
  { label: 'FinTech & Banking', href: '/industries/fintech' },
  { label: 'Healthcare & MedTech', href: '/industries/healthcare' },
  { label: 'E-Commerce & Retail', href: '/industries/ecommerce' },
  { label: 'Logistics & Supply Chain', href: '/industries/logistics' },
  { label: 'Education & EdTech', href: '/industries/edtech' },
  { label: 'Enterprise & SaaS', href: '/industries/enterprise' },
];

export const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

