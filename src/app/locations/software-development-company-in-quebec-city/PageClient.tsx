import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Government and insurance', d: 'A capital-city base of public-sector and insurance organisations needs compliant French-and-English software built to Quebec’s Law 25.' },
  { t: 'Games and optics', d: 'An established video-game cluster and a globally recognised optics-photonics sector drive demand for specialised, high-performance software.' },
  { t: 'Bilingual delivery', d: 'We design, build and ship in both French and English, so your product serves customers in the language they expect.' },
  { t: 'Law 25 built in', d: 'Quebec’s modern privacy law is designed into our work from the start — consent, data residency and audit trails handled properly.' },
];
const neighborhoods = [
  { n: 'Vieux-Québec', d: 'The historic core, with tourism, government and professional services.' },
  { n: 'Sainte-Foy', d: 'A major business and university district — offices, research and tech.' },
  { n: 'Limoilou', d: 'A creative, fast-growing neighbourhood popular with studios and startups.' },
  { n: 'Lévis', d: 'Across the river — insurance, finance and manufacturing.' },
  { n: 'Charlesbourg', d: 'An established residential-commercial community north of the core.' },
  { n: 'Beauport', d: 'A growing eastern district with services and light industry.' },
];
const trends = [
  { t: 'Public-sector & Law 25', d: 'Accessible, bilingual citizen services and internal tools built to Quebec’s privacy standards.' },
  { t: 'Games & real-time', d: 'Engines, tooling and live-ops platforms for the region’s video-game studios.' },
  { t: 'Insurance & finance', d: 'Policy, claims and customer platforms for the strong local insurance and finance sector.' },
  { t: 'Optics & industrial software', d: 'Specialised control, imaging and data software for the optics-photonics industry.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="quebec-city"
      copy={{ badge: 'Software development in Quebec City', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Quebec City</span></>, desc: <>Quebec City is the provincial capital, with a stable economy led by government, a strong insurance and finance sector, a well-known video-game cluster and a world-class optics-photonics industry. We build custom software — in French and English — for the organisations there.</> }}
      whyCity={{ title: 'Why Quebec City for tech', intro: 'Government, insurance, games and optics — delivered bilingually and to Law 25.', items: whyCity }}
      neighborhoods={{ title: 'Quebec City areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Quebec City tech focus', items: trends }}
    />
  );
}
