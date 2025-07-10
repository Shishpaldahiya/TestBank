describe('Test Case 2', () => {
    it('Invalid Username', () => {
      cy.viewport(1920, 1080);
      cy.visit('https://www.simplilearn.com/')
      cy.get('[title="Log in"]').click()

      cy.contains('Welcome back!').should('be.visible')
      cy.get('[placeholder="Email Address*"]').type('shishpaldahiyaaaa@gmail.com')
      cy.get('[id="password"]').type('Shishpal@123')
      cy.get('[title="Login"]') .click()
      cy.contains('entered is').should('be.visible')
       })

    

})