pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Build') {
            steps {
                input message: 'Build'
             }
        }
        stage('Deliver') {
            steps {
                sh 'npm start'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}