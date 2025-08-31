pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Run') {
            steps {
                sh 'npm start'
             }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}