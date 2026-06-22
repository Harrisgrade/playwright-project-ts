import { test, expect } from "../ui-fixtures/ui-fixtures";
import { generateMockUser } from "../../utils/mocks";

const mockUser = generateMockUser();
test.describe("User Registration", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://automationexercise.com");
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(page.locator("body")).toBeVisible();
  });
  test("should register a new user", async ({ page, registerPage }) => {
    await page.locator("a[href='/login']").click();
    await page.locator('input[placeholder="Name"]').fill(mockUser.firstName);
    await page.locator("input[data-qa='signup-email']").fill(mockUser.email);
    await page.locator("button[data-qa='signup-button']").click();

    await test.step("should fill in account information", async () => {
      await registerPage.fillAccountInformation();
    });

    await test.step("should fill in address information", async () => {
      await registerPage.fillAdressInformation();
    });
  });
});
