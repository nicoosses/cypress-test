describe('', function() {

    it('Grabbing href attributes', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');
        cy.get('#opentab').click();
    })

})