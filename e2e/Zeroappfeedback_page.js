const NAME ='#name';
const MAIL ='#email';
const SUB ='#subject';
const COM ='#comment';
const sendmassage ='Send Message';

class feedbackpage{
    static feedbackonly(){

    cy.get(NAME).should('be.visible','Your Name')
    cy.get(NAME).type('Evan')
    cy.get(MAIL).should('be.visible','Your email address')
    cy.get(MAIL).type('Evan@mail')
    cy.get(SUB).should('be.visible','Subject')
    cy.get(SUB).type('masalah123')
    cy.get(COM).should('be.visible','Type your questions here...')
    cy.get(COM).type('WANT WANT WANT WANT WANT')
}
    static feedbackclick(){
        cy.contains(sendmassage).click()
}
}
export default feedbackpage;