import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Federal government base', d: 'A large share of the federal public service sits in Gatineau, needing secure, accessible, bilingual platforms built with Canadian data residency.' },
  { t: 'Bilingual delivery', d: 'We design, build and ship in both French and English — essential for the National Capital Region.' },
  { t: 'National Capital Region', d: 'On Ottawa’s doorstep, with access to the region’s deep public-sector and technology talent.' },
  { t: 'Law 25 and PIPEDA', d: 'Quebec’s Law 25 and federal privacy rules are designed into the work from the first decision, not bolted on.' },
];
const neighborhoods = [
  { n: 'Hull', d: 'The historic core and government district, across the river from Ottawa.' },
  { n: 'Aylmer', d: 'An established, largely anglophone community to the west.' },
  { n: 'Gatineau sector', d: 'The city’s eastern population and commercial centre.' },
  { n: 'Le Plateau', d: 'A fast-growing residential-commercial district.' },
  { n: 'Buckingham', d: 'A historic community in the far east with light industry.' },
  { n: 'Masson-Angers', d: 'An eastern riverside community with services and manufacturing.' },
];
const trends = [
  { t: 'Government digital services', d: 'Secure, accessible, bilingual citizen platforms and internal tools with Canadian data residency.' },
  { t: 'Bilingual platforms (Law 25)', d: 'French-and-English products built to Quebec’s modern privacy law.' },
  { t: 'IT services & modernization', d: 'Legacy-system modernization and integrations for public-sector and adjacent organisations.' },
  { t: 'Tourism & culture', d: 'Booking, ticketing and visitor platforms for the region’s culture and tourism sector.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="gatineau"
      copy={{ badge: 'Software development in Gatineau', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Gatineau</span></>, desc: <>Gatineau sits across the river from Ottawa and hosts a large share of the federal public service, making government the anchor of its bilingual economy, alongside IT services and tourism. We build custom software — in French and English — for the organisations there.</> }}
      whyCity={{ title: 'Why Gatineau for tech', intro: 'The Quebec side of the National Capital Region — government, bilingual, Law 25.', items: whyCity }}
      neighborhoods={{ title: 'Gatineau areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Gatineau tech focus', items: trends }}
    />
  );
}
