///<reference types="Cypress" /> 
describe('Test Case 1', () => {
  it('passes', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.simplilearn.com/')
    // Assert that the text "Resources" is present on the page
    cy.contains('Resources').should('be.visible')
    cy.get('[id="header_srch"]').type('Selenium')
    cy.get('.input-search-btn').click()
    cy.contains('Automation Testing Masters Program').should('be.visible')
    cy.wait(8000)
    cy.get('input[type="checkbox"][name="agree"][value="bundle"][data-filtertype="new_item_type"]')
    .should('exist') // Ensure the checkbox is present
    .check({ force: true }) // Force check the checkbox if it is currently unchecked
    .uncheck({ force: true }) // Force uncheck the checkbox to ensure it's unchecked
    .should('not.be.checked'); // Verify that the checkbox is not checked
      
    
  })
})