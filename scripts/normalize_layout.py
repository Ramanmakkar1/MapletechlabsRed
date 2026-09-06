#!/usr/bin/env python3
"""Collapse the site's competing spacing and type systems onto the tokens
defined in globals.css."""
import re, sys, pathlib

# ── section rhythm ────────────────────────────────────────────────
# vertical-only padding of 40px+ is section rhythm; anything with a second
# distinct value is card/chip padding and is left alone.
PAD_PX    = re.compile(r"padding: '(\d+)px 0'")
PAD_CLAMP = re.compile(r"padding: 'clamp\([^)]*\) 0'")

def fix_padding(s, n):
    def px(m):
        v = int(m.group(1))
        if v < 40:
            return m.group(0)
        n[0] += 1
        return "padding: 'var(--section-y) 0'"
    s = PAD_PX.sub(px, s)
    def cl(m):
        n[0] += 1
        return "padding: 'var(--section-y) 0'"
    return PAD_CLAMP.sub(cl, s)

# ── type scale ────────────────────────────────────────────────────
# Only touch font sizes set on an actual heading tag, so stat numerals and
# body copy keep their own sizing.
HEADING = re.compile(r"<h([1-6])\b((?:[^>\"']|\"[^\"]*\"|'[^']*')*?)>", re.S)
FS = re.compile(r"fontSize: '(clamp\(([^)]*)\))'")

def tier(clamp_body):
    parts = [p.strip() for p in clamp_body.split(',')]
    if len(parts) != 3:
        return None
    mx = parts[2]
    m = re.match(r'([\d.]+)(px|rem)', mx)
    if not m:
        return None
    val = float(m.group(1)) * (16 if m.group(2) == 'rem' else 1)
    if val >= 56: return 'var(--fs-display)'
    if val >= 40: return 'var(--fs-h2)'
    if val >= 28: return 'var(--fs-h3)'
    return 'var(--fs-h4)'

def fix_type(s, n):
    def on_heading(m):
        attrs = m.group(2)
        def on_fs(fm):
            t = tier(fm.group(2))
            if not t:
                return fm.group(0)
            n[0] += 1
            return f"fontSize: '{t}'"
        return f'<h{m.group(1)}' + FS.sub(on_fs, attrs) + '>'
    return HEADING.sub(on_heading, s)

if __name__ == '__main__':
    pads = [0]; types = [0]; files = 0
    for a in sys.argv[1:]:
        p = pathlib.Path(a); s = p.read_text(); o = s
        s = fix_padding(s, pads)
        s = fix_type(s, types)
        if s != o:
            p.write_text(s); files += 1
    print(f'{pads[0]} section paddings + {types[0]} heading sizes normalised across {files} files')
