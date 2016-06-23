import LinearExecutor from "./linearExecutor"
import CascadeExecutor from "./cascadeExecutor"
import DirectInvoker from "../invoker/directInvoker"

export default class ExecutorFactory {
  static create(executorType, invokerType) {
    //todo: code smells.
    //return eval(`new ${executorType}Executor(new ${invokerType}Invoker())`);

    var invoker = new DirectInvoker(); //default
    var executor = new LinearExecutor(invoker); // default

    if (invokerType === "Direct") {
      invoker = new DirectInvoker();
    }

    if (executorType === "Linear") {
      executor = new LinearExecutor(invoker);
    }

    return executor;
  }
}
