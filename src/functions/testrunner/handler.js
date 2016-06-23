import Promise from "bluebird";
import TestRunner from "../lib/testRunner";

export default (event, context) => {
  var testRunner = Promise.promisifyAll(new TestRunner());

  // linear direct
  // **************
  // return testRunner.linearDirectAsync(5)
  //   .then((err,data) => {
  //     return { message: 'executed'};
  //   });

  // linear sns
  // **************
  return testRunner.linearSnsAsync(5)
    .then((err,data) => {
      return { message: 'executed'};
    });
}
