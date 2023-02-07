@mock-api:f2f-cic-success @success
Feature: The user enters their name to be used as part of their claimed identity


Background:
    Given Authenticatable Anita is using the system
    When they have provided their details
    Then they should be redirected to the landingPage

    Given the user wants to progress to the next step of the journey
    When the user clicks the continue button on the LandingPage
    Then the user is routed to the next screen in the journey PhotoId Selection

    Given the UK passport option is selected
    When the user clicks the PhotoId continue button
    Then the user is routed to the next screen in the journey Passport Details

    Given the date entered is within accepted expiration window
    When the user clicks the continue button on the UKPassportPage
    Then the user is routed to the next screen in the journey Name Entry Screen


Scenario: Successful validation of Surname and First name fields
Given there has been an entry into the surname and first name fields
When the user clicks the NameEntry continue button
Then the user is routed to the next screen in the journey DOB Entry