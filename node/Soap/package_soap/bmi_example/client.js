/*Archivo client.js es un cliente SOAP
Se conecta al servidor SOAP ubicado en url
Pide el wsdl y crea un cliente 
dicho cliente tiene disponibles los metodos del servidor
Se envian parametros al servidor y se obtiene la respuesta "response"
*/

//Importar librerias necesarias
var express = require('express');
var soap = require('soap');
var json = require('json');

//Definir URL del servidor y "pedir" el archivo wsdl
var url = "http://localhost:10000/bmicalculator?wsdl";

//Definir los argumentos a enviar
//Es importante que sean concordantes con lo especificado en wsdl
var args = {weight:65.7,height:1.63};

//Instanciar express
app = express();

//crear el cliente
//preserveWhitespace=true sirve para evitar errores de whitespace
soap.createClient(url,preserveWhitespace=true,function(err,client){
		if(err){
			console.error(err);
		}else {
			//utilizar el metodo disponible en el servidor
			client.calculateBMI(args,function(err,response){
				if(err){
					console.error(err);
				}else {
					//Imprimir respuesta
					console.log(response['bmi']);
				}
			});
		}
	});

