import { test, expect } from "../ui-fixtures/ui-fixtures";

test.describe("Product Page", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.goto();
  });

  test("should display the products page", async ({ page, productPage }) => {
    await expect(page).toHaveTitle("Automation Exercise - All Products");
    await expect(productPage.allProductsTitle).toHaveText("All Products");
    await expect(productPage.saleImage).toBeVisible();
    await expect(productPage.productCard).toBeVisible();
  });

  test("should search for a product", async ({ productPage }) => {
    await productPage.searchInput.fill("Blue Top");
    await productPage.searchButton.click();

    await expect(productPage.productCard).toContainText("Blue Top");
  });
});
