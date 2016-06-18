import testRunner from "../lib/testRunner";

export default (event, context) => {
  
  var test = new testRunner();
  test.linearDirect(5);

  // must return a promise, a JSON.stringify compatible data, null or nothing.
  return {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  }
}
