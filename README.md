# cypress-bdd-framework

This Project automates Cypress todo website - https://example.cypress.io/todo using Cypress.io and Cucumber BDD. Also generates Mochawesome Reports.


## Pre-Requisites
- Install the latest Chrome browser
- Install Node.js (6 or higher)
- Using the latest Cypress - 12.14.0

## Setup
- Install the project dependencies by running the command: `npm install`

## Run Test
- Open the Cypress console by running the command: `npx run cy:open`
- Run the test on Chrome browser using cucumber bdd using the command: `npm run bdd:test`
- Run the cypress tests using the cucumber tags - `npx cypress run --env tags='@Prod'`. Here `@Prod` is the tag added above the feature under the .feature files

## Mochawesome Report
- Generates mochawesome HTML reports at project directory: `cypress/report/html/cucumber_report.html`
- Attaching sample mochawesome HTML reports. When tests are failed, it takes the screenshot and attaches it under the report.

![Screenshot 2023-06-20 at 12 26 42 PM](https://github.com/kalpeshchilka/cypress-bdd-framework/assets/20922980/9a05d355-bebd-4b64-ac75-d34201833360)

<img width="1297" alt="Screenshot 2023-06-20 at 12 27 25 PM" src="https://github.com/kalpeshchilka/cypress-bdd-framework/assets/20922980/d8f67895-9806-45fc-a39e-c1c6e3514fbe">

<img width="700" alt="Screenshot 2023-06-20 at 12 27 48 PM" src="https://github.com/kalpeshchilka/cypress-bdd-framework/assets/20922980/93af6217-104d-47c9-852f-4e0e47860d0b">
