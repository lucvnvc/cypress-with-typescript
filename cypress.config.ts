import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://katalon-demo-cura.herokuapp.com',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,
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
      runMode: 2,
      openMode: 0,
    },
    env: {},
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
