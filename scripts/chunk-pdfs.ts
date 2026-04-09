import fs from "fs";
import path from "path";

const processedDir = path.join(process.cwd(), "data", "processed");
const finalDir = path.join(process.cwd(), "data", "final");
const outputFile = path.join(finalDir, "knowledge.json");

type ProcessedDoc = {
  source: string;
  text: string;
};

type Chunk = {
  id: string;
  source: string;
  chunkIndex: number;
  text: string;
};

function chunkText(text: string, chunkSize = 300): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks: string[] = [];

  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(" "));
  }

  return chunks;
}

function buildKnowledgeBase() {
  if (!fs.existsSync(finalDir)) {
    fs.mkdirSync(finalDir, { recursive: true });
  }

  const files = fs.readdirSync(processedDir).filter((file) => file.endsWith(".json"));
  const allChunks: Chunk[] = [];

  for (const file of files) {
    const filePath = path.join(processedDir, file);
    const doc: ProcessedDoc = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const chunks = chunkText(doc.text);

    chunks.forEach((chunk, index) => {
      allChunks.push({
        id: `${doc.source.replace(".pdf", "")}-${index + 1}`,
        source: doc.source,
        chunkIndex: index + 1,
        text: chunk,
      });
    });
  }

  fs.writeFileSync(outputFile, JSON.stringify(allChunks, null, 2), "utf-8");
  console.log(`Saved ${allChunks.length} chunks to ${outputFile}`);
}

buildKnowledgeBase();