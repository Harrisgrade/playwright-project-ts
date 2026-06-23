import { Page, Locator } from "@playwright/test";
import { generateMockUser } from "../../../utils/mocks";
import { locators } from "../locators/locators";

type MockUser = ReturnType<typeof generateMockUser>;

export class SignupPO {
  readonly signupPageLocators = locators.signupPage;
  readonly signupHeader: Locator;
  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupButton: Locator;
  readonly registerName: Locator;
  readonly registerEmail: Locator;
  readonly registerPassword: Locator;
  readonly registerDayDropdown: Locator;
  readonly registerMonthDropdown: Locator;
  readonly registerYearDropdown: Locator;
  readonly registerNewsletter: Locator;
  readonly registerSpecialOffers: Locator;
  readonly addressFirstName: Locator;
  readonly addressLastName: Locator;
  readonly addressCompany: Locator;
  readonly addressAddress: Locator;
  readonly addressCountry: Locator;
  readonly addressState: Locator;
  readonly addressCity: Locator;
  readonly addressZipCode: Locator;
  readonly addressMobilePhone: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedTitle: Locator;
  readonly continueButton: Locator;
  readonly deleteAccountButton: Locator;

  constructor(private page: Page) {
    const localize = (key: keyof typeof this.signupPageLocators) =>
      this.page.locator(this.signupPageLocators[key]);

    this.signupHeader = localize("signupHeader");
    this.signupName = localize("signupName");
    this.signupEmail = localize("signupEmail");
    this.signupButton = localize("signupButton");
    this.registerName = localize("registerName");
    this.registerEmail = localize("registerEmail");
    this.registerPassword = localize("registerPassword");
    this.registerDayDropdown = localize("registerDay");
    this.registerMonthDropdown = localize("registerMonth");
    this.registerYearDropdown = localize("registerYear");
    this.registerNewsletter = localize("registerNewsletter");
    this.registerSpecialOffers = localize("registerSpecialOffers");
    this.addressFirstName = localize("addressFirstName");
    this.addressLastName = localize("addressLastName");
    this.addressCompany = localize("addressCompany");
    this.addressAddress = localize("addressAddress");
    this.addressCountry = localize("addressCountry");
    this.addressState = localize("addressState");
    this.addressCity = localize("addressCity");
    this.addressZipCode = localize("addressZipCode");
    this.addressMobilePhone = localize("addressMobilePhone");
    this.createAccountButton = localize("createAccountButton");
    this.accountCreatedTitle = localize("accountCreatedTitle");
    this.continueButton = localize("continueButton");
    this.deleteAccountButton = localize("deleteAccountButton");
  }

  async goto(): Promise<void> {
    await this.page.goto("https://automationexercise.com/login");
  }

  async fillSignupName(name: string): Promise<void> {
    await this.signupName.fill(name);
  }

  async fillSignupEmail(email: string): Promise<void> {
    await this.signupEmail.fill(email);
  }

  async clickSignupButton(): Promise<void> {
    await this.signupButton.click();
  }

  async startSignup(user: Pick<MockUser, "firstName" | "email">): Promise<void> {
    await this.fillSignupName(user.firstName);
    await this.fillSignupEmail(user.email);
    await this.clickSignupButton();
  }

  async fillAccountInformation(user: MockUser): Promise<void> {
    await this.page.locator(user.gender).check();
    await this.registerName.fill(user.firstName);
    await this.registerPassword.fill(user.password);
    await this.registerDayDropdown.selectOption(user.dobDay);
    await this.registerMonthDropdown.selectOption({ label: user.dobMonth });
    await this.registerYearDropdown.selectOption(user.dobYear);
    await this.registerNewsletter.check();
    await this.registerSpecialOffers.check();
  }

  async fillAddressInformation(user: MockUser): Promise<void> {
    await this.addressFirstName.fill(user.firstName);
    await this.addressLastName.fill(user.lastname);
    await this.addressCompany.fill(user.company);
    await this.addressAddress.fill(user.address);
    await this.addressCountry.selectOption(user.Country);
    await this.addressState.fill(user.State);
    await this.addressCity.fill(user.City);
    await this.addressZipCode.fill(user.ZipCode);
    await this.addressMobilePhone.fill(user.MobilePhone);
  }

  async fillAdressInformation(user: MockUser): Promise<void> {
    await this.fillAddressInformation(user);
  }

  async clickCreateAccountButton(): Promise<void> {
    await this.createAccountButton.click();
  }

  async clickContinueButton(): Promise<void> {
    await this.continueButton.click();
  }

  async clickDeleteAccountButton(): Promise<void> {
    await this.deleteAccountButton.click();
  }

  async submitAccountCreation(): Promise<void> {
    await this.clickCreateAccountButton();
  }
}

export { SignupPO as SignupPage };
