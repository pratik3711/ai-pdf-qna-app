# 🤖 AI PDF Q&A App (End-to-End AI Application with ETL Pipeline)

An end-to-end AI-powered web application that allows users to ask questions and get answers from PDF documents using a Retrieval-Augmented Generation (RAG) approach.

---

## 🚀 Live Demo

👉  https://ai-pdf-qna-app.vercel.app

---

## 📌 Features

* 📄 Upload and process PDF documents
* 🔍 Intelligent retrieval of relevant content
* 🤖 AI-generated answers using OpenAI
* ⚡ Fast and responsive UI (Next.js)
* 🧪 Unit testing (Vitest)
* 🌐 End-to-end testing (Playwright)
* 🔄 CI/CD pipeline with GitHub Actions
* ☁️ Deployed on Vercel
* 🛡️ **Improvement: Safe fallback when no relevant data found (prevents hallucination)**

---

## 🏗️ System Architecture

```
PDF Files → ETL Pipeline → Chunking → Storage (JSON)
        → Retrieval → OpenAI → AI Answer → UI
```

---

## ⚙️ Tech Stack

* **Frontend**: Next.js (React)
* **Backend/API**: Node.js + TypeScript
* **AI Model**: OpenAI GPT (gpt-4o-mini)
* **Testing**: Vitest + Playwright
* **CI/CD**: GitHub Actions
* **Deployment**: Vercel

---

## 📂 Project Structure

```
ai-pdf-qna-app/
│
├── app/                # Next.js frontend + API routes
├── data/               # Raw and processed PDF data
│   ├── raw/
│   ├── processed/
│   └── knowledge.json
├── lib/                # Core logic (retrieval + answer generation)
├── scripts/            # ETL pipeline scripts
├── tests/              # Unit & E2E tests
├── .github/workflows/  # CI pipeline
├── README.md
├── baseline.md
└── improvement.md
```

---

## 🔄 ETL Pipeline

1. Extract text from PDFs
2. Split text into chunks
3. Store structured chunks in JSON
4. Used later for retrieval

Run ETL:

```bash
npm run extract
npm run chunk
```

---

## 🔍 Retrieval + Answer Flow

1. User enters question
2. System retrieves relevant chunks
3. Context passed to OpenAI
4. AI generates answer using ONLY that context

---

## 🧠 Improvement (Assignment 6)

### ❌ Problem (Baseline)

The system attempted to answer every question, even when no relevant information was found — leading to possible hallucinations.

### ✅ Solution (Improvement)

Added a fallback mechanism in `generateAnswer()`:

```ts
if (!chunks || chunks.length === 0) {
  return "I could not find relevant information in the PDFs.";
}
```

### 🎯 Result

* Prevents incorrect AI responses
* Ensures reliability
* Makes system production-ready

---

## 🧪 Testing Strategy

### Unit Testing (Vitest)

```bash
npm test
```

Tests:

* Retrieval returns relevant chunks
* Handles unrelated questions correctly

---

### End-to-End Testing (Playwright)

```bash
npx playwright test
```

Simulates:

* User entering a question
* Clicking Ask
* Verifying AI response

---

## ⚙️ CI/CD Pipeline

* Runs on every push
* Executes:

  * Unit tests
  * E2E tests
* Fails if tests fail

---

## ☁️ Deployment (Vercel)

1. Connect GitHub repo
2. Add environment variable:

```
OPENAI_API_KEY=your_api_key
```

3. Deploy automatically

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🧑‍💻 Author

**Pratik Patel**

---

## 📜 License

This project is for educational purposes only.
