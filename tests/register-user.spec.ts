import { expect, test } from "@playwright/test";
import { locators } from "../locators/locators";
import { generateMockUser } from "../utils/mocks";

const mockUser = generateMockUser();
test.describe("User Registration", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://automationexercise.com");
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(page.locator("body")).toBeVisible();
  });
  test("should register a new user", async ({ page }) => {
    await page.locator(locators.signUpLoginButton).click();
    await expect(page.locator(locators.newUserSignupHeader)).toBeVisible();

    await page.locator(locators.signupName).fill(mockUser.firstName);
    expect(await page.locator(locators.signupName).inputValue()).toBe(
      mockUser.firstName
    );
    await page.locator(locators.signupEmail).fill(mockUser.email);
    expect(await page.locator(locators.signupEmail).inputValue()).toBe(
      mockUser.email
    );
    await expect(page.locator(locators.signupButton)).toBeVisible();
    await page.locator(locators.signupButton).click();
    console.log(mockUser.firstName, mockUser.email);

    await expect(page.getByText("Enter Account Information")).toBeVisible();

    // move mock gender to data
    await page.locator(mockUser.gender).check();
    await page.locator(locators.registerName).fill(mockUser.firstName);

    await page.$eval(locators.registerEmail, (el) => {
      if (el.hasAttribute("disabled")) {
        el.removeAttribute("disabled");
      }
    });
    await page.locator(locators.registerEmail).fill(mockUser.email);
    await page.locator(locators.registerPassword).fill(mockUser.password);
    await page.locator(locators.registerDay).selectOption(mockUser.dobDay);
    await page.locator(locators.registerMonth).selectOption(mockUser.dobMonth);
    await page.locator(locators.registerYear).selectOption(mockUser.dobYear);
    await page.locator(locators.registerNewsletter).check();
    await page.locator(locators.registerSpecialOffers).check();

    await page.locator(locators.addressFirstName).fill(mockUser.firstName);
    await page.locator(locators.addressLastName).fill(mockUser.lastname);
    await page.locator(locators.addressCompany).fill(mockUser.company);
    await page.locator(locators.addressAddress).fill(mockUser.address);
    console.log(mockUser.Country);
    await page.locator(locators.addressCountry).selectOption(mockUser.Country);

    await page.locator(locators.addressState).fill(mockUser.State);
    await page.locator(locators.addressCity).fill(mockUser.City);
    await page.locator(locators.addressZipCode).fill(mockUser.ZipCode);
    await page.locator(locators.addressMobilePhone).fill(mockUser.MobilePhone);

    await page.locator(locators.addressCreateAccountButton).click();
    await expect(page.getByText("Account Created!")).toBeVisible();
    await page.locator(locators.continueButton).click();

    await page.locator(locators.deleteAccountButton).click();
    await expect(page.getByText("Account Deleted!")).toBeVisible();
  });
});
