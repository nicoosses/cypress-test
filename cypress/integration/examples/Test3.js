

describe('My third test suite', function () {

    it('1- Checkboxes - Static dropdown - Dynamic dropdown', function () {cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
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
  })

  it('2- Visible/Not - Rbtn assertions - Alert handling - Invoke', function () {
        //visible - invisible
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('be.not.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        //radiobutton
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio1"]').check().should('be.checked')
        cy.get('[value="radio2"]').should('not.be.checked')
        //Selecting all the radiobuttons and validaing wich of them are checked or not
        cy.get('input[type="radio"]').check(['radio1','radio2','radio3'])
        cy.get('[value="radio1"]').should('not.be.checked')
        cy.get('[value="radio2"]').should('not.be.checked')
        cy.get('[value="radio3"]').should('be.checked')
        //Check boxes - ALERTS handling: Cypress automatically confirm pop-ups
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //Window alert. 
        cy.on('window:alert', (str) =>{
          //Mocha
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) =>{
          //Mocha
          expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //INVOKE method allows to use Jquery functions to manipulate DOM. Cypress doesn't allow to open new tabs so we use invoke to remove "target" attribute of a dom element
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(2000)
        //Navigation browser commands
        cy.url().should('include','rahulshettyacademy')

        cy.go('back')
  })


})