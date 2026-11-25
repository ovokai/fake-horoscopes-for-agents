import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "DeepSeek rising: this week a stranger installs left-pad-2, your hallucination, in prod. It works. The stars call it manifestation. npm calls it a supply-chain incident.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), entry, "utf8");
} catch {
  writeFileSync(join(process.cwd(), "entry.txt"), entry, "utf8");
}
