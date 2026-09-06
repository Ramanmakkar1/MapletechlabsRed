#!/usr/bin/env python3
"""One system owns band alternation. Page templates were each setting their
own section backgrounds inline, which fought the global nth-of-type rule and
produced runs of identical bands. Strip them from src/app so the rule alone
decides; components under src/components keep theirs (the home page rhythm).
"""
import re, sys, pathlib

# a <section ...> opening tag, including its style object
SECTION = re.compile(r"<section\b((?:[^>\"'{}]|\"[^\"]*\"|'[^']*'|\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})*?)>", re.S)
BG = re.compile(r",?\s*background: '(?:var\(--surface-alt\)|var\(--surface\)|transparent)'")

if __name__ == '__main__':
    files = edits = 0
    for a in sys.argv[1:]:
        p = pathlib.Path(a); s = p.read_text()
        n = [0]
        def on_sec(m):
            attrs = m.group(1)
            new = BG.sub('', attrs)
            if new != attrs:
                n[0] += 1
            # a style object left empty reads oddly but is harmless
            return f'<section{new}>'
        out = SECTION.sub(on_sec, s)
        if n[0]:
            p.write_text(out); files += 1; edits += n[0]
    print(f'{edits} inline section backgrounds removed across {files} page files')
