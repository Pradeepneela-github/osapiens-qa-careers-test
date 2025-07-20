# 🧪 QA Test - OSAPIENS Careers Page

![Playwright Tests](https://github.com/Pradeepneela-github/osapiens-qa-careers-test/actions/workflows/playwright.yml/badge.svg)

This Playwright test validates the presence and relevance of job postings on [careers.osapiens.com](https://careers.osapiens.com/), particularly checking for roles containing "Quality" in their titles.

## Test Goals

1. Visit and load Osapiens Careers Page  
2. Count and Print Total Job Postings  
3. Fail Test if No 'Quality' Job Exists  

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
 Total Open Jobs Found: 15
 Jobs containing "Quality": [ 'Quality Assurance Engineer' ]
```


--- IMPROVEMENT IDEAS ---

## GitHub Pages Report (Optional Setup)

1. Go to your GitHub repo settings
2. Scroll to "Pages" → Set source to `GitHub Actions` or `main / root`
3. You can then commit HTML reports or screenshots to `/docs` to publish them

---

## Daily QA Schedule

This test will now run automatically every day at **09:00 CET** using GitHub Actions cron scheduler. View results under the "Actions" tab.

---

## Bonus Outputs

- `playwright-report/jobs.json`: JSON export of all job titles
- `playwright-report/jobs-screenshot.png`: Full page screenshot of the job list
