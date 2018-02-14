/*Este codigo levanta un servidor en localhost:8080/api
Recibe un metodo POST, obtiene los parametros necesarios
y devuelve el numero de telefono de la persona*/

//Modulos requeridos
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var json = require('json');

//Configurar Body-Parser
app.use(bodyParser.json()); //para leer json
app.use(bodyParser.urlencoded({ extended: true})); //para leer bodies (url)

//Importar sql
var mysql=require('mysql');

//Crear variable de conexion
var connection = mysql.createConnection( {
	host : '127.0.0.1',
	user: 'joaliaga',
	password: 'joaliaga',
	database: 'users',
	port: 3306
});

//Conectarse a DB
//Timeout de 5 segundos para conectarse
connection.connect({connectTimeout:5000},function(error){
		if (error){
			console.log("Error de conexión a la base de datos")
			console.error('Error: ' + error.stack)
		}
		console.log('connected as id ' + connection.threadId)
});

//Capturar GET y obtener parametros recibidos
app.get('/api/id/:id', function(req,res){
	//obtener parametros
	var user_id = req.params.id;
	if (user_id=='[]'){
		res.status(404);
		res.end();
		return;
	}
	//var headers = req.headers;

	//Query a DB para devolver numero de telefono

/*Hasta el momento el try-catch esta captando solo errores en el nombre
de la tabla o de los campos

Si el user_id no existe, se envia un diccionario vacio []

Timeout de 30 segundos para hacer consulta
*/
	try {
		
		var start = process.hrtime();
		
		connection.query({sql:'SELECT nombre,numero_telefono FROM usuarios WHERE id_usuario= ?',timeout:30000},[user_id],function(err,results){
			//tiempo antes de revisar condiciones if
			var preif = process.hrtime(start);
			
			if(err && err.code==='PROTOCOL_SEQUENCE_TIMEOUT'){
				throw new Error('Error de timeout');
			}

			if(err){
				res.status(400).json({results}); 
				console.error('Error en la consulta: ' + err.stack);
			}
			//tiempo despues de revisar condiciones if
			var postif = process.hrtime(start);
					
			/*console.log({results});
			console.log("Tiempo transcurrido antes de los if",preif);
			console.log("Tiempo transcurrido antes de los if (otro formato) : %ds %dms", preif[0], preif[1]/1000000);
			
			console.log("Tiempo transcurrido después de los if",postif);
			*/
			//De esta forma enviamos status_code + results
			res.status(200).json({results});
			res.end(); //Es necesario cerrar la conexion para poder
			//responder con datos
	
		})

	}
	catch (e){
			console.error('Error' + err.stack);
	}
	//Prueba para hacer mas de un query
	/*connection.query("SELECT nombre FROM usuarios", function(err,results){
		if(err){
			res.status(400).json({results});
			console.error('Error en la consulta: ' + err.stack);
		}
		console.log({results});
	})
	*/

});

//Iniciar el servidor
app.listen(port)
console.log('Servidor prendido ! en http://localhost:' + port + "/api/id")