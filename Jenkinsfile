pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    stages {
        stage('E2E Tests') {
            when {
                expression {params.runon=='browserStack'}
            }
            steps {
                browserstack(credentialsId: '07beebc5-e1b9-4c61-ae18-8f0eefb6c13c') {
                    // Run
                    sh 'npm install'
                    sh 'npm run delete:reports'
		            sh 'npm run run:browser-stack'
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
            echo 'Generate report'
            publishHTML target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: './reports',
                reportFiles: 'index.html',
                reportName: 'Cypress Report'
            ]
        }
    }
}
