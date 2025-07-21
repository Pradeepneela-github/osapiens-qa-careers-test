import { test, expect } from '@playwright/test';

test('Verify open jobs and check for "Quality" related job listings on osapiens careers page', async ({ page }) => {
 
  // Step 1: Navigate to and Load the Osapiens careers website
  await page.goto('https://careers.osapiens.com/');
  await page.waitForLoadState('domcontentloaded');
  // Improvement 1: We can add visual regression or accessibility checks here for the landing page

  
  // Step 2: Extract job titles and list out the open jobs available
  //const jobTitleElements = await page.getByRole('link').allTextContents();
  const jobTitleElements = await page.locator('text=/.*\\(m\\/f\\/x\\)|\\(m\\/w\\/d\\)/').allTextContents();
  const jobCount = jobTitleElements.length;
  console.log(`Total Open Jobs Found: ${jobCount} open jobs.`);
  // Improvement 2: Utilizing 'data-testid' attributes provides a reliable and maintainable strategy for locating elements within the DOM 
  // Improvement 3: We can validate job count against expected minimum or API response

  
  // Step 3: Check and filter if any job title contains "Quality"
  const hasQualityJob = jobTitleElements.filter(title => title.toLowerCase().includes('quality'));
  
  
  // Step 4: Print the count and the titles
  console.log(`Total 'Quality' Related Jobs Found: ${hasQualityJob.length} job(s) with "Quality" in the title.`);
  hasQualityJob.forEach((title, index) => console.log(`${index + 1}. ${title}`));
  // Improvement 4: We can use regex for more flexible keyword matching (e.g., "QA", "Quality Assurance")


  // Step 5: Fail test if none of the jobs contain "Quality"
  expect(hasQualityJob).toBeTruthy(); // Fails if no "Quality" job is found


  // Improvement 5: To capture a screenshot of the jobs page for visual QA
  await page.screenshot({ path: 'jobs-screenshot.png', fullPage: true });

});
