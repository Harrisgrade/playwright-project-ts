import { test as base } from "@playwright/test";
import { RegisterPO } from "../ui-test/page-objects/registerPo";

type UiFixtures = {
  registerPage: RegisterPO;
};

export const test = base.extend<UiFixtures>({
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPO(page);
    await use(registerPage);
  },
});

export { expect } from "@playwright/test";
