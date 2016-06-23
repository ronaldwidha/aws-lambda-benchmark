import LinearExecutor from "./linearExecutor"
import CascadeExecutor from "./cascadeExecutor"
import DirectInvoker from "../invoker/directInvoker"
import SnsInvoker from "../invoker/snsInvoker"

export default class ExecutorFactory {
  static create(executorType, invokerType) {
    //todo: code smells.
    //return eval(`new ${executorType}Executor(new ${invokerType}Invoker())`);

    var invoker = new DirectInvoker(); //default
    var executor = new LinearExecutor(invoker); // default

    if (invokerType === "Direct") {
      invoker = new DirectInvoker();
    }
    else if (invokerType === "Sns") {
      invoker = new SnsInvoker();
    }
    else {
      console.log("Error: unidentified invoker type. Default to DirectInvoker");
    }

    if (executorType === "Linear") {
      executor = new LinearExecutor(invoker);
    }
    else {
      console.log("Error: unidentified executor type. Default to LinearExecutor");
    }

    return executor;
  }
}
