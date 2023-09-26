describe('Login function', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Login with invalid user', () => {
    it('login with both user and password empty', () => {
      cy.login();
      cy.get('h3[data-test="error"]').should(
        'have.text',
        'Epic sadface: Username is required'
      );
    });

    it('login with valid user and password empty', () => {
      cy.login('standard_user');
      cy.get('h3[data-test="error"]').should(
        'have.text',
        'Epic sadface: Password is required'
      );
    });

    it('login with user and password are not correctly', () => {
      cy.login('standard_user1', 'secret_sauce1');
      cy.get('h3[data-test="error"]').should(
        'have.text',
        'Epic sadface: Username and password do not match any user in this service'
      );
    });
  });

  describe('Login with valid user', () => {
    it('verify login successfully with valid user', () => {
      cy.login('standard_user', 'secret_sauce');
      cy.url().should('contain', '/inventory.html');
    });
  });
});
