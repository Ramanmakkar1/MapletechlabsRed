import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from '@/components/page/PageHero';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, ServicesGrid, ProcessSteps, TechBlocks, WhyUs, SuccessStories } from '@/components/page/Blocks';
import { serviceMedia, defaultMedia, humanPick } from '@/data/media';

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

/* Column count that never orphans a row. Counts that cannot divide evenly
   (5, 7, 11…) get null, and the caller falls back to a divider list rather
   than leaving an empty cell. */
const balanced = (n: number): string | null =>
  n % 3 === 0 ? 'grid grid--3' : n % 4 === 0 ? 'grid grid--2' : n % 2 === 0 ? 'grid grid--2' : null;

const Head = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="head">
    <div>
      <h2>{title}</h2>
      {sub && <p className="lede">{sub}</p>}
    </div>
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
          stats={p.stats} photo={humanPick(citySlug + serviceSlug, 0)} serviceName={`${serviceName} in ${cityName}`}
        />
        <StatRow stats={p.stats} />
        <MediaBand media={serviceMedia[serviceSlug] ?? defaultMedia} />

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`${serviceName} for the industries that drive ${cityName}`} sub={p.intro} />
            {balanced(p.applications.length) ? (
              <div className={balanced(p.applications.length)!}>
                {p.applications.map(a => (
                  <article key={a.title} className="tile rise">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', marginBottom: 12 }}>{a.industry}</p>
                    <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>{a.title}</h3>
                    <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{a.desc}</p>
                  </article>
                ))}
              </div>
            ) : (
              <ul className="rows">
                {p.applications.map(a => (
                  <li key={a.title}>
                    <div>
                      <h3 style={{ fontSize: 'var(--fs-h4)', margin: 0 }}>{a.title}</h3>
                      <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', marginTop: 6 }}>{a.industry}</p>
                    </div>
                    <p style={{ color: 'var(--body)', lineHeight: 1.7, maxWidth: '62ch' }}>{a.desc}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <ServicesGrid title={`${serviceName} Services We Offer in ${cityName}`} items={services} />

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`Why ${cityName} Businesses Choose ${serviceName}`} />
            {balanced(p.whyCity.length) ? (
              <div className={balanced(p.whyCity.length)!}>
                {p.whyCity.map(w => (
                  <div key={w.title} className="tile rise">
                    <h3 style={{ fontSize: 'var(--fs-h4)', marginBottom: 8 }}>{w.title}</h3>
                    <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{w.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="rows">
                {p.whyCity.map(w => (
                  <li key={w.title}>
                    <h3 style={{ fontSize: 'var(--fs-h4)', margin: 0 }}>{w.title}</h3>
                    <p style={{ color: 'var(--body)', lineHeight: 1.7, maxWidth: '62ch' }}>{w.desc}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <MediaBand media={humanPick(citySlug + serviceSlug, 6)} ratio="21 / 7" />
        <ProcessSteps title={`Our ${serviceName} Process`} steps={p.steps} />
        <TechBlocks title="Technologies We Use" cats={tech} />
        <SuccessStories title={`Projects We've Built for ${province} Clients`} />

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`What ${cityName} Clients Say`} />
            <div className={balanced(p.testimonials.length) ?? 'grid grid--2'}>
              {p.testimonials.map(t => (
                <blockquote key={t.name} className="tile" style={{ margin: 0 }}>
                  <p style={{ fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.6, fontWeight: 500, marginBottom: 20 }}>&ldquo;{t.quote}&rdquo;</p>
                  <footer className="tile__foot" style={{ paddingTop: 8 }}><div style={{ fontWeight: 700, color: 'var(--ink)' }}>{t.name}</div><div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>{t.role}, {t.company}</div></footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`${serviceName} Costs in ${cityName}`} sub="Fixed-scope, fixed-price. You know the number before we write a line of code." />
            <div className={balanced(p.pricingTiers.length) ?? 'grid grid--2'}>
              {p.pricingTiers.map((t, i) => (
                <div key={t.name} className="tile rise" style={{ background: i === 1 ? 'var(--surface-ink)' : undefined, borderColor: i === 1 ? 'var(--surface-ink)' : undefined, color: i === 1 ? 'var(--on-ink-body)' : undefined }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: i === 1 ? '#fff' : 'var(--brand)' }}>{t.name}</div>
                  <div style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.04em', color: i === 1 ? '#fff' : 'var(--ink)', margin: '12px 0 16px' }}>{t.range}</div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
                    {t.features.map(f => <li key={f} style={{ display: 'flex', gap: 8, fontSize: 14 }}><span aria-hidden style={{ color: i === 1 ? '#fff' : 'var(--brand)' }}>✓</span>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyUs />
        <Credentials />
        <FaqSplit faqs={p.faqs} title={`Questions About ${serviceName} in ${cityName}`} />

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container" style={{ display: 'grid', gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Related Services in {cityName}</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.relatedCityServices.map(r => <Link key={r.serviceSlug} href={`/locations/${r.citySlug}/${r.serviceSlug}`} className="pill">{r.name}</Link>)}
                {p.relatedSubServices.map(r => <Link key={r.slug} href={`/services/${serviceSlug}/${r.slug}`} className="pill">{r.name}</Link>)}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>{serviceName} Across Canada</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.sameServiceOtherCities.map(c => <Link key={c.citySlug} href={`/locations/${c.citySlug}/${c.serviceSlug}`} className="pill">{c.cityName}</Link>)}
              </div>
            </div>
          </div>
        </section>
        <FinalCta
          title={`Need ${serviceName} in ${cityName}?`}
          sub={`A senior engineer will scope your project and send a fixed price within one working day — ${p.isHQ ? 'from our head office here in ' + cityName : 'with local delivery across ' + province}.`}
        />
      </main>
      <Footer />
    </>
  );
}
