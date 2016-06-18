import Spawner from "./spawner";
import Timekeeper from "./timekeeper";

export default class LinearSpawner {
  constructor(jobId) {
    this.jobId = jobId;

  }

  start(spawnTarget) {
    this.spawnChild(0, spawnTarget);
  }

  spawnChild(currentSpawnIndex, spawnTarget) {
    var timekeeper = new Timekeeper(this.jobId, currentSpawnIndex);

    if (currentSpawnIndex == 0) {
      timekeeper.startJob();
    }

    if (currentSpawnIndex < spawnTarget) {
      var newIndex = currentSpawnIndex++;

      // make call to Lambda
      //var lambda = new AWS.Lambda() of type lambdaChainLinear

    }

    if (currentSpawnIndex == spawnTarget) {
      timekeeper.endJob();
    }
  }
}
