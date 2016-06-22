import Promise from "bluebird";
import DirectLinearSpawner from "../lib/directLinearSpawner";

export default (event, context) => {

  //extract spawnIndex and target
  var jobId = event.jobId;
  var currentSpawnIndex = event.spawnIndex;
  var spawnTarget = event.spawnTarget;

  console.log(`job id       : ${jobId}`);
  console.log(`current index: ${currentSpawnIndex}`);
  console.log(`target       : ${spawnTarget}`);

  var directLinearSpawner = Promise.promisifyAll(new DirectLinearSpawner(jobId));

  //todo: return promise instead
  return directLinearSpawner.spawnChildAsync(currentSpawnIndex, spawnTarget)
    .then( (err, data) => {
      message: `lambda ${currentSpawnIndex} spawned`
    });
}
