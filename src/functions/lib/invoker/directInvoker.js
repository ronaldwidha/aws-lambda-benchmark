import AWS from "aws-sdk";

export default class DirectInvoker {
  constructor() {}

  type() { return "Direct"; }

  invoke(executionState, completed) {
    var lambda = new AWS.Lambda({
      //todo: get from serverless param
      region: "us-east-1"
    });

    lambda.invoke({
      FunctionName: 'lambda-benchmark-lambdachainlinear',
      Payload: JSON.stringify({ "executionState" : executionState }),
      InvocationType: "Event"
    }, (err, data) => {
      if (completed) completed(err, data);
      if (err) console.log(err, err.stack); // an error occurred
      else console.log("data:" + data);  // successful response
    });

  }
}
