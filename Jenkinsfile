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
		try {
                sh 'yarn cy:run-application-actions --browser ${browser} --headed'
		} catch (e) {
			echo "An error occurred: ${e}"
		}
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
