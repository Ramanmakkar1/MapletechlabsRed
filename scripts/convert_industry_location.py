#!/usr/bin/env python3
"""Lift the inline JSX data out of the industry and location pages into the
shared templates. Array literals are copied as source text."""
import re, json, pathlib

def inner(src, pat, flags=re.S):
    m = re.search(pat, src, flags)
    return ' '.join(m.group(1).split()) if m else None

def lit(m):  # "[ ... ].map" -> "[ ... ]"
    return m.group(0)[:-4].rstrip()

def convert_industry(p: pathlib.Path):
    src = p.read_text(); slug = p.parent.name
    if 'IndustryPageTemplate' in src: return 'skip'
    name = inner(src, r"\{ label: '([^']+)' \},?\s*\]\}")
    title = inner(src, r'<h1 className="reveal"[^>]*>(.*?)</h1>')
    desc = inner(src, r'<p className="reveal"[^>]*>(.*?)</p>')
    trio = re.search(r"\{(\[\[.*?\]\])\.map", src, re.S)
    icons = [lit(m) for m in re.finditer(r"(?<=\{)\[\n\s*\{ icon: .*?\n\s*\]\.map", src, re.S)]
    tech = re.search(r"(?<=\{)\[\n\s*\{ cat: .*?\n\s*\]\.map", src, re.S)
    related = re.search(r"(?<=\{)\[\n\s*\{ name: '.*?\n\s*\]\.map", src, re.S)
    client = inner(src, r"color: 'var\(--brand\)', marginBottom: '0\.5rem' \}\}>([^<]+)</div>")
    headline = inner(src, r"lineHeight: 1\.2 \}\}>([^<]+)</h3>")
    text = inner(src, r"<p style=\{\{ color: 'var\(--body\)', lineHeight: 1\.7 \}\}>([^<]+)</p>")
    quote = inner(src, r"fontStyle: 'italic', marginBottom: '1rem' \}\}>\s*\"?(.*?)\"?\s*</p>")
    cite = inner(src, r"<cite[^>]*>— ([^<]+)</cite>")
    cta_t = inner(src, r"lineHeight: 1\.15, marginBottom: '1\.5rem' \}\}>(.*?)</h2>")
    cta_s = inner(src, r"fontSize: '1\.15rem', marginBottom: '2\.5rem', lineHeight: 1\.7 \}\}>(.*?)</p>")
    need = dict(name=name, title=title, desc=desc, trio=trio, icons=len(icons) == 3, tech=tech, related=related, client=client, headline=headline, text=text, quote=quote, cite=cite, cta_t=cta_t, cta_s=cta_s)
    missing = [k for k, v in need.items() if not v]
    if missing: return f'MISSING {missing}'
    cta_title = re.sub(r'<[^>]+>', '', cta_t)  # plain text for the strip
    out = f"""import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';

const heroStats = ({trio.group(1)} as [string, string][]).map(([value, label]) => ({{ value, label }}));
const challenges = {icons[0]};
const solutions = {icons[1]};
const tech = {lit(tech)};
const whyUs = {icons[2]};
const related = {lit(related)};

export default function PageClient() {{
  return (
    <IndustryPageTemplate
      slug="{slug}"
      name={json.dumps(name)}
      copy={{{{ badge: {json.dumps(name)}, title: <>{title}</>, desc: <>{desc}</> }}}}
      heroStats={{heroStats}}
      challenges={{challenges}}
      solutions={{solutions}}
      caseStudy={{{{ client: {json.dumps(client)}, headline: {json.dumps(headline)}, text: {json.dumps(text)}, quote: {json.dumps(quote)}, cite: {json.dumps(cite)} }}}}
      tech={{tech}}
      whyUs={{whyUs}}
      related={{related}}
      cta={{{{ title: {json.dumps(cta_title)}, sub: {json.dumps(cta_s)} }}}}
    />
  );
}}
"""
    p.write_text(out); return 'ok'

def convert_location(p: pathlib.Path):
    src = p.read_text(); slug = p.parent.name
    if 'LocationPageTemplate' in src: return 'skip'
    title = inner(src, r'<h1 className="reveal"[^>]*>(.*?)</h1>')
    desc = inner(src, r'<p className="reveal"[^>]*>(.*?)</p>')
    pairs = [lit(m) for m in re.finditer(r"(?<=\{)\[\s*\[\s*'.*?\]\s*,?\s*\]\.map", src, re.S)]
    services = re.search(r'^const services = \[\n.*?^\];\n', src, re.S | re.M)
    titled = [lit(m) for m in re.finditer(r"(?<=\{)\[\n\s*\{ title: '.*?\]\.map", src, re.S)]
    why_choose = next((t for t in titled if 'metric:' not in t), None)
    wins = next((t for t in titled if 'metric:' in t), None)
    td = [lit(m) for m in re.finditer(r"(?<=\{)\[\n\s*\{ t: '.*?\]\.map", src, re.S)]
    nd = re.search(r"(?<=\{)\[\n\s*\{ n: '.*?\]\.map", src, re.S)
    intros = [' '.join(x.split()) for x in re.findall(r"<p style=\{\{ fontSize: 15, color: 'var\(--muted\)', maxWidth: 600, marginBottom: 40, lineHeight: 1\.7 \}\}>(.*?)</p>", src, re.S)]
    h3s = [' '.join(h.split()) for h in re.findall(r"<h2 style=\{\{ fontSize: 'var\(--fs-h3\)'[^>]*>([^<]+)</h2>", src)]
    num_t = inner(src, r"<h2[^>]*>([^<]*by the Numbers)</h2>")
    num_s = inner(src, r"by the Numbers</h2>\s*<p[^>]*>(.*?)</p>")
    links = re.search(r"(?<=\{)\[\n\s*\{ name: '[^']*', slug: '.*?\]\.map", src, re.S)
    need = dict(title=title, desc=desc, services=services, why_choose=why_choose, wins=wins, td=len(td) >= 2, nd=nd, intros=len(intros) >= 1, h3s=len(h3s) >= 4, links=links)
    missing = [k for k, v in need.items() if not v]
    if missing: return f'MISSING {missing}'
    ent = lambda t: t.replace('&apos;', "'").replace('&amp;', '&')
    hero_stats = f"pair({pairs[0]})" if pairs else "[] as { value: string; label: string }[]"
    numbers_prop = ''
    if len(pairs) >= 2 and num_t:
        numbers_prop = f"\n      numbers={{{{ title: {json.dumps(ent(num_t))}, sub: {json.dumps(ent(num_s or ''))}, stats: pair({pairs[1]}) }}}}"
    intro2 = ent(intros[1]) if len(intros) >= 2 else ''
    out = f"""import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const pair = (xs: [string, string][]) => xs.map(([value, label]) => ({{ value, label }}));
const heroStats = {hero_stats};
{services.group(0)}
const whyChoose = {why_choose};
const whyCity = {td[0]};
const neighborhoods = {lit(nd)};
const wins = {wins};
const trends = {td[1]};
const serviceLinks = {lit(links)};

export default function PageClient() {{
  return (
    <LocationPageTemplate
      slug="{slug}"
      copy={{{{ badge: 'Software development in {slug.replace("-", " ").title()}', title: <>{title}</>, desc: <>{desc}</> }}}}
      heroStats={{heroStats}}
      services={{services}}{numbers_prop}
      whyChoose={{whyChoose}}
      whyCity={{{{ title: {json.dumps(h3s[0])}, intro: {json.dumps(ent(intros[0]))}, items: whyCity }}}}
      neighborhoods={{{{ title: {json.dumps(h3s[1])}, intro: {json.dumps(intro2)}, items: neighborhoods }}}}
      wins={{wins}}
      trends={{{{ title: {json.dumps(h3s[3])}, items: trends }}}}
      serviceLinks={{serviceLinks}}
    />
  );
}}
"""
    p.write_text(out); return 'ok'

if __name__ == '__main__':
    res = {}
    for f in sorted(pathlib.Path('src/app/industries').glob('*/PageClient.tsx')):
        res['ind/' + f.parent.name] = convert_industry(f)
    for f in sorted(pathlib.Path('src/app/locations').glob('*/PageClient.tsx')):
        if '[' in f.parent.name: continue
        res['loc/' + f.parent.name] = convert_location(f)
    bad = {k: v for k, v in res.items() if v != 'ok'}
    print(f"converted {sum(1 for v in res.values() if v == 'ok')}; problems: {bad or 'none'}")
