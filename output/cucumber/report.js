$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonAddToCartPage.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to add my product in the cart",
  "description": "",
  "id": "as-a-user,-i-want-to-add-my-product-in-the-cart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9387697711,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I want to add a product in the cart",
  "description": "",
  "id": "as-a-user,-i-want-to-add-my-product-in-the-cart;i-want-to-add-a-product-in-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter a product name in the search box \"Alexa\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I go to product detail page and click on Gift checkbox to add the item as a gift",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click to choose Warranty and Accident Protection Plan",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should enter email \"str053mgr@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should click continue",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should enter password \"Eshna143#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User will click on Sign-in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I add the item in the cart and go to Checkout Page",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonAddToCartPageSteps.the_user_is_on_home_page()"
});
formatter.result({
  "duration": 5717104241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alexa",
      "offset": 42
    }
  ],
  "location": "AmazonAddToCartPageSteps.i_enter_a_product_name_in_the_search_box(String)"
});
formatter.result({
  "duration": 1653761824,
  "status": "passed"
});
formatter.match({
  "location": "AmazonAddToCartPageSteps.i_click_on_search_button()"
});
formatter.result({
  "duration": 10981792743,
  "status": "passed"
});
formatter.match({
  "location": "AmazonAddToCartPageSteps.i_go_to_product_detail_page_and_click_on_Gift_checkbox_to_add_the_item_as_a_gift()"
});
formatter.result({
  "duration": 1354154962,
  "status": "passed"
});
formatter.match({
  "location": "AmazonAddToCartPageSteps.i_click_to_choose_Warranty_and_Accident_Protection_Plan()"
});
formatter.result({
  "duration": 2088435593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "str053mgr@gmail.com",
      "offset": 25
    }
  ],
  "location": "AmazonAddToCartPageSteps.user_should_enter_email(String)"
});
formatter.result({
  "duration": 287095432,
  "status": "passed"
});
formatter.match({
  "location": "AmazonAddToCartPageSteps.user_should_click_continue()"
});
formatter.result({
  "duration": 1462048368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eshna143#",
      "offset": 28
    }
  ],
  "location": "AmazonAddToCartPageSteps.user_should_enter_password(String)"
});
formatter.result({
  "duration": 407732685,
  "status": "passed"
});
formatter.match({
  "location": "AmazonAddToCartPageSteps.user_will_click_on_Sign_in()"
});
formatter.result({
  "duration": 266411394,
  "status": "passed"
});
formatter.match({
  "location": "AmazonAddToCartPageSteps.i_add_the_item_in_the_cart_and_go_to_Checkout_Page()"
});
formatter.result({
  "duration": 30689,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5449795232,
  "status": "passed"
});
formatter.uri("AmazonProductLookupPage.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to be able to look up a product",
  "description": "",
  "id": "as-a-user,-i-want-to-be-able-to-look-up-a-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5315924882,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I want to look up a product",
  "description": "",
  "id": "as-a-user,-i-want-to-be-able-to-look-up-a-product;i-want-to-look-up-a-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user will go to Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters product name in search box \"Alexa\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should click search button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I will be on product detail page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I will get product details",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonProductLookupSteps.the_user_will_go_to_Homepage()"
});
formatter.result({
  "duration": 5063888816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alexa",
      "offset": 40
    }
  ],
  "location": "AmazonProductLookupSteps.user_enters_product_name_in_search_box(String)"
});
formatter.result({
  "duration": 1916327093,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProductLookupSteps.i_should_click_search_button()"
});
formatter.result({
  "duration": 4020209202,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProductLookupSteps.i_will_be_on_product_detail_page()"
});
formatter.result({
  "duration": 2538367689,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProductLookupSteps.i_will_get_product_details()"
});
formatter.result({
  "duration": 10222721906,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //div[@id\u003d\"featurebullets_feature_div\"]/div (tried for 10 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat com.cucumber.automation.utils.TestUtil.waitForElement(TestUtil.java:36)\n\tat com.cucumber.automation.utils.TestUtil.getText(TestUtil.java:45)\n\tat com.cucumber.automation.web.pages.AmazonProductLookupPage.getItemText(AmazonProductLookupPage.java:35)\n\tat com.cucumber.automation.bdt.stepDefinitions.AmazonProductLookupSteps.i_will_get_product_details(AmazonProductLookupSteps.java:32)\n\tat ✽.And I will get product details(AmazonProductLookupPage.feature:10)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //div[@id\u003d\"featurebullets_feature_div\"]/div\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027Zunayeds-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:c53:f3e7:1207:b891%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat com.cucumber.automation.utils.TestUtil.waitForElement(TestUtil.java:36)\n\tat com.cucumber.automation.utils.TestUtil.getText(TestUtil.java:45)\n\tat com.cucumber.automation.web.pages.AmazonProductLookupPage.getItemText(AmazonProductLookupPage.java:35)\n\tat com.cucumber.automation.bdt.stepDefinitions.AmazonProductLookupSteps.i_will_get_product_details(AmazonProductLookupSteps.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 784651427,
  "status": "passed"
});
formatter.uri("AmazonSignInPage.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to be able to be sign in to Amazon account",
  "description": "",
  "id": "as-a-user,-i-want-to-be-able-to-be-sign-in-to-amazon-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5122592916,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I want to sign in",
  "description": "",
  "id": "as-a-user,-i-want-to-be-able-to-be-sign-in-to-amazon-account;i-want-to-sign-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The user goes to Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should go to Sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User should enter valid email \"str053mgr@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should click continue",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should enter valid password \"Eshna143#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should click on Sign-in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should be able to sign in",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageSteps.the_user_goes_to_Home_page()"
});
formatter.result({
  "duration": 4632189737,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.user_click_on_Sign_in()"
});
formatter.result({
  "duration": 2197684555,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.i_should_go_to_Sign_in_page()"
});
formatter.result({
  "duration": 57757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "str053mgr@gmail.com",
      "offset": 31
    }
  ],
  "location": "SignInPageSteps.user_should_enter_valid_email(String)"
});
formatter.result({
  "duration": 1340381219,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.i_should_click_continue()"
});
formatter.result({
  "duration": 1040975833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eshna143#",
      "offset": 34
    }
  ],
  "location": "SignInPageSteps.user_should_enter_valid_password(String)"
});
formatter.result({
  "duration": 268240932,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.user_should_click_on_Sign_in()"
});
formatter.result({
  "duration": 404044526,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.user_should_be_able_to_sign_in()"
});
formatter.result({
  "duration": 46408,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 3630227587,
  "status": "passed"
});
formatter.uri("AmazonSignUpPage.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to be able to be sign up to Amazon account",
  "description": "",
  "id": "as-a-user,-i-want-to-be-able-to-be-sign-up-to-amazon-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5698682746,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I want to Sign up",
  "description": "",
  "id": "as-a-user,-i-want-to-be-able-to-be-sign-up-to-amazon-account;i-want-to-sign-up",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should go to Sign up page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click Create your Amazon account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I go to create account page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should fill out full name \"Zunayed Mahfuz\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should enter valid email \"automationtest@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should create valid password \"testpassword\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should confirm password \"testpassword\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should click on create your Amazon account",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should be able to sign up",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpPageSteps.the_user_is_on_Home_page()"
});
formatter.result({
  "duration": 5156538556,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.user_click_on_Sign_in()"
});
formatter.result({
  "duration": 2368991735,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPageSteps.i_should_go_to_Sign_up_page()"
});
formatter.result({
  "duration": 49043,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPageSteps.i_click_Create_your_Amazon_account()"
});
formatter.result({
  "duration": 1369554917,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPageSteps.i_go_to_create_account_page()"
});
formatter.result({
  "duration": 37806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zunayed Mahfuz",
      "offset": 29
    }
  ],
  "location": "SignUpPageSteps.i_should_fill_out_full_name(String)"
});
formatter.result({
  "duration": 353318875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationtest@gmail.com",
      "offset": 28
    }
  ],
  "location": "SignUpPageSteps.i_should_enter_valid_email(String)"
});
formatter.result({
  "duration": 372479465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 32
    }
  ],
  "location": "SignUpPageSteps.i_should_create_valid_password(String)"
});
formatter.result({
  "duration": 273836361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 27
    }
  ],
  "location": "SignUpPageSteps.i_should_confirm_password(String)"
});
formatter.result({
  "duration": 231950685,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPageSteps.i_should_click_on_create_your_Amazon_account()"
});
formatter.result({
  "duration": 1023552290,
  "status": "passed"
});
formatter.match({
  "location": "SignUpPageSteps.i_should_be_able_to_sign_up()"
});
formatter.result({
  "duration": 49906,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 492822651,
  "status": "passed"
});
});