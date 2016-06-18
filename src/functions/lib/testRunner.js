import DirectLinearSpawner from "./directLinearSpawner"

export default class testRunner {
  constructor() {

  }

  linearDirect(n) {
    var jobId = "guid or something";
    var directLinearSpawner = new DirectLinearSpawner(jobId);
    directLinearSpawner.start(n);
  }
}
