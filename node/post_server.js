var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

//Configurar Body-Parser
app.use(bodyParser.json()); //para leer json
app.use(bodyParser.urlencoded({ extended: true})); //para leer bodies (url)

app.post('/api', function(req,res){
	var user_id = req.body.id;
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;

	if(user_id==1){
		console.log("Funciona");
		console.log(user_id + ' ' + nombre + ' ' + apellido);
	}
	else{console.log("No funciona");
	}
	
	//respuesta en texto
	res.send(user_id + ' ' + nombre + ' ' + apellido)
	
	res.end() //Es necesario cerrar la conexion para poder
	//responder con datos
})

/*
//Las rutas van aca
//Obtener los parametros

//parameter funciona como intermediario antes de seguir a otra ruta
app.param('name', function(req,res,next,name){
	//Aqui se deberia hacer el chequeo de que el usuario existe
	//en la DB


	var modified = name +'-man';

	req.name = modified;
	next(); //aqui se deja avanzar a la ruta
});

app.get('/api/users/:name', function(req,res){
	//El usuario ya fue autenticado, puede acceder a esta ruta
	res.send('Que pasa '+ req.name + '!');
});
*/

//Iniciar el servidor
app.listen(port)
console.log('Servidor prendido! en http://localhost:' + port)