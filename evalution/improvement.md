# Improvement

## Problem
The system answers even when no relevant data exists.

## Evidence
Failure cases like FIFA World Cup produced weak answers.

## Fix
Add fallback response when no chunks are found.

## Result
Reduces hallucination and improves reliability.

## Future
Use embeddings for better retrieval.