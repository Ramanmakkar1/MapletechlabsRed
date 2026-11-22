// Writes public/build-info.json so the deploy pipeline can verify which
// commit is actually live at https://mapletechlabs.ca/build-info.json.
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function resolveCommit() {
  const fromEnv =
    process.env.COMMIT_SHA ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.BUILD_SHA ||
    process.env.GIT_COMMIT ||
    process.env.SOURCE_COMMIT;
  if (fromEnv) return fromEnv.trim();

  try {
    return (
      execSync('git rev-parse HEAD', {
        cwd: root,
        stdio: ['ignore', 'pipe', 'ignore'],
      })
        .toString()
        .trim() || 'unknown'
    );
  } catch {
    return 'unknown';
  }
}

const buildInfo = {
  commit: resolveCommit(),
  builtAt: new Date().toISOString(),
};

const publicDir = path.join(root, 'public');
mkdirSync(publicDir, { recursive: true });
writeFileSync(
  path.join(publicDir, 'build-info.json'),
  `${JSON.stringify(buildInfo, null, 2)}\n`,
  'utf8',
);

console.log(`Wrote public/build-info.json (${buildInfo.commit} @ ${buildInfo.builtAt})`);
