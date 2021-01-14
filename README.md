# CucumberProject

In this project I used Amazon website to test random pages e.g. product page, login page, user authentication, etc.

## Concepts Included

* Shared state across cucumber step definitions
* Dependency injection
* Page Object pattern
* Common web page interaction methods
* Mavenised performance tests
* Externalised test configuration
* Commonly used test utility classes

## Tools

* Maven
* Cucumber-JVM
* JUnit
* Selenium Webdriver
* testNg

## Requirements

In order to utilise this project you need to have the following installed locally:

* Maven 
* Chrome and Chromedriver (UI tests use Chrome by default, can be changed in config)
* Java 1.8
* Run the cukeTest or individual test.

## Usage

The project is mainly UI, Performance and user authentication testing. Each of these modules can be utilised independently of the others using feature files.

To run all modules, navigate to `cucmber.automation and run RunCukeTest` directory and run:


## Reporting

Reports for each module are written into their respective `/target` directories after a successful run.

UI acceptance tests result in a HTML report for each feature in `test-automation-quickstart/ui-acceptance-tests/target/cucumber-parallel/`.
In the case of test failures, a screen-shot of the UI at the point of failure is embedded into the report.

API acceptance tests result in a HTML report for each feature in `test-automation-quickstart/api-acceptance-tests/target/cucumber-parallel/`.

Performance tests result in a `.jtl` results file and `.png` graphs showing response times and transactions per second, generated in `test-automation-quickstart/performance-tests/target/jmeter/results`.

*NOTE*:
This test is not running parallely and still work on progress to run the test parallely. Since this is a personal project, I am constantly working on it to use different test e.g. smoke test, feature test, regression test.
