# Automated Testing Framework #

## Overview ##

This repository contains a robust automated testing framework built from scratch, integrating various powerful modules to facilitate end-to-end testing for both web and API applications. The framework leverages the following key technologies:


-PactumJS for API testing

-Cypress for web application testing

-Faker for generating realistic test data

-Mocha for JavaScript testing

-Mocha Awesome for stylish and informative test reports

## Features ## 
## PactumJS Integration ##
-Seamless API testing using PactumJS, a versatile and expressive library for writing API tests.

-Clear and concise API test cases that enhance readability and maintainability.

-Real-time validation of API responses against expected outcomes.

## Cypress Web Testing ##
-Implementation of the Page Object Model (POM) technique for structuring and organizing web tests.

-Powerful end-to-end testing for web applications with Cypress, enabling both UI and integration tests.

-Browser automation for simulating user interactions and validating expected behaviors.
## Faker for Test Data

-Integration of Faker.js to generate realistic and randomized test data.

-Dynamic data generation for testing various scenarios, ensuring comprehensive coverage.

## Mocha for JavaScript Testing
-Utilization of Mocha as the test framework for organizing and executing test cases.

-Structuring tests with Mocha's suite and test constructs for improved readability and maintainability.

-Support for asynchronous testing with Mocha's flexible testing approach.

## Mocha Awesome Reports

-Stylish and informative test reports generated using Mocha Awesome.

-Visual representation of test results, including detailed information on test cases and execution history.

## Getting Started
To set up the environment and run the tests locally, follow these steps:

1. Clone the repository: git clone https://github.com/RobertBeraru/Automated-Testing-Framework.git
2. Install dependencies: npm install
3. Run API tests: npm run test
4. Run API tests with mochaawesome: npm run testmweb
5. Run web tests: npm run cy:web
6. Run web tests headless npm run cy
