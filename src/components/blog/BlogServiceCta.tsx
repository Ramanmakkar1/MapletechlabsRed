import Link from 'next/link';

export type BlogServiceCtaData = { href: string; label: string };

/**
 * Canonical service page and descriptive anchor for each blog article that
 * renders its own PageClient instead of the shared ArticleTemplate.
 * Every href points at an existing service page, so no new URLs are created.
 */
export const BLOG_SERVICE_CTA: Record<string, BlogServiceCtaData> = {
  'ai-development-companies-canada': { href: '/services/ai-ml', label: 'AI development services' },
  'app-development-cost-canada': { href: '/services/mobile-app-development', label: 'mobile app development services' },
  'blockchain-development-companies-canada': { href: '/services/blockchain-web3', label: 'blockchain and Web3 development services' },
  'choose-software-development-company-canada': { href: '/services/software-development', label: 'custom software development services' },
  'digital-marketing-cost-canada': { href: '/services/digital-marketing', label: 'digital marketing services' },
  'freelancer-vs-agency-vs-in-house-canada': { href: '/services/software-development', label: 'custom software development services' },
  'saas-development-cost-canada': { href: '/services/saas-development', label: 'SaaS development services' },
  'saas-guide': { href: '/services/saas-development', label: 'SaaS development services' },
  'software-development-companies-calgary': { href: '/services/software-development', label: 'custom software development services' },
  'top-10-unicorn-apps-2026': { href: '/services/mobile-app-development', label: 'mobile app development services' },
  'top-seo-companies-canada': { href: '/services/digital-marketing', label: 'SEO and digital marketing services' },
  'top-software-development-companies-canada': { href: '/services/software-development', label: 'custom software development services' },
  'web-development-companies-toronto': { href: '/services/web-development', label: 'web development services' },
  'website-cost-canada': { href: '/services/web-development', label: 'web development services' },
};

export function getBlogServiceCta(slug: string): BlogServiceCtaData | null {
  return BLOG_SERVICE_CTA[slug] ?? null;
}

export default function BlogServiceCta({ slug }: { slug: string }) {
  const cta = getBlogServiceCta(slug);
  if (!cta) return null;
  return (
    <section style={{ paddingBottom: 'var(--section-y-sm)' }}>
      <div className="cb-container">
        <div
          className="reveal"
          style={{
            padding: 'clamp(22px, 2.6vw, 30px)',
            border: '1px solid var(--brand)',
            borderRadius: 'var(--r-lg)',
            background: 'var(--surface-alt)',
          }}
        >
          <h2 style={{ fontSize: 'var(--fs-h4)', fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px' }}>Related service</h2>
          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
            Get a quote for{' '}
            <Link
              href={cta.href}
              style={{ color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              {cta.label}
            </Link>{' '}
            from Mapletech Labs.
          </p>
        </div>
      </div>
    </section>
  );
}
