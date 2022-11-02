import {Construct} from "constructs";
import {CfnOutput} from "aws-cdk-lib";
import {Vpc} from "aws-cdk-lib/aws-ec2";
import {Cluster} from "aws-cdk-lib/aws-ecs";

export interface EcsClusterProps {
    envName: string;
    vpc: Vpc
}

export class EcsCluster extends Construct {
    cluster: Cluster;

    static getEcsClusterOutputExportName(envName: string) {
        return `${envName}-ecs-cluster-arn`;
    }

    constructor(scope: Construct, id: string, props: EcsClusterProps) {
        super(scope, id);

        this.cluster = new Cluster(this, "ServiceCluster", {
            vpc: props.vpc
        });

        new CfnOutput(this, "KmsKeyArnOutput", {
            exportName: EcsCluster.getEcsClusterOutputExportName(props.envName),
            value: this.cluster.clusterArn,
        });
    }
}