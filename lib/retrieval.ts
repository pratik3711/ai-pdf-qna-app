import { Chunk, loadKnowledgeBase } from "./loadData";

function normalize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function scoreChunk(questionWords: string[], chunk: Chunk): number {
  const chunkWords = normalize(chunk.text);
  let score = 0;

  for (const word of questionWords) {
    if (chunkWords.includes(word)) {
      score += 1;
    }
  }

  return score;
}

export function retrieveRelevantChunks(question: string, topN = 3): Chunk[] {
  const knowledgeBase = loadKnowledgeBase();
  const questionWords = normalize(question);

  const scored = knowledgeBase.map((chunk) => ({
    chunk,
    score: scoreChunk(questionWords, chunk),
  }));

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .map((item) => item.chunk);
}