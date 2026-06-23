import { test, expect } from "../ui-fixtures/ui-fixtures";
import { generateMockUser } from "../../utils/mocks";

test.describe("Signup Page", () => {
  test.beforeEach(async ({ signupPage }) => {
    await signupPage.goto();
  });

  test("should display signup form controls", async ({ signupPage }) => {
    await expect(signupPage.signupHeader).toHaveText("New User Signup!");
    await expect(signupPage.signupName).toBeVisible();
    await expect(signupPage.signupEmail).toBeVisible();
    await expect(signupPage.signupButton).toBeVisible();
  });

  test("should open account information after starting signup", async ({
    signupPage,
  }) => {
    const mockUser = generateMockUser();

    await signupPage.startSignup(mockUser);

    await expect(signupPage.registerName).toBeVisible();
    await expect(signupPage.registerPassword).toBeVisible();
    await expect(signupPage.createAccountButton).toBeVisible();
  });
});
