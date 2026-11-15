import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const CHECKER = fileURLToPath(new URL("./check-meta-lengths.mjs", import.meta.url));

function page(title, description, robots = "") {
  return `<!doctype html><html><head><title>${title}</title><meta name="description" content="${description}">${robots}</head><body></body></html>`;
}

function run(appDir, json = true) {
  return spawnSync(process.execPath, [CHECKER, ...(json ? ["--json"] : [])], {
    encoding: "utf8",
    env: { ...process.env, META_APP_DIR: appDir },
  });
}

test("rendered metadata gate rejects short text and accepts corrected audited URLs", () => {
  const appDir = mkdtempSync(join(tmpdir(), "mapletech-meta-fixture-"));
  const shortTitle = "Intentionally short";
  const shortDescription = "Intentionally short description";
  try {
    writeFileSync(join(appDir, "index.html"), page("A".repeat(50), "D".repeat(140)));
    mkdirSync(join(appDir, "short"));
    writeFileSync(join(appDir, "short", "index.html"), page(shortTitle, shortDescription));
    mkdirSync(join(appDir, "noindex"));
    writeFileSync(join(appDir, "noindex", "index.html"), page(shortTitle, shortDescription, '<meta name="robots" content="noindex,nofollow">'));

    const failed = run(appDir);
    assert.equal(failed.status, 1);
    assert.deepEqual(JSON.parse(failed.stdout), [
      { route: "/short", field: "title", length: shortTitle.length, text: shortTitle },
      { route: "/short", field: "description", length: shortDescription.length, text: shortDescription },
    ]);

    rmSync(join(appDir, "short"), { recursive: true });
    const passed = run(appDir, false);
    assert.equal(passed.status, 0, passed.stdout + passed.stderr);
    assert.match(passed.stdout, /1 pages checked, 0 problems/);
  } finally {
    rmSync(appDir, { recursive: true, force: true });
  }
});
