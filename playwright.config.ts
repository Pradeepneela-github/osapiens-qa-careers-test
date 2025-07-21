import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    ignoreHTTPSErrors: true,

    // Collect trace when retrying the failed test cases
    trace: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [
    ['list'], // Console output
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }], // Interactive HTML report
    ['json', { outputFile: 'test-results.json' }], // Machine-readable JSON
    ['junit', { outputFile: 'junit-report.xml' }] // CI-friendly XML format
  ],
});
