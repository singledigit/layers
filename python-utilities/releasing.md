## West
* sam package --output-template-file out.yaml --s3-bucket ej-west-bucket --profile sd-us-west-2
* sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name python-utilities --profile sd-us-west-2

## East
* sam package --output-template-file out.yaml --s3-bucket ej-dev --profile sd-us-east-1
* sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name python-utilities --profile sd-us-east-1

## eu-central
* sam package --output-template-file out.yaml --s3-bucket ej-eu-central-bucket --profile sd-eu-central-1
* sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name python-utilities --profile sd-eu-central-1

```bash
sam package --output-template-file out.yaml --s3-bucket ej-west-bucket --profile sd-us-west-2 && \
sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name python-utilities --profile sd-us-west-2 && \
sam package --output-template-file out.yaml --s3-bucket ej-dev --profile sd-us-east-1 && \
sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name python-utilities --profile sd-us-east-1 && \
sam package --output-template-file out.yaml --s3-bucket ej-eu-central-bucket --profile sd-eu-central-1 && \
sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name python-utilities --profile sd-eu-central-1
```