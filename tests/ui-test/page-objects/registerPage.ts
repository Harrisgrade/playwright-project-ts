import { Page, Locator } from "@playwright/test";
import { generateMockUser } from "../../../utils/mocks";
import { locators } from "../locators/locators";

type MockUser = ReturnType<typeof generateMockUser>;

export class RegisterPO {
  readonly registerFormLocators = locators.registerForm;
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

  constructor(private page: Page) {
    const localize = (key: keyof typeof this.registerFormLocators) =>
      this.page.locator(this.registerFormLocators[key]);

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
    this.createAccountButton = localize("addressCreateAccountButton");
  }

  async goto(): Promise<void> {
    await this.page.goto("https://automationexercise.com/login");
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
}

export { RegisterPO as RegisterPage };
