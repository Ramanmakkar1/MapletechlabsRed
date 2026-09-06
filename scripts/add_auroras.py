#!/usr/bin/env python3
"""Drop an aurora backdrop into chosen sections and make sure the section
clips it (overflow:hidden) and positions it (position:relative)."""
import re, pathlib

PLAN = {
    'ServicesSection':     'aurora--section',
    'SuccessMetrics':      'aurora--band',
    'IndustriesSection':   'aurora--section',
    'TestimonialsSection': 'aurora--band',
    'FeaturedAwards':      'aurora--ink',
    'AdvancedLabs':        'aurora--ink',
    'Contact':             'aurora--section',
    'Footer':              'aurora--ink',
    'ProcessSection':      'aurora--section',
}

TAG = re.compile(r'<(section|footer)\b[^>]*?style=\{\{(.*?)\}\}[^>]*>', re.S)

for name, variant in PLAN.items():
    p = pathlib.Path('src/components') / f'{name}.tsx'
    if not p.exists():
        print(f'  !! {name} missing'); continue
    s = p.read_text()
    if 'className="aurora' in s:
        print(f'  -- {name} already has one'); continue

    m = TAG.search(s)
    if not m:
        print(f'  ?? {name}: no root tag matched'); continue

    style = m.group(2)
    add = []
    if 'position:' not in style:  add.append("position: 'relative'")
    if 'overflow:' not in style:  add.append("overflow: 'hidden'")
    new_style = style + (', ' + ', '.join(add) if add else '')
    new_tag = m.group(0).replace('{{' + style + '}}', '{{' + new_style + '}}', 1)

    aurora = f'\n      <div aria-hidden className="aurora {variant}" />'
    s = s[:m.start()] + new_tag + aurora + s[m.end():]
    p.write_text(s)
    print(f'  {name:22s} {variant}')

print('\nauroras added')
