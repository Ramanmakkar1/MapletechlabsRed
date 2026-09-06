#!/usr/bin/env python3
"""Assign the white / warm-off-white / deep-ink section rhythm, and flip the
components that become ink bands back to light-on-dark."""
import pathlib, re

RHYTHM = {
    'PartnersMarquee':     'var(--surface-alt)',
    'ServicesSection':     'var(--surface)',
    'ProcessSection':      'var(--surface-alt)',
    'WhyUs':               'var(--surface)',
    'FeaturedAwards':      'var(--surface-ink)',   # dark band
    'TechStack':           'var(--surface)',
    'SuccessMetrics':      'var(--surface-alt)',
    'PortfolioSection':    'var(--surface)',
    'IndustriesSection':   'var(--surface-alt)',
    'ComparisonTable':     'var(--surface)',
    'AdvancedLabs':        'var(--surface-ink)',   # dark band
    'TestimonialsSection': 'var(--surface-alt)',
    'InsightsSection':     'var(--surface)',
    'FAQSection':          'var(--surface-alt)',
    'Contact':             'var(--surface)',
    'Footer':              'var(--surface-ink)',   # dark footer
}
INK = {'FeaturedAwards', 'AdvancedLabs', 'Footer'}

# light-surface tokens -> their on-dark counterparts
INVERT = [
    ('var(--surface-sunk)', 'rgba(255,255,255,0.09)'),
    ('var(--surface-alt)',  'rgba(255,255,255,0.05)'),
    ('var(--surface)',      'var(--surface-ink)'),
    ('var(--line-strong)',  'rgba(255,255,255,0.24)'),
    ('var(--line)',         'var(--line-ink)'),
    ('var(--ink)',          'var(--on-ink)'),
    ('var(--body)',         'var(--on-ink-body)'),
    ('var(--muted)',        'var(--on-ink-muted)'),
    ('var(--faint)',        'rgba(255,255,255,0.38)'),
    ('var(--brand-deep)',   'var(--brand-bright)'),
    ('var(--brand)',        'var(--brand-bright)'),  # red pops harder on dark
    ('var(--brand-tint)',   'rgba(245,41,13,0.14)'),
]

for name, bg in RHYTHM.items():
    p = pathlib.Path('src/components') / f'{name}.tsx'
    if not p.exists():
        print(f'  !! missing {name}'); continue
    s = p.read_text(); orig = s

    if name in INK:
        # placeholder first so the invert map can't re-hit its own output
        s = s.replace('var(--surface-ink)', '@@INKBG@@')
        for a, b in INVERT:
            s = s.replace(a, b)
        s = s.replace('@@INKBG@@', 'var(--surface-ink)')

    # set the root section/footer background exactly once
    s, n = re.subn(r"(<(?:section|footer)\b[^>]*?style=\{\{[^\n]*?background: ')(?:[^']*)(')",
                   lambda m: m.group(1) + bg + m.group(2), s, count=1)
    if n == 0:
        print(f'  ?? {name}: no root background matched')
    if s != orig:
        p.write_text(s)
    print(f'  {name:22s} {bg}{"   [INVERTED]" if name in INK else ""}')

print('\nrhythm applied')
