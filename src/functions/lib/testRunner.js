import DirectInvoker from "./invoker/directInvoker"
import SnsInvoker from "./invoker/snsInvoker"
import InMemoryInvoker from "./invoker/inMemoryInvoker"
import LinearExecutor from "./executor/linearExecutor"

export default class testRunner {
  constructor() {

  }

  //todo: to make this generic maybe use the executor factory
  linearInMemory(n, completed) {
    var jobId = `InMemory call between lambda. depth: ${n}`;
    var linearExecutor = new LinearExecutor(new InMemoryInvoker());
    linearExecutor.start(jobId, n, completed);
  }

  linearDirect(n, completed) {
    var jobId = `Direct call between lambda. depth: ${n}`;
    var linearExecutor = new LinearExecutor(new DirectInvoker());
    linearExecutor.start(jobId, n, completed);
  }

  linearSns(n, completed) {
    var jobId = `Sns call between lambda. depth: ${n}`;
    var linearExecutor = new LinearExecutor(new SnsInvoker());
    linearExecutor.start(jobId, n, completed);
  }
}
