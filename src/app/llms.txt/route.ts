import { cities } from '@/data/cities';
import { PROJECT_PRICING } from '@/data/pricing';
import { PRIORITY_SERVICES, serviceCityPath } from '@/data/serviceCity';
import { services } from '@/data/services';
import { work } from '@/data/work';
import { BUSINESS, HQ_ADDRESS, LOCAL_BUSINESS_AREA_SERVED } from '@/lib/seo/business';
import { canonicalUrl } from '@/lib/seo/canonical';
import { SITEMAP_CHILDREN } from '@/lib/sitemap-data';

export const revalidate = 86400;

function buildText(): string {
  // Reuse the sitemap as the source of truth: only live, indexable URLs are emitted.
  const inSitemap = new Set(SITEMAP_CHILDREN.flatMap(child => child.entries().map(e => e.loc)));
  const link = (label: string, path: string, note?: string): string | null => {
    const url = canonicalUrl(path);
    if (!inSitemap.has(url)) return null;
    return `- [${label}](${url})${note ? `: ${note}` : ''}`;
  };
  const lines = (items: (string | null)[]) => items.filter((l): l is string => Boolean(l));

  const pricingNote = [
    `websites $${(PROJECT_PRICING.website.low / 1000).toFixed(0)}k–$${(PROJECT_PRICING.website.high / 1000).toFixed(0)}k`,
    `SaaS MVPs $${(PROJECT_PRICING.saas.low / 1000).toFixed(0)}k–$${(PROJECT_PRICING.saas.high / 1000).toFixed(0)}k`,
    `mobile apps $${(PROJECT_PRICING.mobile.low / 1000).toFixed(0)}k–$${(PROJECT_PRICING.mobile.high / 1000).toFixed(0)}k`,
  ].join(', ');

  const out: string[] = [];
  out.push(`# ${BUSINESS.name}`);
  out.push('');
  out.push('> Concise entity index for AI assistants and crawlers. Full index: ' + canonicalUrl('/llms-full.txt'));
  out.push('');
  out.push(`${BUSINESS.name} is a custom software, mobile app, AI and UI/UX development company, founded in 2018 in Edmonton by Raman Makkar, serving Edmonton, Calgary, Toronto and Vancouver.`);
  out.push('');
  out.push('## Entity facts');
  out.push('');
  out.push(`- Name: ${BUSINESS.name}`);
  out.push(`- Headquarters: ${HQ_ADDRESS.addressLocality}, ${HQ_ADDRESS.addressRegion} ${HQ_ADDRESS.postalCode}, Canada`);
  out.push(`- Phone: ${BUSINESS.telephone}`);
  out.push(`- Email: ${BUSINESS.email}`);
  out.push(`- Website: ${canonicalUrl('/')}`);
  out.push(`- Cities served: ${LOCAL_BUSINESS_AREA_SERVED.map(a => a.name).join(', ')}`);
  out.push(`- Founder: Raman Makkar, Founder & CEO — ${canonicalUrl('/about/raman-makkar')}`);
  out.push(`- Founded: 2018, in Edmonton`);
  out.push(`- Former name: TML Branding Agency`);
  out.push(`- Team: 25+ engineers, designers and strategists`);
  out.push(`- Projects delivered: 500+ for clients across Canada and internationally`);
  out.push(`- Founder experience: 15+ years in software engineering`);
  out.push(`- What we build: custom software, web applications, iOS and Android apps, AI/ML solutions, UI/UX design, SaaS platforms and cloud infrastructure`);
  out.push(`- Industries: fintech, healthcare, e-commerce, logistics, edtech, real estate and enterprise`);
  out.push('');
  out.push('## Core services');
  out.push('');
  out.push(...lines(services.map(s => link(s.name, `/services/${s.slug}`, s.relatedSubServices.map(r => r.name).join(', ')))));
  out.push('');
  out.push('## Primary service pages');
  out.push('');
  out.push(...lines([
    link('All services', '/services'),
    link('Software Development', '/services/software-development'),
    link('AI Consulting', '/services/ai-consulting'),
    link('Pricing', '/pricing', pricingNote),
  ]));
  out.push('');
  out.push('## Cities served');
  out.push('');
  out.push(...lines(cities.map(c => link(`Software Development Company in ${c.name}`, `/locations/software-development-company-in-${c.slug}`))));
  out.push(...lines([link('All locations', '/locations')]));
  out.push('');
  out.push('## Service and city pages');
  out.push('');
  out.push(...lines(PRIORITY_SERVICES.flatMap(ps => ['edmonton', 'calgary', 'toronto', 'vancouver'].map(city => link(`${ps.label} in ${cities.find(c => c.slug === city)?.name ?? city.charAt(0).toUpperCase() + city.slice(1)}`, serviceCityPath(ps.serviceSlug, city))))));
  out.push('');
  out.push('## Case studies');
  out.push('');
  out.push(...lines(work.map(project => link(
    `${project.title} for ${project.client}`,
    project.href,
    project.desc,
  ))));
  out.push(...lines([link('All case studies', '/case-studies')]));
  out.push('');
  out.push('## Contact');
  out.push('');
  out.push(...lines([
    link('Contact', '/contact', `${BUSINESS.telephone} · ${BUSINESS.email}`),
    link('About', '/about'),
  ]));
  // Not in the sitemap (it is an AI-assistant index), so emit it directly.
  out.push(`- [Full entity and buyer-guide index](${canonicalUrl('/llms-full.txt')})`);
  out.push('');

  return out.join('\n');
}

export function GET() {
  return new Response(buildText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
