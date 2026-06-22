import { test, expect } from "@playwright/test";

test.describe("API Tests", () => {
  test("Get all Products", async ({ request }) => {
    // Make GET request to productsList endpoint
    const response = await request.get(
      "https://automationexercise.com/api/productsList"
    );

    // Verify status code
    expect(response.status()).toBe(200);

    const responseProducts = await response.json();

    console.log("Response:", responseProducts);

    expect(responseProducts).toHaveProperty("products");
    expect(Array.isArray(responseProducts.products)).toBe(true);
    expect(responseProducts.products.length).toBeGreaterThan(0);

    const firstProduct = responseProducts.products[0];
    expect(firstProduct).toHaveProperty("id", 1);
    expect(firstProduct).toHaveProperty("name", "Blue Top");
    expect(firstProduct).toHaveProperty("price", "Rs. 500");
    expect(firstProduct).toHaveProperty("brand", "Polo");
    expect(firstProduct).toHaveProperty("category");
  });
});
