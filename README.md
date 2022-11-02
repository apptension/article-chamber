# Manage AWS ECS environment variables with Chamber

This is an example code that shows how to use environment variables on AWS ECS loaded from AWS SSM Parameter Store using
Chamber library.

It is a part of an article: **How to manage AWS ECS environment variables with Chamber?**

### Commands

**Run the local environment**:
```sh
docker-compose up
```

**Deploy infrastructure**:
```sh
cd infra
yarn build
cdk bootstrap
ENV_NAME=stage cdk deploy --all
```

**Destroy infrastructure**:
```sh
ENV_NAME=stage cdk destroy --all
```