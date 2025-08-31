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
                input message: 'Deliver'

            }
        }
    }
}