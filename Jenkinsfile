pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Run') {
            steps {
                input message: 'Build'
             }
        }
        stage('Deliver') {
            steps {
                sh 'npm start'
                   }
        }
    }
}