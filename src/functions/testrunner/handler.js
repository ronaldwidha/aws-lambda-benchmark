import Promise from "bluebird";
import TestRunner from "../lib/testRunner";


export default (event, context) => {
  var testRunner = Promise.promisifyAll(new TestRunner());

  // must return a promise, a JSON.stringify compatible data, null or nothing.
  //return testRunner.linearDirectAsync(5, (err,data) => {message: 'executed'});

  //testRunner.linearDirectAsync(5, function(err, data)

  return testRunner.linearDirectAsync(5)
    .then((err,data) => {
      return { message: 'executed'};
    });

  //return {
  //   message: 'executed'
  // }
}
