describe('Suite 2',function(){

    it('Caso 1',function()
        {cy.visit('https://rahulshettyacademy.com/AutomationPractice/')}
    )

    it('Seleccionar opciones de primera fila',function(){
        cy.get('div.block.large-row-spacer:nth-child(3) div.left-align fieldset:nth-child(1) label:nth-child(2) > input.radioButton').click();
        cy.get('#autocomplete').type('Argentina');
        cy.get('#dropdown-class-example').select('option3');
        cy.get('#checkBoxOption3').click();
    })

})

describe('Suite 3',function(){

    it('Probar los rbtns',function()
    {
        cy.get('div.block.large-row-spacer:nth-child(3) div.left-align fieldset:nth-child(1) label:nth-child(2) > input.radioButton').click();
        cy.get('div.block.large-row-spacer:nth-child(3) div.left-align fieldset:nth-child(1) label:nth-child(3) > input.radioButton').click();
        cy.get('div.block.large-row-spacer:nth-child(3) div.left-align fieldset:nth-child(1) label:nth-child(4) > input.radioButton').click(); 
    })

})