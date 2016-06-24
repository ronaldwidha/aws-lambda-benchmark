export default class Timekeeper {
  constructor(jobId, spawnIndex) {

  }

  startJob() {
    console.log("start job");
    console.log(new Date().getTime());
  }

  startFunction() {
    console.log("start function");
  }

  startCompute() {
    console.log("start compute");
  }

  endCompute() {
    console.log("end compute");
  }

  startSpawningNext() {
    console.log("start spawning next");
  }

  endSpawningNext(isSpawned) {
    //if nothing is spawned then delete the last "start"
    console.log("end spawning next");
  }

  endFunction() {
    console.log("end function");
  }

  endJob() {
    console.log("end job");
    console.log(new Date().getTime());
  }
}
