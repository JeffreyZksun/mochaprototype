


var Application = function(){

	this.syncCall = function(){
		return 'ok';
	};
	
	this.asyncCall = function (callback){
		process.nextTick(function(){callback('ok');});
	};
};

module.exports = new Application();