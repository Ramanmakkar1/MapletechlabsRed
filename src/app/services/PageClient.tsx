'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { officeMedia, serviceMedia, humanMedia } from '@/data/media';
import MediaBand from '@/components/MediaBand';
import PageHero from '@/components/page/PageHero';
import FinalCta from '@/components/home/FinalCta';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid var(--line)',
  borderRadius: 24,
  background: 'var(--surface-alt)',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const cardHover: React.CSSProperties = {
  borderColor: 'var(--brand)',
  background: 'transparent',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.10)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

interface ServiceCategory {
  title: string;
  href: string;
  initial: string;
  color: string;
  description: string;
  subServices: { name: string; href: string }[];
}

const services: ServiceCategory[] = [
  {
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    initial: 'M',
    color: 'var(--brand)',
    description: 'We engineer native iOS, Android, and cross-platform mobile applications that drive measurable business results. From fintech trading apps to healthcare platforms and e-commerce storefronts, our team specializes in building apps that users love and investors notice. We combine Swift, Kotlin, Flutter, and React Native expertise to deliver high-performance solutions tailored to your audience. Our methodology spans discovery, UX design, agile development, rigorous QA across 200+ real devices, and post-launch App Store optimization. Most MVPs ship in 8-12 weeks with full 30-day post-launch support. We\'ve delivered 300+ apps with a 4.9-star App Store average, handling everything from concept to ASO to ongoing SLA support for scaling businesses.',
    subServices: [
      { name: 'iOS App Development', href: '/services/mobile-app-development/ios-app-development' },
      { name: 'Android App Development', href: '/services/mobile-app-development/android-app-development' },
      { name: 'Flutter Development', href: '/services/mobile-app-development/flutter-development' },
      { name: 'React Native Apps', href: '/services/mobile-app-development/react-native-apps' },
      { name: 'Cross-Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' },
    ],
  },
  {
    title: 'Web Development',
    href: '/services/web-development',
    initial: 'W',
    color: '#E11900',
    description: 'We architect and build scalable web systems for startups and enterprises. Our expertise spans React, Next.js, Node.js, and GraphQL to deliver SaaS platforms, e-commerce storefronts, and complex enterprise applications. Using modern frameworks and cloud-native architecture, we design systems that grow from MVP to millions of users. Our approach includes discovery and requirements mapping, database schema design, high-fidelity prototyping, agile development with weekly deployments, and post-launch performance optimization. Real examples: fintech dashboards handling $10M+ in daily transactions, HIPAA-compliant healthcare portals, and multi-tenant SaaS with Stripe billing integration. Technology stack: React, Next.js, TypeScript, PostgreSQL, GraphQL, AWS, Kubernetes. Timeline: 4-12 weeks from kickoff to production. Ideal for companies needing robust, scalable web infrastructure.',
    subServices: [
      { name: 'Next.js Development', href: '/services/web-development/nextjs-development' },
      { name: 'SaaS Platforms', href: '/services/web-development/saas-platforms' },
      { name: 'E-Commerce Systems', href: '/services/web-development/ecommerce-systems' },
      { name: 'API & Backend', href: '/services/web-development/api-backend' },
      { name: 'Enterprise Portals', href: '/services/web-development/enterprise-portals' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    href: '/services/ai-ml',
    initial: 'A',
    color: '#E11900',
    description: 'We deploy cutting-edge AI and machine learning solutions that unlock automation, intelligence, and competitive advantage. Our team combines LLM integration (GPT-4, Claude, Llama), computer vision, and predictive analytics to solve real business problems. Methodology: we analyze your data, build custom models, integrate with your systems, and measure impact. Real examples: AI-powered customer support reducing ticket resolution time by 70%, predictive inventory systems for e-commerce, document classification for legal firms, and anomaly detection for fraud prevention. Technology stack: Python, TensorFlow, PyTorch, OpenAI API, Hugging Face, AWS SageMaker. Deliverables include data preparation, model training, API integration, and monitoring dashboards. Timeline: POC in 4 weeks, production deployment in 8-12 weeks. Key benefits: 24/7 automation, reduced operational costs, improved decision-making, and scalable intelligence.',
    subServices: [
      { name: 'LLM Integration', href: '/services/ai-ml/llm-integration' },
      { name: 'AI Automation', href: '/services/ai-ml/ai-automation' },
      { name: 'Computer Vision', href: '/services/ai-ml/computer-vision' },
      { name: 'Predictive Analytics', href: '/services/ai-ml/predictive-analytics' },
      { name: 'AI Chatbots', href: '/services/ai-ml/ai-chatbots' },
    ],
  },
  {
    title: 'Blockchain & Web3',
    href: '/services/blockchain-web3',
    initial: 'B',
    color: '#E11900',
    description: 'We build decentralized applications, smart contracts, and blockchain solutions for the Web3 era. Our expertise spans Solidity smart contracts, DeFi protocol development, NFT platforms, and crypto wallet integration. Methodology: requirements analysis, contract architecture design, comprehensive testing (audits on request), and mainnet deployment with ongoing support. Real examples: DeFi yield farming protocols enabling users to earn 8-12% APY, NFT marketplaces with $50M+ trading volume, and permissionless lending platforms. Technology stack: Solidity, Hardhat, Ethers.js, Web3.js, Ethereum, Polygon, Arbitrum. Deliverables include audited smart contracts, web frontends for user interaction, liquidity management systems, and governance mechanisms. Timeline: smart contracts in 6-8 weeks, full dApp in 12-16 weeks. Key benefits: decentralized trust, 24/7 operation, transparent on-chain audit trails, and access to global liquidity.',
    subServices: [
      { name: 'Smart Contracts', href: '/services/blockchain-web3/smart-contracts' },
      { name: 'DeFi Protocols', href: '/services/blockchain-web3/defi-protocols' },
      { name: 'NFT Platforms', href: '/services/blockchain-web3/nft-platforms' },
      { name: 'Crypto Wallets', href: '/services/blockchain-web3/crypto-wallets' },
      { name: 'Web3 dApps', href: '/services/blockchain-web3/web3-dapps' },
    ],
  },
  {
    title: 'Product Design',
    href: '/services/product-design',
    initial: 'P',
    color: '#E11900',
    description: 'We craft intuitive digital experiences that drive user engagement and business growth through human-centered design. Our approach begins with comprehensive user research, competitive analysis, and stakeholder interviews to understand needs and pain points. We create detailed personas, user journeys, and wireframes, then validate with interactive prototypes before a single line of code is written. Real example: redesigning a fintech dashboard increased user adoption by 45% and reduced support tickets by 30% through simplified navigation and personalized workflows. Deliverables: user research reports, detailed wireframes, interactive Figma prototypes, design systems with component libraries, and handoff documentation. Technology stack: Figma, Whimsical, UserTesting, Maze. Timeline: discovery to design system in 4-8 weeks. Key benefits: reduced development rework, faster time-to-market, improved user retention, measurable conversion increases, and scalable design consistency.',
    subServices: [
      { name: 'UI/UX Strategy', href: '/services/product-design/ui-ux-strategy' },
      { name: 'Wireframing', href: '/services/product-design/wireframing' },
      { name: 'Prototyping', href: '/services/product-design/prototyping' },
      { name: 'Design Systems', href: '/services/product-design/design-systems' },
      { name: 'Brand Identity', href: '/services/product-design/brand-identity' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    href: '/services/cloud-devops',
    initial: 'C',
    color: '#E11900',
    description: 'We design and implement production-grade cloud infrastructure, CI/CD automation, and DevOps workflows that enable teams to deploy confidently at scale. Our methodology encompasses AWS architecture design, containerization with Docker and Kubernetes, infrastructure-as-code, monitoring setup, and automated testing pipelines. Real example: migrating a legacy monolith to Kubernetes reduced deployment time from 4 hours to 8 minutes and improved system reliability to 99.99% uptime. Deliverables: VPC and networking design, containerized applications, Helm charts, automated CI/CD pipelines, infrastructure templates (Terraform), monitoring dashboards, and runbooks. Technology stack: AWS, Kubernetes, Docker, Terraform, GitHub Actions, DataDog, Prometheus. Timeline: foundational setup in 2-4 weeks, comprehensive DevOps maturity in 8-12 weeks. Key benefits: faster deployments, reduced human error, automatic scaling, cost optimization, and improved system observability.',
    subServices: [
      { name: 'AWS Architecture', href: '/services/cloud-devops/aws-architecture' },
      { name: 'Kubernetes & Docker', href: '/services/cloud-devops/kubernetes-docker' },
      { name: 'CI/CD Pipelines', href: '/services/cloud-devops/ci-cd-pipelines' },
      { name: 'Infrastructure as Code', href: '/services/cloud-devops/infrastructure-as-code' },
      { name: 'Performance & Scaling', href: '/services/cloud-devops/performance-scaling' },
    ],
  },
  {
    title: 'AR & VR Development',
    href: '/services/ar-vr',
    initial: 'R',
    color: '#E11900',
    description: 'Immersive augmented and virtual reality experiences for mobile, web, and enterprise applications.',
    subServices: [
      { name: 'Mobile AR', href: '/services/ar-vr/mobile-ar' },
      { name: 'VR Applications', href: '/services/ar-vr/vr-applications' },
      { name: 'WebXR Experiences', href: '/services/ar-vr/webxr-experiences' },
      { name: 'Apple Vision Pro', href: '/services/ar-vr/apple-vision-pro' },
      { name: 'Industrial AR', href: '/services/ar-vr/industrial-ar' },
    ],
  },
  {
    title: 'Game Development',
    href: '/services/game-development',
    initial: 'G',
    color: '#E11900',
    description: 'Engaging mobile games, Unity and Unreal Engine titles, and multiplayer experiences with LiveOps.',
    subServices: [
      { name: 'Mobile Games', href: '/services/game-development/mobile-games' },
      { name: 'Unity Development', href: '/services/game-development/unity-development' },
      { name: 'Unreal Engine', href: '/services/game-development/unreal-engine' },
      { name: 'Hyper-Casual Games', href: '/services/game-development/hyper-casual-games' },
      { name: 'Multiplayer & LiveOps', href: '/services/game-development/multiplayer-liveops' },
    ],
  },
  {
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    initial: 'D',
    color: '#E11900',
    description: 'Data-driven SEO, PPC, social media, and content marketing strategies to grow your online presence.',
    subServices: [
      { name: 'SEO Services', href: '/services/digital-marketing/seo-services' },
      { name: 'Google Ads (PPC)', href: '/services/digital-marketing/google-ads-ppc' },
      { name: 'Social Media Marketing', href: '/services/digital-marketing/social-media-marketing' },
      { name: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
      { name: 'Performance Analytics', href: '/services/digital-marketing/performance-analytics' },
    ],
  },
  {
    title: 'Branding & Identity',
    href: '/services/branding',
    initial: 'B',
    color: '#E11900',
    description: 'Comprehensive brand strategy, visual identity, guidelines, and motion branding that set you apart.',
    subServices: [
      { name: 'Brand Strategy', href: '/services/branding/brand-strategy' },
      { name: 'Logo & Visual Identity', href: '/services/branding/logo-visual-identity' },
      { name: 'Brand Guidelines', href: '/services/branding/brand-guidelines' },
      { name: 'Rebranding', href: '/services/branding/rebranding' },
      { name: 'Motion & Video Branding', href: '/services/branding/motion-video-branding' },
    ],
  },
  {
    title: 'WordPress & CMS',
    href: '/services/wordpress-cms',
    initial: 'W',
    color: '#E11900',
    description: 'Custom WordPress themes, headless CMS setups, WooCommerce stores, and site speed optimisation.',
    subServices: [
      { name: 'Custom WordPress Themes', href: '/services/wordpress-cms/custom-wordpress-themes' },
      { name: 'WooCommerce Stores', href: '/services/wordpress-cms/woocommerce-stores' },
      { name: 'Headless WordPress', href: '/services/wordpress-cms/headless-wordpress' },
      { name: 'Strapi / Sanity CMS', href: '/services/wordpress-cms/strapi-sanity-cms' },
      { name: 'Site Speed Optimisation', href: '/services/wordpress-cms/site-speed-optimisation' },
    ],
  },
  {
    title: 'SaaS Development',
    href: '/services/saas-development',
    initial: 'S',
    color: '#E11900',
    description: 'End-to-end SaaS product development — from MVP to multi-tenant architecture, billing, and analytics.',
    subServices: [
      { name: 'SaaS MVP Development', href: '/services/saas-development/saas-mvp-development' },
      { name: 'Multi-Tenant Architecture', href: '/services/saas-development/multi-tenant-architecture' },
      { name: 'Billing & Subscriptions', href: '/services/saas-development/billing-subscriptions' },
      { name: 'Auth & SSO', href: '/services/saas-development/auth-sso' },
      { name: 'Analytics & Dashboards', href: '/services/saas-development/analytics-dashboards' },
    ],
  },
];

export default function ServicesIndexPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--surface)', color: 'var(--ink)', paddingTop: 'var(--section-y)' }}>

        {/* HERO */}
        <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} copy={{ badge: "What we do", title: <>Software Development<br /><span style={{ color: 'var(--brand)' }}>Services in Canada.</span></>, desc: <>From mobile apps and AI to web platforms, cloud and branding — a Canadian software development company delivering end-to-end digital solutions that help startups and enterprises build, launch and scale.</> }} photo={humanMedia.team} form={false} />

        {/* SERVICE GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 600, marginBottom: '1rem' }}>Everything You Need to Build & Grow</h2>
              <p style={{ color: 'var(--body)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>Explore our full range of services — each backed by deep domain expertise.</p>
            </div>
            <div className="reveal grid grid--3">
              {services.map(service => (
                <Card key={service.href}>

                  {/* Title */}
                  <Link href={service.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{ fontWeight: 600, fontSize: 'var(--fs-h4)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{service.title}</h3>
                  </Link>

                  {/* Description */}
                  <p className="clamp-3" style={{ color: 'var(--body)', fontSize: 14.5, lineHeight: 1.7, marginBottom: '1rem' }}>{service.description}</p>

                  {/* Sub-services */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px', marginBottom: '1.25rem', flexGrow: 1 }}>
                    {service.subServices.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        style={{ fontSize: 12.5, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.6 }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>

                  {/* Learn More */}
                  <Link href={service.href} style={{ color: 'var(--brand)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', marginTop: 'auto' }}>
                    Learn More &rarr;
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <MediaBand media={humanMedia.planning} ratio="21 / 8" />
        <FinalCta title="Not sure which service you need?" sub="Describe the outcome you’re after and we’ll tell you what it actually takes — scope, timeline and fixed price, within one working day." />

      </main>
      <Footer />
    </>
  );
}
