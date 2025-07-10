class LoginPage
{

   
   clkLoginbtn='[title="Log in"]'
   verifytxt='.content-heading'
   username='[placeholder="Email Address*"]'
   password='[id="password"]'
   Clickbtn='[title="Login"]'
   lblmsg='entered is'

 

   clickLoginbtn()
   {
    cy.get(this.clkLoginbtn).click()
   }
   
   verifyTxtlogin()
   {
    
    cy.get(this.verifytxt)
    cy.contains("Welcome back!").should("be.visible")
   }


   setUsername(username)
   {
    cy.get(this.username).type(username)
    
   }
   setpassword(password)
   {
    cy.get(this.password).type(password)
   }

   clickSubmit()
   {
    cy.get(this.Clickbtn) .click()
    cy.wait(4000)
   }

   verifyValidation()
   {
     cy.contains(this.lblmsg).should('be.visible')
   }
}
export default LoginPage;