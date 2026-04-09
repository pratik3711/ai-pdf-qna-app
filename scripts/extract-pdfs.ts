import fs from "fs";
import path from "path";
import pdf from "pdf-parse";

const rawDir = path.join(process.cwd(), "data", "raw");
const processedDir = path.join(process.cwd(), "data", "processed");

async function extractPdfs() {
  if (!fs.existsSync(processedDir)) {
    fs.mkdirSync(processedDir, { recursive: true });
  }

  const files = fs.readdirSync(rawDir).filter((file) => file.endsWith(".pdf"));

  if (files.length === 0) {
    console.log("No PDF files found in data/raw");
    return;
  }

  for (const file of files) {
    const filePath = path.join(rawDir, file);
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(dataBuffer);

    const output = {
      source: file,
      text: pdfData.text.replace(/\s+/g, " ").trim(),
    };

    const outputPath = path.join(processedDir, file.replace(".pdf", ".json"));

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");
    console.log(`Processed: ${file}`);
  }
}

extractPdfs().catch((error) => {
  console.error("Error extracting PDFs:", error);
});