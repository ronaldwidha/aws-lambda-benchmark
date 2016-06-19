import Promise from "bluebird";
import TestRunner from "../lib/testRunner";


export default (event, context) => {
  // must return a promise, a JSON.stringify compatible data, null or nothing.

  var test = new TestRunner();
  var testAsync = Promise.promisifyAll(test);


  test.linearDirect(5, () => {message: 'executed'});
  //return testAsync.linearDirect(5)
  //  .then(() => { message: 'executed'});

  //return {
  //   message: 'executed'
  // }
}
