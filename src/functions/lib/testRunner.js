import DirectInvoker from "./invoker/directInvoker"
import LinearExecutor from "./executor/linearExecutor"

export default class testRunner {
  constructor() {

  }

  linearDirect(n, completed) {
    var jobId = `Direct call between lambda. depth: ${n}`;
    var linearExecutor = new LinearExecutor(new DirectInvoker());
    linearExecutor.start(jobId, n, completed);
  }
}
