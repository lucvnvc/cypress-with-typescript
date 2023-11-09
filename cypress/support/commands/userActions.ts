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
    cy.get('input[name="username"]').clear().type(user);
  }
  if (password) {
    cy.get('input[name="password"]').type(password);
  }
  cy.get('#btn-login').click();
});
