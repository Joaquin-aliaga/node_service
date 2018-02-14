const request = require('request');

function httpRequest(url,id,done){

	request.get( url+id , {time:true , timeout:2000 , json:true }, function( err , res , body ) {

		if( err ) {

			done(err,1004);

		}else
		{
			elapsedTime = res.elapsedTime;
			done( null , body , elapsedTime );
		}
	});
};

module.exports={
	httpRequest:httpRequest
}