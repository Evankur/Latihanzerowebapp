import LoginPage from './zeroapp_page';
import SearchPage from './ZeroappSearch_page';
import feedbackPage from './Zeroappfeedback_page';
const{ Given, When, Then} =require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page',() =>{
    LoginPage.visit();
})

When('I submit to login',() =>{
    LoginPage.fillusername('username');
    LoginPage.fillpass('password');
    LoginPage.fillsign();
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
    SearchPage.Searchonly();
})
When('I click feedback',() =>{
    feedbackPage.feedbackonly();
    feedbackPage.feedbackclick();
})



