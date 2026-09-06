#!/usr/bin/env python3
"""Enforce a real hierarchy: only h1 may be display-sized. Section h2s were
rendering at 68px — identical to the hero — which flattens the page.
Size within a level is still respected so card sub-headings don't balloon."""
import re, sys, pathlib

HEADING = re.compile(r"<h([1-6])\b((?:[^>\"']|\"[^\"]*\"|'[^']*')*?)>", re.S)
FS = re.compile(r"fontSize: '(var\(--fs-[a-z0-9]+\)|clamp\(([^)]*)\))'")

ORDER = ['var(--fs-h4)', 'var(--fs-h3)', 'var(--fs-h2)', 'var(--fs-display)']
# the largest step each heading level is allowed to reach
CAP = {'1': 'var(--fs-display)', '2': 'var(--fs-h2)',
       '3': 'var(--fs-h3)', '4': 'var(--fs-h4)', '5': 'var(--fs-h4)', '6': 'var(--fs-h4)'}

def run(text):
    n = [0]
    def on_heading(m):
        lvl, attrs = m.group(1), m.group(2)
        cap = CAP[lvl]
        def on_fs(fm):
            cur = fm.group(1)
            if not cur.startswith('var(--fs-'):
                return fm.group(0)
            if ORDER.index(cur) > ORDER.index(cap):
                n[0] += 1
                return f"fontSize: '{cap}'"
            return fm.group(0)
        return f'<h{lvl}' + FS.sub(on_fs, attrs) + '>'
    return HEADING.sub(on_heading, text), n[0]

if __name__ == '__main__':
    files = edits = 0
    for a in sys.argv[1:]:
        p = pathlib.Path(a); s = p.read_text()
        new, c = run(s)
        if c:
            p.write_text(new); files += 1; edits += c
    print(f'{edits} headings capped to their level across {files} files')
