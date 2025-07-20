import { test, expect } from '@playwright/test';

test('Verify open jobs and check for "Quality" related positions', async ({ page }) => {
  
  // Step 1: Navigate to the OSAPIENS careers page
  await page.goto('https://careers.osapiens.com/');

  // Wait for job listings to load - to adjust to correct selector
  await page.waitForSelector('[data-testid="job-offers"]');


  // Step 2: Get all job title elements
  const jobTitleElements = await page.locator('[data-testid="job-title"]').all();

  const jobTitles = await Promise.all(jobTitleElements.map(async el => {
    return (await el.textContent())?.trim() || '';
  }));

  console.log(`Total Open Jobs Found: ${jobTitles.length}`);


  // Step 3: Filter titles containing "Quality"
  const qualityJobs = jobTitles.filter(title =>
    title.toLowerCase().includes('quality')
  );
  
  console.log('Jobs containing "Quality":', qualityJobs);


  // Step 4: Fail test if none of the jobs contain "Quality"
  expect(qualityJobs.length, 'No jobs found with "Quality" in the title').toBeGreaterThan(0);


  // Improvement: To capture a screenshot of the jobs page for visual QA
  await page.screenshot({ path: 'jobs-screenshot.png', fullPage: true });


  // Test Improvement Ideas:
  // - Add localization checks if job titles are shown in multiple languages.
  // - Assert presence of specific job titles if known
  // - Monitor the time it takes for jobs to appear
  // - Capture a screenshot or HTML snapshot for debugging.
  // - Store job data to compare changes over time.
  // - Use tags/categories to classify job types beyond title text.
});
