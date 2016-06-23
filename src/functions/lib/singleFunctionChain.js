import Promise from "bluebird"
import TheFunction from "./theFunction"

export default class SingleFunctionChain {
  static handle(param, executionState) {

    var theFunction = Promise.promisifyAll(new TheFunction());

    console.log(`Function start`);
    console.log("Param :" + JSON.stringify(param));
    console.log("executionState : " + JSON.stringify(executionState));

    return theFunction.invokeAsync(param, executionState)
      .then((err,data) => {
        console.log(`Function invoked`);
      });
  }
}
