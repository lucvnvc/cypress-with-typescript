import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 5000,
    video: false,
    screenshotsFolder: './reports/screenshots',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: './reports/',
      charts: true,
      reportPageTitle: 'Cypress report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    pageLoadTimeout: 15000,
    execTimeout: 10000,
    specPattern: '**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    experimentalWebKitSupport: false,

    retries: {
      runMode: 0,
      openMode: 0,
    },
    env: {
      qc: 'https://web-ninjamart-qa-bo.apac.positivethinking.tech/',
      uat: 'https://web-ninjamart-qa-bo.apac.positivethinking.tech/',
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
