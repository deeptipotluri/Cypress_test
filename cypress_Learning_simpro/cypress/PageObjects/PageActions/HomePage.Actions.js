/// <reference types="Cypress" />
import HomePage from "../PageElements/Home.Page";

const homepage=new HomePage()

class HomePageActions{
    PlaceOrderBookCart(booktype,bookname,unitstobuy,priceperbook,discount=0)
    {
        homepage.SelectBookType(booktype)
        homepage.SelectBook(bookname);
        homepage.SelectUnit(unitstobuy);
        homepage.SelectPrice(priceperbook);
        homepage.SelectDiscount(discount)
        homepage.SubmitRequest();

    }

    ValidateInlineError(){     
        cy.get('p').should('not.exist')
    }

    deleteRecord()
    {
        cy.get('.removeRecord').click();
        cy.get('#deletedialog > :nth-child(4)').click();
        
    }

    ValidateRecordDeleted()
    {
        cy.get('#transactionsection tr:last-child td:nth-of-type(1)').should('not.exist')
    }
    
    ValidateTableElement(index,_expectedvalue)
    {
        var cell='#transactionsection tr:last-child td:nth-of-type('+index+')'
        var _actualvalue,_splitvalue;
        cy.get(cell).then(element=>{
           var _splitvalue=element.text()
        
           
           if(_splitvalue.split('$').length>1)
           {
           //cy.log( _splitvalue.split('$').length)
             _actualvalue=parseFloat(_splitvalue.split('$')[1])
           }
           else{
            _actualvalue=_splitvalue;

           }
           //cy.log("From Code=>"+_actualvalue)
           //cy.log("From Function Args=>"+_expectedvalue)
         assert.equal(_expectedvalue,_actualvalue)  
        })
       
    }

    ValidateUpperBound(index,_actualvalue,bvalue)
    {
        var bvalue=parseFloat(bvalue)
        var cell='#transactionsection tr:last-child td:nth-of-type('+index+')'
        cy.get(cell).then(element=>{
            
            var finalprice=parseFloat(element.text().split('$')[1])
            if(finalprice<=bvalue)
            {
                cy.log("Total amount is not more than =>" +bvalue)

            }
            else{
                assert.fail('Total value is >'+ bvalue +" =>"+finalprice)
            }
 
            
        })
    }
    

   

}export default HomePageActions
