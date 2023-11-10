pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    stages {
        stage('E2E Tests') {
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
