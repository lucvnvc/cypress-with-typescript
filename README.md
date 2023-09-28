# Tech stack
- Cypress
- TypeScript
- Reporter: `cypress-mochawesome-reporter`
#
## Setting Up

1. Create NodeJS project: `npm init -y`
2. Install dependencies: `npm i cypress typescript cypress-mochawesome-reporter`
3. Create `tsconfig.ts` file: `tsc --init`
4. Config `TypeScript`

```
{
  "compilerOptions": {
    "baseUrl": "../node_modules",
    "module": "commonjs",
    "target": "ES5",
    "lib": ["dom", "ES5"],
    "types": ["cypress", "node", "cypress-mochawesome-reporter"],
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true
  },
  "include": ["**/*.ts"]
}
```
#
## Reporter: cypress-mochawesome-reporter

**Steps**
1. Add dependencies `yarn add -D cypress-mochawesome-reporter`
2. Add types `cypress-mochawesome-reporter` in `tsconfig.json` and file
3. Config in `cypress.config.ts`

```
reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: './reports/',
      charts: true,
      reportPageTitle: 'Cypress report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
```
#
### Important note

1. Using `prettier - code formatter` to format code
2. Using `yarn - package manager` to manage package
3. When declare global an namespace then have to export it `export {}`
4. Error `x is not a function` with Cypress version > 10

> Solution:
>
> Modify `supportFile` in `cypress.config.ts` to `cypress/support/e2e.ts`

5. Using `serve` to serve a static site: `localhost:3000`