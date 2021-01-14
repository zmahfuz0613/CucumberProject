Feature: As a user, I want to be able to look up a product

  @SmokeTest

  Scenario: I want to look up a product
    Given   The user will go to Homepage
    When    User enters product name in search box "Alexa"
    Then    I should click search button
    Then    I will be on product detail page
    And     I will get product details
    And   I close the browser

