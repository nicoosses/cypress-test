describe('Homework Excersises',function(){

    it('1- Visitar pagina',function(){cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')})
    it('2- Averiguar precio de tomate y comprar 3kg',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('#search-field').type('Tomato')
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('tomato');
        cy.wait(2000)
        cy.get('.products').as('varProduct')
        cy.get('@varProduct').find('.product').each(($el, index, $list) => {
            const textCard = $el.find('h4.product-name').text()
            
            if(textCard.includes('Tomato')) 
            {
                cy.wrap($el).find('.increment').click();
                cy.wrap($el).find('button').click();
                
            }
        })
        
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();


    })

})