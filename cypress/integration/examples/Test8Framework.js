import 'cypress-iframe'


describe('Suite de tests en iframes', function() {

    before(function() {
       cy.fixture('example').then(function(data){

            this.data = data

       })
    })

    it('My first test case', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender).should('have.value',this.data.gender)
    })
    
})