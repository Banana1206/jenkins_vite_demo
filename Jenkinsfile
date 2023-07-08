pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage("Install") {
            steps {
                sh 'npm install'
            }
        }

        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo "SUCCESS"
        }
        failure {
            echo "FAILED"
        }
    }
}
