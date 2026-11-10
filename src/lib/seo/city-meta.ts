export function cityDescription(cityName: string, provinceName: string, angle: string): string {
  const base = `Edmonton-based Mapletech Labs helps ${angle} in ${cityName}, ${provinceName} use custom software, mobile apps, AI, and web development.`;
  if (base.length >= 140) return base;
  return `Edmonton-based Mapletech Labs helps ${angle} in ${cityName}, ${provinceName} use custom software development, mobile apps, AI, and web development.`;
}

export default cityDescription;
