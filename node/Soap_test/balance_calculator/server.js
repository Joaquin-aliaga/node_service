/*Archivo server.js levanta un servidor SOAP
El servidor tiene una funcion getBalance que recibe el id
de un usuario y entrega el saldo

Para generar la comunicacion SOAP se importa un archivo WSDL
que tiene las especificaciones necesarias.
*/

//Importar librerias necesarias
var soap = require('soap');
var express = require('express');

//Instanciar express()
var app = express();

//Se define el servicio a entregar
//Es importante que sea concordante con las especificaciones
//del archivo wsdl 

var service = {
    Balance_Service : {
        Balance_Port :{
            getBalance:function(args){
            	if(args.id==1){
            		var response = 1000
            	}
            	if(args.id==2){
            		var response = 2000
            	}
                if(response==undefined){
                    console.log("Argumento invalido");
                    console.log(response);
                    return {balance:response};
                }
                console.log(response);
                //se pueden agregar llaves al diccionario, pero la llave principal
                //debe tener el nombre que especifica el output del wsdl
                return {balance:{saldo:response,phone_number:args.phone_number}};
            }
            }
        }
   }

// Los datos xml son extraidos del wsdl
var xml = require('fs').readFileSync('./balancecalculator.wsdl','utf8');
//se crea un servidor express y se le pasa al servidor soap
port = 10000;
var server = app.listen(port);
soap.listen(server,'/balancecalculator',service,xml);
console.log('Listening to', port);