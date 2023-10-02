import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotsFolder: './reports/',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: './reports/',
      charts: true,
      reportPageTitle: 'Cypress report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    specPattern: '**/*.spec.ts',
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
