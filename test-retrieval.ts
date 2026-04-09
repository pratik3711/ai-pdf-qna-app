import { retrieveRelevantChunks } from "./lib/retrieval";

const question = "What are AWS subnets?";
const results = retrieveRelevantChunks(question, 3);

console.log("Question:", question);
console.log("Top results:");
console.log(JSON.stringify(results, null, 2));