#!/usr/bin/env python3
"""
Dark -> light theme migration for inline-styled React.

The same literal means different things depending on the CSS property it sits
on: rgba(255,255,255,.08) is a hairline border in one place and a card surface
in another. So this rewrites `property: 'value'` pairs, keyed on the property,
rather than doing a blind find/replace on the colour literals.
"""
import re, sys, pathlib

# ── property groups ────────────────────────────────────────────────
TEXT   = {'color', 'WebkitTextFillColor', 'caretColor'}
BG     = {'background', 'backgroundColor'}
BORDER = {'border', 'borderColor', 'borderTop', 'borderBottom', 'borderLeft',
          'borderRight', 'borderTopColor', 'borderBottomColor',
          'borderLeftColor', 'borderRightColor', 'outline', 'outlineColor'}
STROKE = {'stroke'}
FILL   = {'fill'}

WHITE_HEX = {'#fff', '#ffffff', '#FFF', '#FFFFFF', 'white'}
DARK_HEX  = {'#000', '#000000', '#0a0a0a', '#0A0A0A', '#050505', '#010101',
             '#0f0f0f', '#0F0F0F', '#111', '#111111', '#121212', '#141414',
             '#161616', '#181818', '#1a1a1a', '#1A1A1A', 'black'}
BRAND_RED = {'#f5290d', '#F5290D', '#e0250b', '#E0250B', '#ff5733', '#FF5733',
             '#ff6b35', '#FF6B35'}

def white_alpha(v):
    """alpha of an rgba(255,255,255,a) literal, else None"""
    m = re.fullmatch(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([\d.]+)\s*\)', v.strip())
    return float(m.group(1)) if m else None

def black_alpha(v):
    m = re.fullmatch(r'rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*([\d.]+)\s*\)', v.strip())
    return float(m.group(1)) if m else None

def map_text(v):
    if v in WHITE_HEX: return 'var(--ink)'
    a = white_alpha(v)
    if a is not None:
        if a >= .88: return 'var(--ink)'
        if a >= .62: return 'var(--body)'
        if a >= .38: return 'var(--muted)'
        if a >= .12: return 'var(--faint)'
        # below .12 it was never readable text on the dark page — it was a
        # watermark or ghost numeral. Keep it a watermark.
        return 'rgba(20,17,24,%s)' % round(min(a * 1.8, .06), 3)
    if v in DARK_HEX: return 'var(--ink)'
    if v in BRAND_RED: return 'var(--brand)'   # red text needs the AA-safe red
    return None

def map_bg(v):
    if v in DARK_HEX: return 'var(--surface)'
    a = white_alpha(v)
    if a is not None:
        if a <= .05:  return 'var(--surface-alt)'
        if a <= .12:  return 'var(--surface-sunk)'
        return 'var(--surface)'
    b = black_alpha(v)
    if b is not None and b >= .2:  # dark scrim over a dark page
        return 'var(--surface-alt)'
    return None

def map_border(v):
    a = white_alpha(v)
    if a is not None:
        return 'var(--line)' if a <= .12 else 'var(--line-strong)'
    if v in WHITE_HEX: return 'var(--line-strong)'
    if v in DARK_HEX:  return 'var(--line-strong)'
    return None

def map_stroke_fill(v):
    if v in WHITE_HEX: return 'var(--ink)'
    a = white_alpha(v)
    if a is not None:
        return 'var(--ink)' if a >= .6 else 'var(--muted)'
    return None

def convert_value(prop, val):
    """Rewrite one colour literal, or every literal inside a gradient."""
    v = val.strip()
    if prop in TEXT:   out = map_text(v)
    elif prop in BG:   out = map_bg(v)
    elif prop in BORDER: out = None  # handled by the shorthand path below
    elif prop in STROKE or prop in FILL: out = map_stroke_fill(v)
    else: out = None
    return out

# `border: '1px solid rgba(255,255,255,0.08)'` — rewrite just the colour part
def convert_border_shorthand(val):
    def repl(m):
        mapped = map_border(m.group(0))
        return mapped if mapped else m.group(0)
    return re.sub(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*[\d.]+\s*\)|#[0-9a-fA-F]{3,8}\b',
                  repl, val)

# gradients: recolour each stop by the property's own rules
def convert_gradient(prop, val):
    def repl(m):
        lit = m.group(0)
        if prop in BG:
            a = white_alpha(lit)
            if a is not None:
                return 'rgba(20,17,24,%s)' % (round(min(a * 0.9, .12), 3))
            if lit in DARK_HEX:
                return '#FFFFFF'
        if prop in TEXT:
            return lit  # gradient text: keep the brand ramp
        return lit
    return re.sub(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*[\d.]+\s*\)|#[0-9a-fA-F]{3,8}\b',
                  repl, val)

PAIR = re.compile(r"(\b[A-Za-z][A-Za-z0-9]*)\s*:\s*(['\"])(.*?)\2")

def relight(text):
    n = [0]
    def on_pair(m):
        prop, q, val = m.group(1), m.group(2), m.group(3)
        new = None
        if 'gradient(' in val:
            if prop in BG or prop in TEXT:
                g = convert_gradient(prop, val)
                new = g if g != val else None
        elif prop in BORDER:
            b = convert_border_shorthand(val)
            new = b if b != val else None
        else:
            new = convert_value(prop, val)
        if new and new != val:
            n[0] += 1
            return f'{prop}: {q}{new}{q}'
        return m.group(0)
    out = PAIR.sub(on_pair, text)

    # boxShadow: dark-page shadows are near-black at high alpha; soften them
    out = re.sub(r'rgba\(0,\s*0,\s*0,\s*0?\.[3-9]\d*\)', 'rgba(20,17,24,0.10)', out)
    return out, n[0]

if __name__ == '__main__':
    total_files = total_edits = 0
    for arg in sys.argv[1:]:
        p = pathlib.Path(arg)
        src = p.read_text()
        new, n = relight(src)
        if n:
            p.write_text(new)
            total_files += 1
            total_edits += n
            print(f'{n:5d}  {p}')
    print(f'\n{total_edits} replacements across {total_files} files')
