Feature: As a user, I want to be able to be sign up to Amazon account

  @SmokeTest
  Scenario: I want to Sign up
    Given The user is on Home page
    When  user click on Sign in
    Then  I should go to Sign up page
    Then  I click Create your Amazon account
    Then  I go to create account page
    Then  I should fill out full name "Zunayed Mahfuz"
    Then  I should enter valid email "automationtest@gmail.com"
    Then  I should create valid password "testpassword"
    Then  I should confirm password "testpassword"
    Then  I should click on create your Amazon account
    And   I should be able to sign up
    And   I close the browser