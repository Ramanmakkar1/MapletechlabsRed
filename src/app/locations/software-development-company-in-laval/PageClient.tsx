import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Biotech and pharma', d: 'The Cité de la Biotech anchors a nationally significant life-sciences cluster needing compliant, well-engineered data and research software.' },
  { t: 'Manufacturing and agri-food', d: 'A strong manufacturing and agri-food base drives demand for operations, traceability and supply-chain platforms.' },
  { t: 'Second-largest in Quebec', d: 'A large, growing market on Montreal’s doorstep, with its own established business base.' },
  { t: 'Bilingual, Law 25 ready', d: 'We build and ship in French and English, with Quebec’s Law 25 privacy requirements designed in from the start.' },
];
const neighborhoods = [
  { n: 'Chomedey', d: 'A dense commercial and residential district, one of Laval’s largest.' },
  { n: 'Sainte-Rose', d: 'An established riverside community in the north.' },
  { n: 'Vimont', d: 'A growing residential-commercial area.' },
  { n: 'Laval-des-Rapides', d: 'A central district near the metro and business corridors.' },
  { n: 'Sainte-Dorothée', d: 'Known for horticulture and growing residential development.' },
  { n: 'Duvernay', d: 'An east-end community with services and light industry.' },
];
const trends = [
  { t: 'Biotech & life-sciences data', d: 'Compliant research, quality and operations software for the Cité de la Biotech cluster.' },
  { t: 'Manufacturing operations', d: 'Monitoring, quality and operations platforms for Laval’s manufacturers.' },
  { t: 'Agri-food traceability', d: 'Traceability and supply-chain systems for the agri-food sector.' },
  { t: 'Bilingual commerce', d: 'French-and-English commerce and customer platforms built to Law 25.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="laval"
      copy={{ badge: 'Software development in Laval', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Laval</span></>, desc: <>Laval is the second-largest city in Quebec, with a nationally significant biotechnology and pharmaceutical cluster around the Cité de la Biotech, plus manufacturing and agri-food. We build custom software — in French and English — for the businesses there.</> }}
      whyCity={{ title: 'Why Laval for tech', intro: 'Quebec’s second city and a national biotech hub, delivered bilingually and to Law 25.', items: whyCity }}
      neighborhoods={{ title: 'Laval areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Laval tech focus', items: trends }}
    />
  );
}
