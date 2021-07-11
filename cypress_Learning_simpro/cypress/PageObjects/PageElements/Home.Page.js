/// <reference types="Cypress" />
class HomePage{

    radiobtnFiction()
    {
        return cy.get('input[value="Fiction"]');
    }
    radiobtnDrama()
    {
        return cy.get('input[value="Drama"]');
    }
    txtUnits()
    {
        return cy.get('input[name="units"]')
    }
    txtPrice()
    {
        return cy.get('input[name="price"]')
    }
    btnSubmit()
    {
        return cy.get('input[name="submit"]')
    }


    SelectBookType(booktype)
    {
        if(booktype==='Fiction'){
            this.radiobtnFiction().click();

        }
        else if(booktype==='Drama'){
            this.radiobtnDrama().click();
        }
    }

    SelectBook(bookname)
    {
        cy.get('.bookoptions').select(bookname);

    }
    
    SelectUnit(units)
    { 
        var units = parseInt(units)
        if(typeof units==='number')
        {
            
            this.txtUnits().type(units);
        }
        //Validate
        this.txtUnits().should('have.value',units)

    }

    SelectPrice(price)
    {
        var price = parseFloat(price)
        if(typeof price==='number')
        {
            this.txtPrice().type(price);
        }
        this.txtPrice().should('have.value',price);
    }

    SelectDiscount(discount){
       
        var discount = parseFloat(discount)
        if(typeof discount==='number' & discount > 0)
        {
            cy.get('.discount > input').click();
            cy.get('.discountvalue').type(discount);
        }
       
    }

    SubmitRequest(){
        this.btnSubmit().click();
    }



}export default HomePage
