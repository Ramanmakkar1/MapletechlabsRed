import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Okanagan tech hub', d: 'One of the fastest-growing technology clusters in BC outside Vancouver — startups and scale-ups drawn by lifestyle and lower costs need product engineering that keeps pace.' },
  { t: 'Aerospace and agriculture', d: 'Established aerospace and a major agriculture and wine sector drive demand for specialised operations and traceability software.' },
  { t: 'Lifestyle talent draw', d: 'The Okanagan attracts remote-first and relocating tech talent, deepening the local engineering pool.' },
  { t: 'UBC Okanagan pipeline', d: 'A growing university campus feeds research and a steady flow of engineering graduates.' },
];
const neighborhoods = [
  { n: 'Downtown / Landmark District', d: 'The urban core and Kelowna’s main technology-office cluster.' },
  { n: 'Rutland', d: 'A dense, fast-growing commercial and residential district.' },
  { n: 'Mission', d: 'An established lakeside residential-commercial area.' },
  { n: 'West Kelowna', d: 'A growing community across the lake with wineries and services.' },
  { n: 'Lake Country', d: 'A fast-growing community to the north near the airport.' },
  { n: 'Glenmore', d: 'A residential-commercial area close to downtown.' },
];
const trends = [
  { t: 'SaaS & product engineering', d: 'Multi-tenant products and platforms for the Okanagan’s growing base of software companies.' },
  { t: 'Aerospace software', d: 'Operations, maintenance and data software for the region’s aerospace sector.' },
  { t: 'Agri-tech & wine', d: 'Precision-agriculture, traceability and direct-to-consumer platforms for growers and wineries.' },
  { t: 'Tourism platforms', d: 'Booking, experience and visitor systems for the Okanagan’s large tourism industry.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="kelowna"
      copy={{ badge: 'Software development in Kelowna', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Kelowna</span></>, desc: <>Kelowna anchors the Okanagan and has one of the fastest-growing technology sectors in British Columbia outside Vancouver, alongside aerospace, a well-known agriculture and wine industry, and tourism. We build custom software for the businesses growing there.</> }}
      whyCity={{ title: 'Why Kelowna for tech', intro: 'BC’s fastest-growing tech region outside Vancouver, in the heart of the Okanagan.', items: whyCity }}
      neighborhoods={{ title: 'Kelowna areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Kelowna tech focus', items: trends }}
    />
  );
}
