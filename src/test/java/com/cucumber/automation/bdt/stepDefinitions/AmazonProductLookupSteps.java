package com.cucumber.automation.bdt.stepDefinitions;

import com.cucumber.automation.web.pages.AmazonProductLookupPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AmazonProductLookupSteps extends AmazonProductLookupPage {

    @Given("^The user will go to Homepage$")
    public void the_user_will_go_to_Homepage() {
        goToHomePage();
    }

    @When("^User enters product name in search box \"([^\"]*)\"$")
    public void user_enters_product_name_in_search_box(String name) {
     enterProductName(name);
    }

    @Then("^I should click search button$")
    public void i_should_click_search_button() {
        searchItem();
    }

    @Then("^I will be on product detail page$")
    public void i_will_be_on_product_detail_page() {
        getItemDetails();
    }

    @Then("^I will get product details$")
    public void i_will_get_product_details() {
        getItemText();
    }
}
