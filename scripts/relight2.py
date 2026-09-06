#!/usr/bin/env python3
"""Pass 2: colour literals the property-pair pass could not see —
imperative style assignments, JSX attributes, and ternary branches."""
import re, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from relight import map_text, map_bg, map_border, map_stroke_fill, TEXT, BG, BORDER

def map_by_prop(prop, v):
    if prop in TEXT:   return map_text(v)
    if prop in BG:     return map_bg(v)
    if prop in BORDER: return map_border(v)
    if prop in ('stroke', 'fill'): return map_stroke_fill(v)
    return None

COLOR = r"(?:rgba?\([^)]*\)|#[0-9a-fA-F]{3,8}\b|\bwhite\b|\bblack\b)"

def run(text):
    n = [0]

    # 1) e.currentTarget.style.background = 'rgba(255,255,255,.05)'
    def style_assign(m):
        prop, q, val = m.group(1), m.group(2), m.group(3)
        new = map_by_prop(prop, val)
        if new and new != val:
            n[0] += 1
            return f'.style.{prop} = {q}{new}{q}'
        return m.group(0)
    text = re.sub(r"\.style\.(\w+)\s*=\s*(['\"])(" + COLOR + r")\2", style_assign, text)

    # 2) JSX attributes: stroke="rgba(255,255,255,0.3)" / fill="#fff"
    def jsx_attr(m):
        attr, q, val = m.group(1), m.group(2), m.group(3)
        new = map_stroke_fill(val)
        if new and new != val:
            n[0] += 1
            return f'{attr}={q}{new}{q}'
        return m.group(0)
    text = re.sub(r"\b(stroke|fill)=(['\"])(" + COLOR + r")\2", jsx_attr, text)

    # 3) ternary branches:  color: cond ? '#f5290d' : 'rgba(255,255,255,0.75)'
    def ternary(m):
        prop, expr = m.group(1), m.group(2)
        def lit(lm):
            q, v = lm.group(1), lm.group(2)
            new = map_by_prop(prop, v)
            if new and new != v:
                n[0] += 1
                return f'{q}{new}{q}'
            return lm.group(0)
        return f'{prop}: ' + re.sub(r"(['\"])(" + COLOR + r")\1", lit, expr)
    text = re.sub(r"\b(\w+):\s*([^,;{}\n]*\?[^,;{}\n]*)", ternary, text)

    return text, n[0]

if __name__ == '__main__':
    files = edits = 0
    for a in sys.argv[1:]:
        p = pathlib.Path(a); s = p.read_text()
        new, c = run(s)
        if c:
            p.write_text(new); files += 1; edits += c
            print(f'{c:5d}  {p}')
    print(f'\n{edits} replacements across {files} files')
