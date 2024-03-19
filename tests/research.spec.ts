import { test, expect } from '@playwright/test';
import { researchFixture } from '../fixtures/navigation';

test.describe("Research Page", () => {
  test("title", async ({ page }) => {
    await researchFixture({ page });
    await expect(page).toHaveTitle("Safety - Research | Volvo Cars");
  });

  // Add more tests
});