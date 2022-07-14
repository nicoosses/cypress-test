

describe('My Second test suite', function () {

    it('1- Second suite', function () {cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');})

    it('2- Type something to search in search bar', function () {
         cy.get('.search-keyword').type('ca');
         cy.wait(2000)
    })

    it('3- Select one product and buy', function () {

         cy.get('.products').as('productLocator')
         cy.get('@productLocator').find('.product').each(($el, index, $list) => {
              //we iterate elements .product inside the father element with class .products
              const textCard = $el.find('h4.product-name').text()
             
              if (textCard.includes('Cashews')) {
                   cy.wrap($el).find('button').click();
              }
         })
         cy.get('.cart-icon > img').click()
         cy.contains('PROCEED TO CHECKOUT').click()
         cy.contains('Place Order').click()

    })

   

})