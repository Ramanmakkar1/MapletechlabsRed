import fs from 'fs';
const files = process.argv.slice(2);
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const re = /metaTitle:\s*'((?:[^'\\]|\\.)*)'/g;
  let m, over = [];
  while ((m = re.exec(src))) {
    const t = m[1].replace(/\\'/g, "'");
    const branded = t + ' | Mapletech Labs';
    let len = branded.length;
    let note = 'branded';
    if (len > 60) {
      len = Math.min(t.length, 60);
      note = 'clamped';
    }
    if (len > 60) over.push([t, len, note]);
  }
  console.log(f, 'over 60:', over.length);
  over.forEach((o) => console.log(' ', o[1], o[2], o[0]));
}
