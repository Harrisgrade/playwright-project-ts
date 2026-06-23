import { Locator, Page } from "@playwright/test";
import { locators } from "../locators/locators";

export class ProductPO {
  readonly productLocators = locators.products;
  readonly allProductsTitle: Locator;
  readonly productCard: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly saleImage: Locator;
  readonly name: Locator;
  readonly price: Locator;
  readonly addToCartButton: Locator;
  readonly overlayAddToCartButton: Locator;
  readonly viewProductLink: Locator;

  constructor(private page: Page) {
    const localize = (key: keyof typeof this.productLocators) =>
      this.page.locator(this.productLocators[key]);

    this.allProductsTitle = localize("allProductsTitle");
    this.productCard = localize("productCards").first();
    this.searchInput = localize("searchInput");
    this.searchButton = localize("searchButton");
    this.saleImage = localize("saleImage");
    this.name = localize("productName");
    this.price = localize("productPrice");
    this.addToCartButton = localize("addToCartButton");
    this.overlayAddToCartButton = localize("overlayAddToCartButton");
    this.viewProductLink = localize("viewProductLink");
  }

  async goto(): Promise<void> {
    await this.page.goto("https://automationexercise.com/products");
  }

  async hoverProductCard(): Promise<void> {
    await this.productCard.hover();
  }

  async clickAddToCartButton(): Promise<void> {
    await this.addToCartButton.click();
  }

  async clickOverlayAddToCartButton(): Promise<void> {
    await this.hoverProductCard();
    await this.overlayAddToCartButton.click();
  }

  async clickViewProductLink(): Promise<void> {
    await this.viewProductLink.click();
  }
}

export { ProductPO as ProductPage };
