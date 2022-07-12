

describe('My first test suite', function()
{
    it('1- My first test case',function() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

   })

   it('2- Type something to search in search bar', function() {
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
   })

   it('3- Select one product', function(){

    cy.get(':nth-child(2) > .product-action > button').click();

   })


} )