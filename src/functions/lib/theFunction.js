import Timekeeper from "./timekeeper";
import ExecutorFactory from "./executor/executorFactory";

export default class TheFunction {
  constructor() {
    this.timekeeper = new Timekeeper();
  }

  invoke(param, executionState, completed) {
    this.timekeeper.startFunction();
    // todo: do something with param
    this.timekeeper.endFunction();

    // next
    var executor = ExecutorFactory.create(executionState.executorType, executionState.invokerType);
    executor.next(executionState, completed);
  }
}
