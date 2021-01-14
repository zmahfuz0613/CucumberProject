package com.cucumber.automation.bdt.stepDefinitions;

import com.cucumber.automation.utils.TestBase;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.net.MalformedURLException;

//import static com.cucumber.automation.utils.TestBase.driver;

public class Hooks extends TestBase{

//	TestBase df = new TestBase();

    @Before
    public void beforeScenario() throws MalformedURLException, InterruptedException{
        createDriver();
    }

    @After
    public void afterScenario(Scenario scenario) {
//        if (scenario.isFailed()) {
        byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshotBytes, "image/png");
//    }
//        teardown();
    }
}
