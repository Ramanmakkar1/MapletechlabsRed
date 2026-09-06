#!/usr/bin/env python3
"""Flatten every remaining gradient to a solid colour — the site is meant to
read as clean white with solid red accents, and photography carries the
visual interest instead."""
import re, sys, pathlib

def run(text):
    n = [0]
    def sub(pat, repl, s):
        s2, c = re.subn(pat, repl, s)
        n[0] += c
        return s2

    # decorative blur blobs behind hero copy -> nothing
    text = sub(r"radial-gradient\(circle,\s*rgba\(245,\s*41,\s*13,[\d.]+\)\s*0%,\s*transparent\s*\d+%\)",
               "transparent", text)
    # button ramp -> solid brand
    text = sub(r"var\(--brand-grad-btn\)", "var(--brand)", text)
    text = sub(r"var\(--brand-grad\)", "var(--brand)", text)
    # soft red tint fills -> the flat tint token
    text = sub(r"linear-gradient\([^)]*rgba\(245,\s*41,\s*13,\s*0\.(?:0\d|1[0-9]?)\)[^)]*\)",
               "var(--brand-tint)", text)
    # vertical accent rules -> solid brand
    text = sub(r"linear-gradient\(to bottom,\s*#f5290d,\s*rgba\(245,\s*41,\s*13,[\d.]+\)\)",
               "var(--brand)", text)
    text = sub(r"linear-gradient\(to bottom,\s?rgba\(245,\s*41,\s*13,\s*0\.5\)[^)]*\)",
               "var(--brand)", text)
    text = sub(r"linear-gradient\(to bottom,\s*transparent,\s*rgba\(245,\s*41,\s*13,[\d.]+\)[^)]*\)",
               "var(--brand)", text)
    return text, n[0]

if __name__ == '__main__':
    files = edits = 0
    for a in sys.argv[1:]:
        p = pathlib.Path(a); s = p.read_text()
        new, c = run(s)
        if c:
            p.write_text(new); files += 1; edits += c
    print(f'{edits} gradients flattened across {files} files')
