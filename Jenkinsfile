pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Load dependencies') {
            steps {
		sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
                git 'https://github.com/lucvnvc/cypress-with-typescript.git'

                // Run
                sh 'npx cypress run --browser ${browser} --headed'
            }
        }
        stage('Generate report') {
            steps {
                publishHTML (target : [allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'reports',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Reports',
                    reportTitles: 'Cypress Report'])
            }
        }
    }
}
