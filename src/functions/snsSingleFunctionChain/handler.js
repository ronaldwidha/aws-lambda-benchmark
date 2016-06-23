import SingleFunctionChain from "../lib/singleFunctionChain"

export default (event, context) => {
  var message = JSON.parse(event.Records[0].Sns.Message);
  return SingleFunctionChain.handle(message.params, message.executionState);
}
