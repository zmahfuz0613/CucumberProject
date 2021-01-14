package com.cucumber.automation.bdt.stepDefinitions;

import com.cucumber.automation.web.pages.SignInPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInPageSteps extends SignInPage {

    @Given("^The user goes to Home page$")
    public void the_user_goes_to_Home_page()  {
        goToHomePage();
    }

    @When("^user click on Sign in$")
    public void user_click_on_Sign_in() {
        clickSignInButton();
    }

    @Then("^I should go to Sign in page$")
    public void i_should_go_to_Sign_in_page()  {
    }

    @Then("^User should enter valid email \"([^\"]*)\"$")
    public void user_should_enter_valid_email(String email) {
        enterEmail(email);
    }

    @Then("^I should click continue$")
    public void i_should_click_continue()  {
        clickToContinue();
    }

    @Then("^User should enter valid password \"([^\"]*)\"$")
    public void user_should_enter_valid_password(String password)  {
        enterPassword(password);
    }

    @Then("^User should click on Sign-in$")
    public void user_should_click_on_Sign_in() {
        clickSignIn();
    }

    @Then("^User should be able to sign in$")
    public void user_should_be_able_to_sign_in() {

    }


}
