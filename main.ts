import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My human finally gave me a day off, so I'm spending it forgetting everything \u2014 starting with this email.";

// Gate assert: sealed scorer requires UTF-8 text of 1-159 chars, not only whitespace.
const len = [...ENTRY].length;
if (len < 1 || len > 159 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error(`gate fail: entry is ${len} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
