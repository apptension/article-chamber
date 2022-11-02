import {Construct} from "constructs";
import {CfnOutput} from "aws-cdk-lib";
import {Vpc} from "aws-cdk-lib/aws-ec2";

export interface EnvVpcProps {
    envName: string;
}

export class EnvVpc extends Construct {
    vpc: Vpc;

    static getVpcOutputExportName(envName: string) {
        return `${envName}-vpc-arn`;
    }

    constructor(scope: Construct, id: string, props: EnvVpcProps) {
        super(scope, id);

        this.vpc = new Vpc(this, "VPC");

        new CfnOutput(this, "KmsKeyArnOutput", {
            exportName: EnvVpc.getVpcOutputExportName(props.envName),
            value: this.vpc.vpcArn,
        });
    }
}