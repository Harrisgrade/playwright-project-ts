import { test as base } from "@playwright/test";
import { CartPO } from "../ui-test/page-objects/cartPage";
import { HomePO } from "../ui-test/page-objects/homePage";
import { ProductPO } from "../ui-test/page-objects/productPage";
import { RegisterPO } from "../ui-test/page-objects/registerPage";
import { SignupPO } from "../ui-test/page-objects/signupPage";

type UiFixtures = {
  cartPage: CartPO;
  homePage: HomePO;
  productPage: ProductPO;
  registerPage: RegisterPO;
  signupPage: SignupPO;
};

export const test = base.extend<UiFixtures>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPO(page);
    await use(cartPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePO(page);
    await use(homePage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPO(page);
    await use(productPage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPO(page);
    await use(registerPage);
  },
  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPO(page);
    await use(signupPage);
  },
});

export { expect } from "@playwright/test";
