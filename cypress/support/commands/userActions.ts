declare namespace Cypress {
  interface Chainable {
    /**
     *
     * @param user user or id
     * @param password password
     * @example cy.login('user', 'password')
     */
    login(user?: string, password?: string): void;
  }
}

Cypress.Commands.add('login', (user, password) => {
  if (user) {
    cy.get('#user-name').clear().type(user);
  }
  if (password) {
    cy.get('#password').type(password);
  }
  cy.get('#login-button').click();
});
