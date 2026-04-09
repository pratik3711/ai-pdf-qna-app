import { test, expect } from "@playwright/test";

test("user can ask a PDF question and see an AI answer", async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("Ask a question about your PDFs...").fill("What are AWS subnets?");
  await page.getByRole("button", { name: "Ask" }).click();

  await expect(page.getByText("AI Answer")).toBeVisible({ timeout: 15000 });
});