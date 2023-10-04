describe('Environment variables', () => {
  it('Get env information', () => {
    cy.log('Cypress env', Cypress.env());
    cy.log('qc', Cypress.env('qc'));
    cy.log('uat', Cypress.env('uat'));
  });

  describe(
    'environment in test configuration',
    {
      env: {
        qc: 'cypress.io',
      },
    },
    () => {
      it('get env information in test configuration', () => {
        cy.log('Cypress env', Cypress.env());
        cy.log('qc', Cypress.env('qc'));
        cy.log('uat', Cypress.env('uat'));
      });
    }
  );
});
