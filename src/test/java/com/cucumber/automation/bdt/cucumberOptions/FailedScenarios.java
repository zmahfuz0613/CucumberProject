package com.cucumber.automation.bdt.cucumberOptions;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true,
        glue = {"com.cucumber.automation.bdt.stepDefinitions"},
        features = "@target/rerun.txt", //Cucumber picks the failed scenarios from this file
        plugin = {"pretty", "html:target/site/cucumber-pretty",
                "json:target/cucumber.json"}
)
public class FailedScenarios {
}