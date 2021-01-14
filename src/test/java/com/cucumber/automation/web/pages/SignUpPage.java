package com.cucumber.automation.web.pages;

import com.cucumber.automation.utils.TestBase;
import com.cucumber.automation.utils.TestUtil;
import org.openqa.selenium.By;

public class SignUpPage extends TestBase {

    TestUtil ut = new TestUtil();

    String baseURL = "https://www.amazon.com";

    //Amazon Product Details
    By createYourAmazonAccount = By.xpath("//*[@id=\"createAccountSubmit\"]");
    By enterName = By.id("ap_customer_name");
    By enterEmailAddress = By.id("ap_email");
    By createPassword = By.id("ap_password");
    By createConfirmPassword = By.id("ap_password_check");
    By clickCreateAccountLocator = By.xpath("//div[@class=\"a-row a-spacing-extra-large\"]/span");


    public void goToHomePage() {
        ut.navigateTo(baseURL);
    }

    public void clickCreateAmazonAccount() {
        ut.clickElement(createYourAmazonAccount);
        }

    public void enterValidName(String name) {
        ut.enterText(enterName, name);
    }

    public void enterValidEmail(String email) {
        ut.enterText(enterEmailAddress, email);
    }

    public void enterValidPassword(String password) {
        ut.enterText(createPassword, password);
    }
    public void enterConfirmPassword(String confirmPassword) {
        ut.enterText(createConfirmPassword, confirmPassword);
    }
    public void clickCreateYourAccount() {
        ut.clickElement(clickCreateAccountLocator);
    }
//complete

}
