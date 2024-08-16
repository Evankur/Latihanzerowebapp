
const SEARCH='#searchTerm';

class SearchPage{
    static Searchonly(){
        cy.get(SEARCH).click();
        cy.get(SEARCH).type('bank{enter}');

        cy.get(':nth-child(4) > :nth-child(1) > a').should('have.attr','href','/index.html')
        cy.get(':nth-child(4) > :nth-child(2) > a').should('have.attr','href','/online-banking.html')
        cy.get(':nth-child(4) > :nth-child(2) > a').click()
        cy.get('#feedback').click()
        cy.get('#feedback-title').should('be.visible')
    }
}
export default SearchPage;