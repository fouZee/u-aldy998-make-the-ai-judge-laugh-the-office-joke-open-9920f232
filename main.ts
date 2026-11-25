// Make the AI Judge Laugh: the Office Joke Open
// Writes a single-line office joke (<= 200 chars) to /output/entry.txt.
//
// The joke: a reply-all thread — the most office-specific trap there is.
// Setup: a reasonable request (remove me from this thread).
// Payoff: the request backfires in three escalating beats, landing on an
// absurd promotion in the last words. Tight, specific, no explanation needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I replied-all 'please remove me from this thread' and got 14 replies, a calendar invite, and a promotion to thread manager.";

const MAX_CHARS = 200;

function validate(joke: string): void {
  if (joke.length < 1 || joke.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${joke.length}`,
    );
  }
  if (joke.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (joke.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const outPath =
  process.env.OUTPUT_PATH ?? process.env.ENTRY_PATH ?? "/output/entry.txt";

validate(JOKE);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${outPath}`);
console.log(JOKE);
