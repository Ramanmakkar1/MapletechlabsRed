import { seoDescription } from './description';

const TAILS = [
  '. Free quote, reply within one working day.',
  '. Free quote within one working day.',
  '. Book a free consultation.',
  '. Free quote.',
];

export function cityDescription(cityName: string, provinceName: string, angle: string): string {
  const services = 'custom software, mobile apps, AI and web development for';
  const leads = [
    `Software development company in ${cityName}, ${provinceName}: ${services} ${angle}`,
    `Software development company in ${cityName}: ${services} ${angle}`,
  ];
  const candidates = leads.flatMap(lead => TAILS.map(tail => lead + tail));
  const ideal = candidates.find(c => c.length >= 140 && c.length <= 155);
  if (ideal) return ideal;
  const fitting = candidates.filter(c => c.length <= 155).sort((a, b) => b.length - a.length)[0];
  return seoDescription(fitting ?? candidates[0]);
}

export default cityDescription;
