import { Page } from "@playwright/test";

export const highlightsFixture = async ({ page }: { page: Page }) => {
    await page.goto(`/intl/v/safety/highlights`);
};

export const cultureVisionFixture = async ({ page }: { page: Page }) => {
  await page.goto(`/intl/v/safety/culture-vision`);
};

export const featuresFixture = async ({ page }: { page: Page }) => {
  await page.goto(`/intl/v/safety/features`);
};

export const childSafetyFixture = async ({ page }: { page: Page }) => {
  await page.goto(`/intl/v/safety/child-safety`);
};

export const researchFixture = async ({ page }: { page: Page }) => {
  await page.goto(`/intl/v/safety/research`);
};

export const heritageFixture = async ({ page }: { page: Page }) => {
  await page.goto(`/intl/v/safety/heritage`);
};
