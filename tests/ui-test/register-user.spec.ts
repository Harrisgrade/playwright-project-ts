import { test, expect } from "../ui-fixtures/ui-fixtures";
import { generateMockUser } from "../../utils/mocks";

test.describe("User Registration", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.header).toBeVisible();
    await expect(homePage.featuredItemsTitle).toHaveText("Features Items");
  });

  test("should open the signup page from the home page", async ({
    homePage,
    signupPage,
  }) => {
    await homePage.clickSignupLoginButton();
    await expect(signupPage.signupHeader).toHaveText("New User Signup!");
    await expect(signupPage.signupName).toBeVisible();
    await expect(signupPage.signupEmail).toBeVisible();
    await expect(signupPage.signupButton).toBeVisible();
  });

  test("should start a new user signup", async ({ homePage, signupPage }) => {
    const mockUser = generateMockUser();

    await homePage.clickSignupLoginButton();
    await signupPage.startSignup(mockUser);

    await expect(signupPage.registerName).toBeVisible();
    await expect(signupPage.registerPassword).toBeVisible();
    await expect(signupPage.createAccountButton).toBeVisible();
  });

  test("should complete the registration form", async ({
    homePage,
    signupPage,
    registerPage,
  }) => {
    const mockUser = generateMockUser();

    await homePage.clickSignupLoginButton();
    await signupPage.startSignup(mockUser);

    await test.step("should fill in account information", async () => {
      await registerPage.fillAccountInformation(mockUser);
    });

    await test.step("should fill in address information", async () => {
      await registerPage.fillAddressInformation(mockUser);
    });

    await expect(registerPage.createAccountButton).toBeVisible();
    await expect(registerPage.registerNewsletter).toBeChecked();
    await expect(registerPage.registerSpecialOffers).toBeChecked();
  });
});
