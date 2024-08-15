const{ Given, When, Then} =require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page',() =>{
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.url().should('include','login.html')
})

When('I submit to login',() =>{
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click();
})

Then('I should go to homepage',() =>{
    cy.get('#account_summary_tab > a').should('be.visible');
     
})
When('I click zerobank',() =>{
    cy.get('.brand').click();
    cy.get('#onlineBankingMenu > div > strong').should('be.visible');
})
Then('I use setting',() =>{
    cy.get(':nth-child(2) > .dropdown-toggle').click();
    cy.get('#help_link').click();
})
When('I Help topic 1',() =>{
    cy.get('.questions > :nth-child(1) > a').click()
    cy.get('.span8 > h3').should('be.visible');
})
When('I Help topic 2',() =>{
    cy.get('.questions > :nth-child(2) > a').click()
    cy.get('.span8 > h3').should('be.visible');
})
When('I Help topic 3',() =>{
    cy.get('.questions > :nth-child(3) > a').click()
    cy.get('.span8 > h3').should('be.visible');
})
When('I click zerobank again',() =>{
    cy.get('.brand').click();
    cy.get('#onlineBankingMenu > div > strong').should('be.visible');
})
When('I click search',() =>{
    cy.get('#searchTerm').click();
    cy.get('#searchTerm').type('bank{enter}');
    cy.get(':nth-child(4) > :nth-child(1) > a').should('have.attr','href','/index.html')
    cy.get(':nth-child(4) > :nth-child(2) > a').should('have.attr','href','/online-banking.html')
})


