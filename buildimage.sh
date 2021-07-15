#!/bin/bash
ENV=$1
if [ -z "$ENV" ]; then
  ENV='dev'
fi

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 795828529321.dkr.ecr.us-east-1.amazonaws.com

GIT_REV=$(git rev-parse --short HEAD)

echo git revision $GIT_REV

# replace version in index.ts
sed -ie "s/VERSION =.*/VERSION = '${GIT_REV}';/" index.ts

docker build -t sample-service .

DOCKER_REPO=$AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

docker tag sample-service:latest $DOCKER_REPO/sample-service:latest-$ENV
docker tag sample-service:latest $DOCKER_REPO/sample-service:$GIT_REV

docker push $DOCKER_REPO/sample-service:$GIT_REV

docker push $DOCKER_REPO/sample-service:latest-$ENV

echo Done!!!
