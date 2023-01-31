Feature: Buying a tickets
    Scenario: Ticket booking happy path film 'Логан'
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user select new date
        When user go to tickets
        When user select a ticket
        When user click on the button
        Then user sees text film "Логан"

    Scenario: Ticket booking happy path film 'Фильм 3'
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user select new date
        When user go to tickets second film
        When user select a ticket film Hercules
        When user click on the button
        Then user sees text second film "Фильм 3"

    Scenario: Ticket booking sad path
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user go to tickets
        When user select a ticket
        Then user cannot buying chair taken