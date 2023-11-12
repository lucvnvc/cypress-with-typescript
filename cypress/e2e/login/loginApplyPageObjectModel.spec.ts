import { User } from '../../setup/Setup';
import appointmentPage from '../../pages/AppointmentPage';
import loginPage from '../../pages/LoginPage';

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
      loginPage.login();
      loginPage.elements.lbError().should('have.text', ERROR_LOGIN_FAIL);
    });

    it('login with password empty', () => {
      loginPage.login('standard_user', undefined);
      loginPage.elements.lbError().should('have.text', ERROR_LOGIN_FAIL);
    });

    it('login with user empty', () => {
      loginPage.login(undefined, 'secret_sauce');
      loginPage.elements.lbError().should('have.text', ERROR_LOGIN_FAIL);
    });

    it('login with user and password are not correctly', () => {
      loginPage.login('standard_user1', 'secret_sauce1');
      loginPage.elements.lbError().should('have.text', ERROR_LOGIN_FAIL);
    });
  });

  describe('Login with valid credential', () => {
    it('verify login successfully with valid credential', () => {
      loginPage.login(user.username, user.password);
      appointmentPage.elements
        .lbTitle()
        .should('have.text', 'Make Appointment');
    });
  });
});
