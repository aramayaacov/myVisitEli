class basePage {
    getWithoutAccount = (()=>{
        return cy.get('.link-big > a');
    })
    
    getContinueWithoutAccount = (()=>{
        return cy.get('.highlighted > a');
    })

    getProvider = (()=>{
        return cy.get(':nth-child(5) > .logo > img');
    })

    getBtnClass = (()=>{
        return cy.get('.btn');
    })

    generalVisibleAssert = ((elementToCheck)=>{
        return cy.get(elementToCheck).should('be.visible');
    })

    getUrlOfWebsite=(() => {
         return 'https://myvisit.com/';

    })
}
export default basePage;
