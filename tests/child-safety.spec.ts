import { test, expect } from '@playwright/test';
import { childSafetyFixture } from '../fixtures/navigation';

test.describe("Child Safety Page", () => {
  test("title", async ({ page }) => {
    await childSafetyFixture({ page });
    await expect(page).toHaveTitle("Safety - Child Safety | Volvo Cars");
  });

  // Add more tests
});