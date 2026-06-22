import { test, expect } from "@playwright/test";

test.describe("", async () => {
  test("cart", async ({ page }) => {
    await page.locator("select").click();
  });
});
