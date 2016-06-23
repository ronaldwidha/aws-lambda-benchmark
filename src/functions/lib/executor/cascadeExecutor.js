import Promise from "bluebird";
import Timekeeper from "../timekeeper";

export default class CascadeExecutor {
  constructor(invoker) {
    this.invoker = Promise.promisifyAll(invoker);
    this.timekeeper = new Timekeeper();
  }

  start(jobId, spawnRate, spawnTargetDepth, completed) {
    // not implemented
  }

  next(executionState, completed) {
    // not implemented
  }
}
