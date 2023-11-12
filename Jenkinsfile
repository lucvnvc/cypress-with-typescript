pipeline {
    agent any

    stages {
        stage('E2E Tests') {
            steps {
                browserstack(credentialsId: 'd97c8285-563d-4e9f-8e41-ebffa498de57') {
                    // Run
                    sh 'npm install'
                    sh 'rm -rf ./reports || true'
		            sh 'npm run run:browser-stack'
                }
            }
        }
    }

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
        }
        always {
            echo 'BrowserStack report'
            browserStackReportPublisher 'automate'
        }
    }
}
