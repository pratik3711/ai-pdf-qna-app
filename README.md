Your README is clean and technically solid — but for **this assignment specifically**, it’s miss

# 📄 AI PDF QnA App (End-to-End AI Application)

An AI-powered application that allows users to ask questions about PDF documents using a complete **end-to-end data pipeline** (ingestion → ETL → storage → retrieval → LLM → UI).

---

## 🌐 Live Demo

👉 [https://ai-pdf-qna-app.vercel.app](https://ai-pdf-qna-app.vercel.app)

---

## 📦 GitHub Repository

👉 [https://github.com/pratik3711/ai-pdf-qna-app](https://github.com/pratik3711/ai-pdf-qna-app)

---

## 🎯 Project Scope

### ✅ Supported Use Case

* Ask questions about pre-ingested PDF documents
* Retrieve relevant information from processed content
* Generate AI-powered answers using retrieved context

### ❌ Out of Scope

* Uploading PDFs at runtime
* Real-time document indexing
* Large-scale vector databases
* Multi-user or production-scale features

This is a **focused proof-of-concept**, as required by the assignment.

---

## 🏗️ System Architecture (End-to-End Flow)

```
PDF Files → ETL Pipeline → Structured Data → Retrieval → LLM → UI
```

### Breakdown:

1. **Ingestion**

   * PDFs stored in `/data/raw`

2. **ETL (GitHub Actions + Scripts)**

   * Extract text (`extract`)
   * Chunk text (`chunk`)
   * Output structured knowledge base

3. **Storage**

   * `/data/processed` → intermediate JSON
   * `/data/final/knowledge.json` → final dataset

4. **Retrieval Layer**

   * Finds relevant chunks based on user query

5. **LLM Layer**

   * Uses OpenAI API to generate answers from context

6. **UI Layer**

   * Next.js app deployed on Vercel

---

## ⚙️ ETL Pipeline

Runs locally or via GitHub Actions:

```bash
npm run extract
npm run chunk
```

### GitHub Actions Workflow:

* Install dependencies
* Run ETL
* Run tests

Located in:

```
.github/workflows/etl.yml
```

---

## 🧠 How QnA Works

1. User enters a question
2. Relevant chunks are retrieved
3. Context is sent to LLM
4. AI generates final answer

---

## 🧪 Testing Strategy

### ✅ Unit Testing (TDD)

* Framework: Vitest
* Covers:

  * Retrieval logic
  * Edge cases

Run:

```bash
npm test
```

---

### 🌐 End-to-End Testing (Playwright MCP)

* Simulates real user behavior:

  * Load app
  * Enter question
  * Click ask
  * Verify AI response

Run:

```bash
npx playwright test
```

---

## 🧠 Required Workflow Skills (Assignment Evidence)

### 1. `grill-me`

* Used to refine project scope and simplify architecture
* Result: narrowed app to PDF-based QnA POC

---

### 2. `write-a-prd`

👉 [Link your PRD GitHub Issue here]

Includes:

* scope
* architecture
* supported features
* out-of-scope

---

### 3. `prd-to-issues`

👉 [Link child GitHub Issues here]

* Broke PRD into smaller tasks:

  * ETL pipeline
  * Retrieval logic
  * UI integration
  * Testing

---

### 4. `tdd`

* Implemented retrieval logic with unit tests
* Tests validate expected behavior

---

### 5. `improve-codebase-architecture`

* Refactored structure:

  * separated ETL, retrieval, UI
  * improved modularity

---

## 📁 Project Structure

```
ai-pdf-qna-app/
├── app/
├── data/
├── lib/
├── scripts/
├── tests/
├── .github/workflows/
```

---

## 🛠️ Setup

```bash
git clone https://github.com/pratik3711/ai-pdf-qna-app.git
cd ai-pdf-qna-app
npm install
npm run extract
npm run chunk
npm run dev
```

---

## 🔐 Environment Variables

```
OPENAI_API_KEY=your_api_key_here
```

---

## 📌 Technologies

* Next.js
* TypeScript
* OpenAI API
* pdf-parse
* Vitest
* Playwright
* GitHub Actions

---

## 👨‍💻 Author

Pratik Patel

---

## 📜 License

Educational use only

---

