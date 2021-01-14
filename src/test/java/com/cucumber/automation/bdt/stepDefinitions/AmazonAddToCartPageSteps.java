package com.cucumber.automation.bdt.stepDefinitions;

import com.cucumber.automation.web.pages.AmazonAddToCartPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AmazonAddToCartPageSteps extends AmazonAddToCartPage {
    @Given("^The user is on home page$")
    public void the_user_is_on_home_page() {
        goToHomePage();
    }

    @When("^I enter a product name in the search box \"([^\"]*)\"$")
    public void i_enter_a_product_name_in_the_search_box(String name) {
        enterProductName(name);
    }

    @Then("^I click on search button$")
    public void i_click_on_search_button() {
        searchItem();
        clickFirstSearchItem();
    }

    @Then("^I go to product detail page and click on Gift checkbox to add the item as a gift$")
    public void i_go_to_product_detail_page_and_click_on_Gift_checkbox_to_add_the_item_as_a_gift() {
        clickOnGiftOption();
    }

    @Then("^I click to choose Warranty and Accident Protection Plan$")
    public void i_click_to_choose_Warranty_and_Accident_Protection_Plan() {
        clickToAddToCart();
    }

    @Then("^User should enter email \"([^\"]*)\"$")
    public void user_should_enter_email(String email) {
        enterEmail(email);
    }

    @Then("^User should click continue$")
    public void user_should_click_continue()  {
        clickToContinue();
    }

    @Then("^User should enter password \"([^\"]*)\"$")
    public void user_should_enter_password(String password)  {
        enterPassword(password);
    }

    @Then("^User will click on Sign-in$")
    public void user_will_click_on_Sign_in() {
        clickSignIn();
    }

//    @Then("^I click on Buy Now Button$")
//    public void i_click_on_Buy_Now_Button() {
//        clickToAddToCart();
//    }

    @Then("^I add the item in the cart and go to Checkout Page$")
    public void i_add_the_item_in_the_cart_and_go_to_Checkout_Page() {

    }
}
