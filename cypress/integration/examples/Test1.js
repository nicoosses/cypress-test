

describe('My first test suite', function()
{
    it('My first test case',function() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

   })

   it('Type something to search in search bar', function() {
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        cy.get('.product').should('have.length',4)
   })

//    it('My second test case',function() {

//     //test step

//    })

} )