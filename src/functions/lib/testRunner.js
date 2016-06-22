import DirectLinearSpawner from "./directLinearSpawner"

export default class testRunner {
  constructor() {

  }

  linearDirect(n, completed) {
    var jobId = "Direct call between lambda. depth: 5";
    var directLinearSpawner = new DirectLinearSpawner(jobId);
    directLinearSpawner.fire(n, completed);
  }
}
