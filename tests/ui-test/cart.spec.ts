import { test, expect } from "../ui-fixtures/ui-fixtures";

test.describe("Cart Page", () => {
  test.beforeEach(async ({ cartPage }) => {
    await cartPage.goto();
  });

  test("should display the empty cart state", async ({ cartPage }) => {
    await expect(cartPage.cartItemsSection).toBeVisible();
    await expect(cartPage.breadcrumbs).toContainText("Shopping Cart");
    await expect(cartPage.emptyCart).toContainText("Cart is empty!");
    await expect(cartPage.continueOnCartLink).toBeVisible();
  });
});
