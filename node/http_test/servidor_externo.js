/*Este codigo levanta un servidor en localhost:8080/api
Recibe un metodo POST, obtiene los parametros necesarios
y devuelve el numero de telefono de la persona*/

//Modulos requeridos
var express = require('express');
var app = express();
var port = process.env.PORT || 10000;
var bodyParser = require('body-parser');

//Configurar Body-Parser
app.use(bodyParser.json()); //para leer json
app.use(bodyParser.urlencoded({ extended: true})); //para leer bodies (url)

//Capturar GET y obtener parametros recibidos
try{
app.get('/api/id/:id', function(req,res){
	
	//obtener parametros
	var query = req.params;
	//De esta forma enviamos status_code + rows
	//res.status(200).json({});
	console.log(query);
	res.status(200).json(query)
	res.end(); //Es necesario cerrar la conexion para poder
	//responder con datos
})
}catch(e){
	console.log('Error');
	console.error(e);
};
	

//Iniciar el servidor
app.listen(port)
console.log('Servidor prendido ! en http://localhost:' + port + "/api")