#!/usr/bin/env python3
"""Insert a MediaBand directly after each page's hero — the spot both
reference sites use for their first large visual, and the reason inner
pages here had no imagery at all."""
import re, sys, pathlib

def insert(path: pathlib.Path, expr: str, caption: str | None) -> bool:
    s = path.read_text()
    if 'MediaBand' in s:
        return False
    hero = s.find('<section ref={heroRef}')
    if hero == -1:
        return False
    # the next <section that opens after the hero
    m = re.search(r'\n(\s*)<section\b', s[hero + 30:])
    if not m:
        return False
    at = hero + 30 + m.start()
    indent = m.group(1)
    cap = f'\n{indent}  caption="{caption}"' if caption else ''
    band = f'\n\n{indent}<MediaBand\n{indent}  media={{{expr}}}{cap}\n{indent}/>'
    s = s[:at] + band + s[at:]

    # import goes after the last existing import line
    lines = s.split('\n')
    last = max(i for i, l in enumerate(lines) if l.startswith('import '))
    lines.insert(last + 1, "import MediaBand from '@/components/MediaBand';")
    path.write_text('\n'.join(lines))
    return True

if __name__ == '__main__':
    done = []
    for f in sorted(pathlib.Path('src/app/services').glob('*/PageClient.tsx')):
        slug = f.parent.name
        expr = f"serviceMedia['{slug}'] ?? defaultMedia"
        if insert(f, expr, None):
            # media import too
            s = f.read_text()
            if 'serviceMedia' not in s.split('<MediaBand')[0].split('export default')[0]:
                pass
            s = s.replace("import MediaBand from '@/components/MediaBand';",
                          "import MediaBand from '@/components/MediaBand';\nimport { serviceMedia, defaultMedia } from '@/data/media';")
            f.write_text(s)
            done.append(slug)
    print(f'{len(done)} service pages: {", ".join(done)}')
