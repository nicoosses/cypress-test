describe('Manipulating tables', function() {

    it('1- Asserting value of a specific row in table', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/');

        cy.get('tr td:nth-child(2)').each(($el,index,list) => {
            const text = $el.text();
            if (text.includes('Python')) {
              cy.wrap($el).next().should('have.text', '25')
            }
          })    

        //$el es una variable, le podemos poner el nombre que querramos ej: #celda, #cell.
        //es el elemento al que le hacemos foco
        //INDEX es el indice sobre el cual esta parado el "each", que podemos tomarlo
        //y compararlo con el eq(index)
    })




})