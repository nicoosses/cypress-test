describe('', function() {

    it('Hover btns', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

       // cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        //force:true allows us to click invisible elements

        //Para eventos HOVER en elementos invisibles u ocultos podemos hacerlo de DOS FORMAS
        //1: Manipulamos la clase del elemento con Invoke dandole una clase "show" por ejemplo..
        //2: No manipulamos la clase del objeto oculto y lo clickeamos en este caso, con el force:true

    })





})