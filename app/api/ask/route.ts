import { NextResponse } from "next/server";
import { retrieveRelevantChunks } from "@/lib/retrieval";
import { generateAnswer } from "@/lib/answer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const question = body.question;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const chunks = retrieveRelevantChunks(question, 3);

    const answer =
      chunks.length > 0
        ? await generateAnswer(question, chunks)
        : "I could not find that in the PDFs.";

    return NextResponse.json({
      question,
      answer,
      chunks,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}