import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import ComplianceAccordion from '@/components/home/ComplianceAccordion';
import AwardsList from '@/components/home/AwardsList';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from '@/components/page/PageHero';
import { StatRow, ServicesGrid, ProcessSteps, TechBlocks, WhyUs, SuccessStories, CtaStrip } from '@/components/page/Blocks';
import { serviceMedia, defaultMedia, officeMedia } from '@/data/media';

interface CityServicePageProps {
  cityName: string; citySlug: string; province: string; provinceAbbr: string; isHQ: boolean;
  serviceName: string; serviceSlug: string; heroContext: string; heroDescription: string; badge: string;
  stats: { value: string; label: string }[];
  largeServices: { icon: string; title: string; desc: string; tags?: string[] }[];
  smallServices: { icon: string; title: string; desc: string }[];
  whyCity: { icon: string; title: string; desc: string }[];
  steps: { num: string; title: string; duration: string; desc: string; deliverables: string[] }[];
  techCategories: { title: string; items: string[] }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
  pricingTiers: { name: string; range: string; features: string[] }[];
  faqs: { q: string; a: string }[];
  relatedSubServices: { name: string; slug: string }[];
  relatedCityServices: { name: string; citySlug: string; serviceSlug: string }[];
  sameServiceOtherCities: { cityName: string; citySlug: string; serviceSlug: string }[];
  intro: string;
  applications: { industry: string; title: string; desc: string }[];
}

const Head = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <div style={{ maxWidth: 720, marginBottom: 'clamp(26px, 3.5vw, 44px)' }}>
    <span className="section-tag">{eyebrow}</span>
    <h2 style={{ margin: 0 }}>{title}</h2>
    {sub && <p style={{ color: 'var(--body)', lineHeight: 1.75, marginTop: 14 }}>{sub}</p>}
  </div>
);

/* City + service page. Same block sequence as the service pages, with the
   city-specific copy where the reference puts local proof. */
export default function CityServicePageClient(p: CityServicePageProps) {
  const { cityName, citySlug, province, serviceName, serviceSlug } = p;
  const services = [
    ...p.largeServices.map(s => ({ title: s.title, desc: s.desc, chips: s.tags })),
    ...p.smallServices.map(s => ({ title: s.title, desc: s.desc })),
  ];
  const tech = p.techCategories.map(t => ({ label: t.title, chips: t.items }));

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: cityName, href: `/locations/${citySlug}` }, { label: serviceName }]}
          copy={{ badge: p.badge, title: <>{serviceName} Company<br />in <span style={{ color: 'var(--brand)' }}>{cityName}</span></>, desc: p.heroDescription }}
          stats={p.stats} photo={officeMedia.open} serviceName={`${serviceName} in ${cityName}`}
        />
        <StatRow stats={p.stats} />
        <MediaBand media={serviceMedia[serviceSlug] ?? defaultMedia} />

        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <Head eyebrow={`${cityName}, ${province}`} title={`${serviceName} for the industries that drive ${cityName}`} sub={p.intro} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {p.applications.map(a => (
                <article key={a.title} className="card card--flat" style={{ background: 'var(--surface-alt)' }}>
                  <span className="eyebrow" style={{ color: 'var(--brand)' }}>{a.industry}</span>
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: '12px 0 8px' }}>{a.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{a.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title={`${serviceName} Services We Offer in ${cityName}`} items={services} bg="var(--surface-alt)" />
        <CtaStrip title={`Need ${serviceName.toLowerCase()} in ${cityName}?`} sub={`A senior engineer will scope your project and send a fixed price within four hours — ${p.isHQ ? 'from our head office here in ' + cityName : 'with local delivery across ' + province}.`} bg="var(--surface)" />

        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
          <div className="cb-container">
            <Head eyebrow="Local advantage" title={`Why ${cityName} Businesses Choose ${serviceName}`} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {p.whyCity.map((w, i) => (
                <div key={w.title} className="card card--flat" style={{ background: '#fff' }}>
                  <span className="idx">[ {i + 1} ]</span>
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: '14px 0 8px' }}>{w.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSteps title={`Our ${serviceName} Process`} steps={p.steps} bg="var(--surface)" />
        <TechBlocks title="Technologies We Use" cats={tech} bg="var(--surface-alt)" />
        <SuccessStories title={`Projects We've Built for ${province} Clients`} bg="var(--surface)" />

        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
          <div className="cb-container">
            <Head eyebrow="Client validation" title={`What ${cityName} Clients Say`} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
              {p.testimonials.map(t => (
                <blockquote key={t.name} style={{ margin: 0, background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.6, fontWeight: 500, marginBottom: 20 }}>&ldquo;{t.quote}&rdquo;</p>
                  <footer style={{ marginTop: 'auto' }}><div style={{ fontWeight: 700, color: 'var(--ink)' }}>{t.name}</div><div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>{t.role}, {t.company}</div></footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface)' }}>
          <div className="cb-container">
            <Head eyebrow="Investment" title={`${serviceName} Costs in ${cityName}`} sub="Fixed-scope, fixed-price. You know the number before we write a line of code." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {p.pricingTiers.map((t, i) => (
                <div key={t.name} className="card card--flat" style={{ background: i === 1 ? 'var(--surface-ink)' : 'var(--surface-alt)', color: i === 1 ? 'var(--on-ink-body)' : undefined }}>
                  <div className="eyebrow" style={{ color: i === 1 ? 'var(--brand-bright)' : 'var(--brand)' }}>{t.name}</div>
                  <div style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.04em', color: i === 1 ? '#fff' : 'var(--ink)', margin: '12px 0 16px' }}>{t.range}</div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
                    {t.features.map(f => <li key={f} style={{ display: 'flex', gap: 8, fontSize: 14 }}><span style={{ color: i === 1 ? 'var(--brand-bright)' : 'var(--brand)' }}>✓</span>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyUs bg="var(--surface-alt)" />
        <ComplianceAccordion />
        <AwardsList />
        <FaqSplit faqs={p.faqs} title={`Questions About ${serviceName} in ${cityName}`} />

        <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
          <div className="cb-container" style={{ display: 'grid', gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Related Services in {cityName}</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.relatedCityServices.map(r => <Link key={r.serviceSlug} href={`/locations/${r.citySlug}/${r.serviceSlug}`} className="pill" style={{ background: '#fff' }}>{r.name}</Link>)}
                {p.relatedSubServices.map(r => <Link key={r.slug} href={`/services/${serviceSlug}/${r.slug}`} className="pill" style={{ background: '#fff' }}>{r.name}</Link>)}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>{serviceName} Across Canada</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.sameServiceOtherCities.map(c => <Link key={c.citySlug} href={`/locations/${c.citySlug}/${c.serviceSlug}`} className="pill" style={{ background: '#fff' }}>{c.cityName}</Link>)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
