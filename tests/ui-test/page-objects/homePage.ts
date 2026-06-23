import { Page, Locator } from "@playwright/test";
import { locators } from "../locators/locators";

export class HomePO {
  readonly homepageLocators = locators.homepage;
  readonly subscribeEmail: Locator;
  readonly subscribeButton: Locator;
  readonly header: Locator;
  readonly slider: Locator;
  readonly sliderCarousel: Locator;
  readonly accordian: Locator;
  readonly cartModal: Locator;
  readonly viewCartLink: Locator;
  readonly continueShoppingButton: Locator;
  readonly recommendedItemCarousel: Locator;
  readonly footer: Locator;
  readonly successSubscribe: Locator;
  readonly scrollUp: Locator;
  readonly signUpLoginLink: Locator;
  readonly productsLink: Locator;
  readonly featuredItemsTitle: Locator;
  readonly productCards: Locator;

  constructor(private page: Page) {
    const localize = (key: keyof typeof this.homepageLocators) =>
      this.page.locator(this.homepageLocators[key]);

    this.subscribeEmail = localize("subscribeEmail");
    this.subscribeButton = localize("subscribeButton");
    this.header = localize("header");
    this.slider = localize("slider");
    this.sliderCarousel = localize("sliderCarousel");
    this.accordian = localize("accordian");
    this.cartModal = localize("cartModal");
    this.viewCartLink = localize("viewCartLink");
    this.continueShoppingButton = localize("continueShoppingButton");
    this.recommendedItemCarousel = localize("recommendedItemCarousel");
    this.footer = localize("footer");
    this.successSubscribe = localize("successSubscribe");
    this.scrollUp = localize("scrollUp");
    this.signUpLoginLink = localize("signUpLoginButton");
    this.productsLink = localize("productsButton");
    this.featuredItemsTitle = localize("featuredItemsTitle");
    this.productCards = localize("productCards");
  }

  async goto(): Promise<void> {
    await this.page.goto("https://automationexercise.com");
  }

  async clickSignupLoginButton(): Promise<void> {
    await this.signUpLoginLink.click();
  }

  async clickProductsButton(): Promise<void> {
    await this.productsLink.click();
  }

  async fillSubscribeEmail(email: string): Promise<void> {
    await this.subscribeEmail.fill(email);
  }

  async clickSubscribeButton(): Promise<void> {
    await this.subscribeButton.click();
  }

  async clickContinueShoppingButton(): Promise<void> {
    await this.continueShoppingButton.click();
  }
}

export { HomePO as HomePage };
