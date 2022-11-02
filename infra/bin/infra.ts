#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {EnvStack} from '../lib/stacks/env/stack';
import {BackendServiceStack} from "../lib/stacks/services/backend/stack";

const ENV_NAME = process.env.ENV_NAME;

if (!ENV_NAME) {
    throw new Error("ENV_NAME not defined");
}

const app = new cdk.App();

const envStack = new EnvStack(app, `EnvStack-${ENV_NAME}`, { envName: ENV_NAME });

new BackendServiceStack(app, `BackendStack-${ENV_NAME}`, { envName: ENV_NAME, cluster: envStack.cluster.cluster})