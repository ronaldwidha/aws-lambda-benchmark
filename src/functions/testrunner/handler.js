import Promise from "bluebird";
import TestRunner from "../lib/testRunner";

export default (event, context) => {
  var testRunner = Promise.promisifyAll(new TestRunner());

  // linear InProcess
  // *****************
  return testRunner.linearInProcessAsync(5)
    .then((err,data) => {
      return { message: 'executed'};
    });

  // linear direct
  // *****************
  // return testRunner.linearDirectAsync(1000)
  //   .then((err,data) => {
  //     return { message: 'executed'};
  //   });

  // linear sns
  // **************

  // // disable snsSecondFunctionChain, just in case if it was enabled elsewhere
  // snsSecondFunctionLambdaHelper.disable();

  // return testRunner.linearSnsAsync(1000)
  //   .then((err,data) => {
  //     return { message: 'executed'};
  //   });

  // cascade sns
  // **************
  // every sns message will trigger snsSingleFunctionChain and snsSecondFunctionChain
  // E.g.
  //  depth = 1 executes 1 tasks
  //  depth = 2 executes 3 tasks
  //  depth = 3 executes 7 tasks
  //  depth = 4 executes 15 tasks
  //  depth = 5 executes 31 tasks

  // enable snsSecondFunctionChain
  // snsSecondFunctionLambdaHelper.enable();
  //
  // return testRunner.linearSnsAsync(3)
  //   .then((err,data) => {
  //     return { message: 'executed'};
  //   });
}
