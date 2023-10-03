describe('My first test', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com');
  });
  it('launch browser and search', () => {
    cy.get('[name="q"]').type('how to learn Cypress{enter}');
    cy.title().should('contain', 'how to learn Cypress');
  });

  it('attach screenshots when running tests fail', () => {
    cy.get('[name="q"]').type('Cypress with TypeScript{enter}');
    cy.url().should('contain', 'Cypress with TypeScript');
  });
});
