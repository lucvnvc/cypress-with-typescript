import { User } from '../../environment/Setup';
import loginPage from '../../pages/LoginPage';
import productPage from '../../pages/ProductPage';

describe('Login function', () => {
  let user: User;
  const ERROR_USERNAME_REQUIRED: string = 'Epic sadface: Username is required';
  const ERROR_PASSWORD_REQUIRED: string = 'Epic sadface: Password is required';
  const ERROR_USERNAME_PASSWORD_NOT_MATCHED: string =
    'Epic sadface: Username and password do not match any user in this service';

  before(() => {
    cy.fixture('user.json').then(td => {
      user = td;
    });
  });
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Login with invalid user', () => {
    it('login with both user and password empty', () => {
      loginPage.login();
      loginPage.elements.lbError().should('have.text', ERROR_USERNAME_REQUIRED);
    });

    it('login with valid user and password empty', () => {
      loginPage.login('standard_user');
      loginPage.elements.lbError().should('have.text', ERROR_PASSWORD_REQUIRED);
    });

    it('login with user and password are not correctly', () => {
      loginPage.login('standard_user1', 'secret_sauce1');
      loginPage.elements
        .lbError()
        .should('have.text', ERROR_USERNAME_PASSWORD_NOT_MATCHED);
    });
  });

  describe('Login with valid user', () => {
    it.only('verify login successfully with valid user', () => {
      loginPage.login(user.username, user.password);
      expect(cy.getText(productPage.elements.lbTitle())).to.be.visible;
      // productPage.elements.lbTitle().should('not.be.visible');
    });
  });
});
