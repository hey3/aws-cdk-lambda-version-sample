import {　expect as expectCDK, countResources　} from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as AwsCdkLambdaVersionSample from '../lib/aws-cdk-lambda-version-sample-stack'

describe('Sample Stack', () => {
  const app = new cdk.App()
  // WHEN
  const stack = new AwsCdkLambdaVersionSample.AwsCdkLambdaVersionSampleStack(app, 'MyTestStack')
  // THEN
  it('should have lambda resource', () => {
    expectCDK(stack).to(countResources('AWS::Lambda::Function', 1))
  })
  it('should have lambda role resource', () => {
    expectCDK(stack).to(countResources('AWS::IAM::Role', 1))
  })
  it('should have lambda version resource', () => {
    expectCDK(stack).to(countResources('AWS::Lambda::Version', 1))
  })
  it('should have lambda alias resource', () => {
    expectCDK(stack).to(countResources('AWS::Lambda::Alias', 2))
  })
})
