Feature: Search a tickets
    Scenario: Should tickets page
        Given buyer is on "main" page
        When buyer go to tickets
        Then buyer sees tickets on the film "Логан"