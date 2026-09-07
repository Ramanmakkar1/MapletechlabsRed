import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaBand from '@/components/MediaBand';
import Credentials from '@/components/home/Credentials';
import FaqSplit from '@/components/home/FaqSplit';
import PageHero from '@/components/page/PageHero';
import FinalCta from '@/components/home/FinalCta';
import { StatRow, ServicesGrid, ProcessSteps, TechBlocks, WhyUs, SuccessStories } from '@/components/page/Blocks';
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

/* Column count that never orphans a row: three across when the count
   divides by three, otherwise two. */
const balanced = (n: number) => (n % 3 === 0 ? 'grid grid--3' : n % 2 === 0 ? 'grid grid--2' : 'grid grid--3');

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
          stats={p.stats} photo={officeMedia.open} serviceName={`${serviceName} in ${cityName}`}
        />
        <StatRow stats={p.stats} />
        <MediaBand media={serviceMedia[serviceSlug] ?? defaultMedia} />

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`${serviceName} for the industries that drive ${cityName}`} sub={p.intro} />
            <div className={balanced(p.applications.length)}>
              {p.applications.map(a => (
                <article key={a.title} className="tile rise">
                  <span className="eyebrow" style={{ color: 'var(--brand)' }}>{a.industry}</span>
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: '12px 0 8px' }}>{a.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{a.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title={`${serviceName} Services We Offer in ${cityName}`} items={services} />

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`Why ${cityName} Businesses Choose ${serviceName}`} />
            <div className={balanced(p.pricingTiers.length)}>
              {p.whyCity.map((w, i) => (
                <div key={w.title} className="tile rise">
                  <span className="idx">[ {i + 1} ]</span>
                  <h3 style={{ fontSize: 'var(--fs-h4)', margin: '14px 0 8px' }}>{w.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSteps title={`Our ${serviceName} Process`} steps={p.steps} />
        <TechBlocks title="Technologies We Use" cats={tech} />
        <SuccessStories title={`Projects We've Built for ${province} Clients`} />

        <section style={{ padding: 'var(--section-y) 0' }}>
          <div className="cb-container">
            <Head title={`What ${cityName} Clients Say`} />
            <div className={balanced(p.testimonials.length)}>
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
            <div className={balanced(p.pricingTiers.length)}>
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
          sub={`A senior engineer will scope your project and send a fixed price within four hours — ${p.isHQ ? 'from our head office here in ' + cityName : 'with local delivery across ' + province}.`}
        />
      </main>
      <Footer />
    </>
  );
}
