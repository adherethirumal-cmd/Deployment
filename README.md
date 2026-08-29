# 🚀 Azure DevOps YAML CI Pipeline with Kubernetes Deployment

## 📌 Project Overview

This project demonstrates the implementation of a **Continuous Integration (CI) pipeline using Azure DevOps YAML** for a web application stored in a GitHub repository.

The CI pipeline automatically retrieves the source code, validates the repository contents, packages the required application files, and publishes the generated package as a build artifact.

As part of the project, a **Release pipeline was configured to deploy the application to Kubernetes**. The CI stage was completed successfully, while the Kubernetes deployment encountered configuration and deployment-related issues during the Release stage.

This project provided practical hands-on experience with **Azure DevOps YAML pipelines, build artifacts, Release pipelines, Docker, Kubernetes manifests, service connections, and deployment troubleshooting**.

---

## 🎯 Objectives

* Integrate GitHub with Azure DevOps
* Create a YAML-based CI pipeline
* Automate source-code validation
* Package application files
* Generate and publish build artifacts
* Understand Azure DevOps Release pipelines
* Prepare the application for Kubernetes deployment
* Work with Kubernetes Deployment and Service manifests
* Understand Azure DevOps service connections
* Troubleshoot deployment issues
* Gain practical CI/CD experience

---

## 🏗️ Architecture

```text
GitHub Repository
        ↓
Azure DevOps YAML CI Pipeline
        ↓
Source Checkout
        ↓
Repository Validation
        ↓
Application Packaging
        ↓
Build Artifact
        ↓
Azure DevOps Release Pipeline
        ↓
Kubernetes Deployment
```

---

## 🛠️ Technologies Used

* Git
* GitHub
* Azure DevOps
* Azure Pipelines
* YAML
* Docker
* Kubernetes
* Azure
* HTML
* CSS
* JavaScript
* Linux-based Microsoft-hosted agent

---

## 📂 Project Structure

```text
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── deployment.yaml
├── service.yaml
├── azure-pipelines.yml
└── README.md
```

---

## ⚙️ Methodology

### 1. Source Code Management

The web application source code was maintained in a GitHub repository.

The repository contained the application files along with Docker and Kubernetes configuration files.

---

### 2. GitHub Integration

The GitHub repository was connected with Azure DevOps to allow the pipeline to retrieve the application source code.

---

### 3. YAML CI Pipeline

A YAML-based Azure DevOps pipeline was created for the Continuous Integration process.

The pipeline performs the following operations:

* Retrieves the source code
* Displays and validates repository contents
* Selects the required application files
* Copies the files to the artifact staging directory
* Publishes the generated build artifact

---

### 4. Build Artifact

The CI pipeline successfully generated and published a build artifact containing the required application files.

The artifact was intended to be used as an input for the subsequent Release/Deployment stage.

---

### 5. Kubernetes Configuration

Kubernetes configuration files were prepared for deploying the web application.

#### `deployment.yaml`

Defines the Kubernetes Deployment configuration for running the application container.

#### `service.yaml`

Defines the Kubernetes Service configuration for exposing the application.

---

### 6. Release Pipeline

An Azure DevOps Release pipeline was configured to consume the build artifact and perform the Kubernetes deployment.

The Release stage encountered deployment-related errors during implementation.

The errors were investigated by checking:

* Kubernetes configuration
* Manifest file paths
* Azure DevOps service connections
* Kubernetes cluster configuration
* Deployment task configuration
* Pipeline variables and artifact locations

---

## 🔄 Pipeline Flow

```text
                CI
                ↓
GitHub → Azure DevOps YAML Pipeline
                ↓
        Source Checkout
                ↓
        Validate Files
                ↓
      Package Application
                ↓
        Publish Artifact
                ↓
               CD
                ↓
       Release Pipeline error
      
```

---

## 📊 Results

### ✅ CI Stage — Successful

* GitHub integration completed
* YAML CI pipeline successfully executed
* Source files successfully processed
* Application files successfully packaged
* Build artifact successfully generated
* Build artifact successfully published

### ⚠️ Release Stage — Deployment Issue

* Release pipeline was configured
* Kubernetes deployment was attempted
* Kubernetes manifests were prepared
* Deployment-related errors were encountered
* Manifest paths and service-connection configuration were investigated
* Kubernetes deployment was not successfully completed

---

## 📸 Screenshots

### Azure DevOps YAML Pipeline

![YAML Pipeline]<img width="1912" height="966" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/d9f5ddb5-0413-4e42-b08e-b529876ae2bd" />


### Successful CI Pipeline

![CI Pipeline Success]<img width="1917" height="965" alt="image" src="https://github.com/user-attachments/assets/b5eb9b11-7b91-4667-9e87-54a3a5a02a97" />

### Build Logs

![Build Logs]<img width="1911" height="967" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/3d5662c0-ea91-4f55-a7a6-c6bebe78d3a2" />


### Published Build Artifact

![Build Artifact]<img width="1917" height="965" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/b9ecd01b-31fe-45a9-8286-e545aec54209" />


### Azure Repository

![GitHub Repository]<img width="1907" height="792" alt="Screenshot (1)" src="https://github.com/user-attachments/assets/8441f7a4-822a-4c2a-b7be-72155aa24da4" />


### Kubernetes Manifest

![Kubernetes Manifest] <img width="1916" height="962" alt="image" src="https://github.com/user-attachments/assets/a9ef592c-452a-4383-8cb9-945658c9ef5b" />

### Release Pipeline Error 

![Release Pipeline] <img width="1911" height="967" alt="image" src="https://github.com/user-attachments/assets/ba1a0d1f-dc58-4f46-b108-fe55f468c442" />



## 🧠 Key Learnings

Through this project, I gained practical experience with:

* Continuous Integration
* Azure DevOps YAML pipelines
* GitHub integration
* Build automation
* Build artifact management
* Azure DevOps Release pipelines
* Docker concepts
* Kubernetes Deployment manifests
* Kubernetes Service manifests
* Azure DevOps service connections
* Kubernetes deployment configuration

## 🚧 Deployment Status

**CI:** ✅ Successfully completed

**Build Artifact:** ✅ Successfully generated and published

**Release Pipeline:** ⚠️ Configured and executed, but deployment encountered errors

**Kubernetes Hosting:** ❌ Not completed

The project demonstrates the complete workflow from **source-code integration and CI automation through artifact generation and attempted Kubernetes deployment**, including practical troubleshooting of deployment issues.

---

## 🚀 Future Improvements

* Resolve Kubernetes deployment configuration issues
* Complete automated Kubernetes deployment
* Build Docker images automatically through the pipeline
* Push Docker images to Azure Container Registry
* Implement Continuous Deployment
* Add automated application testing
* Add security scanning
* Add monitoring and logging
* Provision infrastructure using Terraform

---

## 👨‍💻 Project Outcome

This project provided hands-on experience in building a **YAML-based CI pipeline using Azure DevOps**, generating build artifacts, configuring a Release pipeline, preparing Kubernetes deployment manifests, and troubleshooting real-world deployment issues.

The project demonstrates practical understanding of the **CI/CD workflow and cloud deployment process**, including both successful implementation and troubleshooting of failed deployment stages.
