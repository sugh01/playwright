import { test, expect } from '@playwright/test';
import { featuresFixture } from '../fixtures/navigation';

test.describe("Features Page", () => {
  test("title", async ({ page }) => {
    await featuresFixture({ page });
    await expect(page).toHaveTitle("Safety - Features | Volvo Cars");
  });

  // Add more tests
});