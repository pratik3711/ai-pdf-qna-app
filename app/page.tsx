"use client";

import { useState } from "react";

type Chunk = {
  id: string;
  source: string;
  chunkIndex: number;
  text: string;
};

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState<Chunk[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAsk() {
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setAnswer("");
    setResults([]);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setAnswer(data.answer || "");
      setResults(data.chunks || []);
    } catch (err) {
      setError("Failed to fetch results");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI PDF Q&A App</h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about your PDFs..."
        className="w-full border rounded-lg p-4 mb-4"
        rows={4}
      />

      <button
        onClick={handleAsk}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {answer && (
        <div className="mt-8 border rounded-lg p-4 bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">AI Answer</h2>
          <p>{answer}</p>
        </div>
      )}

      <div className="mt-8 space-y-4">
        {results.map((chunk) => (
          <div key={chunk.id} className="border rounded-lg p-4">
            <p className="text-sm text-gray-500 mb-2">
              {chunk.source} — chunk {chunk.chunkIndex}
            </p>
            <p>{chunk.text.slice(0, 400)}...</p>
          </div>
        ))}
      </div>
    </main>
  );
}