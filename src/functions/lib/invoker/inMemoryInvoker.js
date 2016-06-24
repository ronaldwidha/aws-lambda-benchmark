import SingleFunctionChain from "../singleFunctionChain"

export default class InMemoryInvoker {
  constructor() {}

  type() { return "InMemory"; }

  invoke(executionState, completed) {
    SingleFunctionChain.handle({}, executionState);
    if (completed) completed(null, null);
  }
}
