package com.cucumber.automation.web.pages;

import com.cucumber.automation.utils.TestBase;
import com.cucumber.automation.utils.TestUtil;
import org.openqa.selenium.By;

public class SignInPage extends TestBase {

    TestUtil ut = new TestUtil();

    String baseURL = "https://www.amazon.com";

    //Movie Details
    By clickSignIn = By.xpath("//div[@class='nav-right']/div/a[2]");
    By enterEmailAddress = By.id("ap_email");
    By clickContinue = By.id("continue");
    By enterValidPassword = By.id("ap_password");
    By clickSignInButton = By.id("signInSubmit");



    public void goToHomePage() {
        ut.navigateTo(baseURL);
    }
    public void clickSignInButton() {
        ut.clickElement(clickSignIn);
    }
    public void enterEmail(String email) {
        ut.enterText(enterEmailAddress, email);
    }

    public void clickToContinue() {
        ut.clickElement(clickContinue);
    }

    public void enterPassword(String password) {
        ut.enterText(enterValidPassword, password);
    }

    public void clickSignIn() {
        ut.clickElement(clickSignInButton);
    }

}
