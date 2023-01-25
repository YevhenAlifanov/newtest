Feature: Registration in diff ways

  Background:
    Given Maximize browser window

  Scenario: Verify that user can open the "sign up" page
    Given User goes to AimChat
    When User click on 'Send Request' button
    Then 'Sign up' page is open
