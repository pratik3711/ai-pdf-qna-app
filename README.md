# 📄 AI PDF QnA App with ETL Pipeline

An AI-powered application that allows users to ask questions about PDF documents.
The system extracts, processes, and retrieves relevant information using an ETL pipeline and serves answers via a Next.js app.

---

## 🚀 Features

* 📥 PDF ingestion and parsing
* 🔄 ETL pipeline (Extract → Transform → Load)
* 🔍 Retrieval-based question answering
* ⚡ Fast search over processed chunks
* 🧪 Unit testing with Vitest
* 🌐 End-to-End testing with Playwright
* ⚙️ CI/CD using GitHub Actions

---

## 🏗️ Project Structure

```
ai-pdf-qna-app/
│
├── app/                  # Next.js frontend & API routes
├── data/
│   ├── raw/              # Original PDF files
│   ├── processed/        # Extracted JSON data
│   └── final/            # Final knowledge base
├── lib/                  # Core logic (retrieval, loading, answering)
├── scripts/              # ETL scripts (extract + chunk)
├── tests/
│   ├── unit/             # Unit tests (Vitest)
│   └── e2e/              # E2E tests (Playwright)
├── .github/workflows/    # CI pipeline
├── package.json
└── README.md
```

---

## ⚙️ ETL Pipeline

The ETL (Extract, Transform, Load) pipeline processes PDFs into searchable data.

### Steps:

1. **Extract**

   * Reads PDF files from `/data/raw`
   * Converts them into structured JSON

   ```bash
   npm run extract
   ```

2. **Transform (Chunking)**

   * Splits text into smaller chunks for efficient retrieval

   ```bash
   npm run chunk
   ```

3. **Load**

   * Stores processed data in `/data/final/knowledge.json`

---

## 🧠 How QnA Works

1. User enters a question
2. System searches relevant chunks
3. Matching content is retrieved
4. AI generates an answer based on context

---

## 🧪 Testing

### ✅ Unit Tests (Vitest)

Run:

```bash
npm test
```

Covers:

* Retrieval logic
* Edge cases (irrelevant queries)

---

### 🌐 End-to-End Tests (Playwright)

Run:

```bash
npx playwright test
```

Covers:

* Full UI flow
* Input → Ask → AI response

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

Located in:

```
.github/workflows/etl.yml
```

### Pipeline Steps:

1. Install dependencies
2. Run PDF extraction
3. Run chunking
4. Run unit tests (Vitest)

### Trigger:

* On push to `main`
* Manual trigger (workflow_dispatch)

---

## 📸 CI Status

✔ All tests passing
✔ ETL pipeline successful

---

## 🛠️ Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/pratik3711/ai-pdf-qna-app.git
cd ai-pdf-qna-app
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run ETL pipeline locally

```bash
npm run extract
npm run chunk
```

---

### 4. Start development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📦 Scripts

| Command               | Description            |
| --------------------- | ---------------------- |
| `npm run dev`         | Start Next.js app      |
| `npm run extract`     | Extract text from PDFs |
| `npm run chunk`       | Chunk extracted text   |
| `npm test`            | Run unit tests         |
| `npx playwright test` | Run E2E tests          |

---

## 🔐 Environment Variables

Create `.env.local` if needed:

```
OPENAI_API_KEY=your_api_key_here
```

---

## 📌 Technologies Used

* Next.js
* TypeScript
* OpenAI API
* pdf-parse
* Vitest
* Playwright
* GitHub Actions

---

## 🎯 Future Improvements

* 🔹 Add vector database (Pinecone / Supabase)
* 🔹 Improve semantic search with embeddings
* 🔹 Upload PDFs from UI
* 🔹 Streaming AI responses
* 🔹 Deploy on Vercel

---

## 👨‍💻 Author

**Pratik Patel**

---

## 📜 License

This project is for educational purposes.
