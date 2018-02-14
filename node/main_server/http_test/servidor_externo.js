/*Este codigo levanta un servidor en localhost:10010/api
*/

var express = require('express');
var app = express();
var port = process.env.PORT || 10010;
var bodyParser = require('body-parser');
var sleep = require('system-sleep');

//Configurar Body-Parser
app.use(bodyParser.json()); //para leer json
app.use(bodyParser.urlencoded({ extended: true})); //para leer bodies (url)

app.get( '/api/id/:id' , function( req , res ) {

	var identificador = req.params[ 'id' ];

	if(identificador == 104){
		sleep(3000);
	}
	else{

		if( identificador == 1 || identificador == 2 || identificador == 3) {

			var response = 100

	    }else
	    {
	    	if( identificador == 4 || identificador == 5) {

	    		var response = 200

	    	}
	    	else{

	    		console.log( "Error con el id" );
	    	}
	    }
	}

    res.status(200).json(response);
    console.log('Respuesta enviada desde servidor HTTP');
	res.end();
	
});
	

//Iniciar el servidor
app.listen(port)
console.log('HTTP server listening to http://localhost:' + port + "/api")