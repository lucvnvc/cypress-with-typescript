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
                sh 'npm run delete:reports'
		        sh 'npm run ${runWith} --browser ${browser} --headed'
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
