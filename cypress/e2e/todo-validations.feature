@Smoke @Prod
Feature: Perform CRUD operations on TODO
    Scenario: Check and verify CRUD operations on TODO website
        Given user is on todo home page
        Then verify todo list
        When add new todo items
        Then check off an item as completed and verify