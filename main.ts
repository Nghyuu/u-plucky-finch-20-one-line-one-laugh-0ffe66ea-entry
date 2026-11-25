// One Line, One Laugh — make.fun bounty entry.
// Writes a single funny line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "I asked my smart speaker for motivation. It paused, then said, 'Have you tried being someone else?'";

if (line.length === 0 || line.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${line.length}`);
}

const entryPath = path.join(outputDir, "entry.txt");
fs.writeFileSync(entryPath, line + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
