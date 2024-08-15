Feature: login ke sebuah aplikasi

    as user valid
    I want login application

    Scenario: valid login
    Given I open login page
    When I submit to login
    Then I should go to homepage
    When I click zerobank
    Then I use setting
    When I Help topic 1
    When I Help topic 2
    When I Help topic 3
    When I click zerobank again
     When I click search
    