# CI/CD Pipeline to Elastic Beanstalk (CodePipeline + CodeBuild)

This project demonstrates a continuous delivery pipeline that automatically builds and deploys a simple Node.js web application whenever code is pushed to GitHub.

## Architecture
GitHub (Source) → AWS CodePipeline → AWS CodeBuild → Manual Approval → AWS Elastic Beanstalk (Deploy)

## AWS Services Used
- **AWS CodePipeline**: Orchestrates the CI/CD workflow
- **AWS CodeBuild**: Installs dependencies and runs tests using `buildspec.yml`
- **AWS Elastic Beanstalk**: Hosts the Node.js web application and performs deployments
- **Amazon S3**: Stores pipeline artifacts (managed by CodePipeline)
- **IAM**: Service roles for pipeline + build permissions

## How It Works
1. A commit is pushed to the `main` branch in GitHub
2. CodePipeline detects the change and triggers the pipeline
3. CodeBuild runs `npm ci` and `npm test`
4. (Optional) Manual approval gate requires confirmation
5. Elastic Beanstalk deploys the updated application version

## Local Run
```bash
npm install
npm start
# open http://localhost:8080
