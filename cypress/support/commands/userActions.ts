declare namespace Cypress {
  interface Chainable {
    /**
     *
     * @param user user or id
     * @param password password
     * @example cy.login('user', 'password')
     */
    login(user?: string, password?: string): Chainable<Element>;

    /**
     *
     * @param selector
     * @example cy.getText('#element')
     */
    getText(selector: Chainable<Element>): Chainable<Element>;
  }
}

Cypress.Commands.add('login', (user: string, password: string) => {
  if (user) {
    cy.get('#user-name').clear().type(user);
  }
  if (password) {
    cy.get('#password').type(password);
  }
  cy.get('#login-button').click();
});

Cypress.Commands.add('getText', selector => {
  return selector.invoke('text').then($text => {
    return $text.trim();
  });
});
