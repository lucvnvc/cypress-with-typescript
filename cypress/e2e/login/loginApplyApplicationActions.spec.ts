import { User } from '../../environment/Setup';

describe('Login function', () => {
  let user: User;
  const ERROR_LOGIN_FAIL: string =
    'Login failed! Please ensure the username and password are valid.';

  before(() => {
    cy.fixture('user.json').then(td => {
      user = td;
    });
  });
  beforeEach(() => {
    cy.visit('/profile.php#login');
  });

  describe('Login with invalid credential', () => {
    it('login with both user and password empty', () => {
      cy.login();
      cy.get('p[class="lead text-danger"]').should(
        'have.text',
        ERROR_LOGIN_FAIL
      );
    });

    it('login with password empty', () => {
      cy.login('standard_user', undefined);
      cy.get('p[class="lead text-danger"]').should(
        'have.text',
        ERROR_LOGIN_FAIL
      );
    });

    it('login with user empty', () => {
      cy.login(undefined, 'secret_sauce');
      cy.get('p[class="lead text-danger"]').should(
        'have.text',
        ERROR_LOGIN_FAIL
      );
    });

    it('login with user and password are not correctly', () => {
      cy.login('standard_user1', 'secret_sauce1');
      cy.get('p[class="lead text-danger"]').should(
        'have.text',
        ERROR_LOGIN_FAIL
      );
    });
  });

  describe('Login with valid credential', () => {
    it('verify login successfully with valid user and password', () => {
      cy.login(user.username, user.password);
      cy.url().should('contain', '#appointment');
    });
  });
});
