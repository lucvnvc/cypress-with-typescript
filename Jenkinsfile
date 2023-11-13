pipeline {
    agent any

    stages {
        stage('Running Tests') {
            steps {
                browserstack(credentialsId: 'd97c8285-563d-4e9f-8e41-ebffa498de57') {
                    // Run
                    sh 'npm install'
                    sh 'rm -rf ./reports || true'
		            sh './node_modules/.bin/browserstack-cypress run --sync --build-name $BROWSERSTACK_BUILD_NAME --specs ./cypress/e2e/login/loginApplyPageObjectModel.spec.ts'
                }
                browserStackReportPublisher 'automate'
            }
        }
    }
}
