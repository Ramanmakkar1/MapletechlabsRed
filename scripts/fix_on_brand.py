#!/usr/bin/env python3
"""Text sitting on a brand-red fill must stay white. The property-pair pass
mapped `color: '#fff'` -> `var(--ink)` everywhere, which is right on a light
surface and wrong on a red button."""
import re, sys, pathlib

BRAND_BG = re.compile(
    r"background(?:Color|Image)?:\s*'(?:var\(--brand(?:-bright|-deep)?\)|#[fF]5290[dD]|#[eE]11900|#[bB]31400"
    r"|linear-gradient\([^']*(?:#[fF]5290[dD]|var\(--brand)[^']*\))'")
DARK_TEXT = re.compile(r"color:\s*'(var\(--ink\)|var\(--body\)|var\(--muted\)|#141118)'")

def fix(text):
    n = [0]
    def on_style(m):
        block = m.group(0)
        if BRAND_BG.search(block) and DARK_TEXT.search(block):
            new = DARK_TEXT.sub("color: '#fff'", block)
            n[0] += len(DARK_TEXT.findall(block))
            return new
        return block
    # each style={{ ... }} object, non-greedy up to the closing }}
    out = re.sub(r"style=\{\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\}", on_style, text)
    return out, n[0]

if __name__ == '__main__':
    files = edits = 0
    for a in sys.argv[1:]:
        p = pathlib.Path(a); s = p.read_text()
        new, c = fix(s)
        if c:
            p.write_text(new); files += 1; edits += c
    print(f'{edits} on-brand text fixes across {files} files')
