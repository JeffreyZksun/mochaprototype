/*
Run the test with the command:
	$ npm test
or
	$ mocha --require should --ui bdd --reporter list

 - The test framework is Mocha. 
	Documentation: http://visionmedia.github.io/mocha/   
	Source code: https://github.com/visionmedia/mocha/
 - The assertion library should.js is used in this test. 
	Source code: https://github.com/visionmedia/should.js
 - The tutorial how to consume mocha is here http://brianstoner.com/blog/testing-in-nodejs-with-mocha/

 Tutorial: How to consume the cocha test framework.
 1. Create the test files under folder test/ and implement the test functions. All the js files under the test/ folder will be executed.
 2. Configure the package.json file to set up 'npm test'.
	a. Add the devDependencies. "devDependencies": {"mocha": "1.12.x","should": "1.2.x"}
	b. Call the mocha command in the test scripts. "scripts": { "test": ".\\node_modules\\.bin\\mocha --require should --ui bdd --reporter list"}
*/
var app = require("../");

describe('Application', function(){
  before(function(){
    // ...
  });

  describe('sync calls', function(){
    it('should return string ok', function(){
	
      app.syncCall().should.equal('ok');
	  
    });
  });
  
  describe('async calls', function(){
    it('should return string ok', function(done){
      app.asyncCall(function(result){
	  
		result.should.equal('ok');
		done(); // call the done() function for the async call. Otherwise, you will get the error 'Error: timeout of 2000ms exceeded'
		
	  })
    });
  });
});