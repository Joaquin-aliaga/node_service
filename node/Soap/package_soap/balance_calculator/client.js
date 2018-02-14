/*Archivo client.js es un cliente SOAP
Se conecta al servidor SOAP ubicado en url
Pide el wsdl y crea un cliente 
dicho cliente tiene disponibles los metodos del servidor
Se envian parametros al servidor y se obtiene la respuesta "response"
Se agrega esta linea solo para arreglar el commit
*/

//Importar librerias necesarias
var express = require('express');
var soap = require('soap');
var json = require('json');
//Libreria para hacer assert type
var check = require('check-types');

//Definir URL del servidor y "pedir" el archivo wsdl
var url = "http://localhost:10000/balancecalculator?wsdl";

//Definir los argumentos a enviar
//Es importante que sean concordantes con lo especificado en wsdl
var args = {id:1,phone_number:98785769};

//Si el id no es un entero, imprime error y detiene la consulta
if(!check.integer(args.id)){
	console.error("Error: El id ingresado debe ser un entero");
	return;
}

//Hasta ahora el phone_number no esta siendo usado 

//crear el cliente
//preserveWhitespace=true sirve para evitar errores de whitespace
soap.createClient(url,preserveWhitespace=true,function(err,client){
		
		if(err){
			console.error(err);
			throw err;
		}else{
			//utilizar el metodo disponible en el servidor
			client.getBalance(args,function(err,response){
				if(err){
					console.log(err)
					//console.error(err);
					throw err;
				}
				if(response['balance']==undefined){
					console.log("Error, el id ingresado es incorrecto");
					return;
				}
					//Imprimir respuesta
					var respuesta = response['balance'];
					console.log("El saldo del numero",respuesta['phone_number'], "es", respuesta['saldo']);
					//Imprimir tiempo transcurrido
					var elapsedTime=client.lastElapsedTime;
					console.log(elapsedTime);
				},
				//Se define un timeout en milisegundos
				{timeout:10,time:true})
		}
});