#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { AwsCdkLambdaVersionSampleStack } from '../lib/aws-cdk-lambda-version-sample-stack'

const app = new cdk.App()
new AwsCdkLambdaVersionSampleStack(app, 'AwsCdkLambdaVersionSampleStack')
