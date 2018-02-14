const request = require('request');

var id = 1;
url='http://localhost:10000/api/id/'+id;
console.log("GET enviado a",url);

//var body = {"id":id,"nombre":"jose", "apellido":"perez"}

//Se define un timeout
request.get(url,{time:true,timeout:20,json:true}, (err,res,body) => {
	/*if(err.code==='ETIMEDOUT'){
		console.error("Timeout: error en conexion");
		return;
	}
	*/
	if(err){
		console.log(err);
		return
	}
	/*if(!res.statusCode==200){
		console.error("Error de conexión");
		return;
	}
	*/

	//Obtener body
	console.log(body);

	//Obtener id
	console.log(body['id']);

	//Tiempo transcurrido en milisegundos
	console.log(res.elapsedTime)

});

//, {timeout:30000},{time:true}
