import 'cypress-iframe'


describe('Suite de tests en iframes', function(){
    it('Test 1 - Demo', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        cy.frameLoaded("#courses-iframe")
        
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

    })
})