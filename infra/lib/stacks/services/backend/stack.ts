import {App, Stack, StackProps} from "aws-cdk-lib";
import {ApplicationLoadBalancedFargateService} from "aws-cdk-lib/aws-ecs-patterns";
import {Cluster, ContainerImage} from "aws-cdk-lib/aws-ecs";

export interface EnvStackProps extends StackProps {
    envName: string;
    cluster: Cluster;
}

export class BackendServiceStack extends Stack {
    service: ApplicationLoadBalancedFargateService

    constructor(scope: App, id: string, props: EnvStackProps) {
        super(scope, id);

        this.service = new ApplicationLoadBalancedFargateService(this, "BackendFargateService", {
            cluster: props.cluster,
            taskImageOptions: { image: ContainerImage.fromAsset('../services/backend') },
        });
    }
}