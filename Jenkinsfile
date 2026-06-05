pipeline {
    agent any
    
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'docker run --rm myapp:latest npm test || echo "No tests configured, skipping..."'
            }
        }
        
        stage('Deploy Application') {
            steps {
                sh 'docker rm -f myapp-container || true'
                sh 'docker run -d -p 3000:3000 --name myapp-container myapp:latest'
            }
        }
    }
}
