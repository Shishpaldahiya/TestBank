class LoginPage
{

visit()
{
     
    cy.visit('https://www.hsbc.co.in/') 
     
    
    }
logo()
{
     cy.xpath('//div[@class="header-logo lg-2"]//a').should('be.visible')
    }
homePageTitle()
{
   
   cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit'); // Replace 'Expected Title' with the title you expect

}
clickLoginButton() {
    
    
    cy.xpath('//div[@aria-label="Log on options"]//a[@role="button"][normalize-space()="Log On"]').click()
        
    
}

logOnHeader() {
    cy.xpath('//h1[contains(text(),"Log On")]').should('be.visible');
}

jumpPopUp()
{
        cy.visit('https://www.hsbc.co.in/#modal')
        cy.get('.crh-chevron-link__text');
        cy.get('#pwsModalBody_link_1').click();
        
}


checkContinueButtonAvailable() {
    cy.xpath('//button[@id="continue-button"]').should('be.visible');
    
}

checkContinueButtonInitiallyDisabled() {
    
   
    cy.xpath('//button[@id="username_submit_btn"]').should('be.disabled')  
        
}

typeEmail(email) {
   
    cy.xpath('//input[@id="username"]').type('shishpaldahiya')
        
    
}

checkContinueButtonEnabled() {
   
    cy.xpath('//button[@id="username_submit_btn"]').should('not.be.disabled')
        
    
         
}

validateRememberMeCheckbox() {
    cy.xpath('//input[@id="rememberMe"]').should('not.be.checked')
        
}

validateTooltipPresence() {
    cy.xpath('//span[@class="icon icon-circle-help-solid help-icon"]').should('exist').should('be.visible') // Assert that the tooltip is present
         
}

clickTooltip() {
    cy.xpath('//span[@class="icon icon-circle-help-solid help-icon"]').click()
        
}

validatePopupUsernameHeader() {
    cy.xpath('//span[normalize-space()="Username"]').should('exist').should('have.text', 'Username')
             
}

validateCloseButtonInPopup() {
    cy.xpath('//span[@class="icon icon-delete"]').should('be.visible')
        
}

clickCloseButtonInPopup() {
    cy.xpath('//span[@class="icon icon-delete"]').click()
        
}

}
export default LoginPage;