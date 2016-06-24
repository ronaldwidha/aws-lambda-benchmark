import SingleFunctionChain from "../singleFunctionChain"

export default class InProcessInvoker {
  constructor() {}

  type() { return "InProcess"; }

  invoke(executionState, completed) {
    SingleFunctionChain.handle({}, executionState);
    if (completed) completed(null, null);
  }
}
