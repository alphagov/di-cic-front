@mock-api:f2f-cic-success @success
Feature: Build Document Selection Screen

  Background:
    Given Authenticatable Anita is using the system
    When they have provided their details
    Then they should be redirected to the landingPage

    Given the user wants to progress to the next step of the journey
    When the user clicks the continue button on the LandingPage
    Then the user is routed to the next screen in the journey PhotoId Selection
    
Scenario: Successful redirect on 'Non UK passport' selection (Happy path)
Given the Other passport option is selected
When the user clicks the continue button with Non UK passport selected
Then the user is routed to the next screen in the journey Other Passport Details
