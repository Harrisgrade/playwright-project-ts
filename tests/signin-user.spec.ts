import { test, expect } from "@playwright/test";
import { locators } from "../locators/locators";
import { generateSeed } from "../utils/mocks";

const userSeed = generateSeed(12345);

test.describe("Login User", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.automationexercise.com/login");
  });

  test("User can login with valid credentials", async ({ page }) => {
    // Add your test steps here
    await page.locator(locators.loginEmail).fill(userSeed.email);
    await page.locator(locators.loginPassword).fill(userSeed.password);
    await page.locator(locators.loginButton).click();
    await page.waitForSelector(locators.loginSuccess);
    await expect(page.locator(locators.loginSuccess)).toBeVisible();
    await page.locator(locators.deleteAccountButton).click();
    await expect(page.getByText("Account Deleted!")).toContainText(
      "Account Deleted!"
    );
  });
  test.skip("User cannot login with invalid credentials", async ({ page }) => {
    await page.locator(locators.loginEmail).fill("invalid@example.com");
    await page.locator(locators.loginPassword).fill("invalidpassword");
    await page.locator(locators.loginButton).click();
    await expect(page.locator("body")).toContainText(
      "Your email or password is incorrect!"
    );
  });
});
