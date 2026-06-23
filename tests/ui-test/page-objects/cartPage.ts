import { Page, Locator } from "@playwright/test";
import { locators } from "../locators/locators";

export class CartPO {
  readonly cartPageLocators = locators.cartPage;
  readonly advertisement: Locator;
  readonly closeAdvertisement: Locator;
  readonly cartItemsSection: Locator;
  readonly breadcrumbs: Locator;
  readonly cartInfo: Locator;
  readonly cartInfoTable: Locator;
  readonly emptyCart: Locator;
  readonly productRow: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly productQuantity: Locator;
  readonly productTotal: Locator;
  readonly deleteProductButton: Locator;
  readonly proceedToCheckoutButton: Locator;
  readonly checkoutModal: Locator;
  readonly registerLoginLink: Locator;
  readonly closeCheckoutModal: Locator;
  readonly continueOnCartLink: Locator;

  constructor(private page: Page) {
    const localize = (key: keyof typeof this.cartPageLocators) =>
      this.page.locator(this.cartPageLocators[key]);

    this.advertisement = localize("advertisement");
    this.closeAdvertisement = localize("closeAdvertisement");
    this.cartItemsSection = localize("cartItemsSection");
    this.breadcrumbs = localize("breadcrumbs");
    this.cartInfo = localize("cartInfo");
    this.cartInfoTable = localize("cartInfoTable");
    this.emptyCart = localize("emptyCart");
    this.productRow = localize("productRow");
    this.productDescription = localize("productDescription");
    this.productPrice = localize("productPrice");
    this.productQuantity = localize("productQuantity");
    this.productTotal = localize("productTotal");
    this.deleteProductButton = localize("deleteProductButton");
    this.proceedToCheckoutButton = localize("proceedToCheckoutButton");
    this.checkoutModal = localize("checkoutModal");
    this.registerLoginLink = localize("registerLoginLink");
    this.closeCheckoutModal = localize("closeCheckoutModal");
    this.continueOnCartLink = localize("continueOnCartLink");
  }

  async goto(): Promise<void> {
    await this.page.goto("https://automationexercise.com/view_cart");
  }
  async clickCloseAdvertisement(): Promise<void> {
    await this.closeAdvertisement.click();
  }

  async advertisementIsVisible(): Promise<boolean> {
    return await this.advertisement.isVisible();
  }

  async clickProceedToCheckoutButton(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

  async clickRegisterLoginLink(): Promise<void> {
    await this.registerLoginLink.click();
  }

  async clickCloseCheckoutModal(): Promise<void> {
    await this.closeCheckoutModal.click();
  }

  async clickContinueOnCartLink(): Promise<void> {
    await this.continueOnCartLink.click();
  }

  getProductRowById(productId: string | number): Locator {
    return this.page.locator(`#product-${productId}`);
  }
}

export { CartPO as CartPage };
