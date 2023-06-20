// Prepare folder structure
const fs = require('fs-extra');
const dir = './cypress/reports/html';

if (fs.existsSync(dir)) {
  fs.removeSync(dir);
}
fs.mkdirSync(dir, { recursive: true });

// Report configuration
const reporter = require('cucumber-html-reporter');
const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'cypress/reports/html/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {},
  ignoreBadJsonFile: true
};

// Generate report
reporter.generate(options);
