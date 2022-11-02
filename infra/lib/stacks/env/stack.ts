import {App, Stack, StackProps} from "aws-cdk-lib";
import {KmsKey} from "./kms";
import {EnvVpc} from "./envVpc";
import {EcsCluster} from "./ecsCluster";

export interface EnvStackProps extends StackProps {
    envName: string;
}

export class EnvStack extends Stack {
    kmsKey: KmsKey;
    vpc: EnvVpc;
    cluster: EcsCluster;

    constructor(scope: App, id: string, props: EnvStackProps) {
        super(scope, id);

        this.kmsKey = new KmsKey(this, 'KMSKey', { envName: props.envName });
        this.vpc = new EnvVpc(this, 'VPC', { envName: props.envName });
        this.cluster = new EcsCluster(this, 'ServiceCluster', { envName: props.envName, vpc: this.vpc.vpc });
    }
}