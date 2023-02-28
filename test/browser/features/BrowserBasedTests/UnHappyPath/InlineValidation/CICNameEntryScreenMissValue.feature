@mock-api:f2f-cic-success
Feature: The user enters their name to be used as part of their claimed identity


    Background:
        Given Authenticatable Anita is using the system
        When they have provided their details
        Then they should be redirected to the landingPage

        Given the user wants to progress to the next step of the journey
        When the user clicks the continue button on the LandingPage
        Then the user is routed to the next screen in the journey PhotoId Selection

        Given the BRP option is selected
        When the user clicks the BRP continue button
        Then the user is routed to the next screen in the journey BRP Expiry Date

        Given the date entered is within accepted BRP expiration window
        When the user clicks the continue button on the BRP Page
        Then the user is routed to the next screen in the BRP journey - Name Entry

    Scenario: Successful validation of Surname and First name fields
        Given only one mandatory name field has been entered
        When the user clicks the continue button in the NameEntry screen
        Then the user sees an inline error message displayed in the NameEntry screen