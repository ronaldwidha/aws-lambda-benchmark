import DirectLinearSpawner from "./directLinearSpawner"

export default class testRunner {
  constructor() {

  }

  linearDirect(n, completed) {
    var jobId = "guid or something";
    var directLinearSpawner = new DirectLinearSpawner(jobId);
    directLinearSpawner.fire(n, completed);
  }
}
