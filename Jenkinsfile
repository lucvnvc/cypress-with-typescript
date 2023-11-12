pipeline {
    agent any

    stages {
        stage('E2E Tests') {
            steps {
                browserstack(credentialsId: 'd97c8285-563d-4e9f-8e41-ebffa498de57') {
                    // Run
                    sh 'npm install'
                    sh 'rm -rf ./reports || true'
		            sh './node_modules/.bin/browserstack-cypress run --sync --specs ./cypress/e2e/login/loginApplyApplicationActions.spec.ts'
                }
            }
        }
    }

    // stage('Install BrowserStack CLI') {
    //     steps {
    //         sh 'npm install -g browserstack-cypress-cli'
    //     }
    // }

    // // Run Cypress tests on BrowserStack
    // stage('Run Cypress tests on BrowserStack') {
    //     steps {
    //         browserstack 'Cypress' {
    //             // Specify your Cypress test files to run
    //             spec 'cypress/integration/**/*.spec.js'

    //             // Specify the BrowserStack capabilities
    //             capabilities {
    //                 browser 'chrome'
    //                 browserVersion 'latest'
    //                 operatingSystem 'macOS'
    //             }
    //         }
    //     }
    // }
    post {
        always {
            echo 'HTML report'
            publishHTML target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: './reports',
                reportFiles: 'index.html',
                reportName: 'Cypress Report'
            ]
            echo 'BrowserStack report'
            browserStackReportPublisher 'automate'
        }
    }
}
