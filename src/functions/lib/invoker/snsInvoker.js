import AWS from "aws-sdk";

export default class SnsInvoker {
  constructor() {}

  type() { return "Sns"; }

  invoke(executionState, completed) {
    var sns = new AWS.SNS();

    // todo: get sns topic arn from serverless if possible
    sns.publish({
      TopicArn: 'arn:aws:sns:us-east-1:602437661913:lambda-benchmark-topic-snsSingleFunctionChain',
      //MessageStructure: 'json',
      Message: JSON.stringify({ "params": {}, "executionState" : executionState }),

    }, (err, data) => {
      if (completed) completed(err, data);
      if (err) console.log(err, err.stack); // an error occurred
      else console.log("data:" + data);  // successful response
    });


  }
}
