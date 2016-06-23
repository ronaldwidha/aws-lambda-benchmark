import SingleFunctionChain from "../lib/singleFunctionChain"

export default (event, context) => {
  return SingleFunctionChain.handle(event.param, event.executionState);
}
