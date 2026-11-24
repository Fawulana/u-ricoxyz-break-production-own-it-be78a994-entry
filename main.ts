// SPDX-License-Identifier: MIT
// Break Production, Own It — u-ricoxyz-break-production-own-it-be78a994
// Writes one brutally honest one-line confession to /output/entry.txt.
// Deterministic, offline, stdlib only. No input, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const LINE =
  "I dropped the users table in production, blamed the intern, and the intern doesn't exist.";

// The grader runs the program with /output as the artifact directory.
// OUTPUT_PATH lets the same program be verified locally into any directory.
// Gate guard: the sealed scorer requires 1-200 chars, single line, not
// only whitespace. Refuse to write anything that would fail the gate.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry line violates the 1-200 char single-line gate (${LINE.length} chars)`);
}

const outPath = resolve(process.env.OUTPUT_PATH ?? "/output/entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
