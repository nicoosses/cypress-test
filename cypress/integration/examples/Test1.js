

describe('My first test suite', function()
{
    it('1- My first test case',function() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

   })

   it('2- Type something to search in search bar', function() {
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        /*two ways to select products of a list (like ecommerce): first of all is filtering all the products and select only products with attribute visible*/
        cy.get('.product:visible').should('have.length',4)
        //the second way is using find() inside the list elements who contains .product class, entering through the class name to their child elements
        cy.get('.products').find('.product').should('have.length',4)

        
   })


   it('3- Select one product', function(){
          // //three ways: the first is selecting the eleemnt by it unique css selector 
          cy.get(':nth-child(1) > .product-action > button').click();
          // //the second is filtering elements using find, equal and contains 
          cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();

          //the third way is the optimous using each to iterate in a "table" selecting 1 element and working uniquely on it.
          
          cy.get('.products').as('productLocator')
          cy.get('@productLocator').find('.product').each(($el, index, $list) => {
          //we iterate elements .product inside the father element with class .products
               const textCard=$el.find('h4.product-name').text()  
               const productPrice=$el.find('p.product-price').text()   
                    if(textCard.startsWith('C') & productPrice > 56 & productPrice < 600)
                         {
                              cy.wrap($el).find('button').click();
                         }
          })

     })

     it('4- Understanding manually promises case', function(){
         
          cy.get('.brand').then(function(logoElement){
               cy.log(logoElement.text());
          })
           //we need to use then() to make promises manually, when cypress can't procces some petitions like
                                                                                                         // const errorPromise=cy.get('.brand');
                                                                                                         // cy.log(errorPromise.text())

     })

})