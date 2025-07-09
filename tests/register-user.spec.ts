import { expect, test } from "@playwright/test";
import { locators } from "../locators/locators";
import { generateMockUser } from "../utils/mocks";
import { generateSeed } from "../utils/mocks";

const mockUser = generateMockUser();
const userSeed = generateSeed(12345);

test.describe("User Registration", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://automationexercise.com");
    await expect(page).toHaveTitle("Automation Exercise");
    await expect(page.locator("body")).toBeVisible();
  });
  test("should register a new user", async ({ page }) => {
    await page.locator(locators.signUpLoginButton).click();
    await expect(page.locator(locators.newUserSignupHeader)).toBeVisible();

    await page.locator(locators.signupName).fill(userSeed.firstName);
    expect(await page.locator(locators.signupName).inputValue()).toBe(
      userSeed.firstName
    );
    await page.locator(locators.signupEmail).fill(userSeed.email);
    expect(await page.locator(locators.signupEmail).inputValue()).toBe(
      userSeed.email
    );
    await expect(page.locator(locators.signupButton)).toBeVisible();
    await page.locator(locators.signupButton).click();
    await expect(page.getByText("Enter Account Information")).toBeVisible();

    // move mock gender to data
    await page.locator(mockUser.gender).check();
    await page.locator(locators.registerName).fill(mockUser.firstName);

    await page.$eval(locators.registerEmail, (el: any) => {
      if (el.hasAttribute("disabled")) {
        el.removeAttribute("disabled");
      }
    });
    await page.locator(locators.registerEmail).fill(userSeed.email);
    await page.locator(locators.registerPassword).fill(userSeed.password);
    await page.locator(locators.registerDay).selectOption(mockUser.dobDay);
    await page.locator(locators.registerMonth).selectOption(mockUser.dobMonth);
    await page.locator(locators.registerYear).selectOption(mockUser.dobYear);
    await page.locator(locators.registerNewsletter).check();
    await page.locator(locators.registerSpecialOffers).check();

    await page.locator(locators.addressFirstName).fill(userSeed.firstName);
    await page.locator(locators.addressLastName).fill(userSeed.lastName);
    await page.locator(locators.addressCompany).fill(mockUser.company);
    await page.locator(locators.addressAddress).fill(mockUser.address);
    await page.locator(locators.addressCountry).selectOption(mockUser.Country);

    await page.locator(locators.addressState).fill(mockUser.State);
    await page.locator(locators.addressCity).fill(mockUser.City);
    await page.locator(locators.addressZipCode).fill(mockUser.ZipCode);
    await page.locator(locators.addressMobilePhone).fill(mockUser.MobilePhone);

    await page.locator(locators.addressCreateAccountButton).click();
    await expect(page.getByText("Account Created!")).toBeVisible();
  });
});
