package com.cucumber.automation.bdt.stepDefinitions;

import com.cucumber.automation.web.pages.SignUpPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SignUpPageSteps extends SignUpPage {

    @Given("^The user is on Home page$")
    public void the_user_is_on_Home_page() {
        goToHomePage();
    }

    @Then("^I should go to Sign up page$")
    public void i_should_go_to_Sign_up_page() {
    }

    @Then("^I click Create your Amazon account$")
    public void i_click_Create_your_Amazon_account() {
        clickCreateAmazonAccount();
    }

    @Then("^I go to create account page$")
    public void i_go_to_create_account_page() {

    }

    @Then("^I should fill out full name \"([^\"]*)\"$")
    public void i_should_fill_out_full_name(String name) {
        enterValidName(name);
    }

    @Then("^I should enter valid email \"([^\"]*)\"$")
    public void i_should_enter_valid_email(String email) {
        enterValidEmail(email);
    }

    @Then("^I should create valid password \"([^\"]*)\"$")
    public void i_should_create_valid_password(String password) {
        enterValidPassword(password);
    }

    @Then("^I should confirm password \"([^\"]*)\"$")
    public void i_should_confirm_password(String confirmPassword) {
        enterConfirmPassword(confirmPassword);
    }

    @Then("^I should click on create your Amazon account$")
    public void i_should_click_on_create_your_Amazon_account() {
        clickCreateYourAccount();
    }

    @Then("^I should be able to sign up$")
    public void i_should_be_able_to_sign_up() {

    }

    @Then("^I close the browser$")
    public void i_close_the_browser() {
        driver.quit();

    }

}

//    @Given("^The user is on Home page$")
//    public void the_user_is_on_Home_page()  {
//        goToHomePage();
//    }
//
//    @When("^I click on Sign in$")
//    public void i_click_on_Sign_in() {
//        clickSignInButton();
//    }
//
//    @Then("^I should open drop down$")
//    public void i_should_open_drop_down() {
//    }
//
//    @Then("^I should be able to click sign up button$")
//    public void i_should_be_able_to_click_sign_up_button() {
//        clickSignUpButton();
//    }
//
//    @Then("^I should go to Sign up page$")
//    public void i_should_go_to_Sign_up_page() {
//
//    }
//
//    @Then("^I should fill out full name$")
//    public void i_should_fill_out_first_name( String name)  {
//       enterValidName(name);
//    }
//
//
//
//
//    @Then("^I should create valid password$")
//    public void i_should_create_valid_password(String password) {
//        enterValidPassword(password);
//    }
//
//    @Then("^I should confirm password$")
//    public void i_should_confirm_password(String confirmPassword) {
//        enterConfirmPassword(confirmPassword);
//    }
//
//    @Then("^I should click on create free account$")
//    public void i_should_click_on_create_free_account() {
//        clickCreateAccount();
//    }
//
//    @Then("^I should be able to sign up$")
//    public void i_should_be_able_to_sign_up()  {
//
//    }

