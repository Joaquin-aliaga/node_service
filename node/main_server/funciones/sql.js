var mysql = require( 'mysql' );

function conectar(users_db , cdr_db, done){

	var conexion = gestionar_conexion(users_db,cdr_db);

	if ( conexion === {} ) {

		done( true , null )
	}
	
	else {

		done( null , conexion )
	}

}


function gestionar_conexion( users_db , cdr_db ) {
		var connection = {};
		
		//variable de conexion a users
		var connection_users = crear_variable_conexion(users_db);

		//variable de conexion a CDR
		var connection_cdr = crear_variable_conexion(cdr_db);

		connection_users.connect( {connectTimeout:5000} , function ( error ) {
			if ( error ) {
				console.log( "Error de conexión a la base de datos USERS" );
				console.error( 'Error: ' + error.stack );
				return connection
			}
		});
		
		connection_cdr.connect( {connectTimeout:5000} , function ( error ) {
			if ( error ) {
				console.log( "Error de conexión a la base de datos CDR" );
				console.error( 'Error: ' + error.stack );
				return connection
			}
		});
		
		connection['connection_users'] = connection_users;
		connection['connection_cdr'] = connection_cdr;
		
		return connection
}


function crear_variable_conexion(parametros){
	var crear_conexion = mysql.createConnection( {
		host : parametros.host,
		user: parametros.user,
		password: parametros.password,
		database: parametros.database,
		port: parametros.port
	});
	return crear_conexion
}

module.exports = {
		conectar:conectar
}