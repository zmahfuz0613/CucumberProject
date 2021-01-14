package com.cucumber.automation.web.pages;

import com.cucumber.automation.utils.TestBase;
import com.cucumber.automation.utils.TestUtil;
import org.openqa.selenium.By;

public class AmazonAddToCartPage extends TestBase {
    TestUtil ut = new TestUtil();

    String baseURL = "https://www.amazon.com";

    //Add to cart

    By enterProductNameInSearchBox = By.xpath("//div[@class=\"nav-fill\"]/div/input");
    By clickFirstItem = By.xpath("//div[@data-cel-widget=\"search_result_1\"]//h2/a");
    By clickSearchButton = By.xpath("//div[@class=\"nav-right\"]/div/span/input");
    By clickOnGiftCheckBox = By.xpath("//div[@class=\"a-checkbox\"]/label/input");
    By clickOnBuyNow = By.xpath("//span[@id=\"submit.buy-now\"]/span/input ");
    By enterValidPassword = By.id("ap_password");
    By enterEmailAddress = By.id("ap_email");
    By clickContinue = By.id("continue");
    By clickSignInButton = By.id("signInSubmit");

    public void goToHomePage() {
        ut.navigateTo(baseURL);
    }
    public void enterProductName(String name) {
        ut.enterText(enterProductNameInSearchBox, name);

    }
    public void searchItem() {
        ut.clickElement(clickSearchButton);
    }

    public void clickFirstSearchItem() {
        ut.clickElement(clickFirstItem);
    }

    public void clickOnGiftOption() {
        ut.clickElement(clickOnGiftCheckBox);
    }

    public void clickToAddToCart() {
        ut.clickElement(clickOnBuyNow);
    }
    public void enterEmail(String email) {
        ut.enterText(enterEmailAddress, "str053mgr@gmail.com");
    }

    public void enterPassword(String password) {
        ut.enterText(enterValidPassword, "Eshna143#");
    }

    public void clickToContinue() {
        ut.clickElement(clickContinue);
    }

    public void clickSignIn() {
        ut.clickElement(clickSignInButton);
    }
}
