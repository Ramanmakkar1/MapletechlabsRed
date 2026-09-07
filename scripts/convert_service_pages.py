#!/usr/bin/env python3
"""Lift each service / sub-service page's own data out of its hand-built JSX
and hand it to the shared templates. Arrays are copied as source text, so no
content is retyped."""
import re, pathlib, sys

def block(src, name):
    m = re.search(r'^const ' + name + r'\b[^\n]*=\s*\[\n.*?^\];\n', src, re.S | re.M)
    return m.group(0) if m else None

def inner(src, pat):
    m = re.search(pat, src, re.S)
    return ' '.join(m.group(1).split()) if m else None

def convert_service(p: pathlib.Path):
    src = p.read_text(); slug = p.parent.name
    if 'ServicePageTemplate' in src: return 'skip'
    badge = inner(src, r"textTransform: 'uppercase'(?: as const)? \}\}>(.*?)</span>")
    title = inner(src, r'<h1 className="reveal reveal-d1"[^>]*>(.*?)</h1>')
    desc  = inner(src, r'<p className="reveal reveal-d2"[^>]*>(.*?)</p>')
    req = {n: block(src, n) for n in ['services', 'stats', 'steps']}
    opt = {n: block(src, n) for n in ['techCategories', 'industries', 'results', 'faqs']}
    missing = [k for k, v in {**req, 'badge': badge, 'title': title, 'desc': desc}.items() if not v]
    if missing: return f'MISSING {missing}'
    h2s = [' '.join(h.split()) for h in re.findall(r'<h2[^>]*>([^<{]{3,80})</h2>', src)]
    out = ["import ServicePageTemplate from '@/components/page/ServicePageTemplate';", '']
    out += [req[n] for n in ['stats', 'services', 'steps']] + [v for v in opt.values() if v]
    extra = ''.join(f"\n      {n}={{{n}}}" for n, v in opt.items() if v)
    if h2s: extra += f'\n      servicesTitle="{h2s[0]}"'
    out.append(f"""export default function PageClient() {{
  return (
    <ServicePageTemplate
      slug="{slug}"
      name="{badge}"
      copy={{{{ badge: "{badge}", title: <>{title}</>, desc: <>{desc}</> }}}}
      stats={{stats}}
      services={{services}}
      steps={{steps}}{extra}
    />
  );
}}
""")
    p.write_text('\n'.join(out)); return 'ok'

def convert_sub(p: pathlib.Path):
    src = p.read_text()
    if 'SubServicePageTemplate' in src: return 'skip'
    pm = re.search(r'<Link href="(/services/[a-z0-9-]+)" style=[^>]*>([^<]+)</Link>', src)
    cur = re.search(r"<span style=\{\{ color: 'var\(--brand\)' \}\}>([^<]+)</span>", src[pm.end():]) if pm else None
    badge = inner(src, r"letterSpacing: '0\.05em' \}\}>([^<]+)</span>")
    title = inner(src, r'<h1 className="reveal reveal-d2"[^>]*>(.*?)</h1>')
    desc  = inner(src, r'<p className="reveal reveal-d3"[^>]*>(.*?)</p>')
    h2s = [' '.join(h.split()) for h in re.findall(r'<h2[^>]*>([^<{]+)</h2>', src)]
    blocks = {n: block(src, n) for n in ['stats', 'services', 'steps', 'faqs']}
    missing = [k for k, v in {**blocks, 'parent': pm, 'name': cur, 'badge': badge, 'title': title, 'desc': desc}.items() if not v]
    if missing: return f'MISSING {missing}'
    cap = h2s[0] if h2s else None
    out = ["import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';", '']
    out += [blocks[n] for n in ['stats', 'services', 'steps', 'faqs']]
    out.append(f"""export default function PageClient() {{
  return (
    <SubServicePageTemplate
      parent={{{{ href: "{pm.group(1)}", label: "{pm.group(2).strip()}" }}}}
      name="{cur.group(1).strip()}"
      copy={{{{ badge: "{badge}", title: <>{title}</>, desc: <>{desc}</> }}}}
      stats={{stats}}
      services={{services}}
      steps={{steps}}
      faqs={{faqs}}{(chr(10) + '      capabilitiesTitle="' + cap + '"') if cap else ''}
    />
  );
}}
""")
    p.write_text('\n'.join(out)); return 'ok'

if __name__ == '__main__':
    res = {}
    for f in sorted(pathlib.Path('src/app/services').glob('*/PageClient.tsx')):
        res[f'svc/{f.parent.name}'] = convert_service(f)
    for f in sorted(pathlib.Path('src/app/services').glob('*/*/PageClient.tsx')):
        res[f'sub/{f.parent.parent.name}/{f.parent.name}'] = convert_sub(f)
    ok = sum(1 for v in res.values() if v == 'ok'); bad = {k: v for k, v in res.items() if v != 'ok'}
    print(f'converted {ok}; problems: {bad if bad else "none"}')
