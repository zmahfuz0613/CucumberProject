package com.cucumber.automation.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class TestUtil extends TestBase{

    public void clickByCss(String element) {
        WebElement elm = driver.findElement(By.cssSelector(element));
        elm.click();
    }

    public void selectItemByName(String name){
        WebElement element = driver.findElement(By.cssSelector(".slick-slide [name='2014']"));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
        element.click();
    }

    public void navigateTo(String URL) {
        driver.get(URL);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    public void clickElement(By element) {
        WebElement localElement = waitForElement(element);
        localElement.click();
    }

    private WebElement waitForElement(By element) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(element));
    }

    public void enterText(By element, String text) {
        WebElement localElement = waitForElement(element);
        localElement.sendKeys(text);
    }

    public void getText(By element) {
        WebElement localElement = waitForElement(element);
        System.out.println(localElement.getText());
    }

}
