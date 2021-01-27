import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

const DIST_PATH = 'dist'
const LAMBDA_FUNCTIONS_ROOT_PATH = `${DIST_PATH}/functions`

export class AwsCdkLambdaVersionSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const functionName = 'MyFunction'

    const uniqueVersionId = `${new Date().getTime()}`

    const fn = new lambda.Function(this, functionName, {
      functionName,
      description: `This lambda deployed at ${uniqueVersionId}`,
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(`${LAMBDA_FUNCTIONS_ROOT_PATH}/hoge`),
    })


    const version = new lambda.Version(this, `${functionName}-${uniqueVersionId}`, {
      lambda: fn,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    })

    new lambda.Alias(this, 'Dev-Alias', {
      aliasName: 'dev',
      version,
    })

    // NOTE: If you want to lock the version of prod, please uncomment the following and specify the version.
    // new lambda.Alias(this, 'Prod-Alias', {
    //   aliasName: 'prod',
    //   version: lambda.Version.fromVersionArn(this, 'Prod-Version', `${fn.functionArn}:3`),
    // })
  }
}
