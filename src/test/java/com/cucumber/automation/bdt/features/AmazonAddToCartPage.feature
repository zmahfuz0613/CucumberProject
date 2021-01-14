Feature: As a user, I want to add my product in the cart

  @SmokeTest

  Scenario: I want to add a product in the cart
    Given  The user is on home page
    When   I enter a product name in the search box "Alexa"
    Then   I click on search button
    Then   I go to product detail page and click on Gift checkbox to add the item as a gift
    Then   I click to choose Warranty and Accident Protection Plan
    Then   User should enter email "str053mgr@gmail.com"
    Then   User should click continue
    Then   User should enter password "Eshna143#"
    Then   User will click on Sign-in
    And    I add the item in the cart and go to Checkout Page
    And   I close the browser

