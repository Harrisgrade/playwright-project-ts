import { Page, Locator } from "@playwright/test";
import { locators } from "../locators/locators";
import { generateMockUser } from "../../../utils/mocks";

const mockUser = generateMockUser();

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

  // Sign up form
  async fillAccountInformation(): Promise<void> {
    await this.page
      .locator(this.registerFormLocators.registerName)
      .fill(mockUser.firstName);
    // await this.page
    //   .locator(this.registerFormLocators.registerEmail)
    //   .fill(mockUser.email);
    await this.page
      .locator(this.registerFormLocators.registerPassword)
      .fill(mockUser.password);
    await this.page
      .locator(this.registerFormLocators.registerDay)
      .selectOption(mockUser.dobDay);
    await this.page
      .locator(this.registerFormLocators.registerMonth)
      .selectOption(mockUser.dobMonth);
    await this.page
      .locator(this.registerFormLocators.registerYear)
      .selectOption(mockUser.dobYear);
    await this.page
      .locator(this.registerFormLocators.registerNewsletter)
      .check();
    await this.page
      .locator(this.registerFormLocators.registerSpecialOffers)
      .check();
  }

  async fillAdressInformation(): Promise<void> {
    this.page
      .locator(this.registerFormLocators.addressFirstName)
      .fill(mockUser.firstName);
    this.page
      .locator(this.registerFormLocators.addressLastName)
      .fill(mockUser.lastname);
    this.page
      .locator(this.registerFormLocators.addressCompany)
      .fill(mockUser.company);
    this.page
      .locator(this.registerFormLocators.addressAddress)
      .fill(mockUser.address);
    this.page
      .locator(this.registerFormLocators.addressCountry)
      .selectOption(mockUser.Country);
    this.page
      .locator(this.registerFormLocators.addressState)
      .fill(mockUser.State);
    this.page
      .locator(this.registerFormLocators.addressCity)
      .fill(mockUser.City);
    this.page
      .locator(this.registerFormLocators.addressZipCode)
      .fill(mockUser.ZipCode);
    this.page
      .locator(this.registerFormLocators.addressMobilePhone)
      .fill(mockUser.MobilePhone);
  }

  async clickCreateAccountButton(locator: string) {
    await this.page.locator(locator).click();
  }
}
