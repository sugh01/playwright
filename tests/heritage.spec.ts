import { test, expect } from '@playwright/test';
import { heritageFixture } from '../fixtures/navigation';

test.describe("Heritage Page", () => {
  test("title", async ({ page }) => {
    await heritageFixture({ page });
    await expect(page).toHaveTitle("Safety - Heritage | Volvo Cars");
  });

  // Add more tests
});