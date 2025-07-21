
##  Playwright Test: Quality Job Listings at Osapiens careers page

![Playwright Tests](https://github.com/Pradeepneela-github/osapiens-qa-careers-test/actions/workflows/playwright.yml/badge.svg)

This Playwright test validates the presence and relevance of job postings on [careers.osapiens.com](https://careers.osapiens.com/), particularly checking for roles containing "Quality" in their titles.


##  Steps Performed

1. **Load the Website**
   - Navigates to [osapiens Careers](https://careers.osapiens.com/)
   - Waits for DOM content to fully load

2. **Print Number of Open Jobs**
   - Extracts job titles using Playwright locators
   - Logs the total number of jobs found

3. **Check for "Quality" in Job Titles**
   - Searches for the keyword "Quality" in job titles
   - Fails the test if none are found

## 💡 Ideas to Improve the Test

- Add **accessibility checks** using Playwright's Axe integration
- Use **regex or synonyms** to catch variations like "QA", "Quality Assurance"
- Validate job count against **API or backend data** for consistency
- Add **visual snapshot testing** to detect UI changes
- Parameterize the keyword to make the test reusable for other roles

## 🛠 Setup Instructions

1. Install dependencies:
    ```bash
   npm install -D @playwright/test
   npx playwright install

2. Run the test:
    ```bash
   npx playwright test quality-jobs.spec.ts

## File Structure








## Quickstart

```bash
git clone https://github.com/Pradeepneela-github/osapiens-qa-careers-test.git
cd osapiens-qa-careers-test
npm install
npx playwright install
npm test
```

## Suggestions

- Screenshot capture
- Historical job diff
- Accessibility checks
- GitHub Actions CI

## Output

```
 Total Open Jobs Found: 60 open jobs.
 Total 'Quality' Related Jobs Found: 3 job(s) with "Quality" in the title.
    1. Quality Assurance Engineer - Automation (m/f/x)
    2. Quality Assurance Lead
    3. Quality Engineer - Automation (m/f/x)
```



# Playwright CI & Reporting Setup

This project uses GitHub Actions to run Playwright tests automatically on every push and pull request.

## Reporting

- **HTML Report**: Interactive test results with screenshots and traces
- **JSON Report**: Useful for dashboards or custom analysis
- **JUnit Report**: Compatible with CI tools like Jenkins or GitLab

## CI Workflow

- Runs on `ubuntu-latest`
- Installs dependencies and Playwright browsers
- Executes tests and uploads reports

## Daily QA Schedule

This test will now run automatically every day at **09:00 CET** using GitHub Actions cron scheduler. View results under the "Actions" tab.

## Artifacts

After each run, the HTML report is available under GitHub Actions → Artifacts → `playwright-report`.
- `playwright-report/jobs.json`: JSON export of all job titles
- `playwright-report/jobs-screenshot.png`: Full page screenshot of the job list

## Tips for more Enhancement

- Add Allure or custom reporters for richer insights
- Integrate Slack or email notifications for failures
- Use matrix strategy to test across multiple Node versions or environments
