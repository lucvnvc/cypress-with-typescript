# Tech stack
- Cypress
- TypeScript
- Reporter: `cypress-mochawesome-reporter`

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

## How to debug
1. Using `stack trace`
2. Using `debugger`: Work well after then()

```
it('Click on Sign In', () => {

        cy.get('a[title="Sign In"]').then(($selectedElement) => {

            debugger;

            $selectedElement.get(0).click()

        })

    })
```

3. Using log: `cy.log()` or `console.log()`

4. Using `.debug()`: Need to dev tool open first
   
```
.debug() provides debugging information when Cypress hits the .debug() command
```
5. Using `.pause()`: The .pause() command stops cy commands from running and allows interaction with the application under test. Testers can then “resume” running all commands or choose to step through the “next” commands from the Command Log.

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

## Integration

#### BrowserStack

**Install dependencies:** `npm i browserstack-cypress-cli`

**Steps:**
1. Generate configuration file by `browserstack-cypress init`
2. Config file (reference to `browserstack.json`)

**Run**
* [Can refer to argument list](https://www.browserstack.com/docs/automate/cypress/cli-reference)

> Run with configuration on `browserstack.json` file
>
> `browserstack-cypress run -u <username> -k <access_key>`


> Run with a specific argument
>
> `browserstack-cypress run -u <username> -k <access_key> --browser "<browser_name@version:os_name>" --sync --specs <path_of_spec>`

## :star: Environment variables

**Option 1**: Set in configuration file `cypress.config.ts`
```
env: {
    login_url: '/login',
    products_url: '/products',
  }
```

**Option 2**: Create `cypress.env.json` file. Cypress will automatically check
```
{
  "host": "veronica.dev.local",
  "api_server": "http://localhost:8888/api/v1/"
}
```

**Option 3**: `CYPRESS_*` or `cypress_*`

**Option 4**: `--evn` pass in evn variables as options when using the CLI tool
```
cypress run --env host=kevin.dev.local,api_server=http://localhost:8888/api/v1
```

**Option 5**: Test configuration
```
describe(
  'test against Spanish content',
  {
    env: {
      language: 'es',
    },
  },
  () => {
    it('displays Spanish', () => {
      cy.visit(`https://docs.cypress.io/${Cypress.env('language')}/`)
      cy.contains('¿Por qué Cypress?')
    })
  }
)
```

> Prioritize by: cli >> cypress.env.json >> configuration file

## :boom: Important note

1. Using `prettier - code formatter` to format code
2. Using `yarn - package manager` to manage package
3. When declaring global a namespace then have to export it: `export {}`
4. Error `x is not a function with Cypress version > 10

> Solution:
>
> Modify `supportFile` in `cypress.config.ts` to `cypress/support/e2e.ts`

5. Using `serve` to serve a static site: `localhost:3000`
