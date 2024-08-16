const URL ='http://zero.webappsecurity.com/login.html';
const USERNAME ='#user_login';
const PASSWORD ='#user_password';
const SIGNIN ='Sign in';

class LoginPage{
    static visit(){
        cy.visit(URL);
    }
    static fillusername(username){
        cy.get(USERNAME).type(username);
    }
    static fillpass(password){
        cy.get(PASSWORD).type(password);
    }
    static fillsign(){
        cy.contains(SIGNIN).click();
    }
}
export default LoginPage;