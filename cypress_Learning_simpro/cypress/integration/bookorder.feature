Feature: book order

    I want to test ordering books Feature
    Background: I navigate to simpro book ordering site
        Given I navigate to simpro book ordering site

    Scenario: Scenario 1
            """
            As a wholesale customer I should be able to order 50 Harry Potter fiction books at a
            rate of $35.80 each so that I can sell them to my customers.
            """

        When I give the required fileds and click on submit
            | booktype | bookName     | unit | price | disc |
            | Fiction  | Harry Potter | 10   | 38.5  | 0    |

        And validate the order is placed and required fields correctly
        And validate Transaction documents have been updated properly and total amount

    Scenario: Scenario 2
            """
            As a book lover I should be able to order a drama called “The Rainbow” for no more
            than $125.00 I also want to use my 10% discount voucher so that I can send this
            book to my mum.
            """
        
        When I give the required fileds and click on submit and passing maxamount
            | booktype | bookName    | unit | price | disc | max |
            | Drama    | The Rainbow | 1    | 138   | 10   | 125 |
        Then validate the order was placed and transactions documents are updated
        And Validate the discount is applied and Cumulative sum
        And Delete the record and check it has been removed






