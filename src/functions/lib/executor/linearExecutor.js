import Timekeeper from "../timekeeper";

export default class LinearExecutor {
  constructor(invoker) {
    this.invoker = invoker;
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

    var newIndex = ++currentSpawnIndex;

    if (newIndex < spawnTarget) {
      // make call to Lambda
      // get lambda name from serverless if possible
      console.log(`yo: invoking lambda ${newIndex}`);

      this.invoker.invoke({
        "jobId": jobId,
        "currentSpawnIndex" : newIndex,
        "spawnTarget" : spawnTarget,
        "executorType": executorType,
        "invokerType": invokerType
      },
      // on completed
      (err, data) => {
        // we don't want to spawn any more
        if (newIndex == spawnTarget - 1) this.timekeeper.endJob();
        if (completed) completed(err, data);
      });
    }
  }
}
