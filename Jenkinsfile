pipeline {
    agent any

    stages {
        stage('Running Tests') {
            steps {
                browserstack(credentialsId: 'd97c8285-563d-4e9f-8e41-ebffa498de57') {
                    // Run
                    sh 'npm install'
                    sh 'rm -rf ./reports || true'
		            sh 'npm run run:browser-stack'
                }
                browserStackReportPublisher 'automate'
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
                reportDir: './results',
                reportFiles: 'browserstack-cypress-report.html',
                reportName: 'HTML Report'
            ]
        }
    }
}
