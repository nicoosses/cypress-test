

describe('My third test suite', function () {

    it('1- Second suite', function () {cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //Two ways to select CHECKBOXES. 
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option1','option2','option3']).should('be.checked')
    cy.get('input[type="checkbox"]').uncheck(['option1','option2','option3']).should('not.be.checked')
    //Static DROPDOWN select
    cy.get('select').select('option2').should('have.value','option2')//assertion passed
    //Dynamic DROPDOWN select each
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {//recorro la lista de este elemento padre.

      if($el.text()==='India')//al $el emento que el texto coincida con india
      {
        $el.click();//le hago click
      }

    })
    cy.get('#autocomplete').should('have.value','India')
})
})