pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Load dependencies') {
            steps {
		sh 'yarn'
            }
        }
        stage('E2E Tests') {
            steps {
                git 'https://github.com/lucvnvc/cypress-with-typescript.git'

                // Run
		        sh 'yarn ${runWith} --browser ${browser} --headed'
            }
        }
        stage('Generate report') {
            steps {
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
}
