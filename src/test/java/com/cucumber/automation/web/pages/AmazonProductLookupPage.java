package com.cucumber.automation.web.pages;

import com.cucumber.automation.utils.TestBase;
import com.cucumber.automation.utils.TestUtil;
import org.openqa.selenium.By;

public class AmazonProductLookupPage extends TestBase {

    TestUtil ut = new TestUtil();

    String baseURL = "https://www.amazon.com";

    //Product lookup
    By enterProductNameInSearchBox = By.xpath("//div[@class=\"nav-fill\"]/div/input");
    By clickFirstItem = By.xpath("//div[@data-cel-widget=\"search_result_1\"]//h2/a");
    By clickSearchButton = By.xpath("//div[@class=\"nav-right\"]/div/span/input");
    By getItemDetails = By.xpath("//div[@id=\"featurebullets_feature_div\"]/div");

    public void goToHomePage() {
        ut.navigateTo(baseURL);
    }
    public void enterProductName(String name) {
        ut.enterText(enterProductNameInSearchBox, name);

    }
    public void searchItem() {
        ut.clickElement(clickSearchButton);
    }

    public void getItemDetails() {
        ut.clickElement(clickFirstItem);
    }

    public void getItemText() {
        ut.getText(getItemDetails);
    }
}
