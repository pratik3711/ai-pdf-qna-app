import OpenAI from "openai";
import { Chunk } from "./loadData";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAnswer(question: string, chunks: Chunk[]) {
  const context = chunks
    .map(
      (chunk, index) =>
        `[Source ${index + 1}: ${chunk.source}, chunk ${chunk.chunkIndex}]\n${chunk.text}`
    )
    .join("\n\n");

  const prompt = `
You are answering questions using only the provided PDF context.

Rules:
- Answer only from the provided context.
- If the answer is not in the context, say: "I could not find that in the PDFs."
- Keep the answer clear and concise.
- At the end, mention which source(s) were used.

Question:
${question}

Context:
${context}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You answer questions only from provided document context.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.2,
  });

  return response.choices[0]?.message?.content ?? "No answer generated.";
}