# aws-cdk-lambda-version-sample

AWS CDK で lambda のバージョンを管理するサンプル

## Quick Start

```shell
$ yarn
$ yarn cdk bootstrap
$ yarn build
$ yarn cdk synth
$ yarn cdk deploy
```

## Approach

1. Release with a unique version for each deployment. 

```ts
const uniqueVersionId = `${new Date().getTime()}`

new lambda.Version(this, `${functionName}-${uniqueVersionId}`, {
  lambda: fn,
})
```

2. Set the version removal policy to retain.

```ts
const uniqueVersionId = `${new Date().getTime()}`

new lambda.Version(this, `${functionName}-${uniqueVersionId}`, {
  lambda: fn,
  removalPolicy: cdk.RemovalPolicy.RETAIN,
})
```

3.  Force lambda to make diff to occur.

```ts
const uniqueVersionId = `${new Date().getTime()}`

const fn = new lambda.Function(this, functionName, {
  functionName,
  description: `This lambda deployed at ${uniqueVersionId}`,
  runtime: lambda.Runtime.NODEJS_12_X,
  handler: 'index.handler',
  code: lambda.Code.fromAsset('functions/hoge'),
})

new lambda.Version(this, `${functionName}-${uniqueVersionId}`, {
  lambda: fn,
  removalPolicy: cdk.RemovalPolicy.RETAIN,
})
```
