describe('Test Case 1', () => {
  it('passes', () => {
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons > .thumbnail > .section-title > h1').click()
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('[id="dropdowm-menu-1"]').select('c#')
  
  })

    

})

