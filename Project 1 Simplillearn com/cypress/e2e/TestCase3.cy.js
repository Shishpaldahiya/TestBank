import LoginPage from "../PageObjects/LoginPage.js";
describe('Test Case 3',()=>{
    const ln=new LoginPage();
    
    it('Test case 1',()=>{
        cy.visit('https://www.simplilearn.com/')
        cy.viewport(1920, 1080);
        
        cy.fixture('loginPage').then((data)=>{

            //const ln=new LoginPage();
            
            ln.clickLoginbtn()
            ln.verifyTxtlogin()
            ln.setUsername(data.useremail)
            ln.setpassword(data.password)
            ln.clickSubmit()
            ln.verifyValidation()
    

        })
        
        
        

    


    })



})