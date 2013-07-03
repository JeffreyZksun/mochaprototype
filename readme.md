 Tutorial: How to consume the cocha test framework.
 1. Create the test files under folder test/ and implement the test functions. All the js files under the test/ folder will be executed.
 2. Configure the package.json file to set up 'npm test'.
	a. Add the devDependencies. "devDependencies": {"mocha": "1.12.x","should": "1.2.x"}
	b. Call the mocha command in the test scripts. "scripts": { "test": ".\\node_modules\\.bin\\mocha --require should --ui bdd --reporter list"}