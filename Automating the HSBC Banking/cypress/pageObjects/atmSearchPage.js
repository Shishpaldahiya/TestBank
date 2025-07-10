class ATMSearchPage {
    visit() {
        cy.visit('https://www.hsbc.co.in/');
    }

    scrollToFooter() {
        cy.scrollTo('bottom');
    }

    clickFindNearestBranchOrATM() {
        cy.xpath('//a[contains(text(),"Find your nearest branch or ATM")]').click();
    }

    validateUrlContains(text) {
        cy.url().should('include', text);
    }

    validateHeader(text) {
        cy.xpath('//h1').should('have.text', text);
    }

    typeCountryName(country) {
        cy.xpath('//input[@id="country-input"]').type(country);
    }

    clickCountryOption(country) {
        cy.xpath(`//option[contains(text(),"${country}")]`).click();
    }

    validateATMHeader(atmLocation) {
        cy.xpath(`//h2[contains(text(),"${atmLocation}")]`).should('be.visible');
    }

    clickShowMoreResults() {
        cy.xpath('//button[contains(text(),"Show more results")]').click();
    }

    validateSocialMediaLinks() {
        const socialMedia = ['Instagram', 'Facebook', 'Twitter', 'Youtube'];
        socialMedia.forEach((media) => {
            cy.xpath(`//footer//a[contains(text(),"${media}")]`).should('be.visible');
        });
    }

    clickHSBCLogo() {
        cy.xpath('//img[@alt="HSBC Logo"]').click();
    }

    validateHomePageTitle() {
        cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving');
    }

    clickPrivacyLink() {
        cy.xpath('//a[contains(text(),"Privacy")]').click();
    }

    validatePrivacyHeader() {
        cy.xpath('//h1[contains(text(),"Privacy Statement")]').should('be.visible');
    }
}

export default ATMSearchPage;
