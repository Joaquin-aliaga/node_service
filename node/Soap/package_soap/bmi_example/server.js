/*Archivo server.js levanta un servidor SOAP
El servidor tiene una funcion calculateBMI que entrega el
indice de masa corporal. Recibe weight and heigth como parametros.

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
    BMI_Service : {
        BMI_Port :{
            calculateBMI:function(args){
                var n = (args.weight)/(args.height*args.height);
                console.log(n);
                return {bmi: n};
            }
        }
   }
}

/*
//headers = soap.getSoapHeaders();
console.log(headers);
*/

// Los datos xml son extraidos del wsdl
var xml = require('fs').readFileSync('./bmicalculator.wsdl','utf8');
//se crea un servidor express y se le pasa al servidor soap
port = 10000;
var server = app.listen(port);
soap.listen(server,'/bmicalculator',service,xml);
console.log('Listening to', port);