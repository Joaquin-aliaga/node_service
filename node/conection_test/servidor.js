//Servidor simple en Node ubicado en puerto localhost:10000

var http=require('http'); //importar http
var server= http.createServer(); //Crea el servidor

function control(peticion,respuesta){ //Controla las peticiones y respuestas
// desde y hacia el servidor

//Con respuesta nos comunicamos con el cliente
respuesta.writeHead(200, {'content-type': 'text/plain'});
//Enviamos una confirmacion correcta=200 y el tipo de contenido a enviar=texto 
respuesta.write('Hola mundo: Soy el servidor en Node.js');
respuesta.end(); //Finaliza comunicacion. NECESARIO PARA CARGAR LA PAGINA
}

server.on('request', control); //Se llama a la funcion control si el servidor
//recibe una peticion

server.listen(10000); //El servidor esta escuchando el puerto 10000
console.log("Servidor prendido! esuchando en puerto 10000");