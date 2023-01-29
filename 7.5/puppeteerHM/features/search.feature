Feature: Search a tickets
    Scenario: Should tickets page
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When buyer go to tickets
        Then user sees text "Начало сеанса: 23:45"