import { test, expect } from "../ui-fixtures/ui-fixtures";

test.describe("Home Page", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test("should display core homepage sections", async ({ homePage }) => {
    await expect(homePage.header).toBeVisible();
    await expect(homePage.slider).toBeVisible();
    await expect(homePage.sliderCarousel).toBeVisible();
    await expect(homePage.featuredItemsTitle).toHaveText("Features Items");
    await expect(homePage.productCards.first()).toBeVisible();
    await expect(homePage.footer).toBeVisible();
  });

  test("should navigate to signup from the homepage", async ({
    homePage,
    signupPage,
  }) => {
    await homePage.clickSignupLoginButton();

    await expect(signupPage.signupHeader).toHaveText("New User Signup!");
    await expect(signupPage.signupButton).toBeVisible();
  });
});
