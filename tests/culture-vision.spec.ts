import { test, expect } from '@playwright/test';
import { cultureVisionFixture } from '../fixtures/navigation';

test.describe("Culture & Vision Page", () => {
  test("title", async ({ page }) => {
    await cultureVisionFixture({ page });
    await expect(page).toHaveTitle("Safety - Culture & Vision | Volvo Cars");
  });

  // Add more tests
});