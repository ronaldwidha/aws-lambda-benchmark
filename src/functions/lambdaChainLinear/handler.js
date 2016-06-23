import Promise from "bluebird";
import TheFunction from "../lib/theFunction"

export default (event, context) => {

  //extract spawnIndex and target
  // var jobId = event.jobId;
  // var currentSpawnIndex = event.spawnIndex;
  // var spawnTarget = event.spawnTarget;

  // console.log(`job id       : ${jobId}`);
  // console.log(`current index: ${currentSpawnIndex}`);
  // console.log(`target       : ${spawnTarget}`);

  //var directLinearSpawner = Promise.promisifyAll(new DirectLinearSpawner(jobId));
  // return directLinearSpawner.spawnChildAsync(currentSpawnIndex, spawnTarget)
  //   .then( (err, data) => {
  //     message: `lambda ${currentSpawnIndex} spawned`
  //   });

  var param = event.param;
  var executionState = event.executionState;

  var theFunction = new TheFunction();

  console.log(`Function start`);
  console.log(JSON.stringify(event.executionState));

  return theFunction.invoke(param, executionState)
    .then((err,data) => {
      console.log(`Function invoked`);
    });
}
