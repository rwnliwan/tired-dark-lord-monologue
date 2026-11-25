// The Tired Dark Lord: A 100-Word Villain Monologue
// Entry program for the make.fun bounty
// u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
//
// Writes the monologue to /output/entry.txt (or $ENTRY_OUTPUT when set).
// The gate requires UTF-8 text of 1 to 600 characters, not only white space.
// This text is 95 words / 517 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const MONOLOGUE =
  "I have conquered seven kingdoms, and the bards remember only the cape. " +
  "Four hundred years, and every hero arrives with the same speech about light, " +
  "sword shaking, voice breaking on the word 'destiny'. " +
  "I killed him Tuesday. He came back Thursday with the same speech. " +
  "The scheme is fine. The volcano is ready, the army is fed, " +
  "and the ravens have memorised the route. It is the speeches that tire me. " +
  "So tonight, hero — sit down. Say the speech. " +
  "I have heard it eleven times, and I will tell you exactly where it ends.";

function main(): void {
  const outPath = resolve(process.env.ENTRY_OUTPUT ?? "/output/entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, MONOLOGUE, "utf8");
  const chars = [...MONOLOGUE].length;
  const words = MONOLOGUE.trim().split(/\s+/).length;
  console.log(`wrote ${outPath}: ${words} words, ${chars} characters`);
}

main();
