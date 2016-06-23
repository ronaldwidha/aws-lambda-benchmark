import Promise from "bluebird";
import Timekeeper from "../timekeeper";

export default class LinearExecutor {
  constructor(invoker) {
    this.invoker = Promise.promisifyAll(invoker);
    this.timekeeper = new Timekeeper();
  }

  type() { return "Linear"; }

  start(jobId, spawnTarget, completed) {
    this.next({
      jobId: jobId,
      currentSpawnIndex: -1,
      spawnTarget: spawnTarget,
      executorType: this.type(),
      invokerType: this.invoker.type()
    }, completed);
  }

  next(executionState, completed) {
    var jobId = executionState.jobId;
    var currentSpawnIndex = executionState.currentSpawnIndex;
    var spawnTarget = executionState.spawnTarget;
    var executorType = executionState.executorType;
    var invokerType = executionState.invokerType;
    //var completed = eval(executionState.completed); //todo: not sure if this is going to work

    if (currentSpawnIndex == -1) {
      this.timekeeper.startJob();
    }

    if (currentSpawnIndex < spawnTarget) {
      var newIndex = ++currentSpawnIndex;

      // make call to Lambda
      // get lambda name from serverless if possible
      console.log(`yo: invoking lambda ${newIndex}`);
      console.log(this.invoker);
      console.log(this.invoker.invoke);
      console.log(this.invoker.invokeAsync);
      this.invoker.invokeAsync({
        "jobId": jobId,
        "currentSpawnIndex" : newIndex,
        "spawnTarget" : spawnTarget,
        "executorType": executorType,
        "invokerType": invokerType
      })
        .then((err, data) => {
          if (currentSpawnIndex == spawnTarget) this.timekeeper.endJob();
          if (completed) completed(err, data);
        });
    }
  }
}
