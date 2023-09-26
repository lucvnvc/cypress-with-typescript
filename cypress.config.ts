import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 5000,
    video: false,
    videosFolder: './output/videos',
    screenshotsFolder: './output/screenshots',
    pageLoadTimeout: 15000,
    execTimeout: 10000,
    specPattern: '**/*.cy.ts',
    supportFile: false,
    experimentalWebKitSupport: false,

    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      qc: 'https://web-ninjamart-qa-bo.apac.positivethinking.tech/',
      uat: 'https://web-ninjamart-qa-bo.apac.positivethinking.tech/',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
