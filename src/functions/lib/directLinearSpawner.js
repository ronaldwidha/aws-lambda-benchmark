import AWS from "aws-sdk";
import Spawner from "./spawner";
import Timekeeper from "./timekeeper";

export default class DirectLinearSpawner {
  constructor(jobId) {
    this.jobId = jobId;
  }

  fire(spawnTarget, completed) {
    this.spawnChild(-1, spawnTarget, completed);
  }

  spawnChild(currentSpawnIndex, spawnTarget, completed) {
    var completedCallback = completed;
    var timekeeper = new Timekeeper(this.jobId, currentSpawnIndex);

    if (currentSpawnIndex == -1) {
      timekeeper.startJob();
    }

    if (currentSpawnIndex < spawnTarget) {
      var newIndex = ++currentSpawnIndex;

      // make call to Lambda
      // get lambda name from serverless if possible
      console.log(`yo: invoking lambda ${newIndex}`);

      var lambda = new AWS.Lambda({
        region: "us-east-1"
      });

      lambda.invoke({
        FunctionName: 'lambda-benchmark-lambdachainlinear',
        Payload: JSON.stringify({ "jobId": this.jobId, "spawnIndex": newIndex, "spawnTarget": spawnTarget }),
        InvocationType: 'Event'
      }, (err, data) => {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log("data" + data);           // successful response

        if (completed) completed(err, data);

        if (currentSpawnIndex == spawnTarget) {
          timekeeper.endJob();
        }
      });
    }


  }
}
