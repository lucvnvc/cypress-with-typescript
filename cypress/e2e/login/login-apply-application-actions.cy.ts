import { User } from '../../environment/Setup';

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
      cy.login();
      cy.get('h3[data-test="error"]').should(
        'have.text',
        ERROR_USERNAME_REQUIRED
      );
    });

    it('login with valid user and password empty', () => {
      cy.login('standard_user');
      cy.get('h3[data-test="error"]').should(
        'have.text',
        ERROR_PASSWORD_REQUIRED
      );
    });

    it('login with user and password are not correctly', () => {
      cy.login('standard_user1', 'secret_sauce1');
      cy.get('h3[data-test="error"]').should(
        'have.text',
        ERROR_USERNAME_PASSWORD_NOT_MATCHED
      );
    });
  });

  describe('Login with valid user', () => {
    it('verify login successfully with valid user', () => {
      cy.login(user.username, user.password);
      cy.url().should('contain', '/inventory.html');
    });
  });
});
