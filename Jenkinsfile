pipeline {
    agent any

    environment {
        APP_NAME      = 'daraz-clone'
        DOCKER_IMAGE  = "local-registry/${APP_NAME}:latest"
        SERVER_PORT   = '3000'
    }

    stages {
        stage('🧹 Workspace Cleanup') {
            steps {
                cleanWs() // Purana kharab data delete karne ki standard enterprise command
            }
        }

        stage('📥 Checkout Source Code') {
            steps {
                checkout scm // GitHub se code pull karne ki automatic secure command
            }
        }

        stage('📦 Install Dependencies') {
            steps {
                // Real Command: Saare software packages install karein gey
                sh 'npm install'
            }
        }

        stage('🧪 Run Real Test Cases') {
            steps {
                // Real Automation Test: Agar 1 bhi test case fail hua, pipeline yahi ruk jaye gi
                sh 'npm test'
            }
        }

        stage('🐳 Build Docker Container') {
            steps {
                // Real Docker Build: Code ka secure image banana
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('🚀 Server Deployment') {
            steps {
                // Real Deployment: Purane container ko mita kar naya live karna
                sh "docker stop ${APP_NAME} || true"
                sh "docker rm ${APP_NAME} || true"
                sh "docker run -d --name ${APP_NAME} -p ${SERVER_PORT}:3000 ${DOCKER_IMAGE}"
                
                echo "🎉 Website Successfully Deployed and Live on http://localhost:${SERVER_PORT}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
    }
}