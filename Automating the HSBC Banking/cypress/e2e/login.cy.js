import LoginPage from "../pageObjects/loginPage";

describe('HSBC Login page',()=>{
     
     const login=new LoginPage();
     beforeEach(()=>
        {
        cy.viewport(1920, 1080);
    login.visit()
        })
    
    it('validate the HSBC all cases in the one function',()=>
        {
        
          login.logo()
          login.homePageTitle()
          login.clickLoginButton()
          login.jumpPopUp()
          /*
          login.checkContinueButtonEnabled()
          login.validateRememberMeCheckbox()
          login.validateTooltipPresence()
          login.clickTooltip()
          login.validatePopupUsernameHeader()
           login.validateCloseButtonInPopup()
           login.clickCloseButtonInPopup()
          */
          
          })


})








