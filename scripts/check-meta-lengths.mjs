// Build-output check: every rendered page's <title> and meta description must
// stay within the autopilot audit limits (title 20-65 chars, description
// 70-165 chars). Source metadata can look in range while the rendered HTML is
// not (seoTitle() absolute titles, 120-155 char article descriptions), so this
// reads the real build output in .next/server/app, not the source.
//
// Run: npm run check:meta   (after `npm run build`; never part of the build)
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const APP_DIR = join(ROOT, ".next", "server", "app");
const SKIP_FILES = new Set(["_not-found.html", "404.html", "500.html"]);
const ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#x27;": "'" };

function decode(text) {
  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#x27;/g, (m) => ENTITIES[m]);
}

// Decode entities and collapse whitespace before measuring length.
function measure(text) {
  return decode(text).replace(/\s+/g, " ").trim();
}

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(file);
    return entry.isFile() && entry.name.endsWith(".html") ? [file] : [];
  });
}

// .next/server/app/blog/slug/index.html -> /blog/slug ; page.html -> /
function routeFor(file) {
  const parts = relative(APP_DIR, file).split(/[\\/]/);
  const base = parts.pop().replace(/\.html$/, "");
  const dir = base === "index" ? parts : [...parts, base];
  return "/" + dir.join("/");
}

if (!existsSync(APP_DIR) || !statSync(APP_DIR).isDirectory()) {
  console.log("Run `npm run build` first");
  process.exit(1);
}

const problems = [];
let checked = 0;
for (const file of htmlFiles(APP_DIR).sort()) {
  if (SKIP_FILES.has(file.split(sep).pop())) continue;
  const html = readFileSync(file, "utf8");
  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]*>/i);
  if (robots && /noindex/i.test(robots[0])) continue; // noindex pages are not audited
  checked++;
  const route = routeFor(file);

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const titleText = title ? measure(title[1]) : "";
  if (!titleText) problems.push({ route, field: "title", length: 0, text: "(missing)" });
  else if (titleText.length > 65 || titleText.length < 20) problems.push({ route, field: "title", length: titleText.length, text: titleText });

  const description = html.match(/<meta[^>]+name=["']description["'][^>]*content=(["'])([\s\S]*?)\1/i);
  const descriptionText = description ? measure(description[2]) : "";
  if (!descriptionText) problems.push({ route, field: "description", length: 0, text: "(missing)" });
  else if (descriptionText.length > 165 || descriptionText.length < 70) problems.push({ route, field: "description", length: descriptionText.length, text: descriptionText });
}

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(problems, null, 2));
} else {
  for (const p of problems) console.log(`${p.route}  ${p.field}(${p.length}): ${p.text}`);
  console.log(`${checked} pages checked, ${problems.length} problems`);
}
process.exit(problems.length > 0 ? 1 : 0);
