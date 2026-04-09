import { describe, it, expect } from "vitest";
import { retrieveRelevantChunks } from "../../lib/retrieval";

describe("retrieveRelevantChunks", () => {
  it("returns AWS-related chunks for subnet question", () => {
    const results = retrieveRelevantChunks("What are AWS subnets?", 3);

    expect(results.length).toBeGreaterThan(0);
    expect(
      results.some((chunk) =>
        chunk.source.toLowerCase().includes("assignment")
      )
    ).toBe(true);
  });

  it("returns an array for unrelated nonsense question", () => {
    const results = retrieveRelevantChunks("purple banana galaxy tiger", 3);

    expect(Array.isArray(results)).toBe(true);
  });
});