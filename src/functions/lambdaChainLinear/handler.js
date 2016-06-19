import DirectLinearSpawner from "../lib/directLinearSpawner";

export default (event, context) => {

  //extract spawnIndex and target
  var jobId = event.jobId;
  var currentSpawnIndex = event.spawnIndex;
  var spawnTarget = event.spawnTarget;

  // var jobId = event[0];
  // var currentSpawnIndex = event[1];
  // var spawnTarget = event[2];


  console.log(`job id       : ${jobId}`);
  console.log(`current index: ${currentSpawnIndex}`);
  console.log(`target       : ${spawnTarget}`);

  var directLinearSpawner = new DirectLinearSpawner(jobId);
  //todo: return promise instead
  directLinearSpawner.spawnChild(currentSpawnIndex, spawnTarget);

  // must return a promise, a JSON.stringify compatible data, null or nothing.
  //return {
  //  message: `lambda ${currentSpawnIndex} spawned`
  //}
}
