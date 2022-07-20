import * as AWS from 'aws-sdk';

/**
 * DynamoDBインスタンスを取得します。
 *
 * @returns DynamoDB
 */
export function getDynamoDB() {
  return new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
}
