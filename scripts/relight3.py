#!/usr/bin/env python3
"""Pass 3: sweep the stragglers the structured passes could not reach —
white-alpha inside template literals, JSX expression attributes, gradient
stops and nested ternaries. Safe only for files with no dark section left,
so the ink-band components are excluded by the caller."""
import re, sys, pathlib

def dark_for(a):
    if a <= 0.035: return 'rgba(20,17,24,0.035)'   # grid lines / whisper fills
    if a <= 0.12:  return 'var(--line)'
    if a <= 0.30:  return 'var(--line-strong)'
    if a <= 0.52:  return 'var(--muted)'
    if a <= 0.85:  return 'var(--body)'
    return 'var(--ink)'

WA = re.compile(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([\d.]+)\s*\)')

if __name__ == '__main__':
    files = edits = 0
    for a in sys.argv[1:]:
        p = pathlib.Path(a); s = p.read_text()
        new, n = WA.subn(lambda m: dark_for(float(m.group(1))), s)
        # plain white as a colour value on a light page
        new2, n2 = re.subn(r"(color|stroke|fill):\s*'#fff(?:fff)?'", r"\1: 'var(--ink)'", new)
        if n + n2:
            p.write_text(new2); files += 1; edits += n + n2
    print(f'{edits} straggler fixes across {files} files')
