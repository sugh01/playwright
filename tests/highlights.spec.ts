import { test, expect } from '@playwright/test';
import { highlightsFixture } from '../fixtures/navigation';

test.describe("Highlights Page", () => {
  test("title", async ({ page }) => {
    await highlightsFixture({ page });
    await expect(page).toHaveTitle("Safety - Highlights | Volvo Cars");
  });

  // Add more tests
});