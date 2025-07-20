// careers-osapiens-playwright.spec.ts
import { test, expect } from '@playwright/test';

/**
 * Smoke test for osapiens careers listing.
 *
 * Ideas for improvement (inline):
 *  - Parametrize URL & keyword via process.env for reusability (e.g. JOB_KEYWORD).
 *  - Switch to role locators such as page.getByRole('heading', { name: /quality/i }) for robustness.
 *  - Enable trace & video on first retry to aid debugging in CI.
 *  - Add axe-core accessibility scan and fail on WCAG violations.
 */
test('Careers page exposes at least one Quality job', async ({ page }) => {
  // Arrange — go to the careers portal
  await page.goto('https://careers.osapiens.com/', { waitUntil: 'networkidle' });

  // IDEA: Could stub analytics with page.route('**/analytics/**', route => route.abort());

  // Act — locate all visible job‑offer cards
  const jobCards = page.locator('[data-testid="job-offer-card"]'); // selector may change; consider data‑qa attribute

  const totalJobs = await jobCards.count();
  console.log(`Total open jobs: ${totalJobs}`);

  // IDEA: Persist this metric to an external dashboard (StatsD/Prometheus) for trend analysis.

  // Gather titles and check for keyword
  const titles = await jobCards.locator('h3').allInnerTexts();
  const hasQuality = titles.some(t => /quality/i.test(t));

  // Assert
  expect(hasQuality, 'Expected at least one job title to include "Quality"').toBeTruthy();
});