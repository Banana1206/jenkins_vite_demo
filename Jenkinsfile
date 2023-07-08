pipeline {
    agent any

    tools{
        nodejs "nodejs"
    }
    
    stage{

        stage("install"){
            steps{
                sh 'npm install'
            }
        }

        stage("build"){
            steps{
                sh 'npm run build'
            }
        }
    }

    post{
        success{
            echo "SUCCESS"
        }
        failure{
            echo "FAILED"
        }
    }
    
}