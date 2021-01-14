package com.cucumber.automation.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;


public class TestBase {

    public static WebDriver driver = null;
    public static WebDriverWait waitVar = null;
    public static Properties prop;
    public static EventFiringWebDriver e_driver;
    public static WebEventListener eventListener;

    public TestBase(){
        try {
            prop = new Properties();
            //Reading from property file
            FileInputStream ip = new FileInputStream(System.getProperty("user.dir") + "/src/test/java/com/cucumber/automation/config/config.properties");
            prop.load(ip);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     *  This function is to invoke Selenium Webdriver
     *
     * @throws MalformedURLException
     * @throws InterruptedException
     */
    public void createDriver() throws MalformedURLException, InterruptedException {

        String browserName = prop.getProperty("browser");

        if(browserName.equals("chrome")){
            System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
            driver = new ChromeDriver();
        }
        else if(browserName.equals("FF")){
            System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") +"/src/test/java/com/cucumber/automation/config/geckodriver");
            driver = new FirefoxDriver();
        }
        else if(browserName.equals("Sf")){
            driver = new SafariDriver();
        } else {
            System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
            driver = new ChromeDriver();
        }

        driver.manage().deleteAllCookies();
        //Toggle between maximize and phone size
        //driver.manage().window().maximize();
//        Dimension d = new Dimension(745, 835);
//        driver.manage().window().setSize(d);

        driver.manage().window().maximize();
        e_driver = new EventFiringWebDriver(driver);
        // Now create object of EventListerHandler to register it with EventFiringWebDriver
        eventListener = new WebEventListener();
        e_driver.register(eventListener);
        driver = e_driver;
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        //Passing url from property file
//      driver.get(prop.getProperty("url"));
        waitVar = new WebDriverWait(driver, 15);
    }

    /**
     * This function is to close driver instance
     */
    public void teardown() {
        driver.quit();
    }
}
