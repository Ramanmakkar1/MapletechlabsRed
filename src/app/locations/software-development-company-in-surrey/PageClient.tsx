import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Health-technology cluster', d: 'Innovation Boulevard and Surrey’s hospitals anchor a genuine health-tech sector needing secure, compliant clinical and patient software.' },
  { t: 'Fastest-growing city in BC', d: 'Rapid population and business growth create demand for platforms that scale — from municipal services to fast-growing consumer apps.' },
  { t: 'SFU Surrey talent', d: 'A university campus focused on technology and engineering feeds a young, growing local talent pool.' },
  { t: 'Diverse, multilingual market', d: 'One of Canada’s most diverse cities — an advantage when building products for multilingual and international audiences.' },
];
const neighborhoods = [
  { n: 'City Centre / Whalley', d: 'The downtown core around SFU Surrey and Innovation Boulevard — health tech, education and startups.' },
  { n: 'Guildford', d: 'A commercial and retail hub in the northeast with growing office space.' },
  { n: 'Newton', d: 'A dense, diverse district with small business and manufacturing.' },
  { n: 'Fleetwood', d: 'A growing residential-commercial community along the future rapid-transit line.' },
  { n: 'Cloverdale', d: 'Agriculture, film production and light industry in the city’s east.' },
  { n: 'South Surrey', d: 'Professional services and health, near the US border.' },
];
const trends = [
  { t: 'Health technology', d: 'Clinical, telehealth and patient platforms for Surrey’s Innovation Boulevard and hospital network.' },
  { t: 'Municipal & citizen services', d: 'Accessible, scalable digital services for one of Canada’s fastest-growing municipalities.' },
  { t: 'Logistics & manufacturing', d: 'Operations, tracking and IoT systems for the region’s manufacturing and distribution base.' },
  { t: 'Consumer & multilingual apps', d: 'Mobile and web products built for Surrey’s young, diverse and multilingual population.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="surrey"
      copy={{ badge: 'Software development in Surrey', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Surrey</span></>, desc: <>Surrey is one of the fastest-growing cities in Canada, with a health-technology cluster on Innovation Boulevard, SFU’s Surrey campus, and strengths in manufacturing, agriculture and clean tech. We build custom software for the businesses growing with it.</> }}
      whyCity={{ title: 'Why Surrey for tech', intro: 'BC’s fastest-growing city and a rising health-technology hub.', items: whyCity }}
      neighborhoods={{ title: 'Surrey areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Surrey tech focus', items: trends }}
    />
  );
}
