pipeline {
    agent any

    environment {
    	NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

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
