Feature: First feature

    Scenario: First scenario
        Given I go to Maps homepage
        When I type value "Paris" into input field
        And I click search button
        Then Header for result should have value "Paryż"

    Scenario: Second scenario
        Given I go to Maps homepage
        When I type value "London" into input field
        And I click search button
        Then Header for result should have value "Londyn"
        When I click Directions button
        Then Destination should be filled with Londyn, Wielka Brytania

    Scenario: Third scenario
        Given I go to Maps homepage
        When I type value "Madrit" into input field
        And I click search button
        Then Header for result should have value "Madryt"
        When I click share button
        Then Pop-up with link to location is opened

    Scenario: Fourth scenario - negative
        Given I go to Maps homepage
        When I type value "aaaabbcceeswas" into input field
        And I click search button
        Then I verify the error message is shown

    Scenario: Fifth scenario - edgecase
        Given I go to Maps homepage
        When I type value "London" into input field
        And I click search button
        Then Header for result should have value "Londyn"
        When I click Directions button
        Then Destination should be filled with Londyn, Wielka Brytania
        When I fill start destination with "Londyn, Wielka Brytania"
        And I click search button on start destination input field
        Then Error that no hints could be prepared is shown