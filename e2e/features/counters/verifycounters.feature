Feature: Counters works correctly when tapping on them

    Counters can be tapped and totals are correctly reflected on the label

    Background: I navigate to the Counters screen
        Given I tap on the 'Counters' Home section

    @counters @navigation
    Scenario: Verify that the Counters screen is correctly displayed
        When the Counters page is correctly displayed
        And I tap the back button
        Then the Home page is correctly displayed

    @counters @functionality
    Scenario: Verify that tapping the Counters a number of times will reflect the correct number
        When I tap the 'Water' Counter 3 times
        And I tap the 'Electricity' Counter 5 times
        And I tap the 'Gas' Counter 2 times
        Then I tap the 'Broadband' Counter 4 times
