class CreditCardPage {
    visit() {
        cy.visit('https://www.hsbc.co.in/');
    }

    hoverBankingMenu() {
        cy.xpath('//nav//a[contains(text(),"Banking")]').trigger('mouseover');
    }

    clickCreditCardsLink() {
        cy.xpath('//a[contains(text(),"Credit Cards")]').click();
    }

    validateHeader(text) {
        cy.xpath('//h1').should('have.text', text);
    }

    validateApplyNowButton() {
        cy.xpath('//button[contains(text(),"Apply Now")]').should('be.visible');
    }

    validateCreditCardOptions() {
        cy.xpath('//div[@class="credit-card-option"]').should('have.length', 4);
    }

    validateCreditCardImageAttribute(imageAlt) {
        cy.xpath(`//img[@alt="${imageAlt}"]`).should('be.visible');
    }

    validateCreditCardHeader(headerText) {
        cy.xpath(`//h3[contains(text(),"${headerText}")]`).should('be.visible');
    }

    validateButtonAttachedToCard(buttonText) {
        cy.xpath(`//button[contains(text(),"${buttonText}")]`).should('be.visible');
    }

    clickCompareCardsButton() {
        cy.xpath('//button[contains(text(),"Compare cards")]').click();
    }

    validatePopupCloseButton() {
        cy.xpath('//button[contains(text(),"Close")]').should('be.visible');
    }

    validatePopupHeader(headerText) {
        cy.xpath(`//h2[contains(text(),"${headerText}")]`).should('be.visible');
    }

    validateCreditCardCheckboxCount(count) {
        cy.xpath('//input[@type="checkbox"]').should('have.length', count);
    }

    selectCreditCardCheckbox(index) {
        cy.xpath(`(//input[@type="checkbox"])[${index}]`).check();
    }

    clickCompareButton() {
        cy.xpath('//button[contains(text(),"Compare")]').click();
    }

    validateSelectedCardCount(count) {
        cy.xpath('//div[@class="selected-cards"]').should('have.length', count);
    }

    validateRemoveLinkCount(count) {
        cy.xpath('//a[contains(text(),"Remove")]').should('have.length', count);
    }

    clickAddCardLink() {
        cy.xpath('//a[contains(text(),"Add card")]').click();
    }

    closePopup() {
        cy.xpath('//button[contains(text(),"Close")]').click();
    }
}

export default CreditCardPage;
