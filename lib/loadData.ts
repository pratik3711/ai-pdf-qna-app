import fs from "fs";
import path from "path";

export type Chunk = {
  id: string;
  source: string;
  chunkIndex: number;
  text: string;
};

export function loadKnowledgeBase(): Chunk[] {
  const filePath = path.join(process.cwd(), "data", "final", "knowledge.json");

  if (!fs.existsSync(filePath)) {
    throw new Error("knowledge.json not found. Run npm run chunk first.");
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}