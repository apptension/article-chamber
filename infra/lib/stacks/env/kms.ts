import {Construct} from "constructs";
import {Key} from "aws-cdk-lib/aws-kms";
import {AccountRootPrincipal, PolicyStatement} from "aws-cdk-lib/aws-iam";
import {CfnOutput} from "aws-cdk-lib";

export interface KmsKeyProps {
    envName: string;
}

export class KmsKey extends Construct {
    key: Key;

    static getKeyAlias(envName: string) {
        return `${envName}-env-kms-key`;
    }

    static getKmsOutputExportName(envName: string) {
        return `${envName}-kms-key-arn`;
    }

    constructor(scope: Construct, id: string, props: KmsKeyProps) {
        super(scope, id);

        this.key = new Key(this, "Key", {
            alias: `alias/${KmsKey.getKeyAlias(props.envName)}`
        });

        this.key.addToResourcePolicy(new PolicyStatement({
            actions: [
                "kms:Encrypt",
                "kms:Decrypt",
            ],
            principals: [new AccountRootPrincipal()],
            resources: ["*"],
        }));

        new CfnOutput(this, "KmsKeyArnOutput", {
            exportName: KmsKey.getKmsOutputExportName(props.envName),
            value: this.key.keyArn,
        })
    }
}