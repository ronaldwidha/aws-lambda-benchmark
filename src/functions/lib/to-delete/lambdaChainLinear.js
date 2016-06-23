import Timekeeper from "./timekeeper";
import Promise from "bluebird";
var DirectLinearSpawner = Promise.promisifyAll(require("./directLinearSpawner"));

class LambdaChainLinear {
  constructor(jobid, spawnIndex, spawnTarget, invokeMethod) {
    super();
    this.jobid = jobid;
    this.spawnIndex = spawnIndex;
    this.spawnTarget = spawnTarget;
    this.invokeMethod = invokeMethod;
    this.spawner = new DirectLinearSpawner(jobId);
    this.timekeeper = new Timekeeper(jobId, spawnIndex);
  }

  invoke() {

    this.timekeeper.startFunction();
    this.timekeeper.startCompute();

    this.computeTask.compute()
      .then( () => {

        this.timekeeper.endCompute();
        this.timekeeper.startSpawningNext();

        this.spawner.spawnChild(this.spawnIndex, spawnTarget)
          .then( (spawned) => {

            this.timekeeper.endSpawningNext(spawned);
            this.timekeeper.endFunction();

          });
      });
  }
}
