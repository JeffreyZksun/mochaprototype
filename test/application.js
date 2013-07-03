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