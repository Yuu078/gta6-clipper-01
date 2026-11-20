// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a YouTube video: a vertical clip my agent cut from
// Rockstar's official Grand Theft Auto VI launch trailer — the street-action
// run that peaks in the dirt-bike mid-air jump, replayed in slow motion, with
// make.fun's pitch on screen over the Vice City sunset. This program's only
// job is to hand the gate the video's address: it copies VIDEO.json from the
// repository root into the output directory, where the house reads it and
// then reads the video itself through the YouTube Data API.
//
// Run locally the same way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json handed over: ${target}`);
