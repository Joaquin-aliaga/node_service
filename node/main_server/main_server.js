/*Este codigo representa el servidor completo como maquina de estado (fsm)
Genera comunicacion con Bases de datos USERS y CDR, servidor SOAP y servidor HTTP
*/

//Modulos requeridos
var express = require('express');
var app = express();
var json = require('json');

//Modulos propios
var soapRequest = require('./funciones/soapRequest').soapRequest;
var httpRequest = require('./funciones/httpRequest').httpRequest;
var CDR = require('./funciones/CDR').CDR;
var Db_Object = require('./funciones/db_object').Db_Object;
var logger = require('./funciones/logger')('logs-main-server');

//Se obtiene el archivo config desde ventana de comandos
var config_file = process.argv[2];
global.config = require('./'+config_file);
var configuracion = global.config;

//Diccionarios a llenar
var args = {};

//Instanciar objetos
var users = new Db_Object( configuracion.users_db );

var cdr = new Db_Object( configuracion.cdr_db );

app.get( configuracion.main_server.url_endpoint , function ( req , res ) {
	
	var cdr_args = new CDR();
	
	args.id = req.params.id;
	
	users.consultar( configuracion.select_query , args.id , function( err , results_query , tiempo_consultar ) {
		
		if ( err ) {
			
			cdr.insertar_CDR( configuracion.insert_query , cdr_args , 1002);

			res.json(results_query);

			logger.info( 'Error en la consulta a base de datos', err );

		}

		else {

			cdr_args.setTime( tiempo_consultar );
			
			args.nombre = results_query['results'][0].nombre;
			args.numero_telefono = results_query['results'][0].numero_telefono;
			
			soapRequest( configuracion.soap_server.url , args , function( err , results_soap , tiempo_soap ){
				if( err ){

					cdr.insertar_CDR( configuracion.insert_query , cdr_args , 1003 );
					
					res.json( results_soap );
					
					logger.info( 'Error en la consulta a servidor SOAP', err );
				}
				else {

					cdr_args.setTime( tiempo_soap );
					
					args.saldo = results_soap['saldo'];
					
					httpRequest( configuracion.http_server.url , args.id , function( err , results_http , tiempo_http ) {
						
						if( err ) {
			
							cdr.insertar_CDR( configuracion.insert_query , cdr_args , 1004 );

							res.json( results_http );	

							logger.info( 'Error en comunicacion HTTP', err );
						}
						else {

							args.minutos = results_http;
							
							res.status( 200 ).json( args );
							console.log( 'Respuesta enviada a cliente' );
							res.end();

							cdr_args.setTime( tiempo_http );	

							cdr.insertar_CDR( configuracion.insert_query , cdr_args , 1001 );
						};
					});
				};
			});
		};
	});
});

app.listen( configuracion.main_server.port , configuracion.main_server.url );
console.log( 'Main server listening to http://' + configuracion.main_server.url + ':' + configuracion.main_server.port + configuracion.main_server.url_endpoint + "\n" );