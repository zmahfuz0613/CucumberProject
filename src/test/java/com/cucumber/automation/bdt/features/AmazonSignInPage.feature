Feature: As a user, I want to be able to be sign in to Amazon account

  @SmokeTest
  Scenario: I want to sign in
    Given The user goes to Home page
    When  user click on Sign in
    Then  I should go to Sign in page
    Then  User should enter valid email "str053mgr@gmail.com"
    Then  I should click continue
    Then  User should enter valid password "Eshna143#"
    Then  User should click on Sign-in
    And   User should be able to sign in
    And   I close the browser