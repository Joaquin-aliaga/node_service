//Simulador Servidor SOAP

var soap = require('soap');
var express = require('express');
var sleep = require('system-sleep');

//Instanciar express()
var app = express();

var service = {
    Balance_Service : {
        Balance_Port :{
            getBalance : function( args ) {

                if ( args.id === '103' ){
                    sleep(6000);

                }
                else{

                    if ( args.id === '104'){
                        var response = 3000;
                    } 
                    
                	if( args.id === '1' || args.id === '2' || args.id === '3') { 
                		var response = 1000;
                	}

                	if( args.id === '4' || args.id === '5' ) {
                		var response = 2000;
                	}

                    if( response == undefined ) {

                        console.log("Id inválido o timeout");
                        return {balance:response};
                    }

                    console.log("Respuesta enviada desde servidor SOAP")
                    
                    //se pueden agregar llaves al diccionario, pero la llave principal
                    //debe tener el nombre que especifica el output del wsdl
                    return { balance:
                        {
                            saldo:response
                        }
                    };
                }
            }
        }
    }
}

var xml = require('fs').readFileSync( './balancecalculator.wsdl' , 'utf8' );

port = 10000;

var server = app.listen( port );
soap.listen( server , '/balancecalculator' , service , xml );
console.log( 'SOAP server listening to http://localhost:' , port );