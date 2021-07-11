/// <reference types="Cypress"/>

import HomePageActions from '../../PageObjects/PageActions/HomePage.Actions';
import HomePage from '../../PageObjects/PageElements/Home.Page'

const homepageactions=new HomePageActions();
const homepageobj=new HomePage();

var _booktype,_bookName,_bookName,_price,_amount,_disc,_discamt,_total,_units,_bvalue
         

Given('I navigate to simpro book ordering site', ()=>{
    cy.visit("https://react.simprocloud.com/build/index.html")
    

})

When('I give the required fileds and click on submit', (datatable)=>{
    datatable.hashes().forEach(row => {
        _booktype=row.booktype;
        _bookName=row.bookName
        _units=row.unit
        _price=row.price
        _disc=row.disc

    homepageactions.PlaceOrderBookCart(_booktype,_bookName,_units,_price,_disc);
    homepageactions.ValidateInlineError(); 
    });
    
    
})


And('validate the order is placed and required fields correctly', () => {
    homepageactions.ValidateInlineError();
    
})
And('validate Transaction documents have been updated properly and total amount', ()=>{
        _amount=_units*_price;
        _discamt=(_amount*_disc)/100;
        _total=_amount-_discamt;
        homepageactions.ValidateTableElement(2,_bookName)
        homepageactions.ValidateTableElement(3,_units)
        homepageactions.ValidateTableElement(4,_price)
        homepageactions.ValidateTableElement(7,_total)
        

    
})




When('I give the required fileds and click on submit and passing maxamount', (datatable)=>{
    datatable.hashes().forEach(row => {
        _booktype=row.booktype;
        _bookName=row.bookName
        _units=row.unit
        _price=row.price
        _disc=row.disc
        _bvalue=row.max
       
    homepageactions.PlaceOrderBookCart(_booktype,_bookName,_units,_price,_disc);
   
    });
    
    
})


Then('validate the order was placed and transactions documents are updated', () => {
    homepageactions.ValidateInlineError();
    homepageactions.ValidateTableElement(2,_bookName)
    homepageactions.ValidateTableElement(3,_units)
    homepageactions.ValidateTableElement(4,_price)
   

And('Validate the discount is applied and Cumulative sum', () => {
        _amount=_units*_price;
        _discamt=(_amount*_disc)/100;
        _total=_amount-_discamt;
       
        
        homepageactions.ValidateTableElement(5,_amount)
        homepageactions.ValidateTableElement(6,_discamt)
        homepageactions.ValidateTableElement(7,_total)
        homepageactions.ValidateUpperBound(7,_total,_bvalue)

And('Delete the record and check it has been removed', () => {
        homepageactions.deleteRecord();
        homepageactions.ValidateRecordDeleted()
})


})


})