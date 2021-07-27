import basePage from "./Pages/basePage";

const basepage = new basePage();

describe('Automation Test Eli', () => {
    it('visit and get to the calendar', () => {
        
        cy.visit(basepage.getUrlOfWebsite());
        cy.wait(3000);

        if(basepage.getWithoutAccount().should('be.visible')) {
            basepage.getWithoutAccount().click();
            basepage.getContinueWithoutAccount().click();
        };

        cy.wait(2000).then(() => {
            basepage.getProvider().click();
        });
        cy.wait(2000);
        cy.get('.font-large').click();
        cy.get('.font-large').click();
        cy.wait(2000);
        
        cy.get('#QuestionId').type(Cypress.env('id'));
        basepage.getBtnClass().click();
        cy.get('#Pelephone').type(Cypress.env('phone'));
        basepage.getBtnClass().click();

        cy.get(':nth-child(7) > .list-item-body').click();
        cy.get('[data-ng-repeat="i in locationsData.results"][style=""] .list-item-title').click();
        cy.get('.list-item-body.with-1icon').click();
        cy.wait(2000);
        cy.get('#52a78f2a-2398-424d-9a1f-4f7420a1de23').click();
        basepage.getBtnClass().click();
        cy.wait(4000);
    })

    it('check if there is a free date', () => {

        if (cy.get('#mCSB_12_container').should('not.be.visible')) {
            cy.log('THERE IS NO AVAILABLE APPOINTMENT'); 
        } else {
            // click to book the Exam
            cy.get('#mCSB_12_container button').first().click();
            cy.get('#mCSB_14 button').first().click();
            cy.get('.btn.actionButton.createApp.ng-binding').click();
            // send an email
            var mailer = require('./../../../myVisitEli/mailer');
            mailer();
        }
    })
}); 