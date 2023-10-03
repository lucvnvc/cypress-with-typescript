describe('My first test', () => {
  it('launch browser and search', () => {
    cy.visit('https://www.google.com');
    cy.get('[name="q"]').type('how to learn Cypress{enter}');
    cy.title().should('contain', 'how to learn Cypress');
  });
});
