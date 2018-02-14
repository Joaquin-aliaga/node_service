//Importar librerias necesarias
var soap = require('soap');

//preserveWhitespace=true sirve para evitar errores de whitespace

function soapRequest( url , args , done ) {
	
	soap.createClient( url , preserveWhitespace=true , function( error , client ) {
		if( error ) {

			console.error( 'Error en crear cliente SOAP', error );
			
			done( error , 1012 , client.lastElapsedTime );
		} 
		else {
			//utilizar el metodo disponible en el servidor

			client.getBalance( args , function( err , response ) {
					
				if( err ) {

					done( err , 1003, client.lastElapsedTime );

				}else{

					if( response['balance'] == undefined) {

						done('Error SOAP, el id ingresado es incorrecto', 1007 , client.lastElapsedTime );
					}

					var respuesta = response['balance'];
					done( null , respuesta , client.lastElapsedTime );
					//elapsedTime (en ms) no depende del lugar donde se llame
				}
			},
			//Se define un timeout en milisegundos
			{ timeout: 4000, time: true });
		}
	});
}

module.exports={
	soapRequest:soapRequest
}