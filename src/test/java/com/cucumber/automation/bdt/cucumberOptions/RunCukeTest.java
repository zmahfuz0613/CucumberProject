package com.cucumber.automation.bdt.cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome=true, // display the console output in a proper readable format
        features = {"src/test/java/com/cucumber/automation/bdt/features"}, // the path of the feature file
        glue = {"com.cucumber.automation.bdt.stepDefinitions"}, // the path of the step definition file
        plugin = {
                "pretty",
                "html:output/cucumber",
                "json:output/cucumber/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:",
                "rerun:target/rerun.txt",
        }
)
public class RunCukeTest {
}
