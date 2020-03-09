## West
* sam package --output-template-file out.yaml --s3-bucket ej-west-bucket --profile sd
* sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name aws-sdk --profile sd

## East
* sam package --output-template-file out.yaml --s3-bucket ej-dev --profile sd --region us-east-1
* sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name aws-sdk --profile sd --region us-east-1

## eu-central
* sam package --output-template-file out.yaml --s3-bucket ej-eu-central-bucket --profile sd --region eu-central-1
* sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name aws-sdk --profile sd --region cdeu-central-1

```bash
sam package --output-template-file out.yaml --s3-bucket ej-west-bucket --profile sd && \
sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name aws-sdk --profile sd && \
sam package --output-template-file out.yaml --s3-bucket ej-dev --profile sd --region us-east-1 && \
sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name aws-sdk --profile sd --region us-east-1 && \
sam package --output-template-file out.yaml --s3-bucket ej-eu-central-bucket --profile sd --region eu-central-1 && \
sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name aws-sdk --profile sd --region eu-central-1
```